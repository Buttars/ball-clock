import { BallClock } from '../src/ball-clock';

describe('ball clock simulation', () => {
  jest.useFakeTimers();

  beforeAll(async () => {
    jest.runOnlyPendingTimers();
  });

  it('should take balls', () => {
    const clock = new BallClock({});
    expect(clock.tray.length()).toEqual(0);
    clock.addBall();
    expect(clock.tray.length()).toEqual(1);
  });

  it('should roll over balls from tray to minutes', () => {
    const clock = new BallClock({
      tray: 59,
    });

    expect(clock.tray.length()).toEqual(59);
    expect(clock.minutes.length()).toEqual(0);
    clock.addBall();
    expect(clock.tray.length()).toEqual(0);
    expect(clock.minutes.length()).toEqual(1);
  });

  it('should roll over balls from mintues to hours', () => {
    const clock = new BallClock({
      minutes: 59,
    });

    expect(clock.minutes.length()).toEqual(59);
    expect(clock.hours.length()).toEqual(0);
    clock.addMinute();
    expect(clock.minutes.length()).toEqual(0);
    expect(clock.hours.length()).toEqual(1);
  });

  it('should add hour', () => {
    const clock = new BallClock();
    expect(clock.hours.length()).toEqual(0);
    clock.addHour();
    expect(clock.hours.length()).toEqual(1);
  });
});
