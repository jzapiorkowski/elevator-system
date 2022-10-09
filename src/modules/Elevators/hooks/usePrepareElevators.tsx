import { ElevatorShaft } from 'modules/ElevatorShaft';

export function usePrepareElevators() {
  const elevators = Array.from(Array(4).keys()).map((index) => (
    <ElevatorShaft elevatorIndex={index} />
  ));

  return { elevators };
}
