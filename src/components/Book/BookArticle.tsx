import BookType from '../../models/Book'
import { Link } from 'react-router-dom'
import './bookArticle.css'

type Props = {
    book : BookType
  }

function BookArticle({ book } : Props) {



  return (
    
    <article className="book-article">
      <div className="book-wrapper">
      <Link to={"/"}>
          <div className="arrow">
          </div>
        </Link>
          <div className="book-cover" style={{backgroundColor: book.color}}>
            <h2 className="book-cover-title">{ book.title }</h2>
            <p className="book-cover-author">By { book.author }</p>
          </div>
        <aside className="aside">
          <h2 className="book-title">{book.author}</h2>
          <p className="book-author">By {book.author}</p>
          <p className="book-desc">{book.plot }</p>
          <div className="short-info">
            <p className="book-audience"><strong>Audience:</strong> { book.audience }</p>
            <p className="book-year"><strong>First published: </strong> { book.year }</p>
            <p className="book-pages"><strong>Pages:</strong> { book.pages }</p>
            <p className="book-publisher"><strong>Publisher:</strong> { book.publisher }</p>
          </div>
          <button className="btn">Oh, I want to read it!</button>
        </aside>
      </div>
    </article>
  )
}

export default BookArticle
