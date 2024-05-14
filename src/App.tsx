import './App.css'
import { Routes, Route } from 'react-router-dom'
import Library from './pages/Library'
import DetailedView from './pages/DetailedView'
import { useState } from 'react'



function App() {
	const [selectedBook, setSelectedBook] = useState<number>();

	console.log(selectedBook);
	

  return (
    <div className="app">
    	<Routes>
			<Route path='/' element={ <Library 
			setSelectedBook = { setSelectedBook } /> }/>
			<Route path='/:id' element={ <DetailedView /> } />

    	</Routes>
	</div>
  )
}

export default App
