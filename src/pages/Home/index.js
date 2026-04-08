import "./styles.scss";
import { useState } from "react";
import Header from "../../components/Header";
import background from "../../assets/img/background.png";
import Profile from "../../components/Profile";
import Search from "../../components/Search";
import RepositoriesList from "../../components/RepositoriesList";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    if (!user) {
      alert("Digite um usuário antes de buscar!");
      return;
    }

    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.login) {
      setRepos(null);

      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`,
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }

      console.log(newRepos, repos);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} alt="logo git hub." className="background" />
        <div className="info">
          <Search
            value={user}
            onChange={(event) => setUser(event.target.value)}
            onClick={handleGetData}
          />

          {currentUser?.login ? <Profile user={currentUser} /> : null}

          <div className="repositories">
            {repos?.length ? (
              <>
              <h3>Repositórios</h3>
                {repos.map((repo) => (
                  <RepositoriesList repo={repo} key={repo.id} />
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
