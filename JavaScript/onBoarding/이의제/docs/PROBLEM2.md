## 구현사항

- O(n^3)
- hasSuccessiveChar 함수로 연속된 문자열 여부 확인
    - 확인시 (i, i + j) 위치해 있는 sub문자열 확인
    - (0, i - 1) + (i + j + 1, length - 1) concat연산
    - i 인덱스 부터 다시 서치

## 예외사항

- 없음