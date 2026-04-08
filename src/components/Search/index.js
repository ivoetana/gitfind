import "./styles.scss";

const Search = () => {
  return (
    <div className="search">
      <input name="usuario" placeholder="@username" />
      <button>Buscar</button>
    </div>
  );
};

export default Search;
