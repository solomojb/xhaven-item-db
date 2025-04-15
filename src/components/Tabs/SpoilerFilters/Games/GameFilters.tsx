import { Form, Icon, Popup, Segment } from "semantic-ui-react";
import { GameFilterCheckbox } from "./GameFilterCheckbox";
import { GameHelp } from "./GameHelp";
import { useRecoilValue } from "recoil";
import { gameTypeState } from "../../../../State";
import { useGetGame } from "../../../../games";

export const GameFilters = () => {
  const currentGameType = useRecoilValue(gameTypeState);
  const game = useGetGame(currentGameType);

  return (
    <Segment>
      <Form.Group inline>
        <label>Games:</label>
        <div style={{ margin: "5px 8px" }}>
          <Popup
            closeOnDocumentClick
            hideOnScroll
            trigger={<Icon name={"question circle"} className={"blue"} />}
            header={"Game Types"}
            content={<GameHelp />}
          />
        </div>
        {game.gameFilters.map((gameType) => {
          return (
            <GameFilterCheckbox
              key={gameType}
              gameType={gameType}
            />
          );
        })}
      </Form.Group>
    </Segment>
  );
};
