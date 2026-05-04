// Start coding...
#include <iostream> // For input/output
using namespace std;

int main() {
    double num1, num2;

    cout << "Enter first number: ";
    if (!(cin >> num1)) { // Validate input
        cout << "Invalid input. Please enter a number.\n";
        return 1;
    }

    cout << "Enter second number: ";
    if (!(cin >> num2)) { // Validate input
        cout << "Invalid input. Please enter a number.\n";
        return 1;
    }

    double sum = num1 + num2; // Calculate sum
    cout << "Sum = " << sum << endl;

    return 0; // Successful execution
}
