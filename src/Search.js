import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from "./Book";
import PropTypes from 'prop-types';

class Search extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        update: PropTypes.func.isRequired
    }

    state = {
        searchedBooks: []
    }
    
    searchBooks = (query) => {
       if(query) {
            BooksAPI.search(query)
            .then((response) => {
                let searchedBooks = [];
                if(!response.error) {
                    searchedBooks = response;
                }
                this.setState(() => ({
                    searchedBooks: searchedBooks
                }))
            })
        } else {
            this.setState(() => ({
                searchedBooks: []
            }))
        }
            
    }

    render() {
        let { searchedBooks } = this.state;
        const { update, books } = this.props;

        searchedBooks = searchedBooks.map(b => {
            const book = books.find(el => el.id === b.id)
            return book ? book : b;
        });

        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to='/'>
                    <button className="close-search">Close</button>
                </Link>
              <div className="search-books-input-wrapper">
                
                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={(event) => this.searchBooks(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchedBooks.map((book) => (
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

export default Search;