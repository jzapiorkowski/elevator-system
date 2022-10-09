import { ElevatorCallButton } from 'modules/ElevatorCallButton';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from 'store';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';

export default function usePrepareElevatorButtons() {
  const system = useSelector<StateType, ElevatorSystem>(
    (state) => state.ElevatorSystem.system
  );

  const elevatorButtons = useMemo(
    () =>
      Array.from(Array(system.getNumberOfFloors).keys())
        .map((level) => <ElevatorCallButton level={level + 1} />)
        .reverse(),
    [system.getNumberOfFloors]
  );

  return { elevatorButtons };
}
