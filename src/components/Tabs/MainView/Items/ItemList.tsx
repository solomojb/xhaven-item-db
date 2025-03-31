import { ItemManagementType } from "../../../../State/Types";
import SearchOptions from "./Search/SearchOptions";
import { Message, Icon } from "semantic-ui-react";
import PurchaseItem from "./PurchaseItem";
import { useRecoilValue } from "recoil";
import {
	allState,
	dataMismatchState,
} from "../../../../State";
import { ItemsView } from "./ItemsView";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
import { FilterProvider } from "../../../Providers/FilterProvider";

export const ItemList = () => {
	const all = useRecoilValue(allState);
	const { itemManagementType } = useXHavenDB();
	const dataMismatch = useRecoilValue(dataMismatchState);

	return (
		<FilterProvider>
			{dataMismatch && (
				<Message negative>
					<Message.Header>
						<Icon name="exclamation triangle" />
						Data out of sync
					</Message.Header>
					Spoiler configuration differs from cloud storage. Remember
					to export your data.
				</Message>
			)}
			<SearchOptions />
			{all && (
				<Message negative>
					<Message.Header>
						<Icon name="exclamation triangle" />
						Spoiler alert
					</Message.Header>
					You are currently viewing all possible items.
				</Message>
			)}
			<ItemsView />

			{itemManagementType === ItemManagementType.Party && (
				<PurchaseItem />
			)}
		</FilterProvider>
	);
};
