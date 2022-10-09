import styled from 'styled-components';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { usePrepareElevatorShaft } from './hooks';

interface ElevatorShaftProps {
  system: ElevatorSystem;
  elevatorIndex: number;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export function ElevatorShaft({ system, elevatorIndex }: ElevatorShaftProps) {
  const { shaft } = usePrepareElevatorShaft({ system, elevatorIndex });

  return <StyledContainer>{shaft}</StyledContainer>;
}
