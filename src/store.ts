import { configureStore } from '@reduxjs/toolkit';
import { ElevatorSystem, ElevatorSystemTypes } from 'state/ElevatorSystem';

const reducer = { ElevatorSystem: ElevatorSystem.reducer };

export const store = configureStore({
  reducer,
});

export interface StateType {
  ElevatorSystem: ElevatorSystemTypes;
}
