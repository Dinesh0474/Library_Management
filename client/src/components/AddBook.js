import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
  const [title, setTitle] = useState('');

  const [author, setAuthor] = useState('');
  const [publish,setPublish] = useState('');
  const [subject,setSubject] = useState('');
  
  const navigate = useNavigate();

  // [product_name, move_in, move_out, product_type, destination, expiry_date, delivery_agent,product_quality, delivery_agent_id]

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const formData = {
      title:title,
      author:author,
      publish:publish,
      subject:subject

    };

    try {
      const response = await fetch('http://localhost:5000/books/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setAuthor('')
        setPublish('')
        setSubject('')
        setTitle('')
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
      <h1 className="text-center mb-4">Add Book</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" className="form-control" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Publish</label>
              <input className="form-control" name= "publish" value={publish} onChange={(e) => setPublish(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
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

export default AddBook;
