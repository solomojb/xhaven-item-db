import { Form, Input } from "semantic-ui-react";
import { useFilter } from "../../../../Providers/FilterProvider";

export const FindItemSearchBar = () => {
	const { searchStr, setSearchStr } = useFilter();
	return (
		<Form.Group inline>
			<label>Find Item:</label>
			<Input
				value={searchStr}
				onChange={(e) => {
					setSearchStr(e.target.value);
				}}
				icon={{
					name: "close",
					link: true,
					onClick: () => setSearchStr(""),
				}}
				placeholder={"Search..."}
			/>
		</Form.Group>
	);
};
