import { ElevatorShaft } from 'modules/ElevatorShaft';
import { useSelector } from 'react-redux';
import { StateType } from 'store';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';

export function usePrepareElevators() {
  const system = useSelector<StateType, ElevatorSystem>(
    (state) => state.ElevatorSystem.system
  );

  const elevators = Array.from(Array(system.getNumberOfElevators).keys()).map(
    (index) => <ElevatorShaft elevatorIndex={index} />
  );

  return { elevators };
}
