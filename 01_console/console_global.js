console.log('hello world'); // 일반적인 로그
console.log('hello %s', 'world'); // 일반적인 로그, %s를 사용해서 문자열 데이터를 파라미터로 전달

const world = 'world';
console.log(`hello ${world}`); // 자바스크립트의 템플릿 리터럴 문법을 사용

console.error(new Error('에러 메시지 출력')); // 에러 로그 출력

const arr = [
    {name: 'Niya', email: 'niya@mail.com'},
    {name: 'Mallo', email:'mallo@mail.com'},
];
console.table(arr); // 테이블 형태로 Array, Object 데이터 출력

const obj = {
    stdents: {
        grade1: {class1:{}, class:{}},
        grade2: {class1:{}, class:{}},
        teachers: ['Niya', 'Mallo'],
    }
}

console.dir(obj, {depth:1, colors:true}); // Object를 콘솔에 출력하는데, 출력할 Object의 깊이와 콘솔 메시지 텍스트에 색상을 적용

console.time('time for for-loop'); // console.timke에 파라미터로 전달한 테이블과 뒤에 나오는 sonsole.timeEnd 중 일치하는 레이블을 가지고 있는 console.timeEnd 코드 사이의 실행 시간 측정
for (let i=0; i<3; i++){}
console.timeEnd('time for for-loop'); // 앞에 나온 console.time 중 console.timeEnd와 레이블이 일치하는 코드 사이의 실행 시간 측정
