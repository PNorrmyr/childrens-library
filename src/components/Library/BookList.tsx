import { useEffect, useState } from 'react'
import axios from 'axios'
import BookItem from '../Book/BookItem'
import BookType from '../../models/Book'
import './booklist.css'
import { Link } from 'react-router-dom'

type Props = {
  setSelectedBook : (id : number | undefined ) => void
}

function BookList({ setSelectedBook } : Props) {
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
          <Link to={ book }>
              {
                  booklist?.map(book => {
                      return <BookItem
                              setSelectedBook = { setSelectedBook }
                              key ={ book.id } 
                              book = { book } 
                            />
                  })
              }
          </Link>
        </div>
    </section>
  )
}

export default BookList
