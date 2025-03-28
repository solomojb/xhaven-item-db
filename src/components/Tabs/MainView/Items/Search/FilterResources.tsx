import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Form } from "semantic-ui-react";
import { resourcesState } from "../../../../../State";
import { ResourceTypes } from "../../../../../State/Types";
import { GHIcon } from "../../../../Utils";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

export const FilterResources = () => {
	const [resources, setResourcesState] = useRecoilState(resourcesState);
	const { resources: gameResource } = useXHavenDB();

	const setFilterResource = useCallback(
		(resource?: ResourceTypes) => {
			if (!resource) {
				setResourcesState([]);
				return;
			}
			const value = Object.assign([], resources);
			const index = value.indexOf(resource);
			if (index !== -1) {
				value.splice(index, 1);
			} else {
				value.push(resource);
			}
			setResourcesState(value);
		},
		[resources, setResourcesState]
	);

	if (!gameResource || gameResource.length === 0) {
		return null;
	}
	return (
		<Form.Group inline>
			<label>Resource:</label>
			<Form.Radio
				label={"all"}
				checked={resources.length === 0}
				onChange={() => setFilterResource(undefined)}
			/>
			{gameResource &&
				gameResource.map((resource) => (
					<Form.Checkbox
						key={resource}
						label={
							<GHIcon
								name={`${resource}.png`}
								folder="resources"
							/>
						}
						checked={resources.includes(resource as ResourceTypes)}
						onChange={() =>
							setFilterResource(resource as ResourceTypes)
						}
						alt={resource}
					/>
				))}
		</Form.Group>
	);
};
