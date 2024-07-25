import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type LdapSearchParams, type LdapSearchRequest } from 'types/Types'
import type { RootState } from 'features/store'

const initialState: LdapSearchRequest = {
  server: '',
  params: {
    base: '_',
    scope: 'one',
    filter: '_',
    attributes: ['dn'],
  },
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    selectServer: (state, action: PayloadAction<string>) => {
      state.server = action.payload
      state.params = { ...initialState.params }
    },
    setBase: (state, action: PayloadAction<string>) => {
      state.params.base = action.payload
    },
    setParams: (state, action: PayloadAction<LdapSearchParams>) => {
      state.params = action.payload
    },
    resetParams: (state, action: PayloadAction<LdapSearchParams>) => {
      state.params = {
        ...initialState.params,
        ...action.payload,
      }
    },
    updateParams: (state, action: PayloadAction<LdapSearchParams>) => {
      state.params = {
        ...state.params,
        ...action.payload,
      }
    },
  },
})

export const inputSelector = (state: RootState): LdapSearchRequest =>
  state.input

export const { selectServer, setBase, setParams, resetParams, updateParams } =
  inputSlice.actions

export default inputSlice.reducer
