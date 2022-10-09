import { useMemo } from 'react';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { ElevatorLevel } from '../ElevatorLevel';

interface usePrepareElevatorShaftProps {
  system: ElevatorSystem;
}

export function usePrepareElevatorShaft({
  system,
}: usePrepareElevatorShaftProps) {
  const shaft = useMemo(
    () =>
      Array.from(Array(6).keys())
        .map((level) => <ElevatorLevel level={level + 1} system={system} />)
        .reverse(),
    [system]
  );

  return { shaft };
}
