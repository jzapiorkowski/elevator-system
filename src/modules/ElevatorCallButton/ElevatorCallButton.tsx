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

const StyledContainer = styled.div`
  display: flex;
  width: 250px;
  height: 62px;
  align-items: center;
  gap: 20px;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 150px;
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
    <StyledContainer>
      <StyledInput
        type='number'
        placeholder='destination level and submit'
        value={destinationLevel || ''}
        onChange={handleInputChange}
      />
      <StyledElevatorButton onClick={handleClick}>⟏</StyledElevatorButton>
    </StyledContainer>
  );
}
