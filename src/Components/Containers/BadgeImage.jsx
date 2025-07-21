const BadgeImage = ({ image }) => {
  return (
    <div
      className="badge-image"
      style={{ background: `url('${image}')` }}
    ></div>
  );
};
export default BadgeImage;
