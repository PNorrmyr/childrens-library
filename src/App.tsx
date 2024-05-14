import './App.css'
import { Routes, Route } from 'react-router-dom'
import Library from './pages/Library'
import DetailedView from './pages/DetailedView'



function App() {

	

  return (
    <div className="app">
    	<Routes>
			<Route path='/' element={ <Library /> }/>
			<Route path='/:id' element={ <DetailedView /> } />

    	</Routes>
	</div>
  )
}

export default App
