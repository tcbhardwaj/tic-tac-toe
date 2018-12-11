export const centerPoint = [
  { x: -100, y: 90 },
  { x: 0, y: 90 },
  { x: 100, y: 90 },

  { x: -100, y: 190 },
  { x: 0, y: 190 },
  { x: 100, y: 190 },

  { x: -100, y: 290 },
  { x: 0, y: 290 },
  { x: 100, y: 290 },
];

export const areas = [
  { startx: 3, starty: 3, endx: 103, endy: 103, id: 0 },
  { startx: 106, starty: 3, endx: 206, endy: 103, id: 1 },
  { startx: 209, starty: 3, endx: 309, endy: 103, id: 2 },

  { startx: 3, starty: 106, endx: 103, endy: 206, id: 3 },
  { startx: 106, starty: 106, endx: 206, endy: 206, id: 4 },
  { startx: 209, starty: 106, endx: 309, endy: 206, id: 5 },

  { startx: 3, starty: 209, endx: 103, endy: 309, id: 6 },
  { startx: 106, starty: 209, endx: 206, endy: 309, id: 7 },
  { startx: 209, starty: 209, endx: 309, endy: 309, id: 8 },
];

export const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
