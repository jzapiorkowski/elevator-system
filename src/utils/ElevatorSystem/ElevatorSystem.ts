import { ElevatorCar } from './ElevatorCar';

export class ElevatorSystem {
  private elevators: ElevatorCar[] | [];
  private numberOfFloors: number;
  private numberOfElevators: number;

  constructor(numberOfElevators: number, numberOfFloors: number) {
    this.elevators = [];
    this.numberOfFloors = numberOfFloors;
    this.numberOfElevators = numberOfElevators;
    this.createElevators();
  }

  createElevators() {
    this.elevators = Array.from(Array(this.numberOfElevators).keys()).map(
      (index) => new ElevatorCar(index)
    );
  }

  pickup(pickupLevel: number, destinationLevel: number) {
    const idleElevators = this.elevators.filter(
      (elevator) => elevator.getCurrentMotionStatus === 'idle'
    );
    const distance = (elevator: ElevatorCar) =>
      Math.abs(elevator.getCurrentLevel - pickupLevel);

    let closestIdleElevator: null | ElevatorCar = null;
    let bestDistance = this.numberOfFloors;

    idleElevators.forEach((elevator) => {
      if (distance(elevator) < bestDistance) {
        closestIdleElevator = elevator;
        bestDistance = distance(elevator);
      }
    });

    closestIdleElevator!.addToQueue(pickupLevel, destinationLevel);
  }

  status(): ElevatorCar[] {
    return this.elevators;
  }

  get getNumberOfFloors() {
    return this.numberOfFloors;
  }

  get getNumberOfElevators() {
    return this.numberOfElevators;
  }
}
