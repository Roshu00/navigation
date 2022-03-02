const fCostCalculate = (x, y, endCell, startCell) => {
  const gCost = "";
};

export const navigationF = (
  startCell,
  endCell,
  borderX,
  borderY,
  wallCells
) => {
  const selectedCells = [];
  if (startCell.x - 1 > 0) {
    const y = startCell.y;
    const x = startCell.x - 1;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  if (startCell.x + 1 < borderX) {
    const y = startCell.y;
    const x = startCell.x + 1;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  if (startCell.y - 1 > 0) {
    const y = startCell.y - 1;
    const x = startCell.x;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  if (startCell.y + 1 < borderY) {
    const y = startCell.y + 1;
    const x = startCell.x;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  if (startCell.y - 1 > 0 && startCell.x - 1 > 0) {
    const y = startCell.y - 1;
    const x = startCell.x - 1;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  if (startCell.y - 1 > 0 && startCell.x + 1 < borderX) {
    const y = startCell.y - 1;
    const x = startCell.x + 1;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  if (startCell.y + 1 < borderY && startCell.x - 1 > 0) {
    const y = startCell.y + 1;
    const x = startCell.x - 1;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  if (startCell.y + 1 < borderY && startCell.x + 1 < borderX) {
    const y = startCell.y + 1;
    const x = startCell.x + 1;
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      selectedCells.push({ x, y });
    }
  }
  return selectedCells;
};
