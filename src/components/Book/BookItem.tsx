import BookType from '../../models/Book'
import './BookItem.css'
import { Link } from 'react-router-dom'

type Props = {
  book : BookType,
  setSelectedBookId : (id : number) => void
}




function BookItem({ book, setSelectedBookId } : Props) {

  return (
	<Link to={`/book/${ book.id }`}
			className='link'
	>
		<section 
			onClick= { () => setSelectedBookId(book.id) } 
			className='book-card' 	
			style={{backgroundColor: book.color}}
		>
			<p className="book-title">{ book.title }</p>
			<p className="book-author">{ book.author }</p>

		</section>
	</Link>
  )
}

export default BookItem
