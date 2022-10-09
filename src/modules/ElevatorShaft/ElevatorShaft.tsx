import styled from 'styled-components';
import { usePrepareElevatorShaft } from './hooks';

interface ElevatorShaftProps {
  elevatorIndex: number;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export function ElevatorShaft({ elevatorIndex }: ElevatorShaftProps) {
  const { shaft } = usePrepareElevatorShaft({ elevatorIndex });

  return <StyledContainer>{shaft}</StyledContainer>;
}
