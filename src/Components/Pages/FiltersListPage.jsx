import { useParams } from "react-router-dom";
import { useServvStore } from "../../store/useServvStore";
import FiltersList from "./FiltersList";
import PageWrapper from "../Pages/PageWrapper";
import PageHeader from "../Containers/PageHeader";
import BlockStack from "../Containers/BlockStack";
import BreadCrumbs from "../Menu/BreadCrumbs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FiltersListPage() {
  const navigate = useNavigate();
  const { type } = useParams();

  const filtersList = useServvStore((s) => s.filtersList);
  const getFilters = useServvStore((s) => s.syncFiltersFromServer);

  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  const filters = filtersList[type.toLowerCase()] || [];

  const handleSelect = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
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
        })
      )
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
    <PageWrapper loading={loading}>
      <BlockStack gap={4}>
        <PageHeader>
          <BlockStack>
            <h1 className="text-display-sm mt-6">{type}</h1>
            <BreadCrumbs
              breadcrumbs={breadcrumbs}
              onBreadCrumbClick={(label) => {
                const bc = breadcrumbs.find((b) => b.label === label);
                if (bc?.action) bc.action();
              }}
            />

            <p className="page-header-description mb-6">
              Manage your {type.toLowerCase()} — view, edit, and delete entries.
            </p>
          </BlockStack>
        </PageHeader>

        <FiltersList
          title={type}
          filters={filters}
          selected={selected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          onDelete={handleDelete}
        />
      </BlockStack>
    </PageWrapper>
  );
}
