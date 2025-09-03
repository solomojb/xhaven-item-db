import { Form } from "semantic-ui-react";
import { AllGames } from "../../../../games/GameType";
import { ClassesInUse } from "../../../../State/Types";
import { ClassList } from "../Party/ClassList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
import { useGetGames } from "../../../../games";
import { useMemo } from "react";

type Props = {
	gameType: AllGames;
	lockSoloScenarioItems: boolean;
};

export const SoloClassFilter = (props: Props) => {
	const { gameType, lockSoloScenarioItems } = props;
	const { soloClass, toggleSoloClass, includeGames, getClassesForGame, classesInUse } = useXHavenDB();
	const games = useGetGames();
	const { title, soloGameType } = games[gameType];
	const gameTypeToUse = soloGameType || gameType;
	const classes = useMemo(() => {
		const classes = getClassesForGame(gameTypeToUse);
		if (lockSoloScenarioItems) {
			return classes.filter(c => classesInUse.includes(c));
		}
		return classes;
	}, [getClassesForGame, gameTypeToUse, lockSoloScenarioItems, classesInUse]);
	if (!classes.length || !includeGames.includes(gameType)) {
		return null;
	}

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
