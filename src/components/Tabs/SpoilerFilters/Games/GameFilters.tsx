import { Form, Icon, Popup, Segment } from "semantic-ui-react";
import { GameFilterCheckbox } from "./GameFilterCheckbox";
import { GameHelp, HelpProps } from "./GameHelp";
import { useRecoilValue } from "recoil";
import { gameTypeState } from "../../../../State";
import { useGetGame } from "../../../../games";

const GameFilterList = (props: HelpProps) => {
  const { label, gameList } = props;
  if (!gameList.length) {
    return null;
  }
  return <Form.Group inline>
    <label>{`${label}:`}</label>
    <div style={{ margin: "5px 8px" }}>
      <Popup
        closeOnDocumentClick
        hideOnScroll
        trigger={<Icon name={"question circle"} className={"blue"} />}
        header={`${label}`}
        content={<GameHelp {...props} />}
      />
    </div>
    {gameList.map((gameType) => {
      return (
        <GameFilterCheckbox
          key={gameType}
          gameType={gameType}
        />
      );
    })}
  </Form.Group>
}

export const GameFilters = () => {
  const currentGameType = useRecoilValue(gameTypeState);
  const game = useGetGame(currentGameType);

  return (
    <Segment>
      <GameFilterList label="Games" gameList={game.gameFilters} />
      <GameFilterList label="Solo Scenarios" gameList={game.soloScenarioFilters} />
      <GameFilterList label="Expansions" gameList={game.expansionFilters} />

    </Segment>
  );
};
