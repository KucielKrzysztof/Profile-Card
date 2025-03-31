function Skill({ skillObj }) {
	const { name, logo, bg } = skillObj;
	return (
		<li className="skill" style={{ backgroundColor: bg }}>
			{name} <img src={logo} height="30" />
		</li>
	);
}
export default Skill;
