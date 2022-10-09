import { useMemo } from 'react';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { ElevatorLevel } from '../ElevatorLevel';

interface usePrepareElevatorShaftProps {
  system: ElevatorSystem;
  elevatorIndex: number;
}

export function usePrepareElevatorShaft({
  system,
  elevatorIndex,
}: usePrepareElevatorShaftProps) {
  const shaft = useMemo(
    () =>
      Array.from(Array(6).keys())
        .map((level) => (
          <ElevatorLevel
            level={level + 1}
            system={system}
            elevatorIndex={elevatorIndex}
          />
        ))
        .reverse(),
    [elevatorIndex, system]
  );

  return { shaft };
}
