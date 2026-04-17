#include <iostream>
using namespace std;
int main()
{
int i=1;
while(i<=19){
    if(i==13){
        i++;
        continue;
    }
    cout<<i<<" ";
    i++;
}
}
