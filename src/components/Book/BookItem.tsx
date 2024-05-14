import BookType from '../../models/Book'
import './BookItem.css'

type Props = {
  book : BookType
}

function BookItem({ book } : Props) {
  return (
    <section className='book-card'>
        <p className="book-title">{ book.title }</p>
        <p className="book-author">{ book.author }</p>
    </section>
  )
}

export default BookItem
