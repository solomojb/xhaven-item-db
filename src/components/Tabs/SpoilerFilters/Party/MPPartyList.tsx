import { ClassesInUse } from "../../../../State/Types";
import { ClassList } from "./ClassList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

export const MPPartyList = () => {
    const { classesInUse, selectedMercenaryPacks, toggleClassFilter } = useXHavenDB();

    if (!selectedMercenaryPacks.length) {
        return null;
    }
    return (
        <ClassList
            classes={selectedMercenaryPacks}
            label={'Mercanary Packs'}
            onClick={toggleClassFilter}
            isUsed={(className: ClassesInUse) =>
                classesInUse.includes(className)
            }
        />
    );
};
