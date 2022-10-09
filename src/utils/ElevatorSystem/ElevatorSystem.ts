import { ElevatorCar } from './ElevatorCar';
import { ElevatorStatus } from './types';

export class ElevatorSystem {
  private elevators: ElevatorCar[] | [];

  constructor() {
    this.elevators = [];
    this.createElevators();
  }

  createElevators() {
    this.elevators = [new ElevatorCar(0)];
  }

  pickup(pickupLevel: number, destinationLevel: number) {
    this.elevators[0].addToQueue(pickupLevel, destinationLevel);
  }

  //   update(Int, Int, Int) {}

  step() {}

  // status(): ElevatorStatus {
  status(): ElevatorCar {
    return this.elevators[0];
  }
}
