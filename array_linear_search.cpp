#include <iostream>
using namespace std; 
int main()
{
    int arr[5] = {11,22,33,44,55};
    int key = 44;
    for(int i=0; i<5; i++){
        if(arr[i] == key ){
            cout<<"Found at index : "<<i;
        }
    }
}