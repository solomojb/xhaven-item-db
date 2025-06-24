import { Form } from "semantic-ui-react";
import {
	gameTypeState,
	ItemViewDisplayType,
} from "../../../../../State";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";
import { useRecoilValue } from "recoil";
import { useGetGame } from "../../../../../games";

export const Discount = () => {
	const { discount, displayAs } = useXHavenDB();
	const gameType = useRecoilValue(gameTypeState);
	const game = useGetGame(gameType);

	if (!game.usesDiscount || displayAs !== ItemViewDisplayType.Images) {
		return null;
	}
	return (
		<Form.Group inline>
			<label>Store Discount:</label>
			{`${discount}g`}
		</Form.Group>
	);
};
