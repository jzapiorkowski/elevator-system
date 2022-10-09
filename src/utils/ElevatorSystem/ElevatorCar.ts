export class ElevatorCar {
  public id: number;
  private currentLevel: number;
  private queueUp: number[];
  private queueDown: number[];
  private elevatorMotionStatus: 'up' | 'down' | 'idle';

  constructor(id: number) {
    this.id = id;
    this.currentLevel = 1;
    this.queueUp = [];
    this.queueDown = [];
    this.elevatorMotionStatus = 'idle';
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

    if (this.elevatorMotionStatus === 'idle') this.moveElevator(pickupLevel);
  }

  removeFromQueueUp(requestedLevel: number) {
    this.queueUp = this.queueUp.filter((Level) => Level !== requestedLevel);
  }

  removeFromQueueDown(requestedLevel: number) {
    this.queueDown = this.queueDown.filter((Level) => Level !== requestedLevel);
  }

  moveElevator(requestedLevel: number) {
    if (this.currentLevel < requestedLevel) {
      this.moveUp();
    } else {
      this.moveDown();
    }
  }

  async moveUp() {
    this.elevatorMotionStatus = 'up';

    while (this.currentLevel < this.queueUp[this.queueUp.length - 1]) {
      await this.waitForLevelChange();
      this.currentLevel++;

      if (this.queueUp.includes(this.currentLevel)) {
        this.removeFromQueueUp(this.currentLevel);
      }
    }

    if (this.queueUp.length === 0 && this.queueDown.length > 0) {
      this.moveDown();
    } else {
      this.elevatorMotionStatus = 'idle';
    }
  }

  async moveDown() {
    this.elevatorMotionStatus = 'down';

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
      this.elevatorMotionStatus = 'idle';
    }
  }

  waitForLevelChange() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  get getCurrentLevel() {
    return this.currentLevel;
  }

  get getCurrentMotionStatus() {
    return this.elevatorMotionStatus;
  }
}
