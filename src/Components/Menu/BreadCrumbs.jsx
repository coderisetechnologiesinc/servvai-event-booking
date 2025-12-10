import { ChevronRightIcon } from "@heroicons/react/16/solid";
const BreadCrumbs = ({ breadcrumbs = [], onBreadCrumbClick = () => {} }) => {
  const handleNavigate = (e, item) => {
    e.preventDefault();
    item.action();
    onBreadCrumbClick(item.label);
  };
  const renderBreadCrumbs = () => {
    return breadcrumbs.map((item, index) => {
      return (
        <div className="flex flex-row gap-4 items-center">
          <a href="" onClick={(e) => handleNavigate(e, item)}>
            {item.label}
          </a>
          {index < breadcrumbs.length - 1 && (
            <ChevronRightIcon className="breadcrumbs-icon" />
          )}
        </div>
      );
    });
  };
  return (
    <div
      className={`breadcrumbs flex flex-row items-center gap-4 ${
        breadcrumbs.length > 1 ? "opacity-100" : "opacity-0"
      }`}
    >
      {renderBreadCrumbs()}
    </div>
  );
};
export default BreadCrumbs;
