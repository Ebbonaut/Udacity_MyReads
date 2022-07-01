import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class BooksOverview extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        update: PropTypes.func.isRequired
    }

    render() {
        const { books, update } = this.props;
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf 
                    name="Currently Reading"
                    books={books.filter(book => book.shelf==='currentlyReading')}
                    update={update}
                />
                <Bookshelf 
                    name="Want to Read"
                    books={books.filter(book => book.shelf==='wantToRead')}
                    update={update}
                />
                <Bookshelf 
                    name="Read"
                    books={books.filter(book => book.shelf==='read')}
                    update={update}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        );
    }
}

export default BooksOverview;