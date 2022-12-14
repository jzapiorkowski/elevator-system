import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ElevatorSystem } from 'utils/ElevatorSystem/ElevatorSystem';
import { arabicToRoman } from './utils';
import { useSelector } from 'react-redux';
import { StateType } from 'store';

interface ElevatorLevelProps {
  level: number;
  elevatorIndex: number;
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

export function ElevatorLevel({ level, elevatorIndex }: ElevatorLevelProps) {
  const system = useSelector<StateType, ElevatorSystem>(
    (state) => state.ElevatorSystem.system
  );

  const RomanLevel = useMemo(() => arabicToRoman(level), [level]);
  const [displayElevatorCar, setDisplayElevatorCar] = useState<'x' | null>(
    null
  );

  useEffect(() => {
    const getCurrentLevelInterval = setInterval(() => {
      setDisplayElevatorCar(
        system.status().find((elevator) => elevator.id === elevatorIndex)
          ?.getCurrentLevel === level
          ? 'x'
          : null
      );
    }, 1500);

    return () => clearInterval(getCurrentLevelInterval);
  }, [elevatorIndex, level, system]);

  return (
    <StyledContainer>
      <StyledElevatorLevel>
        {RomanLevel} {displayElevatorCar}
      </StyledElevatorLevel>
    </StyledContainer>
  );
}
