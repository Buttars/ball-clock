import { Queue } from '@nickradford/ts-data-structures';

export class BallClock {
  tray: Queue<null>;
  minutes: Queue<null>;
  hours: Queue<null>;

  constructor({
    tray,
    minutes,
    hours,
  }: {
    tray?: number;
    minutes?: number;
    hours?: number;
  } = {}) {
    this.tray = this.initalizeQueue(tray);
    this.minutes = this.initalizeQueue(minutes);
    this.hours = this.initalizeQueue(hours);
  }

  addBall = (): void => {
    this.tray.enqueue(null);

    if (this.tray.length() === 60) {
      this.addMinute();
    }
  };

  addMinute = (): void => {
    this.minutes.enqueue(null);
    this.tray = new Queue<null>();

    if (this.minutes.length() === 60) {
      this.addHour();
    }
  };

  addHour = (): void => {
    this.hours.enqueue(null);
    this.minutes = new Queue<null>();
  };

  initalizeQueue = (items: number): Queue<null> => {
    const queue = new Queue<null>();
    for (let i = 0; i < items; i++) {
      queue.enqueue(null);
    }

    return queue;
  };

  output = (): void => {
    console.log(`tray: ${this.tray.length()}`);
    console.log(`minutes: ${this.minutes.length()}`);
    console.log(`hours: ${this.hours.length()}`);
  };
}
