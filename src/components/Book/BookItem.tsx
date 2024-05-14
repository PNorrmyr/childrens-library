import BookType from '../../models/Book'

type Props = {
  book : BookType
}

function BookItem({ book } : Props) {
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

export default BookItem
