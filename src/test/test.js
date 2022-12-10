import showHealth from '../index';

test('should show critical state', () => {
  const result = showHealth({ name: 'Олень', health: 10 });
  expect(result).toBe('critical');
});

test('should show healthy state', () => {
  const result = showHealth({ name: 'Огр', health: 34 });
  expect(result).toBe('wounded');
});

test('should show wounded state', () => {
  const result = showHealth({ name: 'Колдун', health: 65 });
  expect(result).toBe('healthy');
});
