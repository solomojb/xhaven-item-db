import { Label } from "semantic-ui-react";
import { GloomhavenItem } from "../../../../../State/Types";

type Props = {
	item: GloomhavenItem;
};

export const NoItemManagement = (props: Props) => {
	const { item } = props;
	return (
		<Label className="no-item-management-count">{`Item count: ${item.count}`}</Label>
	);
};
