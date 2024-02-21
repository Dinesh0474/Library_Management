
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BorrowDetails = () => {
  const [borrowDetails, setBorrowDetails] = useState([]);
 


  const getUserDetails = async () => {
    try {

        const response = await fetch("http://3.94.103.64:5000/admin/borrowdetails",{
            method: "GET",
            headers:{
                'Content-Type':"application/json"
            }
        })
        const data = await response.json();
        if (Array.isArray(data)) {
            setBorrowDetails(data)
        } else {
            console.error("Data received is not an array:", data);
        }

        
    } catch (error) {
        console.error(error.message);
        
    }
   }

  useEffect(() => {
    getUserDetails();
  

    
  }, []);
  

  return (
    <div className="table-container">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Book Id</th>
            <th>User Name</th>
            <th>User Id</th>
            <th>User Phone No</th>
            <th>Borrow Date</th>
            <th>Return date</th>
            
          </tr>
        </thead>
        <tbody>
          {borrowDetails.map((borrowDetail) => (
            <tr key={borrowDetail.user_id}>
              <td>{borrowDetail.book_id}</td>
              <td>{borrowDetail.user_name}</td>
              <td>{borrowDetail.user_id}</td>
              <td>{borrowDetail.user_phone_no}</td>
              <td>{borrowDetail.borrow_date.slice(0,11).replace('T','')}</td>
              <td>{borrowDetail.return_date.slice(0,11).replace('T','')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowDetails;





