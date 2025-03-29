import { useEffect, useState } from "react";
import { Button, Form, Modal, Segment } from "semantic-ui-react";
import { ClassesInUse, ItemsOwnedBy } from "../../../../State/Types";
import { ClassList } from "../../SpoilerFilters/Party/ClassList";
import { useRecoilValue } from "recoil";
import {
	discountState,
} from "../../../../State";
import { ItemCost } from "./Table/ItemCost";
import { ItemCardImage } from "./Grid/ItemCardImage";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

const PurchaseItem = () => {
	const { classesInUse, itemsOwnedBy, setItemsOwnedBy, selectedItem, setSelectedItem } = useXHavenDB();
	const [owners, setOwners] = useState<ClassesInUse[]>([]);
	const discount = useRecoilValue(discountState);

	useEffect(() => {
		if (!selectedItem || !itemsOwnedBy) {
			return;
		}
		setOwners(itemsOwnedBy[selectedItem.id] || []);
	}, [selectedItem, itemsOwnedBy]);

	const onClose = () => {
		setSelectedItem(undefined);
	};

	const onApply = () => {
		if (selectedItem) {
			const newItemsOwnedBy: ItemsOwnedBy = Object.assign(
				{},
				itemsOwnedBy
			);
			if (owners) {
				newItemsOwnedBy[selectedItem.id] = owners;
			}
			setItemsOwnedBy(newItemsOwnedBy);
		}
		onClose();
	};

	const toggleOwnership = (className: ClassesInUse) => {
		if (!owners || !selectedItem) {
			return;
		}
		const value = Object.assign([], owners);
		if (value.includes(className)) {
			value.splice(value.indexOf(className), 1);
		} else if (owners.length < selectedItem.count) {
			value.push(className);
		}
		setOwners(value);
	};

	const isItemEnabled = (key: ClassesInUse) => {
		if (!selectedItem || !owners) {
			return false;
		}
		if (owners.includes(key)) {
			return true;
		}
		return owners.length < selectedItem.count;
	};

	if (!selectedItem) {
		return null;
	}

	const { name, cost, count } = selectedItem;

	let classes = classesInUse;
	if (selectedItem.lockToClasses) {
		const classesCount = selectedItem.lockToClasses.filter((c) =>
			classesInUse.includes(c)
		).length;
		if (classesCount) {
			classes = [...selectedItem.lockToClasses];
		}
	}

	return (
		<Modal
			size="tiny"
			open={true}
			onClose={onClose}
			className="purchase-dialog"
		// style={{ width: "100%" }}
		>
			<Modal.Header>Change Owners</Modal.Header>
			<Modal.Content>
				<div className="purchase-content">
					<Form style={{ width: "50%" }}>
						<Form.Group inline>
							<label>Name:</label> {name}
						</Form.Group>
						{(cost ?? 0) > 0 && <Form.Group inline>
							<label>Cost:</label>{" "}
							<ItemCost item={selectedItem} showDiscount={discount > 0} hideDivider={true} />
						</Form.Group>
						}
						<Form.Group inline>
							<label>Items Available:</label>{" "}
							{`${count - owners.length} of ${count}`}
						</Form.Group>
						<Segment>
							<ClassList
								classes={classes}
								label="Party Members:"
								onClick={toggleOwnership}
								isEnabled={(className: ClassesInUse) =>
									isItemEnabled(className)
								}
								isUsed={(className: ClassesInUse) =>
									owners ? owners.includes(className) : false
								}
							/>
						</Segment>
					</Form>
					<Form style={{ width: "50%" }}>
						<ItemCardImage item={selectedItem} />
					</Form>
				</div>
			</Modal.Content>
			<Modal.Actions>
				<Button negative content="Close" onClick={onClose} />
				<Button
					positive
					icon="checkmark"
					labelPosition="right"
					content="Modify"
					onClick={onApply}
				/>
			</Modal.Actions>
		</Modal>
	);
};

export default PurchaseItem;
