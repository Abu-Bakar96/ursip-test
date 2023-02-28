import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchComments = createAsyncThunk('comments/fetchComments', async (articleId) => {
  const { data } = await axios.get(`/api/comments?article=${articleId}`)
  return data
})


const initialState = {
  comms: {
    comm: [],
    status: 'loading',
  },
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,

  reducers: {
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.comms.comm = []
      state.comms.status = 'loading'
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.comms.comm = action.payload
      state.comms.status = 'loaded'
    },
    [fetchComments.rejected]: (state) => {
      state.comms.comm = []
      state.comms.status = 'error'
    },
  },
})

export default commentsSlice.reducer