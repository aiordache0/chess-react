import "../styles/Tile.css";

interface Props {
  number: number;
  image?: string;
}

const Tile = ({ number, image }: Props): JSX.Element => {
  return (
    <>
      {number % 2 ? (
        <div className="tile white-tile">
          {image && (
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="chess-piece"
            ></div>
          )}
        </div>
      ) : (
        <div className="tile black-tile">
          {image && (
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="chess-piece"
            ></div>
          )}
        </div>
      )}
    </>
  );
};

export default Tile;
