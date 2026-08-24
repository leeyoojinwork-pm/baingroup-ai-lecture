# 바인그룹 3차수 실습자료 사용 순서

3차수의 목표는 엑셀을 잘 다루는 것이 아니라, 2차수에서 정리한 데이터를 보고 “무엇을 판단할 수 있는지”를 근거 있는 문장으로 만드는 것입니다.

## 1. 먼저 여는 파일

- `04_실습용_분석_대시보드_가상.xlsx`
- 수식, 피벗, 차트를 확인하는 메인 실습 파일입니다.

## 2. ChatGPT 또는 Gemini에 올리는 파일

- `01_RAW_center_channel_performance_sample.xlsx`
- `02_RAW_feedback_inquiries_sample.xlsx`
- `03_RAW_operations_metrics_sample.xlsx`

처음부터 모두 올리지 말고, 01번 파일로 구조를 읽은 뒤 필요한 파일을 추가합니다.

## 3. NotebookLM에 넣는 파일

- `05_NotebookLM_소스_수강후기_운영메모_가상.md`
- `06_NotebookLM_소스_차트요약_가상.md`
- 필요 시 `07_공공데이터_수집_가이드.md`
- 필요 시 `08_YouTube_자료화_가이드.md`

NotebookLM은 계산 도구가 아니라 근거 브리핑 도구입니다. 계산은 Excel/Sheets에서 검산하고, NotebookLM에는 차트 요약·후기·운영 메모·외부 기준점을 넣어 “왜 그렇게 해석할 수 있는지”를 정리합니다.

Chrome에서 여는 순서:

1. `notebooklm.google.com`에 접속합니다.
2. 새 노트를 만들고 이름을 `바인그룹 3차수 인사이트`로 둡니다.
3. 05번, 06번 파일을 먼저 소스로 넣습니다.
4. 필요하면 YouTube URL 또는 공공데이터 설명을 추가합니다.
5. 아래 질문을 입력합니다.

```text
이 소스들을 바탕으로 바인그룹 교육 운영 관점에서 근거 있는 인사이트 3개를 뽑아줘.
각 인사이트는 결론, 근거 소스, 아직 단정하면 안 되는 한계, 다음 액션으로 나눠줘.
```

## 4. 참고하면 좋은 파일

- `09_인사이트_브리핑_모범예시.md`
- `10_source_log_template.xlsx`

최종 제출 전에 모범 예시와 출처 로그를 확인합니다.

## 5. 최종 제출

- 피벗/요약표 캡처 1개
- 차트 캡처 1개
- NotebookLM 인사이트 1개
- 보고 문장 5줄
- 사용한 출처 또는 프롬프트 1개

## 공식 참고

- Google Sheets Gemini 도움말: https://support.google.com/docs/answer/14356410?hl=ko-kr
- NotebookLM 도움말: https://support.google.com/gemininotebook/
- 공공데이터포털: https://www.data.go.kr/
