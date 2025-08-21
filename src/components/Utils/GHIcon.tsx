type Props = {
	name: string;
	className?: string;
	folder?: string;
	onClick?: () => void;
	style?: any;
};

export const GHIcon = (props: Props) => {
	const {
		name,
		folder = "general",
		onClick,
		className = "icon",
		style,
	} = props;

	const src = `icons/${folder}/${name}`;

	return (
		<img
			src={src}
			className={className}
			alt={name}
			onClick={onClick}
			style={style}
			title={name}
		/>
	);
};
