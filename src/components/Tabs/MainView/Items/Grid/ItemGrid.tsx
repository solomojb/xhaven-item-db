import { GloomhavenItem } from "../../../../../State/Types";
import ItemCard from "./ItemCard";

import "./itemGrid.scss";

type Props = {
	items: GloomhavenItem[];
};

export const ItemGrid = (props: Props) => {
	const { items } = props;
	return (
		<div className="item-grid">
			{items.map((item, index) => {
				return <ItemCard key={`${item.id}-${index}`} item={item} />;
			})}
		</div>
	);
};
