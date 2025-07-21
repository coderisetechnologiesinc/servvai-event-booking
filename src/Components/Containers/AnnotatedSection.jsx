const AnnotatedSection = (props) => {
    return <div className="annotated-layout">
        <div className="section-annotation">
            <span className="annotated-section-title">
                {props.title}
            </span>
            <span className="annotated-section-description">
                {props.description}
            </span>
        </div>
        <div className="section-content">{props.children}</div>
    </div>
}
export default AnnotatedSection;