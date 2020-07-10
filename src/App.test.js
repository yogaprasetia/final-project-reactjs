import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('2 tambah 3 adalah 5', () => {
  expect(2 + 3).toBe(5);
});

test('object equality', () => {
  const iniObject = { pertama: 1 };
  iniObject['kedua'] = 2;
  expect(iniObject).toEqual({
    pertama: 1,
    kedua: 2
  });

  let sesuatu;
  expect(sesuatu).toBeUndefined();

  let iniNull = null;
  expect(iniNull).toBeNull();
  expect(iniNull).toBeDefined();
  expect(false).toBeFalsy();
  expect(true).toBeTruthy();

  let number = 4;
  expect(number).toBeGreaterThan(3);
  expect(number).toBeGreaterThanOrEqual(3);
  expect(number).toBeLessThan(5);


  let string = 'ini string';
  expect(string).not.toMatch(/a/);
  expect(string).toMatch(/i/);

  let array = [1, 2, 3];
  expect(array).toContain(1);
});