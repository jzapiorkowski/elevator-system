import styled from 'styled-components';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { usePrepareElevators } from './hooks';

interface ElevatorsTypes {
  system: ElevatorSystem;
}

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export function Elevators({ system }: ElevatorsTypes) {
  const { elevators } = usePrepareElevators({ system });

  return <StyledContainer>{elevators}</StyledContainer>;
}
