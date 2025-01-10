/*
문제
X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.

교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

입력
입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.

출력
출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// Solution 클래스명은 직접 해결하여 푼 문제가 아닌, 답안입니다. 직접 해결한 문제는 Practice로 시작합니다.
public class Solution5597 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 입력 받을 배열 선언
        boolean[] submitted = new boolean[31]; // 1~30번 학생 번호를 사용하므로 크기는 31

        // 입력 처리 (28번 반복)
        for (int i = 0; i < 28; i++) {
            int studentNumber = Integer.parseInt(br.readLine().trim());
            submitted[studentNumber] = true; // 제출된 학생 번호를 true로 표시
        }

        // 제출하지 않은 학생 번호 찾기
        for (int i = 1; i <= 30; i++) {
            if (!submitted[i]) { // 제출되지 않은 번호 확인
                System.out.println(i);
            }
        }
    }
}
