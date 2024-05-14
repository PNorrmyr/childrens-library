import BookItem from '../Book/BookItem'
import BookType from '../../models/Book'
import './booklist.css'

type Props = {
  setSelectedBookId : (id : number | undefined ) => void,
  bookList : BookType[]
}

function BookList({ bookList, setSelectedBookId } : Props) {


  return (
    <section className='page-booklist'>
        <div className="booklist-content-wrapper">
              {
                  bookList?.map(book => {
                      return <BookItem
                              setSelectedBookId = { setSelectedBookId }
                              key ={ book.id } 
                              book = { book } 
                            />
                  })
              }
        </div>
    </section>
  )
}

export default BookList
