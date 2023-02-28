import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddArticle() {
  const navigate = useNavigate()
  const [text, setText] = React.useState('')
  const [title, setTitle] = React.useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const article = {
        title,
        text,
      }

      await axios.post('/api/articles', article)
      navigate('/')
    } catch (err) {
      console.warn(err)
      alert('Ошибка при создании статьи!')
    }
  }

  return (
    <div className="row justify-content-center card-body">
      <form className="mb-3 mt-5" style={{ width: '600px' }}>
        <div className="mb-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Статья
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Текст
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button onClick={(e) => onSubmit(e)} type="submit" className="btn btn-primary">
          Добавить статью
        </button>
      </form>
    </div>
  )
}

export default AddArticle
