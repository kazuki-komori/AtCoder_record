#include <iostream>
#include <vector>
using namespace std;

int main(){
    long long N, K;
    std::cin >> N >> K;
    std::vector<int> A(N);
    for (int i = 0; i < N; ++i) {
        std::cin >> A[i];
    }
    for (int j = K; j < N; ++j) {
        if (A[j-K] < A[j]){
            std::cout << "Yes" << std::endl;
            continue;
        }
        std::cout << "No" << std::endl;
    }
    return 0;
}