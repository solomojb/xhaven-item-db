import { useRecoilState } from "recoil";
import { Form } from "semantic-ui-react";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

type Props = {
	scenarios: number[];
};

export const ScenarioCompletedFilter = (props: Props) => {
	const { scenarios } = props;
	const { scenarioCompleted, setScenarioCompleted } = useXHavenDB();

	const toggleScenarioCompleted = (key: number) => {
		const value = Object.assign([], scenarioCompleted);
		if (value.includes(key)) {
			value.splice(value.indexOf(key), 1);
		} else {
			value.push(key);
		}
		setScenarioCompleted(value);
	};

	if (scenarios.length === 0) {
		return null;
	}

	return (
		<Form.Group inline className={"inline-break"}>
			<label>Scenarios Completed:</label>
			{scenarios.map((id) => {
				return (
					<Form.Checkbox
						key={id}
						label={"#" + (id + "").padStart(3, "0")}
						checked={scenarioCompleted.includes(id)}
						onChange={() => toggleScenarioCompleted(id)}
					/>
				);
			})}
		</Form.Group>
	);
};
