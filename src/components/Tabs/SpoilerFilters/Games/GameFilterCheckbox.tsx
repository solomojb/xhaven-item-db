import { useRecoilValue } from "recoil";
import { Form } from "semantic-ui-react";
import { GameInfo } from "../../../../games/GameInfo";
import { AllGames } from "../../../../games/GameType";
import { useRemovePlayerUtils } from "../../../../hooks/useRemovePlayer";
import {
  gameTypeState,
} from "../../../../State";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

type Props = {
  allGameType: AllGames;
} & GameInfo;

export const GameFilterCheckbox = (props: Props) => {
  const { getClassesToRemove, getRemovingItemCount } = useRemovePlayerUtils();
  const { allGameType, title, gamesToFilterOn } = props;
  const { includeGames, setIncludeGames, setRemovingGame } = useXHavenDB();
  const gameType = useRecoilValue(gameTypeState);

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

  if (gamesToFilterOn && gamesToFilterOn.includes(gameType)) {
    return null;
  }
  return (
    <Form.Checkbox
      key={allGameType}
      label={title}
      checked={includeGames.includes(allGameType)}
      onChange={() => toggleItemFilter(allGameType)}
    />
  );
};
