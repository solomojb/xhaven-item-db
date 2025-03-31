import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { gameInfo } from "../../../../games/GameInfo";
import { AllGames } from "../../../../games/GameType";
import { useRemovePlayerUtils } from "../../../../hooks/useRemovePlayer";
import {
	gameTypeState,
} from "../../../../State";
import { ClassesInUse } from "../../../../State/Types";
import { ClassList } from "./ClassList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
type Props = {
	type: AllGames;
};

export const PartySpoilerList = (props: Props) => {
	const { type } = props;
	const gameType = useRecoilValue(gameTypeState);
	const { classesInUse, setClassesInUse, setClassToDelete, includeGames } = useXHavenDB();
	const { getClassesForGame } = useRemovePlayerUtils();

	const isGameIncluded = () => {
		return gameType === type || includeGames.includes(type);
	};

	const toggleClassFilter = (key: ClassesInUse) => {
		if (classesInUse.includes(key)) {
			setClassToDelete(key);
		} else {
			const newClassesInUse = Object.assign([], classesInUse);
			newClassesInUse.push(key);
			setClassesInUse(newClassesInUse);
		}
	};

	const classes = useMemo(
		() => getClassesForGame(type),
		[getClassesForGame, type]
	);

	if (!isGameIncluded()) {
		return null;
	}
	const { title } = gameInfo[type];

	return (
		<ClassList
			classes={classes}
			label={title}
			onClick={toggleClassFilter}
			isUsed={(className: ClassesInUse) =>
				classesInUse.includes(className)
			}
		/>
	);
};
