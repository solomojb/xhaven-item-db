import ImportData from "./ImportData";
import { XHavenDBProvider } from "../../Providers/XHavenDBProvider";
import { MainViewTabs } from "./MainViewTabs";

const MainView = () => {
	return (
		<>
			<ImportData />
			<XHavenDBProvider>
				<MainViewTabs />
			</XHavenDBProvider>
			<em className={"pull-right ui text grey"}>
				Gloomhaven and all related properties, images and text are owned
				by{" "}
				<a
					href={"https://www.cephalofair.com/"}
					target={"_blank"}
					rel={"noopener noreferrer"}
				>
					Cephalofair Games
				</a>
				.
			</em>
		</>
	);
};

export default MainView;
