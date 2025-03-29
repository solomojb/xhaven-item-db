import { useSetRecoilState } from "recoil";
import { useRemovePlayerUtils } from "../../../../../hooks/useRemovePlayer";
import {
	getLockSpoilerPanelState,
	selectedItemState,
} from "../../../../../State";
import {
	ClassesInUse,
	GloomhavenItem,
} from "../../../../../State/Types";
import { ClassIcon, GHIcon } from "../../../../Utils";

import "./partyItemManagement.scss";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

type Props = {
	item: GloomhavenItem;
};

type OwnerProps = {
	item: GloomhavenItem;
	owner?: ClassesInUse;
};

const OwnerButton = (props: OwnerProps) => {
	const { removeItemsFromOwner } = useRemovePlayerUtils();
	const setSelectedItem = useSetRecoilState(selectedItemState);
	const lockSpoilerPanel = getLockSpoilerPanelState();

	const { item, owner } = props;
	const classNames = `ownerButton`;
	const onClick = () => {
		if (owner) {
			removeItemsFromOwner(item.id, owner);
		} else {
			setSelectedItem(item);
		}
	};

	return (
		<button
			className={classNames}
			onClick={onClick}
			disabled={lockSpoilerPanel}
		>
			{owner ? (
				<>
					<GHIcon className="deleteIcon" name="circle_x.png" />
					<ClassIcon className="ownerIcon" name={owner} />
				</>
			) : (
				<div className="addIcon">+</div>
			)}
		</button>
	);
};

export const PartyItemManagement = (props: Props) => {
	const { classesInUse, itemsOwnedBy } = useXHavenDB();

	const { item } = props;

	if (item.lockToClasses) {
		const classesCount = item.lockToClasses.filter((c) =>
			classesInUse.includes(c)
		).length;
		if (classesCount === 0) {
			return null;
		}
	}
	const owners = (itemsOwnedBy && itemsOwnedBy[item.id]) || [];
	const ownersLength = owners ? owners.length : 0;
	const classesAvailable = ownersLength
		? classesInUse.filter((c) => !owners.includes(c))
		: classesInUse;

	const addButtonsToShow =
		classesAvailable.length > 0
			? Math.min(item.count - ownersLength, 4)
			: 0;
	let buttonData: OwnerProps[] = owners.map((owner) => ({
		owner,
		item,
	}));
	buttonData = buttonData.concat(
		[...Array(addButtonsToShow).keys()].map(() => ({
			item,
			owner: undefined,
		}))
	);
	return (
		<div className="party-management-container">
			{buttonData.map((data, i) => (
				<OwnerButton key={`${item.id}-${i}`} {...data} />
			))}
		</div>
	);
};
