import { Form } from "semantic-ui-react";
import {
	ItemViewDisplayType,
} from "../../../../../State";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

export const Discount = () => {
	const { discount, displayAs } = useXHavenDB();

	if (displayAs !== ItemViewDisplayType.Images) {
		return null;
	}
	return (
		<Form.Group inline>
			<label>Store Discount:</label>
			{`${discount}g`}
		</Form.Group>
	);
};
