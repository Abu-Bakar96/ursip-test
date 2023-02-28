import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeArticle } from '../redux/slices/articlesSlice'
import Comments from '../Comments/Comments'
function FullArticle() {

  const navigate = useNavigate()
  const [data, setData] = React.useState()
  const dispatch = useDispatch()
  const { id } = useParams()

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить статью?')) {
      dispatch(removeArticle(id))
      navigate('/')
    }
  }



  React.useEffect(() => {
    axios
      .get(`/api/articles/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.warn(err)
        alert('Ошибка при получении артикла')
      })
  }, [])



  if (!data) {
    return <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </div>
  </div>
  }

  return (
    <div className={'d-flex flex-column'}>
      <div className="card mt-5 mb-5" style={{ width: '1000px' }}>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.text}</p>
          <button onClick={onClickRemove} href="#" className="btn btn-danger">
            Удалить
          </button>
        </div>
      </div>
      <Comments articleId={id}/>
      
    </div>
  )
}

export default FullArticle
