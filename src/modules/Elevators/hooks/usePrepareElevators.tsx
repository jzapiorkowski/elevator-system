import { ElevatorShaft } from 'modules/ElevatorShaft';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';

interface usePrepareElevatorsProps {
  system: ElevatorSystem;
}

export function usePrepareElevators({ system }: usePrepareElevatorsProps) {
  const elevators = Array.from(Array(4).keys()).map((index) => (
    <ElevatorShaft system={system} elevatorIndex={index} />
  ));

  return { elevators };
}
