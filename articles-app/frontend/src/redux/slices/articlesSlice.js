import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const { data } = await axios.get('/api/articles')
  return data
})



const initialState = {
  articles: [],
  status: 'loaded',
  currentPage: 1,
  articlesPerPage: 3,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(el => el.id !== action.payload)
    },
  },

  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.articles = []
      state.status = 'loading'
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.articles = action.payload
      state.status = 'loaded'
    },
    [fetchArticles.rejected]: (state) => {
      state.articles = []
      state.status = 'error'
    },
  },
})

export const { setArticles, setCurrentPage, removeArticle } = articlesSlice.actions

export default articlesSlice.reducer
