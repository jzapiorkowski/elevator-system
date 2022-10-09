import { Elevators } from 'modules/Elevators';
import { useMemo } from 'react';
import { ElevatorSystem } from './utils/ElevatorSystem/ElevatorSystem';
import styled from 'styled-components';
import usePrepareElevatorButtons from 'hooks/usePrepareElevatorButtons';

const StyledAppContainer = styled.div`
  display: flex;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const system = useMemo(() => new ElevatorSystem(4, 6), []);
  const { elevatorButtons } = usePrepareElevatorButtons({ system });

  return (
    <StyledAppContainer>
      <StyledButtonsContainer>{elevatorButtons}</StyledButtonsContainer>
      <Elevators system={system} />
    </StyledAppContainer>
  );
}

export default App;
