import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';

interface ElevatorCallButtonProps {
  direction?: 'up' | 'down';
  level: number;
  system: ElevatorSystem;
}

const StyledElevatorButton = styled.button`
  padding: 10px;
  border-radius: 50%;
  border: solid black 1px;
  text-align: center;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ElevatorCallButton({
  direction,
  level,
  system,
}: ElevatorCallButtonProps) {
  const [destinationLevel, setDestinationLevel] = useState<number | null>(null);

  const handleClick = useCallback(() => {
    if (destinationLevel) {
      system.pickup(level, destinationLevel);
    }
  }, [destinationLevel, level, system]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDestinationLevel(parseInt(event.target.value, 10));
    },
    []
  );

  return (
    <>
      <input
        type='number'
        placeholder='destination level and submit'
        value={destinationLevel || ''}
        onChange={handleInputChange}
      />
      <StyledElevatorButton onClick={handleClick}>⟏</StyledElevatorButton>;
    </>
  );
}
