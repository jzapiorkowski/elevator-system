import { Elevators } from 'modules/Elevators';
import styled from 'styled-components';
import usePrepareElevatorButtons from 'hooks/usePrepareElevatorButtons';
import { ChangeSystemForm } from 'modules/ChangeSystemForm';

const StyledElevatorSystemContainer = styled.div`
  display: flex;
  margin: 0 20px;
  justify-content: center;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const { elevatorButtons } = usePrepareElevatorButtons();

  return (
    <>
      <ChangeSystemForm />
      <StyledElevatorSystemContainer>
        <StyledButtonsContainer>{elevatorButtons}</StyledButtonsContainer>
        <Elevators />
      </StyledElevatorSystemContainer>
    </>
  );
}

export default App;
