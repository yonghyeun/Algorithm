#include <iostream>
#include <deque>
#include <vector>

using namespace std;

void rotateDeque(deque<int>& dq, int steps, int direction) {
    if (dq.size() <= 1) return;
    if (direction == 1) {
        while (steps--) {
            dq.push_back(dq.front());
            dq.pop_front();
        }
    } else {
        while (steps--) {
            dq.push_front(dq.back());
            dq.pop_back();
        }
    }
}

int main() {
    int N, K, M;
    cin >> N >> K >> M;

    deque<int> dq;
    for (int i = 1; i <= N; ++i) {
        dq.push_back(i);
    }

    vector<int> result;
    int flag = 1;
    int cnt = 0;

    while (!dq.empty()) {
        if (cnt == M) {
            flag *= -1;
            cnt = 0;
        }
        rotateDeque(dq, K - 1, flag);
        if (flag == 1) {
            result.push_back(dq.front());
            dq.pop_front();
        } else {
            result.push_back(dq.back());
            dq.pop_back();
        }
        cnt += 1;
    }

    for (int i = 0; i < result.size(); ++i) {
        cout << result[i] << '\n';
    }

    return 0;
}