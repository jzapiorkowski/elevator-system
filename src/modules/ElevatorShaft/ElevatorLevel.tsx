import { useMemo } from 'react';
import styled from 'styled-components';
import { arabicToRoman } from './utils';

interface ElevatorLevelProps {
  level: number;
}

const StyledElevatorLevel = styled.div`
  border: solid black 1px;
  padding: 20px 50px;
  width: 150px;
`;

export function ElevatorLevel({ level }: ElevatorLevelProps) {
  const RomanLevel = useMemo(() => arabicToRoman(level), [level]);

  return <StyledElevatorLevel>{RomanLevel}</StyledElevatorLevel>;
}
