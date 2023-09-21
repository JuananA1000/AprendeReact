import text from '../translations/es/global.json';

export function H1t1() {
  return (
    <div>
      <h1>{text['introduction-page-title']}</h1>
    </div>
  );
}

export function H1t2() {
  return (
    <div>
      <h1>{text['class-component-page-title']}</h1>
    </div>
  );
}

export function H1t3() {
  return (
    <div>
      <h1>{text['functional-component-page-title']}</h1>
    </div>
  );
}