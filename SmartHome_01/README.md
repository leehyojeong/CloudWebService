## Smart Home Applicaiton(1)

### Task 1
#### 문제
- 최소 5개 이상의 Home Appliance를 NodeJS 모듈로 디자인한다.
- 각 Appliance는 분리된 모듈로 구현한다.
#### 프로그램 디자인
- 5개의 Appliance로 TV, Audio, Lamp, Security Alarms, Air Conditioner를 구현했다.
- 모든 Appliance는 공통적으로 전원을 켜고 끄는 on, off 함수를 갖고 있다. 
- 각 모듈 안에서 module.exports를 사용하여 다른 js 파일에서 require할 수 있도록 만든다.

### Task 2
#### 문제
- 최소 5개 이상의 Home Samrt Service를 NodeJS 모듈로 디자인한다.
- 각 서비스 모듈은 Home Appliance 모듈을 intelligent한 방법으로 사용하도록 구현한다.
- 여기서 intelligent한 방법이란 사용자가 밖에 나간 경우 사용하지 않는 appliance를 종료하고, 보안 관련 appliance를 실행하는 것을 말한다.
#### 프로그램 디자인
- 5개의 서비스 모듈로 goWork, comehome, wakeup, showall, gosleep을 구현했다.
- 각 모듈 안에서 5개의 Home Appliance를 require하여 기능을 통제한다.
- 각 모듈에서 callback 함수를 인자로 받는 함수와 인자를 받지 않는 함수 두 가지 방법으로 구현했다.
- 함수는 상황에 따른 적절한 Appliance의 기능을 수행한다.

### 테스트 모듈
- Task 1과 Task 2에서 구현한 내용이 제대로 수행되는지 확인하기 위한 모듈이다.
- 위에서 구현한 함수를 module.exports를 통해 사용한다.
- Smart Appliance 기능 여부에 따른 차이를 알아보기 위해 총 2개의 테스트 모듈을 만들었다.
  - __Home01.js__ : 콜백 함수를 사용하지 않은 Smart 모듈을 사용했을 때의 상황을 가정한 테스트 모듈이다.
  - __Home02.js__ : 콜백 함수를 사용한 Smart 모듈을 사용했을 때의 상황을 가정한 테스트 모듈이다.
![image](https://user-images.githubusercontent.com/39904216/90219312-b68a1f80-de40-11ea-8b24-3d5dd76c0058.png)
- 각 테스트 모듈에서는 공통적으로 Appliance를 사용하기 위해 Tv.js, Audio.js, lamp.js, conditioner.js, security.js 모듈을 require한다.
- 모든 Service 모듈도 require한다.
- Home01.js는 비동기적인 js의 기본 특징을 사용한 코드이고, Home02.js는 콜백 함수와 setTimeout을 사용하여 비동기를 구현한 코드이다.

### 실행 결과
- Home01.js

![image](https://user-images.githubusercontent.com/39904216/90219808-cfdf9b80-de41-11ea-85d5-7038839f3b5e.png)
- Home02.js
  - 순서대로 goWork, comehome, gosleep, wakeup, showall을 실행한 결과이다.
  - 각 모듈에서는 setTimeout을 사용하여 콜백 함수를 호출한다.
  - 출력 결과를 통해 콜백 함수가 호출되기 전에 다른 모듈들이 실행되는 것을 확인할 수 있다.
  - 메인 실행 코드인 Home02.js에서 콜백 함수 선언 후 "사용중"이라는 출력 구문을 선언했지만, 코드가 비동기적으로 실행되기 때문에 콜백이 끝나기 전에 출력되는 것을 볼 수 있다.
  - 모든 모듈이 실행된 후 각 모듈의 함수가 종료되었다는 구문이 출력된다.
  
![image](https://user-images.githubusercontent.com/39904216/90219951-2c42bb00-de42-11ea-9c90-2dec8691428c.png)

![image](https://user-images.githubusercontent.com/39904216/90220712-b0e20900-de43-11ea-8872-618e1617edc1.png)
