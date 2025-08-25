// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void insertionSort(vector<int> &arr, int n)
{
    for (int i = 1; i < n; i++)
    {
        int temp = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > temp)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

int main()
{
    vector<int> arr = {10, 5, 2, 9, 15, 6};
    insertionSort(arr, arr.size());

    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << " ";
    }
}