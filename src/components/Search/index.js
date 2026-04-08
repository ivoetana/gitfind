import "./styles.scss";

const Search = ({value, onChange, onClick}) => {
  return (
    <div className="search">
      <input name="usuario" placeholder="@username" value={value || ""} onChange={onChange}/>
      <button onClick={onClick} type="button">Buscar</button>
    </div>
  );
};

export default Search;
