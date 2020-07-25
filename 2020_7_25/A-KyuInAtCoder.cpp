#include <iostream>
using namespace std;

int main(){
    int a, b;
    std::cin >> a;
    if (400 <= a && a < 600){
        b = 8;
    } else if (600 <= a && a < 800){
        b = 7;
    } else if (800 <= a && a < 1000){
        b = 6;
    } else if (1000 <= a && a < 1200){
        b = 5;
    } else if (1200 <= a && a < 1400){
        b = 4;
    } else if (1400 <= a && a < 1600){
        b = 3;
    } else if (1600 <= a && a < 1800){
        b = 2;
    } else if (1800 <= a && a < 2000){
        b = 1;
    };
    std::cout << b << std::endl;
}