export const navigationF = (
  startCell,
  endCell,
  borderX,
  borderY,
  wallCells
) => {
  const selectedCells = [];
  if (startCell.x - 1 > 0) {
    selectedCells.push(startCell?.x - 1);
  } else if (startCell.x + 1 < borderX) {
    selectedCells.push(startCell?.x + 1);
  }
  console.log(selectedCells);
};
// Make this function select all sells surounding best cell
