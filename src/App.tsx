import './App.css'
import { Routes, Route } from 'react-router-dom'
import Library from './pages/Library'
import DetailedView from './pages/DetailedView'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BookType from './models/Book'



function App() {
	const [selectedBookId, setSelectedBookId] = useState<number>();
	const [bookList, setBookList] = useState<BookType[]>([])

	useEffect(() => {
		axios.get('https://santosnr6.github.io/Data/childrens_books.json')
		.then(response => {
			setBookList(response.data);
		})
	}, [])


	console.log(bookList);
	console.log(selectedBookId);
	

  return (
    <div className="app">
    	<Routes>
			<Route path='/' element={ <Library 
										setSelectedBookId = { setSelectedBookId }
										bookList = { bookList } 
										/> 
									}/>
			<Route path='/book/:id' 
				element={ <DetailedView 
						   bookList = { bookList }
						   /> 
						} />

    	</Routes>
	</div>
  )
}

export default App
