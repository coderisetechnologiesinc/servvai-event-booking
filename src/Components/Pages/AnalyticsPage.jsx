import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import TabsComponent from "../Containers/TabsComponent";
import BlockStack from "../Containers/BlockStack";
import {
  StackedBarChart,
  StackedBarSeries,
  Bar,
  LinearXAxis,
  LinearYAxis,
  LinearXAxisTickLabel,
  LinearXAxisTickSeries,
  LinearYAxisTickSeries,
  GridlineSeries,
  Gridline,
  Gradient,
  GradientStop,
  Count,
  PieChart,
  PieArcSeries,
} from "reaviz";
import he from "he";
import { getCurrencySymbol } from "../../../widget/servicesShared/currencies";
import Datepicker from "react-tailwindcss-datepicker";
import InlineStack from "../Containers/InlineStack";
import SelectControl from "../Controls/SelectControl";
import PageActionButton from "../Controls/PageActionButton";
const AnalyticsPage = ({ settings }) => {
  const [loading, setLoading] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [filteredByDateRevenue, setFilteredByDateRevenue] = useState(null);

  const [registrants, setRegistrants] = useState(null);
  const [registrantsTotal, setTotalRegistrants] = useState(null);
  const tabsList = [
    { label: "Revenue", value: 0 },
    { label: "Registrants", value: 1 },
    { label: "Events", value: 2 },
    { label: "Filters", value: 3 },
  ];
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isMonthSelected, setIsMonthSelected] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [eventsStatistic, setEventsStatistic] = useState(null);
  const [filtersStatistic, setFiltersStatistic] = useState(null);
  const [filtersStatisticFilteredByDate, setFiltersStatisticFilteredByDate] =
    useState(null);
  const [revenueDates, setRevenueDates] = useState({
    startDate: null,
    endDate: null,
  });

  const handleSelectTabChange = (val) => {
    setSelectedTab(val);
    if (val === 1 && !registrantsTotal) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchTotalRegistrants();
    }
    if (val === 2 && !eventsStatistic) {
      fetchEventsAnalityc();
    }
    if (val === 3 && !filtersStatistic) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchFiltersStatistic();
    }
  };

  const fetchFiltersStatistic = async (month) => {
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/analytics/types";
    if (isMonthSelected || month) {
      url += `?date_year=${selectedYear}&date_month=${monthOptions.indexOf(
        selectedMonth
      )}`;
    }
    const types = await axios
      .get(url, {
        headers: { "X-WP-Nonce": servvData.nonce },
      })
      .catch((error) => console.log(error));
    if (types) {
      if (!isMonthSelected && !month) setFiltersStatistic(types.data);
      else setFiltersStatisticFilteredByDate(types.data);
      setLoading(false);
      return types;
    }
    setLoading(false);
    return null;
  };

  const fetchTotalRevenue = async (from = null, to = null) => {
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/analytics/revenue";
    if (from && to) {
      url += `?from=${from}&to=${to}`;
    }
    const revenue = await axios
      .get(url, {
        headers: { "X-WP-Nonce": servvData.nonce },
      })
      .catch((error) => console.log(error));
    if (revenue) {
      if (!from && !to) setTotalRevenue(revenue.data.total);
      else setFilteredByDateRevenue(revenue.data.total);
      setLoading(false);
      return revenue;
    }
    setLoading(false);
    return null;
  };

  const fetchTotalRegistrants = async (month) => {
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/analytics/registrants";
    if (isMonthSelected || month) {
      url += `?date_year=${selectedYear}&date_month=${monthOptions.indexOf(
        selectedMonth
      )}`;
    }
    const registrantsTotal = await axios
      .get(url, {
        headers: { "X-WP-Nonce": servvData.nonce },
      })
      .catch((error) => console.log(error));
    if (registrantsTotal) {
      if (!isMonthSelected && !month)
        setTotalRegistrants(registrantsTotal.data);
      else setRegistrants(registrantsTotal.data);
      setLoading(false);
      return registrantsTotal;
    }
    setLoading(false);
    return null;
  };
  useEffect(() => {
    if (isMonthSelected) {
      if (selectedTab === 1) fetchTotalRegistrants(true);
      if (selectedTab === 3) fetchFiltersStatistic(true);
    }
  }, [isMonthSelected, selectedMonth, selectedYear]);
  const getRegistrantsTotal = () => {
    let total = { unique: 0, total: 0 };

    const registrantsData = isMonthSelected ? registrants : registrantsTotal;

    if (registrantsData) {
      total = Object.values(registrantsData).reduce(
        (acc, curr) => {
          acc.unique += curr.unique;
          acc.total += curr.total;
          return acc;
        },
        { unique: 0, total: 0 }
      );
    }

    return total;
  };
  const getDataForRegistrants = () => {
    let dataForDiagram = [];
    const registrantsData = isMonthSelected ? registrants : registrantsTotal;
    if (registrantsData) {
      dataForDiagram = [
        {
          key: "Events",
          data: [
            { key: "Unique", data: registrantsData.offline.unique },
            { key: "Total", data: registrantsData.offline.total },
          ],
        },
        {
          key: "Zoom Events",
          data: [
            { key: "Unique", data: registrantsData.online_zoom.unique },
            { key: "Total", data: registrantsData.online_zoom.total },
          ],
        },
      ];
    }

    return dataForDiagram;
  };
  const fetchEventsAnalityc = async () => {
    setLoading(true);
    let statistic = eventsStatistic ? { ...eventsStatistic } : {};
    const getHappendAnalytics = await axios
      .get("/wp-json/servv-plugin/v1/analytics/happened", {
        headers: { "X-WP-Nonce": servvData.nonce },
      })
      .catch((error) => {
        console.log(error);
      });

    if (getHappendAnalytics) {
      statistic = { ...statistic, happend: getHappendAnalytics.data };
    }

    const getCancelledAnalytics = await axios
      .get("/wp-json/servv-plugin/v1/analytics/cancelled", {
        headers: { "X-WP-Nonce": servvData.nonce },
      })
      .catch((error) => {
        console.log(error);
      });

    if (getCancelledAnalytics) {
      statistic = {
        ...statistic,
        cancelled: getCancelledAnalytics.data,
      };
    }

    const getActiveAnalytics = await axios
      .get("/wp-json/servv-plugin/v1/analytics/active", {
        headers: { "X-WP-Nonce": servvData.nonce },
      })
      .catch((error) => {
        console.log(error);
      });

    if (getActiveAnalytics) {
      statistic = {
        ...statistic,
        active: getActiveAnalytics.data,
      };
    }
    setEventsStatistic(statistic);
    setLoading(false);
  };

  const getActiveEvents = () => {
    if (eventsStatistic && eventsStatistic.active) {
      return (
        eventsStatistic.active.offline + eventsStatistic.active.online_zoom
      );
    }
    return 0;
  };

  const getHappendEvents = () => {
    if (eventsStatistic && eventsStatistic.happend) {
      return (
        eventsStatistic.happend.offline + eventsStatistic.happend.online_zoom
      );
    }
    return 0;
  };

  const getCanceledEvents = () => {
    if (eventsStatistic && eventsStatistic.cancelled) {
      return (
        eventsStatistic.cancelled.offline +
        eventsStatistic.cancelled.online_zoom
      );
    }
    return 0;
  };

  const handleMonthSelect = (val) => {
    if (val === "") return;
    setSelectedMonth(val);
    if (selectedYear === "") {
      setSelectedYear(2025);
    }
  };
  const handleYearSelect = (val) => {
    if (val === "") return;
    setSelectedYear(val);
    if (selectedMonth === "") {
      setSelectedMonth(monthOptions[1]);
    }
  };

  const renderEventsAnalytics = () => {
    return (
      <div className="w-full h-64 bg-[linear-gradient(180deg,_rgba(236,229,246,0)_0%,_#ECE4F6_100%)] rounded-lg flex flex-col items-center justify-center">
        <div className="flex w-full pl-8 pr-8 justify-between pb-2 pt-8">
          <div className="flex flex-col gap-2 w-1/2 items-center">
            <h2 className="font-semibold text-brand-700 text-lg">
              Active events
            </h2>
            <div className="flex items-center gap-2">
              <Count
                from={0}
                to={getActiveEvents()}
                className="font-semibold text-brand-700 text-display-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2 items-center">
            <h2 className="font-semibold text-brand-700 text-lg">
              Events happend
            </h2>
            <div className="flex items-center gap-2">
              <Count
                from={0}
                to={getHappendEvents()}
                className="font-semibold text-brand-700 text-display-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2 items-center">
            <h2 className="font-semibold text-brand-700 text-lg">
              Events cancelled
            </h2>
            <div className="flex items-center gap-2">
              <Count
                from={0}
                to={getCanceledEvents()}
                className="font-semibold text-brand-700 text-display-md"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderRegistrantsDiagram = () => {
    return (
      <StackedBarChart
        height={350}
        data={getDataForRegistrants()}
        yAxis={
          <LinearYAxis
            axisLine={null}
            tickSeries={<LinearYAxisTickSeries line={null} label={null} />}
          />
        }
        xAxis={
          <LinearXAxis
            type="category"
            tickSeries={
              <LinearXAxisTickSeries
                label={
                  <LinearXAxisTickLabel
                    padding={10}
                    rotation={0}
                    // format={(text) => `${text.slice(0, 5)}...`}
                    format={(text) => `${text}`}
                    fill="#535362"
                  />
                }
                tickSize={60}
              />
            }
          />
        }
        series={
          <StackedBarSeries
            bar={
              <Bar
                glow={{
                  blur: 20,
                  opacity: 0.5,
                }}
                gradient={
                  <Gradient
                    stops={[
                      <GradientStop
                        offset="5%"
                        stopOpacity={0.1}
                        key="start"
                      />,
                      <GradientStop
                        offset="90%"
                        stopOpacity={0.7}
                        key="stop"
                      />,
                    ]}
                  />
                }
              />
            }
            colorScheme={["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]}
            padding={0.5}
          />
        }
        gridlines={
          <GridlineSeries line={<Gridline strokeColor="#7E7E8F75" />} />
        }
      />
    );
  };
  const { unique, total } = getRegistrantsTotal();

  const getCategoriesData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    const categoryNames = filtersData.offline.categories.map((cat) => cat.name);

    const categoriesStatistic = categoryNames.map((categoryName) => {
      const offlineCategory = filtersData.offline.categories.find(
        (cat) => cat.name === categoryName
      );
      const onlineCategory = filtersData.online_zoom.categories.find(
        (cat) => cat.name === categoryName
      );

      return {
        key: categoryName,
        data: (offlineCategory?.value || 0) + (onlineCategory?.value || 0),
      };
    });

    if (categoriesStatistic.filter((cat) => cat.data > 0).length > 0)
      return categoriesStatistic;
    else return null;

    // return [
    //   { key: "Yoga", data: 10 },
    //   { key: "Math", data: 5 },
    //   { key: "Software", data: 15 },
    // ];
  };

  const getLanguagesData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    const languageNames = filtersData.offline.languages.map(
      (lang) => lang.name
    );

    const languagesStatistic = languageNames.map((languageName) => {
      const offlineLang = filtersData.offline.languages.find(
        (lang) => lang.name === languageName
      );
      const onlineLang = filtersData.online_zoom.languages.find(
        (lang) => lang.name === languageName
      );

      return {
        key: languageName,
        data: (offlineLang?.value || 0) + (onlineLang?.value || 0),
      };
    });

    return languagesStatistic.some((lang) => lang.data > 0)
      ? languagesStatistic
      : null;
    // return [
    //   { key: "English", data: 10 },
    //   { key: "Japanise", data: 2 },
    //   { key: "Ukranian", data: 3 },
    // ];
  };

  const getMembersData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    const memberNames = filtersData.offline.members.map((mem) => mem.name);

    const membersStatistic = memberNames.map((memberName) => {
      const offlineMem = filtersData.offline.members.find(
        (mem) => mem.name === memberName
      );
      const onlineMem = filtersData.online_zoom.members.find(
        (mem) => mem.name === memberName
      );

      return {
        key: memberName,
        data: (offlineMem?.value || 0) + (onlineMem?.value || 0),
      };
    });

    return membersStatistic.some((mem) => mem.data > 0)
      ? membersStatistic
      : null;
    // return [
    //   { key: "Roman", data: 2 },
    //   { key: "Hlib", data: 1 },
    //   { key: "Harmeek", data: 15 },
    // ];
  };

  const getLocationsData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    const locationNames = filtersData.offline.locations.map((loc) => loc.name);

    const locationsStatistic = locationNames.map((locationName) => {
      const offlineLoc = filtersData.offline.locations.find(
        (loc) => loc.name === locationName
      );
      const onlineLoc = filtersData.online_zoom.locations.find(
        (loc) => loc.name === locationName
      );

      return {
        key: locationName,
        data: (offlineLoc?.value || 0) + (onlineLoc?.value || 0),
      };
    });

    return locationsStatistic.some((loc) => loc.data > 0)
      ? locationsStatistic
      : null;
    // return [
    //   { key: "London", data: 150 },
    //   { key: "Kiev", data: 51 },
    //   { key: "Toronto", data: 110 },
    // ];
  };

  const renderCategoriesStatistic = (data) => {
    return (
      <Fragment>
        {data && (
          <PieChart
            id="simple"
            height={350}
            data={data}
            series={
              <PieArcSeries
                colorScheme={["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]}
              />
            }
          />
        )}
      </Fragment>
    );
  };

  const renderLanguagesStatistic = (data) => {
    return (
      <Fragment>
        {data && (
          <PieChart
            id="languages"
            height={350}
            data={data}
            series={
              <PieArcSeries
                colorScheme={["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]}
              />
            }
          />
        )}
      </Fragment>
    );
  };
  const renderMembersStatistic = (data) => {
    return (
      <Fragment>
        {data && (
          <PieChart
            id="members"
            height={350}
            data={data}
            series={
              <PieArcSeries
                colorScheme={["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]}
              />
            }
          />
        )}
      </Fragment>
    );
  };
  const renderLocationsStatistic = (data) => {
    return (
      <Fragment>
        {data && (
          <PieChart
            id="locations"
            height={350}
            data={data}
            series={
              <PieArcSeries
                colorScheme={["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]}
              />
            }
          />
        )}
      </Fragment>
    );
  };

  const renderFiltersStatistic = () => {
    const membersData = getMembersData();
    const locationsData = getLocationsData();
    const languagesData = getLanguagesData();
    const categoriesData = getCategoriesData();

    return (
      <Fragment>
        {categoriesData && (
          <BlockStack gap={4}>
            <h2 className="font-semibold text-gray-700 text-display-md border-b">
              Categories
            </h2>
            {renderCategoriesStatistic(categoriesData)}
          </BlockStack>
        )}
        {locationsData && (
          <BlockStack gap={4}>
            <h2 className="font-semibold text-gray-700 text-display-md border-b">
              Locations
            </h2>
            {renderLocationsStatistic(locationsData)}
          </BlockStack>
        )}
        {languagesData && (
          <BlockStack gap={4}>
            <h2 className="font-semibold text-gray-700 text-display-md border-b">
              Languages
            </h2>
            {renderLanguagesStatistic(languagesData)}
          </BlockStack>
        )}
        {membersData && (
          <BlockStack gap={4}>
            <h2 className="font-semibold text-gray-700 text-display-md border-b">
              Members
            </h2>
            {renderMembersStatistic(membersData)}
          </BlockStack>
        )}
        {!membersData &&
          !locationsData &&
          !languagesData &&
          !categoriesData && (
            <div className="w-full h-64 bg-[linear-gradient(180deg,_rgba(236,229,246,0)_0%,_#ECE4F6_100%)] rounded-lg flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-start">
                {<p>You dont have filters statistic yet.</p>}
              </div>
            </div>
          )}
      </Fragment>
    );
  };
  useEffect(() => {
    if (revenueDates.startDate && revenueDates.endDate) {
      fetchTotalRevenue(
        moment(revenueDates.startDate).format("YYYY-MM-DD"),
        moment(revenueDates.endDate).format("YYYY-MM-DD")
      );
    }
  }, [revenueDates]);
  const getData = async () => {
    await fetchTotalRevenue();
  };
  useEffect(() => {
    getData();
  }, []);
  const monthOptions = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearOptions = ["", 2025, 2026, 2027];
  return (
    <PageWrapper loading={loading}>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm font-semibold mt-6">Analytics</h1>
          <p className="page-header-description">
            Track and measure the performance of your events with real-time
            analytics and insights.
          </p>
        </BlockStack>
      </PageHeader>
      <PageContent>
        <BlockStack gap={8} cardsLayout={true}>
          <TabsComponent
            tabsList={tabsList}
            selected={selectedTab}
            handleSelectChange={handleSelectTabChange}
            fullWidth={true}
          />
          {selectedTab === 0 && (
            <BlockStack gap={8}>
              <div className="flex flex-row justify-end items-end min-w-[270px] ml-auto">
                <Datepicker
                  displayFormat={"MMM DD, YYYY"}
                  value={revenueDates}
                  placeholder="Select dates"
                  inputClassName="input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white"
                  onChange={(newValue) => setRevenueDates(newValue)}
                />
              </div>
              <div className="w-full h-64 bg-[linear-gradient(180deg,_rgba(236,229,246,0)_0%,_#ECE4F6_100%)] rounded-lg flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-start">
                  <h2 className="font-semibold text-brand-700 text-display-md">
                    {/* {`${he.decode(getCurrencySymbol("CAD"))} 
                    ${
                      !revenueDates.startDate
                        ? totalRevenue
                        : filteredByDateRevenue
                    }`} */}
                    <Count
                      from={0}
                      to={
                        !revenueDates.startDate
                          ? totalRevenue
                          : filteredByDateRevenue
                      }
                      className="font-semibold text-brand-700 text-display-md"
                    />
                    {/* {`${
                    settings && settings.currency ? settings.currency : ""
                  } ${totalRevenue}`} */}
                  </h2>
                  {totalRevenue === 0 && <p>You haven’t made any sales yet.</p>}
                </div>
              </div>
            </BlockStack>
          )}
          {selectedTab === 1 && (
            <BlockStack gap={8}>
              <InlineStack gap={4}>
                <SelectControl
                  options={monthOptions}
                  selected={selectedMonth}
                  onSelectChange={(val) => {
                    handleMonthSelect(val);
                    setIsMonthSelected(true);
                  }}
                />
                <SelectControl
                  options={yearOptions}
                  selected={selectedYear}
                  onSelectChange={(val) => {
                    handleYearSelect(val);
                    setIsMonthSelected(true);
                  }}
                />
                <PageActionButton
                  text="Reset"
                  icon={null}
                  type="primary"
                  customStyle={"p-[0.75rem] self-end"}
                  onAction={() => {
                    setIsMonthSelected(false);
                    setSelectedMonth("");
                    setSelectedYear("");
                  }}
                />
              </InlineStack>
              <div className="w-full h-64 bg-[linear-gradient(180deg,_rgba(236,229,246,0)_0%,_#ECE4F6_100%)] rounded-lg flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-start">
                  <h2 className="font-semibold text-brand-700 text-display-md">
                    <Count
                      from={0}
                      to={unique + total}
                      className="font-semibold text-brand-700 text-display-md"
                    />
                    {` registrants`}
                    {/* {`${unique + total} registrants`} */}
                  </h2>
                  {unique + total === 0 && (
                    <p>You dont have registrants yet.</p>
                  )}
                </div>
              </div>

              {/* {registrantsTotal && renderRegistrantsDiagram()} */}
            </BlockStack>
          )}
          {selectedTab === 2 && renderEventsAnalytics()}
          {selectedTab === 3 && (
            <BlockStack gap={8}>
              <InlineStack gap={4}>
                <SelectControl
                  options={monthOptions}
                  selected={selectedMonth}
                  onSelectChange={(val) => {
                    handleMonthSelect(val);
                    setIsMonthSelected(true);
                  }}
                />
                <SelectControl
                  options={yearOptions}
                  selected={selectedYear}
                  onSelectChange={(val) => {
                    handleYearSelect(val);
                    setIsMonthSelected(true);
                  }}
                />
                <PageActionButton
                  text="Reset"
                  icon={null}
                  type="primary"
                  customStyle={"p-[0.75rem] self-end"}
                  onAction={() => {
                    setIsMonthSelected(false);
                    setSelectedMonth("");
                    setSelectedYear("");
                  }}
                />
              </InlineStack>
              {filtersStatistic && renderFiltersStatistic()}
            </BlockStack>
          )}
        </BlockStack>
      </PageContent>
    </PageWrapper>
  );
};
export default AnalyticsPage;
