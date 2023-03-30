import { useRef } from "react";
import pieces from "../../utils/utils";
import Tile from "../Tile/Tile";
import "../styles/Chessboard.css";

const Chessboard = (): JSX.Element => {
  const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  let board: JSX.Element[] = [];
  let activePiece: HTMLElement | undefined = undefined;

  const chessBoardRef = useRef<HTMLDivElement>(null);

  function grabPiece(e: React.MouseEvent) {
    const elem = e.target as HTMLElement;
    if (elem.classList.contains("chess-piece")) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;

      elem.style.position = "absolute";
      elem.style.left = `${x}px`;
      elem.style.top = `${y}px`;
      activePiece = elem;
    }
  }
  function movePiece(e: React.MouseEvent) {
    const chessboard = chessBoardRef.current;
    if (activePiece && chessboard) {
      const minX = chessBoardRef.current.offsetLeft - 25;
      const minY = chessBoardRef.current.offsetTop - 25;

      const maxX =
        chessBoardRef.current.offsetLeft +
        chessBoardRef.current.clientWidth -
        85;
      const maxY =
        chessBoardRef.current.offsetTop +
        chessBoardRef.current.clientHeight -
        85;

      const x = e.clientX - 50;
      const y = e.clientY - 50;

      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }

  function dropPiece(e: React.MouseEvent) {
    if (activePiece) {
      activePiece = undefined;
    }
  }

  for (let j = yAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < xAxis.length; i++) {
      let image = undefined;

      pieces.forEach((piece) => {
        if (piece.xPosition === i && piece.yPosition === j) {
          image = piece.image;
        }
      });

      board.push(<Tile key={`${i},${j}`} image={image} number={(i + j) % 2} />);
    }
  }

  return (
    <div
      ref={chessBoardRef}
      onMouseDown={(e) => {
        grabPiece(e);
      }}
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard"
    >
      {board}
    </div>
  );
};

export default Chessboard;
