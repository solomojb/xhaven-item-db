import { JSXElementConstructor } from "react";
import { GloomhavenItem, ItemManagementType } from "../../../../../State/Types";
import { NoItemManagement } from "./NoItemManagement";
import { PartyItemManagement } from "./PartyItemManagement";
import { SimpleItemManagement } from "./SimpleItemManagement";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

type Props = {
	item: GloomhavenItem;
};

const managementComponents: Record<ItemManagementType, JSXElementConstructor<Props>> = {
	[ItemManagementType.None]: NoItemManagement,
	[ItemManagementType.Simple]: SimpleItemManagement,
	[ItemManagementType.Party]: PartyItemManagement
}


export const ItemManagementContainer = (props: Props) => {
	const { itemManagementType } = useXHavenDB();

	const Component = managementComponents[itemManagementType];
	return <Component {...props} />
};
