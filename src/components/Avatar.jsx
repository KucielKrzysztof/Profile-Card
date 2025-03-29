import me from "../assets/me.png";
function Avatar() {
	return (
		<div className="avatarContainer">
			<img className="avatar" src={me} />
		</div>
	);
}
export default Avatar;
