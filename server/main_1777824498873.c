// Start coding...
#include <stdio.h>

int main() {
    int n, i, choice;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    do {
        printf("\n===== MENU =====\n");
        printf("1. Display Array\n");
        printf("2. Find Maximum\n");
        printf("3. Find Minimum\n");
        printf("4. Reverse Array\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            printf("Array elements: ");
            for (i = 0; i < n; i++) {
                printf("%d ", arr[i]);
            }
            printf("\n");
        }

        else if (choice == 2) {
            int max = arr[0];
            for (i = 1; i < n; i++) {
                if (arr[i] > max)
                    max = arr[i];
            }
            printf("Maximum element = %d\n", max);
        }

        else if (choice == 3) {
            int min = arr[0];
            for (i = 1; i < n; i++) {
                if (arr[i] < min)
                    min = arr[i];
            }
            printf("Minimum element = %d\n", min);
        }

        else if (choice == 4) {
            printf("Reversed array: ");
            for (i = n - 1; i >= 0; i--) {
                printf("%d ", arr[i]);
            }
            printf("\n");
        }

        else if (choice != 5) {
            printf("Invalid choice!\n");
        }

    } while (choice != 5);

    printf("Program ended.\n");

    return 0;
}