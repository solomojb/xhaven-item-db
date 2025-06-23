import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MainView from "./components/Tabs/MainView/MainView";
import { GameSelector } from "./components/GameSelector";
import { RecoilRoot } from "recoil";
import { FirebaseProvider } from "./components/Firebase";

const App = () => {
	return (
		<RecoilRoot>
			<FirebaseProvider>
				<Container>
					<GameSelector />
					<MainView />
				</Container>
			</FirebaseProvider>
		</RecoilRoot>
	);
};

export default App;
