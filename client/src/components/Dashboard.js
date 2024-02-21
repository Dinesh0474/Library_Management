import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
    const [books, setBooks] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [searchResultFound, setSearchResultFound] = useState(false);
    const [displayCount, setDisplayCount] = useState(5); 
    const navigate = useNavigate();

    const getBooks = async () => {
        try {
            const response = await fetch("http://3.94.103.64:5000/books/display", {
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            });
            const data = await response.json();
            console.log("Data received:", data); // Log data received from the server
            if (Array.isArray(data)) {
                setBooks(data);
            } else {
                console.error("Data received is not an array:", data);
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    
    useEffect(() => {
        getBooks();
    }, []);

    const logout = () => {
        navigate("/login");
    };

    useEffect(() => {
        setSearchResultFound(filteredBooks.length > 0);
    }, [filterText, books]);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(filterText.toLowerCase()) ||
        book.author.toLowerCase().includes(filterText.toLowerCase()) ||
        book.subject.toLowerCase().includes(filterText.toLowerCase()) ||
        book.publish.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleShowMore = () => {
        setDisplayCount(displayCount + 5); // Increase display count by 5
    };

    const handleClick = async (book_id) => {
       props.setbookid(book_id)
       navigate("/borrow")
        try {
            // Send a request to your backend to handle the borrowing process
            const response = await fetch(`http://3.94.103.64:5000/user/borrow/${book_id}`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify()
            });
          
            getBooks();
        } catch (error) {
            console.error("Error borrowing book:", error.message);
        }
    };
    return (
        <Fragment>
            <h1 className="text-center">Books List</h1>
            <div className="container py-5">
                <input
                    className="form-control form-control-dark col-12 col-md-6 mx-auto mb-4"
                    type="text"
                    placeholder="Search by name, author, subject, or publish"
                    aria-label="Search"
                    id="title"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
                {!searchResultFound &&
                    <div className="alert alert-warning text-center" role="alert">
                        No products found matching your search criteria.
                    </div>
                }
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {filteredBooks.slice(0, displayCount).map((book) => (
                        <div className="col" key={book.book_id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">Author: {book.author}</p>
                                    <p className="card-text">Subject: {book.subject}</p>
                                    <p className="card-text">Publish: {book.publish}</p>
                                    <p className="card-text">Stock: {book.stocks}</p>
                                </div>
                                <button onClick={() => handleClick(book.book_id)}>Borrow</button>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredBooks.length > displayCount && (
                    <button className="btn btn-primary d-block mx-auto mt-4" onClick={handleShowMore}>
                        Show More
                    </button>
                )}
            </div>
            <button className="btn btn-danger d-block mx-auto mb-4" onClick={logout}>
                Logout
            </button>
        </Fragment>
    );
};

export default Dashboard;
