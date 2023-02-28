import React from 'react'
import { fetchComments } from '../redux/slices/commentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import AddComment from '../AddComment/AddComment'
import SingleComment from '../SingleComment/SingleComment'

function Comments({ articleId }) {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comments.comms.comm)
  const [btn, setBtn] = React.useState(false)


  React.useEffect(() => {
      dispatch(fetchComments(articleId))
  }, [])

  const onClickShowComments = () => {
    setBtn(!btn)
  }

  
  return (
    <>
      <p>
        <button
          onClick={onClickShowComments}
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          {btn ? 'Скрыть комментарии' : 'Показать комментарии'}
        </button>
      </p>
      <div className={btn ? 'show' : 'collapse'} id="collapseExample">
        {comments.map((el) => (
          <SingleComment key={el.id} text={el.text} user={el.user}/>
        ))}
        <AddComment articleId={articleId}/>
      </div>
    </>
  )
}

export default Comments