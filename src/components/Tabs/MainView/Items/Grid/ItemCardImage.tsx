import { useGetGame } from "../../../../../games";
import { ItemImageData } from "../../../../../games/GameClass";
import { GloomhavenItem } from "../../../../../State";

const getItemPath = (item: GloomhavenItem, { imagesAcross, imagesDown }: ItemImageData, backside?: boolean) => {
    const { gameType, imgFileNumber } = item;
    const width = 531;
    const height = 815;
    const bgWidth = width * imagesAcross;
    const bgHeight = height * imagesDown;
    let path = '';

    if (imgFileNumber && backside) {
        path = `items/${gameType}/${imgFileNumber}b.png`;
    }
    else {
        path = `items/${gameType}/${imgFileNumber}.png`;
    }
    return { path, width, height, bgWidth, bgHeight };
}

type Props = {
    item: GloomhavenItem;
    showBackside?: boolean
};

const CARD_SCALE = 0.40;

export const ItemCardImage = (props: Props) => {
    const { item, showBackside } = props;
    const game = useGetGame(item.gameType);
    const itemImageData = game.getImageDimensions(item);
    const { imagesAcross } = itemImageData;
    const { path, width, height, bgWidth, bgHeight } = getItemPath(item, itemImageData, showBackside);
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
