import { Button } from "semantic-ui-react";
import { AllGames } from "../../../../games/GameType";
import {
	SpecialUnlockTypes,
} from "../../../../State";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

type Props = {
	specialUnlockType: SpecialUnlockTypes;
	gameType: AllGames;
	text: string;
};

export const SpecialUnlocksButton = (props: Props) => {
	const { specialUnlockType, gameType, text } = props;
	const { specialUnlocks, setConfirmSpecialUnlockOpen, includeGames } = useXHavenDB();
	const specialUnlocked = specialUnlocks.includes(specialUnlockType);
	if (specialUnlocked || !includeGames.includes(gameType)) {
		return null;
	}

	return (
		<Button onClick={() => setConfirmSpecialUnlockOpen(specialUnlockType)}>
			{text}
		</Button>
	);
};
