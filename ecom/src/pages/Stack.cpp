#include<iostream>
#include<queue>
using namespace std;

int main(){
   queue<int>q;

   q.push(10);
   q.push(20);
   q.push(30);
   q.push(40);
   q.push(50);

   q.pop();
   q.pop();
  

  cout<<"element at front of queue : "<<q.front()<<endl;
  cout<<"element at end of queue : "<<q.back()<<endl;

  for(int i = q.front(); i<=q.size();i++){
    cout<<q.front()<<" ";
    q.pop();
  }

}