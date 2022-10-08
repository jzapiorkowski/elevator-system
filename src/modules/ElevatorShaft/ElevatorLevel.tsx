import styled from 'styled-components';

interface ElevatorLevelProps {
  level: number;
}

const StyledElevatorLevel = styled.div`
  border: solid black 1px;
  padding: 20px 50px;
  width: 150px;
`;

export function ElevatorLevel({ level }: ElevatorLevelProps) {
  return <StyledElevatorLevel>{level}</StyledElevatorLevel>;
}
