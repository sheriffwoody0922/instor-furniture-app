import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bigstuff from './pages/BigStuff'
import Middlestuff from './pages/MiddleStuff'
import Smallstuff from './pages/SmallStuff'
import Detailpage from './pages/Detailpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/big-stuff' element={<Bigstuff />}></Route>
          <Route path='/middle-stuff' element={<Middlestuff />}></Route>
          <Route path='/small-stuff' element={<Smallstuff />}></Route>
          <Route path='/furniture/:id' element={<Detailpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App