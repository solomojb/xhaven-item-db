import { createState } from "./CommonState";
import { ClassesInUse } from "./Types";

export const classToDeleteState = createState<ClassesInUse | undefined>(
	"classToDelete",
	undefined
);
export const confirmSpecialUnlockOpenState = createState<string | undefined>(
	"ConfirmSpecialUnlockOpen",
	undefined
);
