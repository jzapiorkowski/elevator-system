import { ElevatorShaft } from './modules/ElevatorShaft';
import { ElevatorSystem } from './utils/ElevatorSystem/ElevatorSystem';

function App() {
  const system = new ElevatorSystem();

  return (
    <div className='App'>
      <ElevatorShaft system={system} />
    </div>
  );
}

export default App;
