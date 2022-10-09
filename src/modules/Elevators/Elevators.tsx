import styled from 'styled-components';
import { usePrepareElevators } from './hooks';

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export function Elevators() {
  const { elevators } = usePrepareElevators();

  return <StyledContainer>{elevators}</StyledContainer>;
}
