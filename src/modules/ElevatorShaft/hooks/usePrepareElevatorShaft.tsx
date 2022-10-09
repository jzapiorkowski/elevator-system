import { useMemo } from 'react';
import { ElevatorLevel } from '../ElevatorLevel';
import { useSelector } from 'react-redux';
import { StateType } from 'store';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';

interface usePrepareElevatorShaftProps {
  elevatorIndex: number;
}

export function usePrepareElevatorShaft({
  elevatorIndex,
}: usePrepareElevatorShaftProps) {
  const system = useSelector<StateType, ElevatorSystem>(
    (state) => state.ElevatorSystem.system
  );

  const shaft = useMemo(
    () =>
      Array.from(Array(system.getNumberOfFloors).keys())
        .map((level) => (
          <ElevatorLevel level={level + 1} elevatorIndex={elevatorIndex} />
        ))
        .reverse(),
    [elevatorIndex, system.getNumberOfFloors]
  );

  return { shaft };
}
