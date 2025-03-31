import { Button, Form } from "semantic-ui-react";
import {
	ItemManagementType,
} from "../../../../../State";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";
import { useFilter } from "../../../../Providers/FilterProvider";

type Props = {
	available: boolean;
	text: string;
};

const FilterAvailabilityButton = (props: Props) => {
	const { availableOnly, setAvailableOnly } = useFilter();
	const { available, text } = props;
	return (
		<Button
			color={availableOnly === available ? "blue" : undefined}
			onClick={() => {
				setAvailableOnly(available);
			}}
		>
			{text}
		</Button>
	);
};

export const FilterAvailability = () => {
	const { itemManagementType } = useXHavenDB();
	if (itemManagementType === ItemManagementType.None) {
		return null;
	}
	return (
		<Form.Group inline>
			<label>Availability</label>
			<Button.Group>
				<FilterAvailabilityButton available={true} text={"Available"} />
				<Button.Or />
				<FilterAvailabilityButton available={false} text={"All"} />
			</Button.Group>
		</Form.Group>
	);
};
