import { SortDirection, SortProperty } from "../State/Types";
import { useFilter } from "../components/Providers/FilterProvider";

export const useSetSorting = () => {
	const { sortDirection, setSortDirection, sortProperty, setSortProperty } = useFilter();

	const setSorting = (newProperty: SortProperty) => {
		let newDirection: SortDirection;
		if (sortProperty === newProperty) {
			newDirection =
				sortDirection === SortDirection.ascending
					? SortDirection.descending
					: SortDirection.ascending;
		} else {
			newDirection = SortDirection.ascending;
		}

		setSortProperty(newProperty);
		setSortDirection(newDirection);
	};
	return setSorting;
};
