interface Piece {
  image: string;
  xPosition: number;
  yPosition: number;
}
const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({
    image: "./assets/images/pawn_b.png",
    xPosition: i,
    yPosition: 6,
  });
}
for (let i = 0; i < 8; i++) {
  pieces.push({
    image: "./assets/images/pawn_w.png",
    xPosition: i,
    yPosition: 1,
  });
}

for (let p = 0; p < 2; p++) {
  const type = p ? "b" : "w";
  const y = p ? 7 : 0;

  pieces.push({
    image: `./assets/images/rook_${type}.png`,
    xPosition: 7,
    yPosition: y,
  });

  pieces.push({
    image: `./assets/images/rook_${type}.png`,
    xPosition: 0,
    yPosition: y,
  });
  pieces.push({
    image: `./assets/images/knight_${type}.png`,
    xPosition: 1,
    yPosition: y,
  });
  pieces.push({
    image: `./assets/images/knight_${type}.png`,
    xPosition: 6,
    yPosition: y,
  });

  pieces.push({
    image: `./assets/images/bishop_${type}.png`,
    xPosition: 2,
    yPosition: y,
  });
  pieces.push({
    image: `./assets/images/bishop_${type}.png`,
    xPosition: 5,
    yPosition: y,
  });

  pieces.push({
    image: `./assets/images/queen_${type}.png`,
    xPosition: 3,
    yPosition: y,
  });

  pieces.push({
    image: `./assets/images/king_${type}.png`,
    xPosition: 4,
    yPosition: y,
  });
}

export default pieces;
