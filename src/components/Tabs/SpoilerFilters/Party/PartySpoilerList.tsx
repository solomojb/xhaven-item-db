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
	const { classesInUse, includeGames, getClassesForGame, toggleClassFilter } = useXHavenDB();
	const { title } = useGetGame(type);

	const isGameIncluded = () => {
		return gameType === type || includeGames.includes(type);
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
