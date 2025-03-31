import { Button, Form, Icon } from "semantic-ui-react";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

export const ToggleAllButton = () => {
	const { all, setAll } = useXHavenDB();

	return (
		<Form.Group inline>
			<label>Respecting Spoiler Settings:</label>
			<Button
				color={all ? "red" : "blue"}
				onClick={() => {
					setAll(!all);
				}}
			>
				{all ? (
					<>
						<Icon name={"eye"} /> disabled
					</>
				) : (
					<>
						<Icon name={"eye slash"} /> enabled
					</>
				)}
			</Button>
		</Form.Group>
	);
};
