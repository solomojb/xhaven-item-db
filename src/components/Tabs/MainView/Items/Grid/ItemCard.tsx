import { useEffect, useRef, useState } from "react";
import { GloomhavenItem } from "../../../../../State/Types";
import { GHIcon } from "../../../../Utils";
import { getItemIdString } from "../../../../../helpers";
import { ItemManagementContainer } from "../ItemManagement/ItemManagementContainer";

import "./itemCard.scss";
import { ItemCardImage } from "./ItemCardImage";

type Props = {
	item: GloomhavenItem;
};

const ItemId = (props: { item: GloomhavenItem }) => {
	const { item } = props;
	const id = getItemIdString(item);
	return <div className="item-card-id"> {id} </div>;
};

const ItemCardContainer = (props: Props) => {
	const { item } = props;

	const [showBackside, setShowBackside] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			// Loop through entries to handle multiple observed elements if needed
			for (const entry of entries) {
				if (entry.target === ref.current) {
					setDimensions({
						width: entry.contentRect.width,
						height: entry.contentRect.height,
					});
				}
			}
		});

		// Start observing the div element
		if (ref.current) {
			observer.observe(ref.current);
		}

		// Clean up the observer when the component unmounts
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []); // Empty dependency array ensures it runs only once on mount


	return (
		<div className="item-card-container" ref={ref}>
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
			<ItemCardImage {...props} imageWidth={dimensions.width} />
			<div className="item-card-container-footer">
				<ItemManagementContainer item={item} />
			</div>
		</div>
	);
};

export default ItemCardContainer;
