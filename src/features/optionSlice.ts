import { createSlice } from '@reduxjs/toolkit'
import { type ViewOptions } from 'types/Types'
import type { RootState } from 'features/store'

const initialState: ViewOptions = {
  showDNAttribute: false,
  showJsonOutput: false,
}

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    toggleDNAttribute: (state) => {
      state.showDNAttribute = !state.showDNAttribute
    },
    toggleJsonOutput: (state) => {
      state.showJsonOutput = !state.showJsonOutput
    },
  },
})

export const optionSelector = (state: RootState): ViewOptions => state.option

export const { toggleDNAttribute, toggleJsonOutput } = optionSlice.actions

export default optionSlice.reducer
