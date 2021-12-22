// index.js
import './a.js';

// index.html을 실행시켜 모듈을 평가하면 다음과 같이 출력되며 에러가 발생한다.
// module_b
// module_a
// Uncaught ReferenceError: Cannot access 'NAME' before initialization

// 위 에러가 발생하는 이유는 a.js에서 sayHello함수를 실행시킬 때 NAME 변수가 아직 모듈 객체에 추가되지 않은 상태이기 때문이다.

// 정리하면 자바스크립트는 객체에서 존재하지 않는 속성을 가져올 때 undefined가 반환된다.
// 하지만 ES Module에서는 모듈객체에서 없는 속성을 가져올 때 에러가 발생한다.
// 명시적으로 에러가 발생하기 때문에 순환 참조 문제를 빠르게 인식할 수 있다.
// 하지만 웹팩 환경에서는 undefined가 반환되기 때문에 에러가 발생할 수 있고 아닐 수도 있는 게 좀 불편하다.