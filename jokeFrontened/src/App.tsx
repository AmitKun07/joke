import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JokeList from "./components/JokeList";
import JokeForm from "./components/JokeForm";


const App= () =>{
  

  return (
   <Router>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<JokeList />} />
          <Route path="/submit" element={<JokeForm />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
