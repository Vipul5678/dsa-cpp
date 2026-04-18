#include <iostream>
using namespace std;
int main() 
{
    int arr[5];
    cout<<" Enter 5 digits :"<<" ";
    for(int i=0; i<5; i++){
        cin>>arr[i];
    }
    cout<<"output:"<<" ";
    for(int i=0; i<5; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}