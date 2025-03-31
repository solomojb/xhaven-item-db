import { Form } from "semantic-ui-react";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

export const ProsperityFilter = () => {
	const { prosperity, setProsperity } = useXHavenDB();
	return (
		<Form.Group inline>
			<label>Prosperity:</label>
			{[...Array(9).keys()].map((index) => {
				const nextProsperity = index + 1;
				return (
					<Form.Radio
						key={index}
						label={nextProsperity}
						checked={prosperity === nextProsperity}
						onChange={() => setProsperity(nextProsperity)}
					/>
				);
			})}
		</Form.Group>
	);
};
