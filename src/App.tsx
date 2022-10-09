import { Elevators } from 'modules/Elevators';
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
  const { elevatorButtons } = usePrepareElevatorButtons();

  return (
    <StyledAppContainer>
      <StyledButtonsContainer>{elevatorButtons}</StyledButtonsContainer>
      <Elevators />
    </StyledAppContainer>
  );
}

export default App;
