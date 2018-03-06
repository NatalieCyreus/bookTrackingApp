import React from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
    state = {
      shelf: '',
      book: {id : -1}
    }

    handleChange = (e) => {
      this.setState({shelf:e.target.value});
      this.setState({book:e.target.id});

      BooksAPI.update(e.target.id , e.target.value).then((response)=> {
        console.log(response)
      })
    }

    render() {
      return (
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select
                          value={this.state.shelf}
                          onChange={this.handleChange}
                          id={book.id}
                          >
                          <option
                            value="none"
                            disabled
                            >Move to...</option>
                          <option
                            value="currentlyReading"
                            >Currently Reading</option>
                          <option
                          value="wantToRead"
                          >Want to Read</option>
                          <option
                            value="read">Read</option>
                          <option
                            value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
        )
    }

}
export default Book
