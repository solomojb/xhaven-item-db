import { Message } from "semantic-ui-react";
import useItems from "../../../../hooks/useItems";
import { ItemViewDisplayType } from "../../../../State/Types";
import { ItemGrid } from "./Grid";
import { ItemTable } from "./Table";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

export const ItemsView = () => {
	const items = useItems();
	const { displayAs } = useXHavenDB();
	return (
		<>
			{items.length === 0 && (
				<Message negative>
					No items found matching your filters and/or search criteria
				</Message>
			)}

			{displayAs === ItemViewDisplayType.List ? (
				<ItemTable items={items} />
			) : (
				<ItemGrid items={items} />
			)}
		</>
	);
};
