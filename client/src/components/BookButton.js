import React from 'react';
import {Link} from 'react-router-dom'

const BookButton = () => {
    return (
        <div>
            <Link to='/book'>
        <button
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
              background: "#1e351e",
            padding: "5px 15px",
            borderRadius: "10%",
            color: "white",
            boxShadow: '5px 10px',
            zIndex: '99'
          }}
        >
          Book Retreat
        </button>
            </Link>
      </div>
    );
};

export default BookButton;