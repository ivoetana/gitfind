import "./styles.scss";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/48837857?v=4"
          alt="foto perfil"
        />
        <div className="texts">
          <div>
            <h3>Ivo Emanuel Tana</h3>
            <span>@ivoetana</span>
          </div>
          <p>Full Stack Developer web and mobile, passionate to javascriptand all your ecosystem.</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Profile;
