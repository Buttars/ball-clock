import { BallClock } from './ball-clock';

const clock = new BallClock({
  tray: 59,
  minutes: 59,
  hours: 1,
});

clock.output();
clock.addBall();
console.log('=============');
clock.output();
