import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';



const DeleteComponent = () => {
    return (

        <>
            <div className="ribbon-drop-wrapper" id="bar">
                <div className='nav' id='navbar'>
                    <ul className='nav'>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page"><Link to="/Delete_Category">Delete_Category</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/Delete_Subcategory">Delete_SUbcategory</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/Delete_Product">Delete_Product</Link></a>
                        </li>



                    </ul>

                </div>
            </div>
        </>
    )
}

export default DeleteComponent;