0. 타이머 모듈의 모든 함수는 전역 함수이기 때문에 require('timers')없이 사용할 수 있다.

1. 타이머 모듈 사용해보기

setTimeout(콜백 함수, 밀리초): 설정한 밀리초 이후에 지정된 콜백 함수를 실행.
setTimeout 선언 시 할당한 변수명으로 clearTimeout(변수명)을 통해 setTimeout을 취소할 수 있다.
이벤트 루프를 블로킹하거나 이벤트 큐에 보유하고 있는 다른 실행 코드가 타임아웃의 실행을 뒤로 밀 수 있기 때문에 설정한 밀리초보다 더 빨리 실행되지는 않지만, 반드시 설정한 밀리초 후에 실행된다는 보장은 없다.

setInterval(콜백 함수, 밀리초): 설정한 밀리초마다 지정한 콜백 함수를 실행.
setInterval 선언 시 할당한 변수명으로 clearInterval(변수명)을 통해 setInterval을 취소할 수 있다.

setImmediate(콜백 함수): 현재 이벤트 루프 주기 끝에 코드를 실행.
setImmediate() 함수 호출 뒤에 오는 모든 코드가 먼저 실행된 후 바로 다음에 실행된다.
setImmediate 선언 시 할당한 변수명으로 clearImmediate(변수명)를 통해 setImmediate를 취소할 수 있다.