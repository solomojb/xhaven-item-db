import { Form } from "semantic-ui-react";
import { gameInfo } from "../../../../games/GameInfo";
import { AllGames } from "../../../../games/GameType";
import { useRemovePlayerUtils } from "../../../../hooks/useRemovePlayer";
import { ClassesInUse } from "../../../../State/Types";
import { ClassList } from "../Party/ClassList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

type Props = {
	gameType: AllGames;
};

export const SoloClassFilter = (props: Props) => {
	const { gameType } = props;
	const { soloGameType, title } = gameInfo[gameType];
	const { soloClass, setSoloClass, includeGames } = useXHavenDB();
	const { getClassesForGame } = useRemovePlayerUtils();
	if (!includeGames.includes(gameType)) {
		return null;
	}
	const classes = getClassesForGame(soloGameType || gameType);
	const soloGameTitle = soloGameType
		? gameInfo[soloGameType].title
		: undefined;

	const toggleClassFilter = (key: ClassesInUse) => {
		const value = Object.assign([], soloClass);
		if (value.includes(key)) {
			value.splice(value.indexOf(key), 1);
		} else {
			value.push(key);
		}
		setSoloClass(value);
	};
	return (
		<Form.Field>
			<Form.Group inline className={"inline-break"}>
				<ClassList
					isUsed={(className: ClassesInUse) =>
						soloClass.includes(className)
					}
					label={soloGameTitle || title}
					classes={classes}
					onClick={toggleClassFilter}
				/>
			</Form.Group>
		</Form.Field>
	);
};
