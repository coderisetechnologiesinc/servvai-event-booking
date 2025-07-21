const PageHeader = (props) => {
  return <div className={`page-header ${props.bottomLine ? 'border-b pb-4' : ''}`}>{props.children}</div>;
};
export default PageHeader;
