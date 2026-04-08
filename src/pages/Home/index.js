import "./styles.scss";
import Header from "../../components/Header";
import background from '../../assets/img/background.png';
import Profile from "../../components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} alt="logo git hub." className="background"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <Profile/>
        </div>
      </div>
    </div>
  );
}

export default App;
