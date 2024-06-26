import "./ProfilePanel.css";

interface newPropsVal {
  profileData: any;
}

export default function ProfilePanel(props: newPropsVal) {
  return (
    <div className="profileview">
      <h1>Welcome! {props.profileData[0].author.name}</h1>
      <img
        className="user-image"
        src={props.profileData[0].author.avatarUrl}
        alt={props.profileData[0].author.name}
      />
    </div>
  );
}
