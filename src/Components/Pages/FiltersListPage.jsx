import { useParams } from "react-router-dom";
import { useServvStore } from "../../store/useServvStore";
import FiltersList from "./FiltersList";
import PageWrapper from "../Pages/PageWrapper";
import PageHeader from "../Containers/PageHeader";
import BlockStack from "../Containers/BlockStack";
import PageActionButton from "../Controls/PageActionButton";
import BreadCrumbs from "../Menu/BreadCrumbs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function FiltersListPage() {
  const navigate = useNavigate();
  const { type } = useParams();
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);
  const getFilters = useServvStore((s) => s.syncFiltersFromServer);
  const [maxFiltersNumber, setMaxFiltersNumber] = useState(2);
  const [defaultFiltersList, setDefaultFiltersList] = useState([
    "Locations",
    "Languages",
    "Categories",
  ]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const filters = filtersList[type.toLowerCase()] || [];
  useEffect(() => {
    const maxFilters = settings?.current_plan?.filters_limit || 25;
    setMaxFiltersNumber(maxFilters);

    const totalFilters = Object.values(filtersList).reduce(
      (total, arr) => total + (arr?.length || 0),
      0,
    );
    setIsLimitReached(totalFilters >= maxFilters);
    if (settings?.current_plan?.id !== 1) {
      let newFiltersList = defaultFiltersList;
      newFiltersList.push("Members");
      setDefaultFiltersList(newFiltersList);
    }
  }, [settings, filtersList]);
  const handleSelect = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const handleSelectAll = () => {
    if (selected.length === filters.length) {
      setSelected([]);
    } else {
      setSelected(filters.map((f) => f.id));
    }
  };

  const handleDelete = async (type, ids) => {
    setLoading(true);

    await Promise.allSettled(
      ids.map((id) =>
        fetch(`/wp-json/servv-plugin/v1/filters/${type.toLowerCase()}/${id}`, {
          method: "DELETE",
          headers: { "X-WP-Nonce": servvData.nonce },
        }),
      ),
    );

    await getFilters();
    setSelected([]);
    setLoading(false);
  };

  useEffect(() => {
    getFilters();
  }, []);
  const breadcrumbs = [
    {
      label: "Filters",
      action: () => navigate("/filters"),
    },
    {
      label: type,
      action: () => {},
    },
  ];

  return (
    <PageWrapper loading={loading} withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          {/* LEFT: title + breadcrumbs + description */}
          <div className="dashboard-heading">
            <div className="flex flex-row justify-between">
              <h1 className="dashboard-title">{type}</h1>
              <PageActionButton
                text="Create filter"
                type="primary"
                icon={<PlusIcon className="button-icon primary" />}
                onAction={() => navigate(`/filters/new/${type}`)}
                disabled={isLimitReached}
              />
            </div>

            <div className="dashboard-description">
              <BreadCrumbs
                breadcrumbs={breadcrumbs}
                onBreadCrumbClick={(label) => {
                  const bc = breadcrumbs.find((b) => b.label === label);
                  if (bc?.action) bc.action();
                }}
              />
              <p className="dashboard-description mt-2">
                Manage your {type.toLowerCase()} — view, edit, and delete
                entries.
              </p>
            </div>
          </div>
        </div>

        <div className="header-line" />

        <FiltersList
          title={type}
          filters={filters}
          selected={selected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          onDelete={handleDelete}
        />
      </div>
    </PageWrapper>
  );
}
