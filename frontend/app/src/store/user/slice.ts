import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserEntity } from '@sqs-contracts/users-contracts';

export type UserData = UserEntity | null;

export type UserState = Readonly<UserData>;

export const initialState = null as UserState;

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<UserEntity>) => action.payload,
  },
});

export const { setUser } = slice.actions;
export default slice.reducer;
