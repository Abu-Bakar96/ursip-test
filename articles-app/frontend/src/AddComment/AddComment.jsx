import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchComments } from '../redux/slices/commentsSlice';
import axios from 'axios'


function AddComment({articleId}) {
  const dispatch = useDispatch()
  const [text, setText] = React.useState('')


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const comment = {
            user: 'Анонимный пользователь',
            text,
            article: articleId,
          }
    
          await axios.post('/api/comments', comment)
          dispatch(fetchComments(articleId))
          setText('')
        } catch (err) {
          console.warn(err)
          alert('Ошибка при создании комментария!')
        }
      }
  return (
    <form className="d-flex mb-5">
          <input
            onChange={(e) => setText(e.target.value)}
            className="form-control me-2"
            value={text}
            type="search"
            placeholder="Комментарии"
            aria-label="Search"
          />
          <button onClick={(e) => onSubmit(e)} type="submit" className="btn btn-outline-success">
            Добавить
          </button>
        </form>
  )
}

export default AddComment