import { useCallback } from "react";
import { Form } from "semantic-ui-react";
import { GloomhavenItemSlot } from "../../../../../State/Types";
import { GHIcon } from "../../../../Utils";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";
import { useFilter } from "../../../../Providers/FilterProvider";

export const FilterSlots = () => {
	const { filterSlots } = useXHavenDB();
	const { slots, setSlots } = useFilter();
	const setFilterSlot = useCallback(
		(slot?: GloomhavenItemSlot) => {
			if (!slot) {
				setSlots([]);
				return;
			}
			const value = Object.assign([], slots);
			const index = value.indexOf(slot);
			if (index !== -1) {
				value.splice(index, 1);
			} else {
				value.push(slot);
			}
			setSlots(value);
		},
		[slots, setSlots]
	);
	return (
		<Form.Group inline>
			<label>Filter Slot:</label>
			<Form.Radio
				label={"all"}
				checked={slots.length === 0}
				onChange={() => setFilterSlot(undefined)}
			/>
			{filterSlots.map((itemSlot) => (
				<Form.Checkbox
					key={itemSlot}
					label={
						<GHIcon
							name={`${itemSlot}.png`}
							folder={"equipment_slot"}
						/>
					}
					checked={slots.includes(itemSlot)}
					onChange={() => setFilterSlot(itemSlot)}
					alt={itemSlot}
				/>
			))}
		</Form.Group>
	);
};
