import styled from 'styled-components';
import { usePrepareElevators } from './hooks';

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;

export function Elevators() {
  const { elevators } = usePrepareElevators();

  return <StyledContainer>{elevators}</StyledContainer>;
}
