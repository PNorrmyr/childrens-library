import BookType from '../../models/Book'
import './BookItem.css'

type Props = {
  book : BookType,
  setSelectedBook : (id : number) => void
  
}



function BookItem({ book, setSelectedBook } : Props) {
  return (
    <section onClick= { () => setSelectedBook(book.id) }className='book-card'>
        <p className="book-title">{ book.title }</p>
        <p className="book-author">{ book.author }</p>
    </section>
  )
}

export default BookItem
