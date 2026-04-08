import "./styles.scss";

const RepositoriesList = ({ repo }) => {
  return (
    <div className="item-list">
      <h4>{repo.name}</h4>
      <p>{repo.description}</p>
      <hr />
    </div>
  );
};

export default RepositoriesList;
