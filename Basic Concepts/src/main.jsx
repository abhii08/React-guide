import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import App from './App.jsx'
import Form from './Form.jsx'
import Fetch from './Fetch.jsx'
import MultipleReturns from './MultipleReturns.jsx'
import Memo from './Memo/Memo.jsx'
import UseMemo from './UseMemo.jsx'
import A from "../src/ContextAPI/A.jsx"
import UseReducer from './UseReducer.jsx'
import UseRef from './UseRef.jsx'
import UseRefEx from './UseRefEx.2.jsx'
import CustomHook from './CustomHooks/CustomHook.jsx'
import UseTransition from './UseTransition.jsx'
import HOC from './HOC/HOC.jsx'
import UseForm from './UseForm.jsx'
import Axios from './Axios.jsx'
import AxiosPost from './AxiosPost.jsx'
import Pagination from './Pagination.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
