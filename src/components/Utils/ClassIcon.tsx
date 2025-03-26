import { Image } from "semantic-ui-react";
import {
	ClassesInUse,
} from "../../State/Types";
type Props = {
	name: ClassesInUse | undefined;
	className?: string;
	onClick?: (name: ClassesInUse) => void;
};


export const getClassIcon = (name: string) => {
	return `classes/${name}.png`;
};

export const ClassIcon = (props: Props) => {
	const { name, className = "soloClass", onClick } = props;
	if (!name) {
		return null;
	}
	const classPath = getClassIcon(name);
	return (
		<Image
			key={name}
			src={classPath}
			className={className}
			onClick={() => onClick && onClick(name)}
			alt={name}
		/>
	);
};
