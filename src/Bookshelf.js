import React from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        update: PropTypes.func.isRequired
    }
    
    render() {
        const {name, books, update} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li
                            key={book.id}>
                            <Book 
                                book={book}
                                update={update}
                            />
                        </li>
                    ))}
                </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;