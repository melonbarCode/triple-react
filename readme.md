# TRIPLE

## 프로젝트 실행 방법

1. yarn 을 통한 package 설치를 진행합니다.
2. yarn dev 를 통해 화면을 확인합니다.

## 사용한 기술과 선택한 이유

### vite

`NEW BUNDLER`
프로젝트가 커질 수록 증가하는 번들링 시간의 획기적인 감소
HMR 의 시간의 대폭적 감소
ESM을 이용한 HMR 제공으로 따로 번들을 할 필요가 없음

but, 아직 서버사이드 랜더링 쪽이 미약하므로 이 부분은 참고할 필요가 있음.

### tailwindcss

`Atomic CSS`
클래스 이름을 고민하지 않아도 된다.
클래스 theme에 대한 커스터마이징이 자유로움
atomic한 css를 사용함으로써 js-in-css(styled-component)와 달리 runtime overhead가 없고
zero-runtime을 자랑하며 build가 되고 나오는 style sheet 사이즈가 현저히 작아진다. 이는 프로젝트가 크면 클수록 확인이 가능.

but, 기존에서 사용하는 방식의 상태 변화에 따른 동적 생성 적용은 할 수 없다.

### framer-motion

애니메이션 및 트랜지션 이용에 사용
사용법이 단순하고 사용하는데 러닝커브가 낮다.
추후 framer을 배우면 서로 연동하여 사용하기가 좋다.
잘나와 있는 공식문서
