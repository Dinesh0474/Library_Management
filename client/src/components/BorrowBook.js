import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmail } from "../App";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BorrowBook = (props) => {
    const [book_id, setbook_id] = useState(props.bookid);
    const { email: user_email } = useEmail(); 

    const [borrow_date, setBorrow_date] = useState(new Date());
    const [return_date, setReturn_date] = useState(new Date());

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            book_id: book_id,
            borrow_date: borrow_date,
            return_date: return_date
        };

        try {
            const response = await fetch(`http://3.94.103.64:5000/admin/userdetails/${user_email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setbook_id('');
                setBorrow_date(new Date())
                setReturn_date(new Date())
                navigate("/admindashboard");
            } else {
                console.error('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <main className="container mt-4">
            <h1>{user_email}</h1>
            <h1 className="text-center mb-4">Add Book</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Book Id</label>
                            <input type="text" className="form-control" name="book_id" value={book_id} onChange={(e) => setbook_id(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Borrow Date</label>
                            <DatePicker className="form-control" selected={borrow_date} onChange={(date) => setBorrow_date(date)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Return Date</label>
                            <DatePicker className="form-control" selected={return_date} onChange={(date) => setReturn_date(date)} />
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default BorrowBook;
