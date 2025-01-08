import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Practice11382 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 입력 받기 (공백 포함)
        String input = br.readLine().trim();

        // 입력된 문자열을 공백 기준으로 분리
        String[] numbers = input.split(" ");

        // 숫자 합산
        long result = 0; // 큰 숫자를 처리할 수 있도록 long 사용
        for (String number : numbers) {
            result += Long.parseLong(number);
        }

        // 출력
        System.out.println(result);
    }
}
