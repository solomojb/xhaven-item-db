import { Form } from "semantic-ui-react";
import { AllGames } from "../../../../games/GameType";
import { ClassesInUse } from "../../../../State/Types";
import { ClassList } from "../Party/ClassList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
import { useGetGames } from "../../../../games";

type Props = {
	gameType: AllGames;
};

export const SoloClassFilter = (props: Props) => {
	const { gameType } = props;
	const { soloClass, toggleSoloClass, includeGames, getClassesForGame } = useXHavenDB();
	const games = useGetGames();
	if (!includeGames.includes(gameType)) {
		return null;
	}
	const { title, soloGameType } = games[gameType];
	const gameTypeToUse = soloGameType || gameType;
	const classes = getClassesForGame(gameTypeToUse);

	return (
		<Form.Field>
			<Form.Group inline className={"inline-break"}>
				<ClassList
					isUsed={(className: ClassesInUse) =>
						soloClass.includes(className)
					}
					label={title}
					classes={classes}
					onClick={toggleSoloClass}
				/>
			</Form.Group>
		</Form.Field>
	);
};
