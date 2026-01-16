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
import CollapsibleSection from "../Containers/CollapsibleSection";
import { toast } from "react-toastify";
import {
  DocumentTextIcon,
  CodeBracketIcon,
  EyeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const EmailTemplates = ({ settings }) => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showParameters, setShowParameters] = useState(false);
  const quillRef = useRef();
  const disabled =
    !templates.length ||
    !settings ||
    (settings && settings.current_plan.id === 1);

  // Store form values to persist across view changes
  const [formValues, setFormValues] = useState({
    subject: "",
    text: "",
    editMode: "Rich Text",
  });
  const [defaultText, setDefaultText] = useState("");

  // Track if we're currently updating from template selection
  const [isTemplateUpdate, setIsTemplateUpdate] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch templates
  const getEmailTemplates = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        "/wp-json/servv-plugin/v1/wordpress/templates",
        { headers: { "X-WP-Nonce": servvData.nonce } }
      );
      if (resp.status === 200 && resp.data.templates.length) {
        let templates = resp.data.templates.sort((a, b) =>
          a.description.localeCompare(b.description)
        );
        setTemplates(templates);
        const firstTemplate = templates[0];
        setSelectedTemplate(firstTemplate);

        // Initialize form values with first template
        setIsTemplateUpdate(true);
        setFormValues({
          subject: firstTemplate.subject || "",
          text: firstTemplate.text || "",

          editMode: "Rich Text",
        });
        setDefaultText(firstTemplate.text || "");
        setIsTemplateUpdate(false);
      } else {
        toast("No Email Templates Available");
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed To Load Email Templates");
    }
    setLoading(false);
  };

  // Save handler
  const handleTemplateSave = async () => {
    if (!selectedTemplate) return;
    setLoading(true);
    try {
      const resp = await axios.patch(
        `/wp-json/servv-plugin/v1/wordpress/templates/${selectedTemplate.id}`,
        {
          subject: formValues.subject,
          text: formValues.text,
        },
        { headers: { "X-WP-Nonce": servvData.nonce } }
      );
      if (resp.status === 200) {
        toast.success("Template Saved Successfully");
        getEmailTemplates();
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed To Save Template");
    }
    setLoading(false);
  };

  // Change handlers
  const handleSelectTemplate = (desc) => {
    const tmpl = templates.find((t) => t.description === desc);
    setSelectedTemplate(tmpl);

    // Update form values when template changes
    setIsTemplateUpdate(true);
    setFormValues({
      subject: tmpl.subject || "",
      text: tmpl.text || "",
      editMode: formValues.editMode, // Keep current edit mode
    });
    setDefaultText(tmpl.text || "");
    setIsTemplateUpdate(false);
  };

  const handleTemplateTextChange = (text) => {
    if (isTemplateUpdate) return; // Prevent updates during template switching

    setFormValues((prev) => ({ ...prev, text }));
    if (selectedTemplate) {
      setSelectedTemplate({ ...selectedTemplate, text });
    }
  };

  const handleCancel = () => {
    if (selectedTemplate) {
      const resetText = templates[0].text || "";
      setFormValues({
        subject: templates[0].subject || "",
        text: resetText,
        editMode: formValues.editMode,
      });
      setDefaultText(templates[0].text);

      if (quillRef.current?.clipboard) {
        quillRef.current.clipboard.dangerouslyPasteHTML(resetText, "api");
      }
    }
  };

  const handleTemplateSubjectChange = (subject) => {
    if (isTemplateUpdate) return; // Prevent updates during template switching

    setFormValues((prev) => ({ ...prev, subject }));
    if (selectedTemplate) {
      setSelectedTemplate({ ...selectedTemplate, subject });
    }
  };

  const handleEditModeChange = (mode) => {
    setFormValues((prev) => ({ ...prev, editMode: mode }));
  };

  // Function to process content for preview with enhanced overflow prevention
  const processContentForPreview = (content) => {
    if (!content) return "";

    // Create a temporary div to process the content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    // Find all text nodes and break long continuous strings
    const processTextNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        // Break long continuous strings (more than 50 characters without spaces)
        const processedText = text.replace(/(\S{50,})/g, (match) => {
          // Insert zero-width spaces every 30 characters to allow breaking
          return match.replace(/(.{30})/g, "$1\u200B");
        });
        node.textContent = processedText;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Process child nodes
        Array.from(node.childNodes).forEach(processTextNodes);

        // Special handling for links and other elements
        if (node.tagName === "A") {
          const href = node.getAttribute("href");
          if (href && href.length > 50) {
            // Break long URLs
            node.textContent = href.replace(/(.{30})/g, "$1\u200B");
          }
        }
      }
    };

    Array.from(tempDiv.childNodes).forEach(processTextNodes);
    return tempDiv.innerHTML;
  };

  // Render parameters table
  const renderParametersTable = () => {
    if (!selectedTemplate || !selectedTemplate.params) return null;

    const paramEntries = Object.entries(selectedTemplate.params);

    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                {t("Parameter")}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                {t("Description")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paramEntries.map(([key, desc], index) => (
              <tr
                key={key}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 text-left align-top">
                  <code className="text-sm font-mono font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded">
                    {key}
                  </code>
                </td>
                <td className="px-4 py-3 text-left align-top">
                  <span className="text-sm text-gray-600">{desc}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  useEffect(() => {
    getEmailTemplates();
    // eslint-disable-next-line
  }, []);

  return (
    <PageWrapper loading={loading}>
      {/* Mobile Layout */}
      {isMobile ? (
        <div
          className="w-full mx-auto bg-white min-h-screen"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {/* Mobile Header */}
          <div className="sticky top-0 bg-white z-20 border-b border-gray-200 px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-2xl text-gray-900">
                  {t("Email Templates")}
                </h1>
                {/* <h1 className="text-2xl font-bold text-gray-900">
                  {t("Email Templates")}
                </h1> */}
                <p className="text-sm text-gray-600 mt-1">
                  {/* {t("Easily View, Create, and Modify Email Templates")} */}
                  Easily view, create, and modify email templates
                </p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 space-y-8 pb-32">
            {/* Template Selection */}
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <DocumentTextIcon className="w-5 h-5 text-purple-600" />
                <label className="text-base font-semibold text-gray-900">
                  {t("Template Name")}
                </label>
              </div>
              <SelectControl
                options={templates.map((t) => t.description)}
                selected={selectedTemplate?.description || ""}
                onSelectChange={handleSelectTemplate}
                // disabled={disabled}
                className="w-full"
              />
            </div>

            {/* Email Subject */}
            <div className="space-y-5">
              <label className="text-base font-semibold text-gray-900 mt-6">
                {t("Email Subject")}
              </label>
              <div>
                <InputFieldControl
                  value={formValues.subject}
                  onChange={handleTemplateSubjectChange}
                  placeholder="Enter Email Subject"
                  disabled={disabled}
                  width="100%"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Template Parameters */}
            {selectedTemplate && (
              <div className="space-y-5">
                <button
                  onClick={() => setShowParameters(!showParameters)}
                  className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <InformationCircleIcon className="w-5 h-5 text-purple-600" />
                    <span className="text-base font-semibold text-gray-900">
                      {t("Template Parameters")}
                    </span>
                  </div>
                  {showParameters ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {showParameters && renderParametersTable()}
              </div>
            )}

            {/* Edit Mode Toggle */}
            <div className="space-y-5">
              <label className="text-base font-semibold text-gray-900">
                {t("Edit Mode")}
              </label>
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => handleEditModeChange("Rich Text")}
                  className={`
                    flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200
                    ${
                      formValues.editMode === "Rich Text"
                        ? "bg-white text-purple-700 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }
                  `}
                  disabled={disabled}
                >
                  <DocumentTextIcon className="w-4 h-4" />
                  <span>{t("Rich Text")}</span>
                </button>
                <button
                  onClick={() => handleEditModeChange("HTML")}
                  className={`
                    flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200
                    ${
                      formValues.editMode === "HTML"
                        ? "bg-white text-purple-700 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }
                  `}
                  disabled={disabled}
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  <span>{t("HTML")}</span>
                </button>
              </div>
            </div>

            {/* Editor */}
            <div className="space-y-5">
              <label className="text-base font-semibold text-gray-900">
                {t("Email Content")}
              </label>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white email-editor-container">
                {formValues.editMode === "Rich Text" ? (
                  <Editor
                    key={`${selectedTemplate?.id}-${defaultText}`}
                    ref={quillRef}
                    defaultValue={defaultText}
                    onChange={handleTemplateTextChange}
                    mobileToolbar={[
                      ["bold", "italic", "underline"],
                      [{ list: "bullet" }],
                      ["link"],
                    ]}
                    disabled={disabled}
                  />
                ) : (
                  <HTMLEditor
                    value={formValues.text}
                    onChange={handleTemplateTextChange}
                  />
                )}
              </div>
            </div>

            {/* Email Preview */}
            {selectedTemplate && (
              <div className="space-y-5">
                <div className="flex items-center space-x-2">
                  <EyeIcon className="w-5 h-5 text-purple-600" />
                  <label className="text-base font-semibold text-gray-900">
                    {t("Email Preview")}
                  </label>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 email-template-preview">
                  <div className="bg-white rounded-lg p-4 shadow-sm email-template-preview-content">
                    <div className="border-b border-gray-200 pb-3 mb-4">
                      <h4 className="text-sm font-semibold text-gray-900">
                        {t("Subject:")}
                        {formValues.subject}
                      </h4>
                    </div>
                    <div
                      className="prose prose-sm max-w-none text-gray-700 email-preview-content"
                      dangerouslySetInnerHTML={{
                        __html: processContentForPreview(formValues.text) || "",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fixed Mobile Action Buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
            <div className="max-w-md mx-auto">
              <div
                className="flex justify-end space-x-4"
                style={{ marginRight: "24px" }}
              >
                <PageActionButton
                  text="Cancel"
                  type="secondary"
                  onAction={handleCancel}
                  disabled={loading}
                  className="min-w-[120px] h-[40px] px-6 py-2 text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                />
                <PageActionButton
                  text="Save Template"
                  type="primary"
                  onAction={handleTemplateSave}
                  disabled={disabled || loading}
                  className="min-w-[120px] h-[40px] px-6 py-2 text-base font-semibold bg-purple-600 text-white hover:bg-purple-700"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <div
          className="w-full bg-white min-h-screen"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {/* Desktop Header */}
          <PageHeader>
            <BlockStack>
              <h1 className="text-3xl text-gray-900 w-full mt-6">
                {t("Email Templates")}
              </h1>
              <p className="text-gray-600 mt-1 w-full">
                {t("Easily View, Create, and Modify Email Templates")}
              </p>
            </BlockStack>
            <InlineStack gap={2} align="right">
              <PageActionButton
                text="Cancel"
                icon={null}
                type="secondary"
                onAction={handleCancel}
              />
              <PageActionButton
                text="Save"
                icon={null}
                type="primary"
                disabled={disabled}
                onAction={handleTemplateSave}
              />
            </InlineStack>
          </PageHeader>

          <PageContent>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="space-y-8 w-full">
                {/* Template Selection */}
                <div className="space-y-5 w-full">
                  <div className="flex items-center space-x-2 w-full">
                    <DocumentTextIcon className="w-5 h-5 text-purple-600" />
                    <label className="text-lg font-semibold text-gray-900 w-full">
                      {t("Template Name")}
                    </label>
                  </div>
                  <div className="w-full">
                    <SelectControl
                      options={templates.map((t) => t.description)}
                      selected={selectedTemplate?.description || ""}
                      onSelectChange={handleSelectTemplate}
                      // disabled={disabled}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Email Subject - Fixed width for desktop */}
                <div className="space-y-5 w-full">
                  <label className="text-lg font-semibold text-gray-900 w-full">
                    {t("Email Subject")}
                  </label>
                  <div className="w-full">
                    <InputFieldControl
                      value={formValues.subject}
                      onChange={handleTemplateSubjectChange}
                      placeholder="Enter Email Subject"
                      disabled={disabled}
                      width="100%"
                      align="left"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                {/* Template Parameters - Fixed width for desktop */}
                {selectedTemplate && (
                  <div className="space-y-5">
                    <button
                      onClick={() => setShowParameters(!showParameters)}
                      className="flex items-center justify-between w-full max-w-4xl p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <InformationCircleIcon className="w-5 h-5 text-purple-600" />
                        <span className="text-lg font-semibold text-gray-900">
                          {t("Template Parameters")}
                        </span>
                      </div>
                      {showParameters ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    {showParameters && (
                      <div className="max-w-4xl">{renderParametersTable()}</div>
                    )}
                  </div>
                )}

                {/* Edit Mode Toggle - Fixed width for desktop */}
                <div className="space-y-5">
                  <label className="text-lg font-semibold text-gray-900">
                    {t("Edit Mode")}
                  </label>
                  <div className="flex bg-gray-100 rounded-xl p-1 max-w-md">
                    <button
                      onClick={() => handleEditModeChange("Rich Text")}
                      className={`
                        flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200
                        ${
                          formValues.editMode === "Rich Text"
                            ? "bg-white text-purple-700 shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        }
                      `}
                      disabled={disabled}
                    >
                      <DocumentTextIcon className="w-4 h-4" />
                      <span>{t("Rich Text")}</span>
                    </button>
                    <button
                      onClick={() => handleEditModeChange("HTML")}
                      className={`
                        flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200
                        ${
                          formValues.editMode === "HTML"
                            ? "bg-white text-purple-700 shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        }
                      `}
                      disabled={disabled}
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      <span>{t("HTML")}</span>
                    </button>
                  </div>
                </div>

                {/* Editor - Fixed width for desktop */}
                <div className="space-y-5">
                  <label className="text-lg font-semibold text-gray-900">
                    {t("Email Content")}
                  </label>
                  <div className="border border-gray-200 rounded-xl overflow-hidden bg-white max-w-4xl email-editor-container">
                    {formValues.editMode === "Rich Text" ? (
                      <Editor
                        key={`${selectedTemplate?.id}-${defaultText}`}
                        ref={quillRef}
                        defaultValue={defaultText}
                        onChange={handleTemplateTextChange}
                        disabled={disabled}
                      />
                    ) : (
                      <HTMLEditor
                        value={formValues.text}
                        onChange={handleTemplateTextChange}
                      />
                    )}
                  </div>
                </div>

                {/* Email Preview - Fixed width for desktop */}
                {selectedTemplate && (
                  <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                      <EyeIcon className="w-5 h-5 text-purple-600" />
                      <label className="text-lg font-semibold text-gray-900">
                        {t("Preview")}
                      </label>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-w-4xl email-template-preview">
                      <div className="bg-white rounded-lg p-4 shadow-sm email-template-preview-content">
                        <div className="border-b border-gray-200 pb-3 mb-4">
                          <h4 className="text-sm font-semibold text-gray-900">
                            {t("Subject:")}
                            {formValues.subject}
                          </h4>
                        </div>
                        <div
                          className="prose prose-sm max-w-none text-gray-700 email-preview-content"
                          dangerouslySetInnerHTML={{
                            __html:
                              processContentForPreview(formValues.text) || "",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Desktop Action Buttons - Removed border-t */}
                <div className="pt-8">
                  <div
                    className="flex justify-end space-x-4"
                    style={{ marginRight: "24px" }}
                  >
                    <PageActionButton
                      text="Cancel"
                      type="secondary"
                      onAction={handleCancel}
                      disabled={loading}
                      className="min-w-[120px] h-[40px] px-6 py-2 text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    />
                    <PageActionButton
                      text="Save Template"
                      type="primary"
                      onAction={handleTemplateSave}
                      disabled={disabled || loading}
                      className="min-w-[120px] h-[40px] px-6 py-2 text-base font-semibold bg-purple-600 text-white hover:bg-purple-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </PageContent>
        </div>
      )}
    </PageWrapper>
  );
};

export default EmailTemplates;
