import { useRecoilValue } from "recoil";
import { Form, Segment } from "semantic-ui-react";
import { gameTypeState } from "../../../../State";
import { SoloClassFilter } from "./SoloClassFilter";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
import { useGetGames } from "../../../../games";
import { MPSoloClassFilter } from "./MPSoloClassFilter";

export const SoloClassFilterBlock = () => {
	const currentGameType = useRecoilValue(gameTypeState);
	const games = useGetGames();
	const { soloClassesToInclude, includeMercenaryPacksSoloItems } = games[currentGameType];
	const { includeGames } = useXHavenDB();
	const includeList =
		soloClassesToInclude &&
		soloClassesToInclude.filter((gameType) =>
			includeGames.includes(gameType)
		);
	if (!includeList || includeList.length === 0) {
		return null;
	}

	return (
		<Segment>
			<Form.Group inline>
				<label>Solo Class Items:</label>
			</Form.Group>
			{includeList.map((gameType) => (
				<SoloClassFilter
					key={`solo-class-filter-${gameType}`}
					gameType={gameType}
				/>
			))}
			{includeMercenaryPacksSoloItems && <MPSoloClassFilter />}
		</Segment>
	);
};
