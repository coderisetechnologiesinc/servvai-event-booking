import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { compose } from "@wordpress/compose";
import { withSelect, useSelect, useDispatch } from "@wordpress/data";
import { useEffect, useRef } from "@wordpress/element";
import { useState } from "react";
import EventDetails from "./Components/PostEditor/EventDetails";

function Edit({ title, agenda, attributes, setAttributes, clientId }) {
  const blockProps = useBlockProps();
  const { meeting, product } = attributes;
  // const isValid =
  //   meeting?.startTime &&
  //   meeting?.timezone &&
  //   (product.quantity || product.current_quantity);
  const isValid = meeting?.startTime && meeting.timezone.length > 0;

  const { createErrorNotice, removeNotice } = useDispatch("core/notices");
  const { lockPostSaving, unlockPostSaving } = useDispatch("core/editor");
  const [requiredFieldsNotice, setRequiredFieldsNotice] = useState(false);
  const isSaving = useSelect((select) => select("core/editor").isSavingPost());
  const isAutosaving = useSelect((select) =>
    select("core/editor").isAutosavingPost()
  );

  // Track notice ID and whether save was attempted
  const noticeIdRef = useRef(null);
  const hasAttemptedSave = useRef(false);

  // Effect to lock or unlock post saving depending on validity
  useEffect(() => {
    const lockKey = `servv_plugin-${clientId}`;
    if (!isValid) {
      lockPostSaving(lockKey);
    } else {
      unlockPostSaving(lockKey);
      // Remove error notice immediately if valid
      if (noticeIdRef.current) {
        removeNotice(noticeIdRef.current);
        noticeIdRef.current = null;
      }
    }
  }, [isValid, clientId]);
  useEffect(() => {
    const lockKey = `servv_plugin-${clientId}-publish`;

    if (!isValid) {
      // Lock the publish button only
      lockPostSaving(lockKey, "publish");
    } else {
      // Unlock the publish button
      unlockPostSaving(lockKey, "publish");
      // Remove error notice immediately if valid
      if (noticeIdRef.current) {
        removeNotice(noticeIdRef.current);
        noticeIdRef.current = null;
      }
    }

    return () => {
      // Ensure cleanup on unmount
      unlockPostSaving(lockKey, "publish");
    };
  }, [isValid, clientId]);

  // Effect to show error notice only when save is attempted with invalid data
  useEffect(() => {
    if (isSaving && !isAutosaving && !isValid && !hasAttemptedSave.current) {
      const id = `servv_plugin-validation-${clientId}`;

      createErrorNotice("Please fill all required fields in the block.", {
        id,
      });
      setRequiredFieldsNotice(true);
      noticeIdRef.current = id;
      hasAttemptedSave.current = true;
    }

    if (isValid || !isSaving) {
      hasAttemptedSave.current = false;
    }
  }, [isSaving, isAutosaving, isValid]);
  const handleDisableRequiredFieldsNotice = () => {
    setRequiredFieldsNotice(false);
  };
  const removeBlock = () => {
    wp.data.dispatch("core/block-editor").removeBlock(clientId);
  };

  return (
    <div {...blockProps} className="servv-app">
      <EventDetails
        title={title}
        agenda={agenda}
        attributes={attributes}
        setAttributes={setAttributes}
        removeBlock={removeBlock}
        requiredFieldsNotification={requiredFieldsNotice}
        hideReqieredFieldsNotification={handleDisableRequiredFieldsNotice}
      />
    </div>
  );
}

// Keep compose with withSelect for injecting post title prop
export default compose([
  withSelect((select) => {
    const rawContent = select("core/editor").getEditedPostAttribute("content");
    if (!rawContent) return { agenda: "" };

    // Create a DOM element to strip tags & comments
    const tmpDiv = document.createElement("div");
    tmpDiv.innerHTML = rawContent;

    // Remove Gutenberg block comments
    Array.from(tmpDiv.childNodes).forEach((node) => {
      if (node.nodeType === Node.COMMENT_NODE) {
        tmpDiv.removeChild(node);
      }
    });

    // Get plain text content
    const plainText = tmpDiv.textContent.trim();

    return {
      title: select("core/editor").getEditedPostAttribute("title"),
      agenda: plainText,
    };
  }),
])(Edit);
