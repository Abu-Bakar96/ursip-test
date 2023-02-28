import { Routes, Route } from 'react-router-dom'
import { useRef } from "react";


import AddArticle from './AddArticle/AddArticle'
import FullArticle from './FullArticle/FullArticle'
import { Header } from './Header'
import MainPage from './MainPage/MainPage'

function App() {
  return (
    <>
    <Header/>
    <div className="d-flex justify-content-center">
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/add-article" element={<AddArticle/>}/>
      <Route path="/articles/:id" element={<FullArticle/>}/>
    </Routes>
    </div>
    
    </>
  )
}

export default App
