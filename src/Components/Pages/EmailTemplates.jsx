import { Fragment, useEffect, useState, useRef } from "react";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import PageActionButton from "../Controls/PageActionButton";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import SelectControl from "../Controls/SelectControl";
import axios from "axios";
import Editor from "../Controls/Editor";
import InputFieldControl from "../Controls/InputFieldControl";
import AnnotatedSection from "../Containers/AnnotatedSection";
import ButtonGroup from "../Controls/ButtonGroup";
import HTMLEditor from "../Controls/HTMLEditor";
import Card from "../Containers/Card";
import PageWrapper from "./PageWrapper";
import { toast } from "react-toastify";
const EmailTemplates = ({ settings }) => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [defaultValue, setDefaultValue] = useState();
  const [range, setRange] = useState();
  const [editMode, setEditMode] = useState("Rich text");
  const [loading, setLoading] = useState(false);
  const quillRef = useRef();
  const disabled = templates.length === 0 || settings.current_plan.id !== 2;
  const handleSelectTemplate = (template) => {
    const selected = templates
      .map((template) => template.description)
      .indexOf(template);

    setSelectedTemplate(templates[selected]);
    setDefaultValue(templates[selected].text);
  };

  const getEmailTemplates = async () => {
    setLoading(true);
    const emailTemplates = await axios.get(
      "/wp-json/servv-plugin/v1/wordpress/templates",
      {
        headers: { "X-WP-Nonce": servvData.nonce },
      }
    );
    if (
      emailTemplates &&
      emailTemplates.status === 200 &&
      emailTemplates.data
    ) {
      if (
        emailTemplates.data.templates &&
        emailTemplates.data.templates.length > 0
      ) {
        setTemplates(emailTemplates.data.templates);
        setSelectedTemplate(emailTemplates.data.templates[0]);
        setDefaultValue(emailTemplates.data.templates[0].text);
        setLoading(false);
        return emailTemplates.data.templates;
      } else {
        setLoading(false);
        toast(
          "Servv experiencing issues with loading email templates. Please try again or contact support."
        );
      }
    } else {
      setLoading(false);
      return [];
    }
  };
  const handleTemplateSave = async () => {
    setLoading(true);
    const templateForSave = selectedTemplate;
    const updateTemplateResponse = await axios({
      method: "PATCH",
      url: `/wp-json/servv-plugin/v1/wordpress/templates/${templateForSave.id}`,
      headers: { "X-WP-Nonce": servvData.nonce },
      data: { subject: templateForSave.subject, text: templateForSave.text },
    }).catch((e) => setLoading(false));
    if (updateTemplateResponse && updateTemplateResponse.status === 200) {
      await getEmailTemplates();
      toast("Email template was successfully updated.");
    }
  };

  const handleTemplateTextChange = (text) => {
    setSelectedTemplate({ ...selectedTemplate, text: text });
  };
  const handleTemplateSubjectChange = (text) => {
    setSelectedTemplate({ ...selectedTemplate, subject: text });
  };

  useEffect(() => {
    getEmailTemplates();
  }, []);
  const renderEmailTemplates = () => {
    if (templates && !disabled) {
      return templates.map((template) => template.description);
    }
  };
  const renderAvailableParameters = () => {
    if (selectedTemplate)
      return Object.keys(selectedTemplate.params).map((param) => {
        return (
          <div>
            <span className="font-semibold">{param}</span> -{" "}
            <span>{selectedTemplate.params[param]}</span>
          </div>
        );
      });
    else return null;
  };
  return (
    <PageWrapper loading={loading}>
      <Fragment>
        <PageHeader>
          <BlockStack>
            <h1 className="text-display-sm font-semibold mt-6">
              Email Templates
            </h1>
            <p className="page-header-description">
              Easily view, create, and modify email templates to streamline your
              event management process.
            </p>
          </BlockStack>
          <InlineStack gap={2} align="right">
            <PageActionButton
              text="Cancel"
              icon={null}
              type="secondary"
              onAction={getEmailTemplates}
            />
            <PageActionButton
              text="Save"
              icon={null}
              type="primary"
              disabled={disabled}
              onAction={() => handleTemplateSave()}
            />
          </InlineStack>
        </PageHeader>
        <PageContent>
          <BlockStack gap={8} cardsLayout={true}>
            <AnnotatedSection
              title="Template name"
              description="Select Template"
            >
              <SelectControl
                label=""
                options={renderEmailTemplates()}
                selected={selectedTemplate?.description || null}
                onSelectChange={handleSelectTemplate}
                disabled={disabled}
              />
            </AnnotatedSection>
            <AnnotatedSection
              title="Email subject"
              description="Set an email subject."
            >
              <InputFieldControl
                value={selectedTemplate?.subject || ""}
                onChange={handleTemplateSubjectChange}
                align="left"
                width={"100%"}
                disabled={disabled}
              />
            </AnnotatedSection>
            {selectedTemplate && (
              <AnnotatedSection
                title="Available parameters"
                description="Do not change or remove the parameters below. The server
                        cannot fetch your event details"
              >
                <Card padding={4} background={"bg-gray-300"}>
                  <BlockStack gap={2}>
                    {/* <BlockStack gap={2}> */}
                    {/* <span className="font-semibold"></span> */}
                    {/* <span className="font-regular">
                        
                      </span> */}
                    {/* </BlockStack> */}
                    {renderAvailableParameters()}
                  </BlockStack>
                </Card>
              </AnnotatedSection>
            )}
            <AnnotatedSection
              title="Edit mode"
              description="Select template edit mode"
            >
              <ButtonGroup
                title="Mode"
                buttons={["Rich text", "HTML"]}
                active={editMode}
                onChange={(val) => setEditMode(val)}
                disabled={disabled}
              />
            </AnnotatedSection>
            {editMode === "Rich text" && (
              <Editor
                ref={quillRef}
                readOnly={disabled}
                defaultValue={defaultValue}
                onChange={
                  disabled ? () => {} : (val) => handleTemplateTextChange(val)
                }
                onSelectionChange={setRange}
                disabled={disabled}
              />
            )}
            {editMode === "HTML" && (
              <HTMLEditor
                value={selectedTemplate?.text || ""}
                onChange={handleTemplateTextChange}
                disabled={disabled}
              />
            )}
            {selectedTemplate && (
              <BlockStack gap={4}>
                <span className="text-md font-semibold mt-8">
                  Email preview
                </span>
                <Card padding={2}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: selectedTemplate.text,
                    }}
                  ></p>
                </Card>
              </BlockStack>
            )}
          </BlockStack>
        </PageContent>
      </Fragment>
    </PageWrapper>
  );
};
export default EmailTemplates;
