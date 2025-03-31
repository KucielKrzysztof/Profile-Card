import Skill from "./Skill";
import skills from "../assets/list";

function SkillList() {
	return (
		<div>
			<ul className="skill-list">
				{skills.map((skill) => (
					<Skill key={skill.name} skillObj={skill} />
				))}
			</ul>
		</div>
	);
}

export default SkillList;
