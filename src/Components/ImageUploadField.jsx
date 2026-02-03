import React from "react";
import PageActionButton from "./Controls/PageActionButton";
import UploadBars from "./UploadBars";

const ImageUploadField = ({
  id,
  label,
  buttonText,
  uploading,
  preview,
  onFileSelect, // ✅ renamed
  shape = "square",
}) => {
  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (typeof onFileSelect !== "function") {
      console.error("❌ onFileSelect must be a function!", onFileSelect);
      return;
    }

    onFileSelect(file);

    // ✅ allow selecting same file again
    e.target.value = "";
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="font-medium text-sm">{label}</span>

      <input
        id={id}
        type="file"
        accept="image/*"
        hidden
        onChange={handleInputChange}
      />

      <PageActionButton
        text={uploading ? "Uploading..." : buttonText}
        type="secondary"
        disabled={uploading}
        className="w-[170px]"
        onAction={() => document.getElementById(id)?.click()}
      />

      <UploadBars visible={uploading} />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className={
            shape === "circle"
              ? "w-[120px] h-[120px] rounded-full object-cover border self-center"
              : "h-[150px] rounded-lg object-cover border w-full"
          }
        />
      )}
    </div>
  );
};

export default ImageUploadField;
