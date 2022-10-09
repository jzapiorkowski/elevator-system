import styled from 'styled-components';

interface ElevatorCallButtonProps {
  direction: 'up' | 'down';
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

export function ElevatorCallButton({ direction }: ElevatorCallButtonProps) {
  return <StyledElevatorButton>⟏</StyledElevatorButton>;
}
