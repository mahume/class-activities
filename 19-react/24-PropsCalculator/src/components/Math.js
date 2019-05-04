import React from 'react';

function Math({ num1, num2, operator}) {
  let value;

  switch (operator) {
    case '+':
      value = num1 + num2;
      break;
    case '-':
      value = num1 - num2;
    break;
    case '/':
      value = num1 / num2;
    break;
    case '*':
      value = num1 * num2;
      break;
    default:
      value = NaN;
  }

  return <span style={{ fontSize: value }}>{value}</span>
}

export default Math;