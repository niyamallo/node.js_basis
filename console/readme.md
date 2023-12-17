1. Console 클래스를 사용하면 log 파일을 만들어 디버깅 혹은 각종 정보성 메시지를 파일로 기록할 수 있다.

Console 클래스를 생성하고 stdout.log 파일과 stderr.log 파일로 로그를 기록해보자!

console_class.js, stdout.log, stderr.log 참고

2. console의 주요 내장함수

console.log(내용, ...args): 일반적인 로그를 콘솔에 출력
console.error(내용, ...args): 에러를 콘솔에 출력
console.table(테이블형 데이터): 배열/오브젝트를 테이블 형태로 콘솔에 출력
console.time(레이블)/console.timeEnd(레이블): console.time과 console.timeEnd에 전달한 레이블 값이 일치하는 코드 사이의 실행 시간을 측정해서 출력. 기본 값은 default
console.dir(오브젝트, 옵션): 객체를 콘솔에 출력할 때 사용. 첫 번째 파라미터는 객체이고, 두 번째 파라미터는 옵션. 옵션의 depth는 객체 안의 객체를 몇 단계까지 보여줄지를 의미함. colors는 콘솔에 출력될 때 다른 색상을 사용해서 쉽게 구분할 수 있음.

console_global.js 참고