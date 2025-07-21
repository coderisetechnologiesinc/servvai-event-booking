import { useCallback } from "react";
const TextAreaControl = ({ value, onChange }) => {
  const getDecoratedTplText = useCallback((rawTplText) => {
    if (!rawTplText || rawTplText.length === 0) return rawTplText;
    const replaceRegex = new RegExp(/\n\s*|\n+/gm);
    return rawTplText
      .replace(replaceRegex, "")
      .replace(/<p><br\/><\/p>/g, "<br/>")
      .replace(/<p><br><\/p>/g, "<br/>")
      .replace(/<br>/g, "<br/>");
  }, []);
  return (
    <textarea
      rows="8"
      resize={false}
      value={getDecoratedTplText(value)}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
};
export default TextAreaControl;
