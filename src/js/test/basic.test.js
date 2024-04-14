import ErrorRepository from '../ErrorRepository';

test('класс "ErrorRepository" существует', () => {
  expect(new ErrorRepository()).toBeDefined();
});

const errorRepository = new ErrorRepository();

test('класс "ErrorRepository" имеет свойство "errors" для объекта Map', () => {
  expect(errorRepository.errors).toBeDefined();
  expect(errorRepository.errors instanceof Map).toBeTruthy();
});

errorRepository.errors.set(1, 'Описание ошибки с кодом 1');

test('класс "ErrorRepository" имеет рабочий метод "translate"', () => {
  expect(typeof errorRepository.translate).toBe('function');

  let output = errorRepository.translate(1);

  expect(output).toBe('Описание ошибки с кодом 1');

  output = errorRepository.translate(2);

  expect(output).toBe('Unknown error');
});