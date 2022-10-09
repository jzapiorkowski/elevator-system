import styled from 'styled-components';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { usePrepareElevatorShaft } from './hooks';

interface ElevatorShaftProps {
  system: ElevatorSystem;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export function ElevatorShaft({ system }: ElevatorShaftProps) {
  const { shaft } = usePrepareElevatorShaft({ system });

  return <StyledContainer>{shaft}</StyledContainer>;
}
