import { Form } from "semantic-ui-react";
import { AllGames } from "../../../../games/GameType";
import { BuildingLevel } from "../../../../State";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

export interface BuildingLevelFilterProps {
	label: string;
	lockedLabel?: string;
	startBuildingLevel?: number;
	endBuildingLevel?: number;
	buildingKey: keyof BuildingLevel;
	gameType?: AllGames;
}

export const BuildingLevelFilter = (props: BuildingLevelFilterProps) => {
	const {
		label,
		lockedLabel,
		startBuildingLevel,
		endBuildingLevel,
		buildingKey,
		gameType,
	} = props;
	const { includeGames, buildingLevel, setBuildingLevel } = useXHavenDB();
	if (gameType && !includeGames.includes(gameType)) {
		return null;
	}

	const currentLevel = buildingLevel[buildingKey];
	const min = startBuildingLevel || 1;
	let max = endBuildingLevel || min;
	if (currentLevel < 0) {
		max = 0;
	}

	const levels = [];
	for (let i = min; i <= max; i++) {
		levels.push(i);
	}

	if (lockedLabel) {
		levels.unshift(...[-1, 0]);
	}

	const buttons = levels.map((i) => {
		let radioLabel = i.toString();
		if (i === -1) {
			radioLabel = currentLevel === -1 ? "Locked" : "Lock";
		} else if (i === 0) {
			radioLabel = currentLevel === -1 ? "Unlock" : "Unbuilt";
		}
		return (
			<Form.Radio
				key={i}
				label={radioLabel}
				checked={currentLevel === i}
				onChange={() => {
					const copy = { ...buildingLevel, [buildingKey]: i };
					setBuildingLevel(copy);
				}
				}
			/>
		);
	});

	return (
		<Form.Group inline>
			<label>{currentLevel < 0 ? lockedLabel : label}:</label>
			{buttons}
		</Form.Group>
	);
};
