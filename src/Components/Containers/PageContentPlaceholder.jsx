const PageContentPlaceholder = (props) => {
    return (
        <div className="page-content-placeholder">
            {props.icon && props.icon}
            {props.title && (
                <h4 className="page-conetent-placeholder-title">{props.title}</h4>
            )}
            {props.description && (
                <p className="page-conetent-placeholder-description">
                    {props.description}
                </p>
            )}
            <div className="page-conetent-placeholder-actions">{props.children}</div>
        </div>
    );
};
export default PageContentPlaceholder;
