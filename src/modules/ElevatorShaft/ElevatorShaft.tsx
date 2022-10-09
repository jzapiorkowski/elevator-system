import { ElevatorLevel } from './ElevatorLevel';

export function ElevatorShaft({ system }: { system: any }) {
  const numberOfLevels = 6;

  const shaft = Array.from(Array(numberOfLevels).keys())
    .map((level) => {
      return <ElevatorLevel level={level + 1} system={system} />;
    })
    .reverse();

  return <>{shaft}</>;
}
