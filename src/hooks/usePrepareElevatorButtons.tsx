import { ElevatorCallButton } from 'modules/ElevatorCallButton';
import React, { useMemo } from 'react';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';

interface usePrepareElevatorButtonsProps {
  system: ElevatorSystem;
}

export default function usePrepareElevatorButtons({
  system,
}: usePrepareElevatorButtonsProps) {
  const elevatorButtons = useMemo(
    () =>
      Array.from(Array(6).keys())
        .map((level) => (
          <ElevatorCallButton system={system} level={level + 1} />
        ))
        .reverse(),
    [system]
  );

  return { elevatorButtons };
}
