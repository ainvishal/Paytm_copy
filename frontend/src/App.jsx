import {Route, Routes, BrowserRouter } from 'react-router-dom';
import {Signup} from '../pages/signup';
import {Signin} from '../pages/signin';
import {Dashbord} from '../pages/dashbord';
import {Sendmoney} from '../pages/senMoney';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path="/dashbord" element={<Dashbord/>}/>
        <Route path="/send" element={<Sendmoney/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
