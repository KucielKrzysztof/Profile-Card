import Skill from "./Skill";
import htmlLogo from "../assets/htmlanddcss.png";
import reactLogo from "../assets/react.svg";
import bootstrapLogo from "../assets/bootstrap-5-logo.png";
import jsLogo from "../assets/js.png";
import githubLogo from "../assets/github.png";
import expressLogo from "../assets/expressjs.png";

function SkillList() {
	return (
		<div>
			<ul className="skill-list">
				<Skill skillName={"HTML + CSS"} logo={htmlLogo} bg="orange" />
				<Skill skillName={"Bootstrap"} logo={bootstrapLogo} bg="#ac74ff" />
				<Skill skillName={"JavaScript"} logo={jsLogo} bg="#b2ac10" />
				<Skill skillName={"Git + GitHub"} logo={githubLogo} bg="#9dadc7" />
				<Skill skillName={"React"} logo={reactLogo} bg="#0168d6" />
				<Skill skillName={"ExpressJS"} logo={expressLogo} bg="#90c53f" />
			</ul>
		</div>
	);
}

export default SkillList;
