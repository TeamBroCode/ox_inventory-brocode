import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : {}
}

const damageSlice = createSlice({
    name: 'damage',
    initialState,
    reducers: {
        setDamage: (state:any, action:any) => {
            state.data = action.payload;
        },
    }
})

export const { setDamage } = damageSlice.actions;
export default damageSlice.reducer;