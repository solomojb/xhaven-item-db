import { Form } from "semantic-ui-react";
import { ClassesInUse } from "../../../../State/Types";
import { ClassList } from "../Party/ClassList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

export const MPSoloClassFilter = () => {
	const { soloClass, toggleSoloClass, selectedMercenaryPacks } = useXHavenDB();

	if (!selectedMercenaryPacks.length) {
		return null;
	}
	return (
		<Form.Field>
			<Form.Group inline className={"inline-break"}>
				<ClassList
					isUsed={(className: ClassesInUse) =>
						soloClass.includes(className)
					}
					label={"Mercenary Packs"}
					classes={selectedMercenaryPacks}
					onClick={toggleSoloClass}
				/>
			</Form.Group>
		</Form.Field>
	);
};
