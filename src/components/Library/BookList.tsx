import { useEffect, useState } from 'react'
import axios from 'axios'
import BookItem from '../Book/BookItem'
import BookType from '../../models/Book'
import './booklist.css'


function BookList() {
	const [booklist, setBooklist] = useState<BookType[]>()

	useEffect(() => {
		axios.get('https://santosnr6.github.io/Data/childrens_books.json')
		.then(response => {
			setBooklist(response.data);
		})
	}, [])

	console.log(booklist);

  return (
    <section className='page-booklist'>
        <div className="booklist-content-wrapper">
            {
                booklist?.map(book => {
                    return <BookItem key={ book.id } book = { book } />
                })
            }
        </div>
    </section>
  )
}

export default BookList
