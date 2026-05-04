// Start coding...
#include <iostream> // For input/output
using namespace std;

int main() {
    double num1, num2;

    if (!(cin >> num1)) { // Validate input
        cout << "Invalid input. Please enter a number.\n";
        return 1;
    }

    if (!(cin >> num2)) { // Validate input
        cout << "Invalid input. Please enter a number.\n";
        return 1;
    }

    double sum = num1 + num2; // Calculate sum
    cout << "Sum = " << sum << endl;

    return 0; // Successful execution
}
