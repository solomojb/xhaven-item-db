import { useGetGame } from "../../../../../games";
import { SpriteImageDimensions } from "../../../../../games/GameClass";
import { AllGames } from "../../../../../games/GameType";
import { GloomhavenItem, SpriteImageData } from "../../../../../State";

const getItemDimensions = ({ imagesAcross, imagesDown }: SpriteImageDimensions) => {
    const width = 531;
    const height = 815;
    const bgWidth = width * imagesAcross;
    const bgHeight = height * imagesDown;
    return { width, height, bgWidth, bgHeight };
}

const getItemPath = (gameType: AllGames, imgFileNumber: number, backside?: boolean) => {
    return `items/${gameType}/${imgFileNumber}${backside ? 'b' : ''}.png`;
}

type Props = {
    item: GloomhavenItem;
    showBackside?: boolean
};

const CARD_SCALE = 0.40;

interface Props2 extends SpriteImageData {
    showBackside?: boolean
    gameType: AllGames;
}

export const SpriteItemCardImage = (props: Props2) => {
    const { gameType, imgFileNumber, showBackside, imageNumber } = props;
    const game = useGetGame(gameType);
    const itemImageData = game.getImageDimensions(imgFileNumber);
    const { imagesAcross } = itemImageData;
    const path = getItemPath(gameType, imgFileNumber, showBackside);
    const { width, height, bgWidth, bgHeight } = getItemDimensions(itemImageData);
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

    const xPos = (width * CARD_SCALE * 531 / width) * (imageNumber !== undefined ? imageNumber % imagesAcross : 0);
    const yPos = (height * CARD_SCALE * 815 / height) * (imageNumber !== undefined ? Math.floor(imageNumber / imagesAcross) : 0);

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


export const ItemCardImage = (props: Props) => {
    const { item, ...rest } = props
    return <SpriteItemCardImage {...item} {...rest} />
}
