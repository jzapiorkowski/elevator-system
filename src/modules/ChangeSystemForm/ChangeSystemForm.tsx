import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setElevatorSystem } from 'state';

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

export function ChangeSystemForm() {
  const dispatch = useDispatch();
  const [numberOfFloors, setNumberOfFloors] = useState<number>(6);
  const [numberOfElevators, setNumberOfElevators] = useState<number>(4);

  console.log('numberOfFloors', numberOfFloors);
  console.log('numberOfElevators', numberOfElevators);

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
    dispatch(setElevatorSystem({ numberOfFloors, numberOfElevators }));
  }, [dispatch, numberOfElevators, numberOfFloors]);

  return (
    <StyledFormContainer>
      <h1>Change system data:</h1>
      <StyledInputContainer>
        <label>Number of floors</label>
        <input
          type='number'
          value={numberOfFloors}
          onChange={handleNumberOfFloorsChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label>Number of elevators</label>
        <input
          type='number'
          value={numberOfElevators}
          onChange={handleNumberOfElevatorsChange}
        />
      </StyledInputContainer>
      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
    </StyledFormContainer>
  );
}
