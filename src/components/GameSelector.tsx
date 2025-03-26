import { useRecoilState } from "recoil";
import { DropdownProps, Form } from "semantic-ui-react";
import { gamePulldownOptions, GameType } from "../games";
import { gameTypeState } from "../State";

export const GameSelector = () => {
	const [gameType, setGameType] = useRecoilState(gameTypeState);

	return (
		<Form.Select
			value={gameType}
			options={gamePulldownOptions}
			onChange={(_obj: any, e: DropdownProps) => {
				setGameType(e.value as GameType);
			}}
		/>
	);
};
