import { ElevatorCallButton } from 'modules/ElevatorCallButton';
import { useMemo } from 'react';

export default function usePrepareElevatorButtons() {
  const elevatorButtons = useMemo(
    () =>
      Array.from(Array(6).keys())
        .map((level) => <ElevatorCallButton level={level + 1} />)
        .reverse(),
    []
  );

  return { elevatorButtons };
}
