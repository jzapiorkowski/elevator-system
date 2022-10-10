import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setElevatorSystem } from 'state';
import { Input } from 'components/Input';

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFormContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const StyledButton = styled.button`
  height: 40px;
  width: 100px;
`;

const StyledError = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 40px;
`;

export function ChangeSystemForm() {
  const dispatch = useDispatch();
  const [numberOfFloors, setNumberOfFloors] = useState<number>(6);
  const [numberOfElevators, setNumberOfElevators] = useState<number>(4);
  const [showError, setShowError] = useState<boolean>(false);

  const handleNumberOfFloorsChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNumberOfFloors(parseInt(event.target.value, 10));
    },
    []
  );

  const handleNumberOfElevatorsChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNumberOfElevators(parseInt(event.target.value, 10));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    if (numberOfFloors > 1 && numberOfElevators > 0) {
      dispatch(setElevatorSystem({ numberOfFloors, numberOfElevators }));
      setShowError(false);
    } else {
      setShowError(true);
    }
  }, [dispatch, numberOfElevators, numberOfFloors]);

  return (
    <>
      <StyledFormContainer>
        <h1>Change system data:</h1>
        <StyledInputContainer>
          <label>Number of floors</label>
          <Input
            type='number'
            value={numberOfFloors}
            onChange={handleNumberOfFloorsChange}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <label>Number of elevators</label>
          <Input
            type='number'
            value={numberOfElevators}
            onChange={handleNumberOfElevatorsChange}
          />
        </StyledInputContainer>
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </StyledFormContainer>
      {showError && (
        <StyledError>
          At least one of the numbers is invalid, please check!
        </StyledError>
      )}
    </>
  );
}
