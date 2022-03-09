const costCalculate = (cell, endCell, startCell) => {
  console.log("CALCUlATING");
  const XgCost = Math.abs(cell.x - startCell.x);
  const YgCost = Math.abs(cell.y - startCell.y);
  const gCost = Math.abs(YgCost - XgCost) * 10 + Math.min(YgCost, XgCost) * 14;

  const XhCost = Math.abs(cell.x - endCell.x);
  const YhCost = Math.abs(cell.y - endCell.y);
  const hCost = Math.abs(YhCost - XhCost) * 10 + Math.min(YhCost, XhCost) * 14;

  const fCost = gCost + hCost;

  return { gCost, hCost, fCost };
};

const selectBestCell = (selectedCells) => {
  console.log(selectedCells);
  const bestCell = selectedCells.reduce((prev, current) => {
    console.log(prev.cost.fCost);
    return prev.cost.fCost < current.cost.fCost ? prev : current;
  });
  return bestCell;
};

export const navigationF = (
  startCell,
  endCell,
  borderX,
  borderY,
  wallCells
) => {
  const selectedCells = [];
  if (startCell.x - 1 >= 0) {
    const y = startCell.y;
    const x = startCell.x - 1;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  if (startCell.x + 1 <= borderX) {
    const y = startCell.y;
    const x = startCell.x + 1;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  if (startCell.y - 1 >= 0) {
    const y = startCell.y - 1;
    const x = startCell.x;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  if (startCell.y + 1 <= borderY) {
    const y = startCell.y + 1;
    const x = startCell.x;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  if (startCell.y - 1 >= 0 && startCell.x - 1 >= 0) {
    const y = startCell.y - 1;
    const x = startCell.x - 1;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  if (startCell.y - 1 >= 0 && startCell.x + 1 <= borderX) {
    const y = startCell.y - 1;
    const x = startCell.x + 1;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  if (startCell.y + 1 <= borderY && startCell.x - 1 >= 0) {
    const y = startCell.y + 1;
    const x = startCell.x - 1;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  if (startCell.y + 1 <= borderY && startCell.x + 1 <= borderX) {
    const y = startCell.y + 1;
    const x = startCell.x + 1;
    if (endCell.x === x && endCell.y === y) {
      console.log("END CELL FOUNDED!!");
      return;
    }
    if (!wallCells.some((cell) => cell.x === x && cell.y === y)) {
      const cost = costCalculate({ x, y }, endCell, startCell);
      selectedCells.push({ x, y, cost });
    }
  }
  const b = selectBestCell(selectedCells);
  console.log(b);
  return selectedCells;
};
