import { Form, Segment } from "semantic-ui-react";
import {
	RenderAs,
	FilterSlots,
	FilterResources,
	FindItemSearchBar,
	FilterClass,
	FilterAvailability,
	SortItems,
	Discount,
} from ".";

const SearchOptions = () => {
	return (
		<Form className="search-options">
			<Segment>
				<RenderAs />
				<FilterSlots />
				<FilterResources />
				<FindItemSearchBar />
				<FilterClass />
				<FilterAvailability />
				<SortItems />
				<Discount />
			</Segment>
		</Form>
	);
};

export default SearchOptions;
