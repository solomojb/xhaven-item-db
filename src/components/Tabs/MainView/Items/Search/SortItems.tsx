import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { Button, Form, Icon } from "semantic-ui-react";
import { useSetSorting } from "../../../../../hooks/useSetSorting";
import {
	displayItemAsState,
	ItemViewDisplayType,
	SortDirection,
	SortProperty,
} from "../../../../../State";
import { useFilter } from "../../../../Providers/FilterProvider";

export const SortItems = () => {
	const setSorting = useSetSorting();

	const displayAs = useRecoilValue(displayItemAsState);
	const { sortDirection, setSortDirection, sortProperty } = useFilter();

	const toggleSortDirection = useCallback(() => {
		setSortDirection(
			sortDirection === SortDirection.ascending
				? SortDirection.descending
				: SortDirection.ascending
		);
	}, [setSortDirection, sortDirection]);

	if (displayAs !== ItemViewDisplayType.Images) {
		return null;
	}

	return (
		<>
			<Form.Group inline>
				<label>Sort By:</label>
				<Form.Select
					value={sortProperty}
					options={[
						{ value: "id", text: "Item Number" },
						{ value: "slot", text: "Equipment Slot" },
						{ value: "cost", text: "Cost" },
						{ value: "name", text: "Name" },
						{ value: "source", text: "Source" },
						{ value: "use", text: "Use" },
					]}
					onChange={(_obj, e) => setSorting(e.value as SortProperty)}
				/>
				<Button
					icon={
						<Icon
							name={
								sortDirection === SortDirection.ascending
									? `angle up`
									: `angle down`
							}
						/>
					}
					checked={sortDirection === SortDirection.ascending}
					onClick={() => toggleSortDirection()}
				/>
			</Form.Group>
		</>
	);
};
