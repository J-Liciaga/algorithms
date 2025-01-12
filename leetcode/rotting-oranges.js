/**
 * You are given an `m x n` grid where each cell can have one of three values:
 * - 0 representing an empty cell,
 * - 1 representing a fressh orange, or
 * - 2 representing a rotten orange
 * 
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. 
 * 
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return - 1 
 */
var orangesRotting = function(grid) {
    if (!grid || grid.length === 0) return - 1;

    const rows = grid.length;
    const cols = grid[0].length;
    const queue = []; // queue to store rotten oranges in the form: [row, col, minute]

    let freshCount = 0;
    let minutes = 0;

    // 1. gather initial rotten oranges and count fresh ones
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c, 0]); // push rotten orange with time = 0
            else if (grid[r][c] === 1) freshCount++;
        };
    };

    // if there are no fresh oranges at the start, the time required is 0
    if (freshCount === 0) return 0;
    // directions for 4-directional adjacency (up, down, left, right)
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length > 0) {
        const [row, col, minute] = queue.shift();
        // check if all 4 directions
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            // if the adjancent cell is 
        }
    }
}

// Example usage:
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

console.log(orangesRotting(grid)); // Output: 4
