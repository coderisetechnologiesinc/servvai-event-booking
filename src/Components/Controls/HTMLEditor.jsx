import Card from "../Containers/Card";
import TextAreaControl from "./TextAreaControl";
const HTMLEditor = ({ value, onChange }) => {
  return (
    <Card>
      <TextAreaControl value={value} onChange={onChange} />
    </Card>
  );
};
export default HTMLEditor;
