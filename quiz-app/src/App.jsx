import './App.css'
import Home from './component/Home';
import Quiz from './component/Quiz';
import Result from './component/Result';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
