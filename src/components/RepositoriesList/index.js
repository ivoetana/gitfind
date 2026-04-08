import "./styles.scss";

const RepositoriesList = ({ title, description }) => {
  return (
    <div className="item-list">
      <h4>{title}</h4>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default RepositoriesList;
