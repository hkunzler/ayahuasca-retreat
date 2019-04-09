import React from 'react';
import './../footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id='footer'>
            <a href='https://www.facebook.com/Ascension-Medicina-430642114134031/?epa=SEARCH_BOX' _target='#'><i class="fab fa-facebook-square"></i> Find us on Facebook</a>
            <Link to ='/login'>
                <a href=''><i class="fas fa-sliders-h"></i> Admin</a>
            </Link>
        </div>
    );
};

export default Footer;