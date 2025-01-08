import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Skeleton {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 입력 받기
        int input = Integer.parseInt(br.readLine().trim());

        // 로직 처리
        int result = input;

        // 출력
        System.out.println(result);
    }
}
