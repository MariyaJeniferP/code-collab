// Start coding...
#include <stdio.h>
#include <stdlib.h>

// Function to print a pyramid pattern
void printPyramid(int rows) {
    for (int i = 1; i <= rows; i++) {
        // Print spaces
        for (int space = 1; space <= rows - i; space++) {
            printf(" ");
        }
        // Print stars
        for (int star = 1; star <= (2 * i - 1); star++) {
            printf("*");
        }
        printf("\n");
    }
}

int main() {
    int rows;

    printf("Enter the number of rows for the pyramid: ");
    if (scanf("%d", &rows) != 1) {
        printf("Invalid input. Please enter an integer.\n");
        return 1;
    }

    if (rows <= 0) {
        printf("Number of rows must be a positive integer.\n");
        return 1;
    }

    printPyramid(rows);

    return 0;
}

