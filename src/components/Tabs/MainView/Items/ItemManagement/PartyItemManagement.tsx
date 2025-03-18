import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRemovePlayerUtils } from "../../../../../hooks/useRemovePlayer";
import {
	classesInUseState,
	itemManagementTypeState,
	itemsOwnedByState,
	lockSpoilerPanelState,
	selectedItemState,
} from "../../../../../State";
import {
	ClassesInUse,
	GloomhavenItem,
	ItemManagementType,
} from "../../../../../State/Types";
import { ClassIcon, GHIcon } from "../../../../Utils";

import "./partyItemManagement.scss";

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
	const lockSpoilerPanel = useRecoilValue(lockSpoilerPanelState);

	const { item, owner } = props;
	let classNames = `ownerButton`;
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
	const classesInUse = useRecoilValue(classesInUseState);
	const itemsOwnedBy = useRecoilValue(itemsOwnedByState);
	const itemManagementType = useRecoilValue(itemManagementTypeState);
	const { item } = props;

	if (itemManagementType !== ItemManagementType.Party) {
		return null;
	}

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
	let buttonData: OwnerProps[] = owners.map((owner, index) => ({
		owner,
		item,
	}));
	buttonData = buttonData.concat(
		[...Array(addButtonsToShow).keys()].map((index) => ({
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
