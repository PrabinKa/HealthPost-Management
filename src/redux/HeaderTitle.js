import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
}

export const HeaderTitle = createSlice({
    name: 'title',
    initialState,
    reducers: {
      headerTitle: (state, action) => {
        // console.warn("action", action)
        state.title = action.payload
      },
    },
  })

export const { headerTitle } = HeaderTitle.actions

export default HeaderTitle.reducer