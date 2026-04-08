import "./styles.scss";

const Profile = ({user}) => {

  return (
    <>
      <div className="profile">
        <img
          src={user.avatar_url}
          alt="foto perfil"
        />
        <div className="texts">
          <div>
            <h3>{user.name || "## Nome não informado ##"}</h3>
            <span>@{user.login}</span>
          </div>
          <p>{user.bio}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Profile;
