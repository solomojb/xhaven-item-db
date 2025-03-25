import React, { useMemo, useState } from "react";
import { GloomhavenItem, ItemManagementType } from "../../../../../State/Types";
import { Label } from "semantic-ui-react";
import { getItemPath } from "../../../../../games/GameData";
import { GHIcon } from "../../../../Utils";
import { getItemIdString } from "../../../../../helpers";
import { ItemManagementContainer } from "../ItemManagement/ItemManagementContainer";
import { NoItemManagement } from "../ItemManagement/NoItemManagement";

import "./itemCard.scss";

type Props = {
	item: GloomhavenItem;
};

const ItemId = (props: Props) => {
	const { item } = props;
	const id = getItemIdString(item);
	return <div className="item-card-id"> {id} </div>;
};

const CARD_SCALE = 0.5;

const ItemCardImage = (props: Props & { showBackside: boolean }) => {
	const { item, showBackside } = props;
	const styles = {
		container: {
			width: 409 * CARD_SCALE, /* width of individual sprite */
			height: 640 * CARD_SCALE, /* height of individual sprite */
			overflow: 'hidden', // Prevents other sprites from being visible
			borderRadius: `8px 8px 0px 0px`,
		},
		sprite: {
			backgroundImage: `url(${getItemPath(item, showBackside)
				})`,
			backgroundRepeat: 'no-repeat',
			display: 'block',
			backgroundSize: `${409 * 10 * CARD_SCALE}px ${640 * 7 * CARD_SCALE}px`,
			width: 409 * CARD_SCALE,
			height: 640 * CARD_SCALE,
		},
		spritePosition: (x: number, y: number) => ({
			backgroundPosition: `-${x}px -${y}px`, // Shifts the background to show the desired sprite
		}),
	};

	const xPos = (409 * CARD_SCALE) * (item.imageNumber !== undefined ? item.imageNumber % 10 : 0);
	const yPos = (640 * CARD_SCALE) * (item.imageNumber !== undefined ? Math.floor(item.imageNumber / 10) : 0);

	return (
		<div style={styles.container}>
			<div
				style={{
					...styles.sprite,
					...styles.spritePosition(xPos, yPos),
				}}
			/>
		</div>
	);

}



const ItemCardContainer = (props: Props) => {
	const { item } = props;

	const [showBackside, setShowBackside] = useState(false);

	return (
		<div className="item-card-container">
			<div className="item-card-container-header">
				<ItemId item={item} />
				{item.backDesc && (
					<GHIcon
						className="flip"
						name={
							showBackside
								? "flip_white.png"
								: "flip_back_white.png"
						}
						onClick={() =>
							setShowBackside((current) => !current)
						}
					/>
				)}
			</div>
			<ItemCardImage item={item} showBackside={showBackside} />
			<div className="item-card-container-footer">
				<ItemManagementContainer item={item} />
			</div>
		</div>
	);
};

export default ItemCardContainer;
