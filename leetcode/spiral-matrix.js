/**
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 */
const spiralMatrixc = (n) => {
    // Initialize an n x n matrix with 0s
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    // Define boundaries
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    // This will hold the current number to be inserted
    let current = 1;
    const max = n * n;

    while (current <= max) {
        // Fill from left to right on the top row
        for (let col = left; col <= right && current <= max; col++) {
            matrix[top][col] = current++;
        }
        top++; // Done with the top row

        // Fill from top to bottom on the right column
        for (let row = top; row <= bottom && current <= max; row++) {
            matrix[row][right] = current++;
        }
        right--; // Done with the right column

        // Fill from right to left on the bottom row
        for (let col = right; col >= left && current <= max; col--) {
            matrix[bottom][col] = current++;
        }
        bottom--; // Done with the bottom row

        // Fill from bottom to top on the left column
        for (let row = bottom; row >= top && current <= max; row--) {
            matrix[row][left] = current++;
        }
        left++; // Done with the left column
    };

    return matrix;
}

// Example usage:
console.log(generateSpiralMatrix(3));
/*
Output:
[
[1, 2, 3],
[8, 9, 4],
[7, 6, 5]
]
*/