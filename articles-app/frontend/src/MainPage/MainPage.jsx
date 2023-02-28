import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../Pagination/Pagination'
import ArticlePreview from '../ArticlePreview/ArticlePreview'
import { fetchArticles, setCurrentPage } from '../redux/slices/articlesSlice'

const MainPage = () => {
  const articles = useSelector((state) => state.articles.articles)
  const currentPage = useSelector((state) => state.articles.currentPage)
  const articlesPerPage = useSelector((state) => state.articles.articlesPerPage)
  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(false)

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchArticles())
    setCurrent(true)
  }, [])
  
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  const filterArticle = currentArticles.filter((article) => article.title.toLowerCase().includes(input.toLowerCase()))
  
  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }
  if (!current) {
    return <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </div>
  </div>
  }

  return (
    <div>
      <div className="mb-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
        </label>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Поиск"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      {filterArticle.map((article) => (
        <ArticlePreview key={article.id} title={article.title} id={article.id} />
      ))}
      <br />
      <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} />
    </div>
  )
}
export default MainPage
