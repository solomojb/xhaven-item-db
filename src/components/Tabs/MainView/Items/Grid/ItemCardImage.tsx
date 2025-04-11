import { Expansions, GameType } from "../../../../../games";
import { GloomhavenItem } from "../../../../../State";

const getItemPath = (item: GloomhavenItem, _backside?: boolean) => {
    const { gameType, imgFileNumber } = item;
    let imagesAcross = 0;
    let imagesDown = 0;


    switch (gameType) {
        case GameType.Gloomhaven:
            switch (item.imgFileNumber) {
                case 1:
                    imagesAcross = 9;
                    imagesDown = 4;
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    imagesAcross = 6;
                    imagesDown = 3;
                    break;
                case 10:
                    imagesAcross = 6;
                    imagesDown = 5;
                    break;
                case 11:
                    imagesAcross = 8;
                    imagesDown = 6;
                    break;
            }
            break;
        case Expansions.GHSoloScenarios:
            imagesAcross = 5;
            imagesDown = 4;
            break;
        case Expansions.ForgottenCircles:
            imagesAcross = 6;
            imagesDown = 4;
            break;
        case Expansions.CrimsonScales:
            if (imgFileNumber === 3) {
                imagesAcross = 6;
                imagesDown = 2;
            } else if (imgFileNumber === 4) {
                imagesAcross = 9;
                imagesDown = 2;
            }
            else {
                imagesAcross = 10;
                imagesDown = 5;
            }
            break;
        case Expansions.CrimsonScalesAddon:
            imagesAcross = 5;
            imagesDown = 4;
            break;
        case Expansions.TrailOfAshes:
            imagesAcross = 10;
            imagesDown = 4;
            break;
    }
    const width = 531;
    const height = 815;
    const bgWidth = width * imagesAcross;
    const bgHeight = height * imagesDown;
    let path = '';

    if (imgFileNumber) {
        path = `items/${gameType}/${imgFileNumber}.png`;
    }
    return { path, width, height, imagesAcross, bgWidth, bgHeight };
}

type Props = {
    item: GloomhavenItem;
    showBackside?: boolean
};

const CARD_SCALE = 0.40;

export const ItemCardImage = (props: Props) => {
    const { item, showBackside } = props;
    const { path, width, height, imagesAcross, bgWidth, bgHeight } = getItemPath(item, showBackside);
    const styles = {
        container: {
            width: width * CARD_SCALE * 531 / width, /* width of individual sprite */
            height: height * CARD_SCALE * 815 / height, /* height of individual sprite */
            overflow: 'hidden', // Prevents other sprites from being visible
            // borderRadius: `8px`,
        },
        sprite: {
            backgroundImage: `url(${path})`,
            backgroundRepeat: 'no-repeat',
            display: 'block',
            width: '100%',
            height: '100%',
            // backgroundSize: `${width}px ${height}px`,
            backgroundSize: `${bgWidth * CARD_SCALE * 531 / width}px ${bgHeight * CARD_SCALE * 815 / height}px`,
            // width: width * CARD_SCALE,
            // height: height * CARD_SCALE,
        },
        spritePosition: (x: number, y: number) => ({
            backgroundPosition: `-${x}px -${y}px`, // Shifts the background to show the desired sprite
        }),
    };

    const xPos = (width * CARD_SCALE * 531 / width) * (item.imageNumber !== undefined ? item.imageNumber % imagesAcross : 0);
    const yPos = (height * CARD_SCALE * 815 / height) * (item.imageNumber !== undefined ? Math.floor(item.imageNumber / imagesAcross) : 0);

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.sprite,
                    ...styles.spritePosition(xPos, yPos),
                }}
            />
        </div>
    );

}
