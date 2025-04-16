import { useState } from "react";
import { GloomhavenItem } from "../../../../../State/Types";
import { GHIcon } from "../../../../Utils";
import { getItemIdString } from "../../../../../helpers";
import { ItemManagementContainer } from "../ItemManagement/ItemManagementContainer";

import "./itemCard.scss";
import { ItemCardImage } from "./ItemCardImage";

type Props = {
	item: GloomhavenItem;
};

const ItemId = (props: Props) => {
	const { item } = props;
	const id = getItemIdString(item);
	return <div className="item-card-id"> {id} </div>;
};

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
