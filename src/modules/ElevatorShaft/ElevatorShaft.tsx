import { ElevatorLevel } from './ElevatorLevel';

export function ElevatorShaft() {
  const numberOfLevels = 6;

  const shaft = Array.from(Array(numberOfLevels).keys())
    .map((level) => {
      return <ElevatorLevel level={level + 1} />;
    })
    .reverse();

  return <>{shaft}</>;
}
