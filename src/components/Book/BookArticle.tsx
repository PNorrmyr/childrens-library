import { useParams } from 'react-router-dom'
import BookType from '../../models/Book'

type Props = {
    bookList : BookType[]
  }

function BookArticle({ bookList } : Props) {
  const { id } = useParams()
  let bookId : number

  if( id !== undefined) {
    bookId = parseInt(id)
  }

  const book : BookType | undefined= bookList.find(book => {book.id === bookId})

  if(!book) {
    return <section>Book not found</section>
  }
  


  return (
    <article className="book">
    <h2 className="book-title">{ book.title }</h2>
    <p className="book-author">By { book.author }</p>
    <p className="book-desc">{book.plot }</p>
    <div className="short-info">
      <p className="book-audience">Audience: { book.audience }</p>
      <p className="book-year">First published: { book.year }</p>
      <p className="book-pages">Pages: { book.pages }</p>
      <p className="book-publisher">Publisher: { book.publisher }</p>
    </div>
    <button className="btn">Oh, I want to read it!</button>
  </article>
  )
}

export default BookArticle
