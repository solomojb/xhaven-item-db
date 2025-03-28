import { Form } from "semantic-ui-react";
import { ClassesInUse, ItemManagementType } from "../../../../../State/Types";
import { ClassList } from "../../../SpoilerFilters/Party/ClassList";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

export const FilterClass = () => {
	const { itemManagementType, selectedClass, setSelectedClass } = useXHavenDB();
	const { classesInUse } = useXHavenDB();
	if (itemManagementType !== ItemManagementType.Party) {
		return null;
	}
	return (
		<Form.Group inline>
			<ClassList
				label={"Filter Owner:"}
				classes={classesInUse}
				onClick={(option: ClassesInUse) => {
					if (selectedClass === option) {
						setSelectedClass(undefined);
					} else {
						setSelectedClass(option);
					}
				}}
				isUsed={(options: ClassesInUse) => selectedClass === options}
			/>
		</Form.Group>
	);
};
