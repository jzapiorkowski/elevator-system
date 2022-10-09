import { ElevatorCallButton } from 'modules/ElevatorCallButton';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { arabicToRoman } from './utils';

interface ElevatorLevelProps {
  level: number;
  system: ElevatorSystem;
}

const StyledElevatorLevel = styled.div`
  border: solid black 1px;
  padding: 20px 50px;
  width: 150px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export function ElevatorLevel({ level, system }: ElevatorLevelProps) {
  const RomanLevel = useMemo(() => arabicToRoman(level), [level]);
  const [displayElevatorCar, setDisplayElevatorCar] = useState<'x' | null>(
    null
  );

  useEffect(() => {
    const getCurrentLevelInterval = setInterval(() => {
      setDisplayElevatorCar(
        system.status().getCurrentLevel === level ? 'x' : null
      );
    }, 300);

    return () => clearInterval(getCurrentLevelInterval);
  }, [level, system]);

  return (
    <StyledContainer>
      <ElevatorCallButton level={level} system={system} />
      <StyledElevatorLevel>
        {RomanLevel} {displayElevatorCar}
      </StyledElevatorLevel>
    </StyledContainer>
  );
}
