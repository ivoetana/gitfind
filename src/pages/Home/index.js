import "./styles.scss";
import Header from "../../components/Header";
import background from "../../assets/img/background.png";
import Profile from "../../components/Profile";
import Search from "../../components/Search";
import RepositoriesList from "../../components/RepositoriesList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} alt="logo git hub." className="background" />
        <div className="info">
          <Search />
          <Profile />
          <div className="repositories">
            <h3>Repositórios</h3>
            <RepositoriesList title={"Caclculadora Dio"} description={"Calculadora desenvolvida na aula de react."} />
            <RepositoriesList title={"Lista Repositórios GitHub Dio"} description={"Lista de repositóprios GitHub desenvolvida na aula de react."} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
