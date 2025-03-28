import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Form } from "semantic-ui-react";
import { slotsState } from "../../../../../State";
import { GloomhavenItemSlot } from "../../../../../State/Types";
import { GHIcon } from "../../../../Utils";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

export const FilterSlots = () => {
	const [slots, setSlotsState] = useRecoilState(slotsState);
	const { filterSlots } = useXHavenDB();
	const setFilterSlot = useCallback(
		(slot?: GloomhavenItemSlot) => {
			if (!slot) {
				setSlotsState([]);
				return;
			}
			const value = Object.assign([], slots);
			const index = value.indexOf(slot);
			if (index !== -1) {
				value.splice(index, 1);
			} else {
				value.push(slot);
			}
			setSlotsState(value);
		},
		[slots, setSlotsState]
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
