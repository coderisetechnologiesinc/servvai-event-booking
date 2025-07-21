import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { compose } from "@wordpress/compose";
import { withSelect, useSelect, useDispatch } from "@wordpress/data";
import { useEffect, useRef } from "@wordpress/element";
import EventDetails from "./Components/PostEditor/EventDetails";

function Edit({ title, attributes, setAttributes, clientId }) {
  const blockProps = useBlockProps();
  const { meeting, product } = attributes;

  // const isValid =
  //   meeting?.startTime &&
  //   meeting?.timezone &&
  //   (product.quantity || product.current_quantity);
  const isValid =
    meeting?.startTime && meeting?.timezone && meeting.title.length > 0;

  const { createErrorNotice, removeNotice } = useDispatch("core/notices");
  const { lockPostSaving, unlockPostSaving } = useDispatch("core/editor");

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

  // Effect to show error notice only when save is attempted with invalid data
  useEffect(() => {
    if (isSaving && !isAutosaving && !isValid && !hasAttemptedSave.current) {
      const id = `servv_plugin-validation-${clientId}`;

      createErrorNotice(
        (!product.current_quantity && product.quantity === 0) ||
          (product.current_quantity === 0 && product.quantity === 0) ||
          (!product.quantity && !product.current_quantity)
          ? "Quantity must be greater then zero"
          : "Please fill all required fields in the block.",
        {
          id,
        }
      );
      noticeIdRef.current = id;
      hasAttemptedSave.current = true;
    }

    if (isValid || !isSaving) {
      hasAttemptedSave.current = false;
    }
  }, [isSaving, isAutosaving, isValid]);

  const removeBlock = () => {
    wp.data.dispatch("core/block-editor").removeBlock(clientId);
  };

  return (
    <div {...blockProps} className="servv-app">
      <EventDetails
        title={title}
        attributes={attributes}
        setAttributes={setAttributes}
        removeBlock={removeBlock}
      />
    </div>
  );
}

// Keep compose with withSelect for injecting post title prop
export default compose([
  withSelect((select) => {
    return {
      title: select("core/editor").getEditedPostAttribute("title"),
    };
  }),
])(Edit);
