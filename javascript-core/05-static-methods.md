# 클래스와 정적 메서드 (Static Methods)

클래스를 사용하다 보면, 특정 인스턴스에 속하지 않고 클래스 자체에 연결된 함수가 필요할 때가 있습니다. 예를 들어, 어떤 클래스와 관련된 유용한 헬퍼 함수나, 특정 방식으로 인스턴스를 생성해주는 팩토리(factory) 함수 등이 그렇습니다. 이런 함수들을 **정적 메서드(static method)**라고 부릅니다.

`Promise.all()`, `Promise.resolve()`, `Array.isArray()`, `Math.max()` 등은 자바스크립트에 내장된 대표적인 정적 메서드들입니다. 이 메서드들은 `new Promise()`나 `new Array()`처럼 인스턴스를 만들지 않고도 `Promise.all(...)`이나 `Array.isArray(...)` 형태로 클래스 이름(또는 생성자 함수 이름)을 통해 바로 호출할 수 있습니다.

## 정적 메서드 정의하기

클래스 내에서 메서드 이름 앞에 `static` 키워드를 붙이면 정적 메서드를 정의할 수 있습니다.

```javascript
class MathHelper {
  // 정적 속성 (참고: ES2022부터 표준으로 지원, 이전에는 클래스 외부에서 할당)
  static PI = 3.1415926535;

  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }

  // 이것은 인스턴스 메서드입니다. (프로토타입 메서드)
  multiply(x, y) {
    // 인스턴스 메서드 내에서는 'this'가 인스턴스를 가리킵니다.
    // 정적 속성/메서드에 접근하려면 클래스 이름을 사용해야 합니다.
    console.log("PI 값 (인스턴스 메서드에서 접근):", MathHelper.PI);
    return x * y;
  }
}
```

## 정적 메서드 호출하기

정적 메서드는 클래스의 인스턴스를 생성하지 않고, **클래스 이름 자체를 통해** 직접 호출합니다.

```javascript
console.log(MathHelper.add(10, 5));    // 출력: 15
console.log(MathHelper.subtract(10, 5)); // 출력: 5
console.log(MathHelper.PI);            // 출력: 3.1415926535

// MathHelper.multiply(2, 3); // TypeError: MathHelper.multiply is not a function
                              // multiply는 정적 메서드가 아니므로 클래스 이름으로 직접 호출 불가

const helperInstance = new MathHelper();
console.log(helperInstance.multiply(2, 3)); // 출력: PI 값 (인스턴스 메서드에서 접근): 3.1415926535
                                            // 출력: 6

// helperInstance.add(2, 3); // TypeError: helperInstance.add is not a function
                           // add는 정적 메서드이므로 인스턴스를 통해 호출할 수 없습니다.
```

## 정적 메서드 vs. 인스턴스 (프로토타입) 메서드

-   **정적 메서드 (Static Methods):**
    -   클래스 자체에 속하며, `클래스이름.메서드이름()`으로 호출합니다.
    -   특정 인스턴스의 데이터(`this`가 가리키는 인스턴스 속성)에 직접 접근할 수 없습니다.
    -   정적 메서드 내의 `this`는 클래스 자체(생성자 함수)를 가리킵니다.
    -   주로 유틸리티 함수, 헬퍼 함수, 팩토리 메서드 등에 사용됩니다.

-   **인스턴스 (프로토타입) 메서드 (Instance/Prototype Methods):**
    -   클래스의 프로토타입(`ClassName.prototype`)에 정의되며, `new 클래스이름()`으로 생성된 인스턴스를 통해 `인스턴스.메서드이름()`으로 호출합니다.
    -   `this` 키워드를 통해 해당 인스턴스의 속성 및 다른 인스턴스 메서드에 접근할 수 있습니다.
    -   객체의 고유한 상태를 조작하거나 사용하는 기능을 수행합니다.

## 정적 메서드 내에서의 `this`

정적 메서드 내부에서 `this`를 사용하면, `this`는 클래스 자체(생성자 함수)를 가리킵니다. 이를 통해 다른 정적 속성이나 정적 메서드에 접근할 수 있습니다.

```javascript
class Config {
  static defaultName = "Guest";
  static greetingPrefix = "Hello, ";

  static greet(name) {
    // 'this'는 Config 클래스를 가리킵니다.
    // 따라서 this.defaultName은 Config.defaultName과 같습니다.
    const userName = name || this.defaultName;
    return this.greetingPrefix + userName + "!";
  }

  static createDefaultGreeting() {
    // 다른 정적 메서드 호출
    // this.greet()는 Config.greet()와 같습니다.
    return this.greet(); // "Hello, Guest!"
  }
}

console.log(Config.greet("Noah")); // 출력: Hello, Noah!
console.log(Config.greet());       // 출력: Hello, Guest!
console.log(Config.createDefaultGreeting()); // 출력: Hello, Guest!
```

## 언제 정적 메서드를 사용할까요?

1.  **유틸리티/헬퍼 함수:** 특정 클래스와 논리적으로 관련은 있지만, 개별 인스턴스의 상태와는 무관한 기능을 제공할 때 (예: `Math.max()`, `JSON.parse()`, `Array.from()`).
2.  **팩토리 메서드:** 클래스 인스턴스를 생성하는 다양한 방법을 제공하거나, 생성 과정을 캡슐화하고 싶을 때 (예: `Promise.resolve(value)`는 `value`를 기반으로 Promise 인스턴스를 생성). `Date.now()`도 현재 시간을 나타내는 숫자 값을 반환하는 정적 메서드의 예입니다.
3.  **클래스 수준의 설정 또는 관리:** 애플리케이션 전반에 걸친 설정 값이나, 특정 클래스와 관련된 전역적인 카운터 등을 관리할 때.

정적 메서드를 사용하면 코드를 더 체계적으로 구성하고, 클래스와 관련된 기능들을 명확하게 그룹화할 수 있습니다. 인스턴스를 생성할 필요 없이 클래스 이름으로 직접 접근하여 사용할 수 있어 편리합니다.

---

**참고:** `Promise.all()`과 같은 메서드는 `Promise`라는 내장 객체(생성자 함수)에 이미 정의되어 있는 정적 메서드입니다. 우리가 직접 `Promise` 클래스에 `all` 메서드를 코드로 추가하는 것이 아니라, 자바스크립트가 제공하는 기능을 사용하는 것입니다. 이 문서는 여러분이 직접 만드는 클래스에 어떻게 정적 메서드를 추가할 수 있는지 설명합니다.