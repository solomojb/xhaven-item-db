import SpoilerFilterItemList, { ItemRange } from "./SpoilerFilterItemList";
import { ScenarioCompletedFilter } from "./ScenarioCompletedFilter";
import { Segment } from "semantic-ui-react";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

const scenariosOfImportance = [2, 9, 15];
export const JOTLSpoilerFilter = () => {
	const { scenarioCompleted } = useXHavenDB();
	const ranges: ItemRange[] = [];
	if (!scenarioCompleted.includes(2)) {
		ranges.push({ range: [{ start: 1, end: 13 }] });
	}
	ranges.push({ range: [14] });
	if (!scenarioCompleted.includes(9)) {
		ranges.push({ range: [{ start: 15, end: 20 }] });
	}
	if (!scenarioCompleted.includes(15)) {
		ranges.push({ range: [{ start: 21, end: 26 }] });
	}
	ranges.push({ range: [{ start: 27, end: 36 }] });

	return (
		<Segment>
			<ScenarioCompletedFilter scenarios={scenariosOfImportance} />
			<Segment>
				<SpoilerFilterItemList ranges={ranges} title="Items" />
			</Segment>
		</Segment>
	);
};
