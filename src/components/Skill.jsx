function Skill(props) {
	return (
		<li className="skill" style={{ backgroundColor: props.bg }}>
			{props.skillName} <img src={props.logo} height="30" />
		</li>
	);
}
export default Skill;
