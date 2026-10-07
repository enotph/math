import Character, { Magician, Daemon } from '../app';

describe('Character (базовый класс)', () => {
  test('создаётся с базовой атакой и stoned=false', () => {
    const c = new Character(100);

    expect(c.attack).toBe(100);
    expect(c.stoned).toBe(false);
  });

  test('set attack меняет базовую атаку', () => {
    const c = new Character(100);
    c.attack = 200;

    expect(c.attack).toBe(200);
  });

  test('set stoned меняет флаг', () => {
    const c = new Character(100);
    c.stoned = true;

    expect(c.stoned).toBe(true);
  });
});

describe('getAttack без дурмана', () => {
  const c = new Character(100);

  test('1 клетка — 100%', () => {
    expect(c.getAttack(1)).toBe(100);
  });

  test('2 клетки — 90%', () => {
    expect(c.getAttack(2)).toBe(90);
  });

  test('3 клетки — 80%', () => {
    expect(c.getAttack(3)).toBe(80);
  });

  test('4 клетки — 70%', () => {
    expect(c.getAttack(4)).toBe(70);
  });

  test('5 клеток — 60%', () => {
    expect(c.getAttack(5)).toBe(60);
  });
});

describe('getAttack с дурманом', () => {
  test('пример из задания: attack=100, distance=2, stoned=true → 85', () => {
    const c = new Character(100);
    c.stoned = true;

    expect(c.getAttack(2)).toBe(85);
  });

  test('distance=1, stoned=true → 100 - log2(1)*5 = 100', () => {
    const c = new Character(100);
    c.stoned = true;

    expect(c.getAttack(1)).toBe(100);
  });

  test('distance=5, stoned=true → 60 - log2(5)*5 ≈ 48.39', () => {
    const c = new Character(100);
    c.stoned = true;

    expect(c.getAttack(5)).toBeCloseTo(60 - Math.log2(5) * 5);
  });
});

describe('Magician', () => {
  test('наследуется от Character, type = Magician', () => {
    const m = new Magician();

    expect(m).toBeInstanceOf(Character);
    expect(m.type).toBe('Magician');
    expect(m.attack).toBe(100);
  });

  test('кастомная базовая атака', () => {
    const m = new Magician(200);

    expect(m.attack).toBe(200);
    expect(m.getAttack(2)).toBe(180);
  });

  test('getAttack с дурманом', () => {
    const m = new Magician(100);
    m.stoned = true;

    expect(m.getAttack(2)).toBe(85);
  });
});

describe('Daemon', () => {
  test('наследуется от Character, type = Daemon', () => {
    const d = new Daemon();

    expect(d).toBeInstanceOf(Character);
    expect(d.type).toBe('Daemon');
    expect(d.attack).toBe(100);
  });

  test('кастомная базовая атака', () => {
    const d = new Daemon(200);

    expect(d.attack).toBe(200);
    expect(d.getAttack(2)).toBe(180);
  });

  test('getAttack с дурманом', () => {
    const d = new Daemon(100);
    d.stoned = true;

    expect(d.getAttack(2)).toBe(85);
  });
});
