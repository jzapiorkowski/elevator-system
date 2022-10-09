import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StateType } from 'store';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { Input } from 'components/Input';

interface ElevatorCallButtonProps {
  direction?: 'up' | 'down';
  level: number;
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

export function ElevatorCallButton({
  direction,
  level,
}: ElevatorCallButtonProps) {
  const [destinationLevel, setDestinationLevel] = useState<number | null>(null);
  const system = useSelector<StateType, ElevatorSystem>(
    (state) => state.ElevatorSystem.system
  );

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
      <Input
        type='number'
        placeholder='destination level and submit'
        value={destinationLevel || ''}
        onChange={handleInputChange}
      />
      <StyledElevatorButton onClick={handleClick}>⟏</StyledElevatorButton>
    </StyledContainer>
  );
}
