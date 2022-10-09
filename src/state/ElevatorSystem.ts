import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ElevatorSystem as ElevatorSystemClass } from 'utils/ElevatorSystem/ElevatorSystem';

export interface ElevatorSystemTypes {
  system: ElevatorSystemClass;
}

const initialState: ElevatorSystemTypes = {
  system: new ElevatorSystemClass(4, 6),
};

export const ElevatorSystem = createSlice({
  name: 'ElevatorSystem',
  initialState,
  reducers: {
    //@ts-ignore
    setElevatorSystem(
      state: ElevatorSystemTypes,
      action: PayloadAction<{
        numberOfElevators: number;
        numberOfFloors: number;
      }>
    ) {
      state.system = new ElevatorSystemClass(
        action.payload.numberOfElevators,
        action.payload.numberOfFloors
      );
    },
  },
});

export const { setElevatorSystem } = ElevatorSystem.actions;
