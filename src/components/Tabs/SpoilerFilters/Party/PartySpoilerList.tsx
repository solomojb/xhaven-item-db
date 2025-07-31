import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { AllGames } from "../../../../games/GameType";
import {
	gameTypeState,
} from "../../../../State";
import { ClassesInUse } from "../../../../State/Types";
import { ClassList } from "./ClassList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
import { useGetGame } from "../../../../games";
type Props = {
	type: AllGames;
};

export const PartySpoilerList = (props: Props) => {
	const { type } = props;
	const gameType = useRecoilValue(gameTypeState);
	const { classesInUse, setClassesInUse, setClassToDelete, includeGames, getClassesForGame } = useXHavenDB();
	const { title } = useGetGame(type);

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
