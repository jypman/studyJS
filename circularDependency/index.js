// index.js
import './a.js';

// 자바스크립트 모듈 시스템에서는 순환 참조를 허용한다.

// index.html 파일을 열어 모듈을 평가하면 다음과 같이 에러 없이 출력된다.
// module_b
// module_a
// hello~! mike

// hello~! undefined가 아닌 hello~! mike가 출력된 이유
// b.js 모듈에서 a.js 모듈을 가져온 시점에는 아직 a.js 모듈에서 NAME 변수를 선언하지 않아 undefined가 나올 거라 예상할 수 있다.
// 하지만 JS의 모든 모듈은 모듈 객체를 갖고 있는데 모듈이 내보내는 변수와 함수는 모듈 객체에 추가된다.
// 그렇기 때문에 a.js에서 sayhello 함수를 실행시키기 전에 NAME 변수가 모듈 객체에 추가되었기 때문에 정상적으로 출력될 수 있는 것이다.