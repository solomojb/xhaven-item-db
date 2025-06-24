import { Form } from "semantic-ui-react";
import { ToggleAllButton, GameFilter } from "./Items";
import { PartySpoiler, ConfirmClassDelete } from "./Party";
import { GameFilters, ConfirmGameRemoval } from "./Games";
import { Secrets } from "./Secrets/Secrets";
import { FilterProvider } from "../../Providers/FilterProvider";

const SpoilerFilters = () => {
	return (
		<Form>
			<FilterProvider>
				<ToggleAllButton />
				<GameFilters />
				<Secrets />
				<PartySpoiler />
				<GameFilter />
				<ConfirmGameRemoval />
				<ConfirmClassDelete />
			</FilterProvider>
		</Form>
	);
};

export default SpoilerFilters;
