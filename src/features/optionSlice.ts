import { createSlice } from '@reduxjs/toolkit'
import { type ViewOptions } from 'types/Types'
import type { RootState } from 'features/store'

const initialState: ViewOptions = {
  showDNAttribute: false,
}

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    toggleDNAttribute: (state) => {
      state.showDNAttribute = !state.showDNAttribute
    },
  },
})

export const optionSelector = (state: RootState): ViewOptions => state.option

export const { toggleDNAttribute } = optionSlice.actions

export default optionSlice.reducer
