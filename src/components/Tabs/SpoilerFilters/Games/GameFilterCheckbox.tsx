import { Form } from "semantic-ui-react";
import { AllGames } from "../../../../games/GameType";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
import { useGetGame } from "../../../../games";

type Props = {
  gameType: AllGames;
}

export const GameFilterCheckbox = (props: Props) => {
  const { gameType } = props;
  const { title } = useGetGame(gameType);
  const { getClassesToRemove, getRemovingItemCount, includeGames, setIncludeGames, setRemovingGame } = useXHavenDB();

  const showConfirmation = (removingGame: AllGames) => {
    return (
      getClassesToRemove(removingGame).length ||
      getRemovingItemCount(removingGame) > 0
    );
  };

  const toggleItemFilter = (key: AllGames) => {
    const value = Object.assign([], includeGames);
    if (value.includes(key)) {
      if (showConfirmation(key)) {
        setRemovingGame(key);
      } else {
        value.splice(value.indexOf(key), 1);
      }
    } else {
      value.push(key);
    }
    setIncludeGames(value);
  };

  return (
    <Form.Checkbox
      key={gameType}
      label={title}
      checked={includeGames.includes(gameType)}
      onChange={() => toggleItemFilter(gameType)}
    />
  );
};
