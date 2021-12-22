import './a.js';

// 각 모듈은 최초 한 번만 평가된다.
// 모듈이 평가된다는 것은 해당 모듈의 코드를 위에서부터 순서대로 실행한다는 의미다.

// index.html을 실행시키면 모듈을 평가하기 시작하며 다음과 같이 출력된다.
// module_b
// module_c
// module_a
// hello~!
// hello~!
// hello~!