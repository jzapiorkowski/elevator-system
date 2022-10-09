export class ElevatorCar {
  private id: number;
  private currentLevel: number;
  private queueUp: number[];
  private queueDown: number[];

  constructor(id: number) {
    this.id = id;
    this.currentLevel = 1;
    this.queueUp = [];
    this.queueDown = [];
  }

  addToQueue(pickupLevel: number, destinationLevel: number) {
    if (this.currentLevel < pickupLevel) {
      this.queueUp.push(pickupLevel);
      this.queueUp.sort((a, b) => a - b);
    } else {
      this.queueDown.push(pickupLevel);
      this.queueDown.sort((a, b) => b - a);
    }

    if (pickupLevel > destinationLevel) {
      this.queueDown.push(destinationLevel);
      this.queueDown.sort((a, b) => b - a);
    }

    if (pickupLevel < destinationLevel) {
      this.queueUp.push(destinationLevel);
      this.queueUp.sort((a, b) => a - b);
    }
    // console.log(`Elevator${this.id} queue up: ${this.queueUp}`);
    // console.log(`Elevator${this.id} queue down: ${this.queueDown}`);
    this.moveElevator(pickupLevel);
  }

  removeFromQueueUp(requestedLevel: number) {
    this.queueUp = this.queueUp.filter((Level) => Level !== requestedLevel);
    console.log(`Elevator${this.id} has arrived to Level ${requestedLevel}`);
    // console.log(`Elevator${this.id} queue up: ${this.queueUp}`);
    // console.log(`Elevator${this.id} queue down: ${this.queueDown}`);
  }

  removeFromQueueDown(requestedLevel: number) {
    this.queueDown = this.queueDown.filter((Level) => Level !== requestedLevel);
    console.log(`Elevator${this.id} has arrived to Level ${requestedLevel}`);
    // console.log(`Elevator${this.id} queue up: ${this.queueUp}`);
    // console.log(`Elevator${this.id} queue down: ${this.queueDown}`);
  }

  moveElevator(requestedLevel: number) {
    console.log(
      `Move Elevator${this.id} from Level ${this.currentLevel} to Level ${requestedLevel}`
    );

    if (this.currentLevel < requestedLevel) {
      this.moveUp();
    } else {
      this.moveDown();
    }
  }

  async moveUp() {
    console.log(`Elevator${this.id} is going up`);

    while (this.currentLevel < this.queueUp[this.queueUp.length - 1]) {
      await this.waitForLevelChange();
      this.currentLevel++;

      console.log(this.currentLevel);

      if (this.queueUp.includes(this.currentLevel)) {
        this.removeFromQueueUp(this.currentLevel);
      }
    }

    if (this.queueUp.length === 0 && this.queueDown.length > 0) {
      this.moveDown();
    } else {
      console.log(
        `Elevator${this.id} is waiting for a call on Level ${this.currentLevel}`
      );
    }
  }

  async moveDown() {
    console.log(`Elevator${this.id} is going down`);

    while (this.currentLevel > this.queueDown[this.queueDown.length - 1]) {
      await this.waitForLevelChange();
      this.currentLevel--;

      if (this.queueDown.includes(this.currentLevel)) {
        this.removeFromQueueDown(this.currentLevel);
      }
    }

    if (this.queueDown.length === 0 && this.queueUp.length > 0) {
      this.moveUp();
    } else {
      console.log(
        `Elevator${this.id} is waiting for a call on Level ${this.currentLevel}`
      );
    }
  }

  waitForLevelChange() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  get getCurrentLevel() {
    return this.currentLevel;
  }
}
