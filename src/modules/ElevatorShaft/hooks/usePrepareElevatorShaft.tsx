import { useMemo } from 'react';
import { ElevatorLevel } from '../ElevatorLevel';

interface usePrepareElevatorShaftProps {
  elevatorIndex: number;
}

export function usePrepareElevatorShaft({
  elevatorIndex,
}: usePrepareElevatorShaftProps) {
  const shaft = useMemo(
    () =>
      Array.from(Array(6).keys())
        .map((level) => (
          <ElevatorLevel level={level + 1} elevatorIndex={elevatorIndex} />
        ))
        .reverse(),
    [elevatorIndex]
  );

  return { shaft };
}
