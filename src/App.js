import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact'
import Project from './component/project/project'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout />}>
         <Route path='project'  element={<Project />} />
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
