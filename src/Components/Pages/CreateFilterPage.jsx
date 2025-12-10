import { useParams, useNavigate } from "react-router-dom";
import CreateLocationFilterForm from "./CreateLocationFilterForm";
import CreateLanguageFilterForm from "./CreateLanguageFilterForm";
import CreateCategoryFilterForm from "./CreateCategoryFilterForm";
import CreateMemberFilterForm from "./CreateMemberFilterForm";
import PageWrapper from "./PageWrapper";

export default function CreateFilterPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const onCancel = () => navigate(-1);

  const map = {
    Locations: CreateLocationFilterForm,
    Languages: CreateLanguageFilterForm,
    Categories: CreateCategoryFilterForm,
    Members: CreateMemberFilterForm,
  };

  const Form = map[type];

  return (
    <PageWrapper>
      {Form ? <Form onCancel={onCancel} /> : <p>Unknown filter type.</p>}
    </PageWrapper>
  );
}
