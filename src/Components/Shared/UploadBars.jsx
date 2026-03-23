const UploadBars = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="upload-bars">
      <span />
      <span />
      <span />
    </div>
  );
};

export default UploadBars;
