import { Checkbox } from "semantic-ui-react";
import {
	getLockSpoilerPanelState,
} from "../../../../../State";
import { GloomhavenItem } from "../../../../../State/Types";

import "./simpleItemManagement.scss";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

type Props = {
	item: GloomhavenItem;
};

export const SimpleItemManagement = (props: Props) => {
	const { itemsInUseCount, setItemsInUseCount } = useXHavenDB();
	const lockSpoilerPanel = getLockSpoilerPanelState();
	const { item } = props;

	const count = itemsInUseCount[item.id] || 0;

	const onClick = (checked: boolean) => {
		const value = Object.assign({}, itemsInUseCount);
		value[item.id] = (value[item.id] || 0) + (checked ? -1 : 1);
		if (value[item.id] === 0) {
			delete value[item.id];
		}
		setItemsInUseCount(value);
	};

	return (
		<div className="simple-management-container">
			{[...Array(item.count).keys()].map((index) => (
				<Checkbox
					key={`${item.id}-${index}`}
					// className={classNames}
					checked={index < count}
					onClick={() => onClick(index < count)}
					disabled={lockSpoilerPanel}
				/>
			))}
		</div>
	);
};
