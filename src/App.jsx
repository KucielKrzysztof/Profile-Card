import "./styles/style.css";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";

function App() {
	return (
		<>
			{/* <h1>Vite + React</h1>
			<div className="card">
				<button></button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
			<div className="card">
				<Avatar />
				<div className="data">
					<Intro />
					<SkillList />
				</div>
			</div>
		</>
	);
}

export default App;
