import React from 'react'
import { Link } from 'react-router-dom'




export const Header = () => {
  

  return (
    <nav className="navbar bg-light mb-5">
      <form className="container-fluid justify-content-between">
        <Link to="/">
        <button className="btn btn-outline-primary" type="button">
          Главная
        </button>
        </Link>
        <Link to="/add-article">
        <button className="btn btn-outline-success" type="button">
          Добавить
        </button>
        </Link>
      </form>
    </nav>
  )
}
