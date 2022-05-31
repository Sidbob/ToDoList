

import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
// import { Button, Select } from '@material-ui/core';




const Delete_Product = () => {


    const [listproduct, setListproduct] = useState([])


    const [ProductName, setName] = useState('')
    const [price, setPrice] = useState('')

  

    useEffect(() => {
        getList();
    }, [listproduct])


    const getList = () => {
        axios.post('http://localhost:3000/product/list')

            .then(function (response) {
                // console.log(response.data.data);
                setListproduct(response.data.data)
                // setName(response.data.data[0].name)
                // setPrice(response.data.data[0].price)
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    // useEffect(() => {
    //     console.log("First Load")
    //     axios.post('http://localhost:9027/user/list-product')

    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data.data);
    //             setListproduct(response.data.data)
    //             setName(response.data.data[0].name)
    //             setPrice(response.data.data[0].price)

    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, [])

    // const SelectUser = (id) => {
    //     console.log(listproduct[id - 1])
    //     setName(listproduct[id - 1].name)
    //     setPrice(listproduct[id - 1].price)

    // }




    const deleteProduct = async (id) => {
        console.log(id)
        const data = await axios.delete(`http://localhost:3000/product/delete/${id}`, {

        })
            .then(function (response) {
                // handle success
                console.log("Deleted");
                // setListproduct(listproduct.filter(_person => _person.id !== id))
                setListproduct(response.data.data)
                getList()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }



    return (
        <div>

            <h1>Delete Product</h1>
            <input type="text" placeholder='Enter Product'  />
            <input type="text" placeholder='Enter Product Id'  />

            {listproduct.map((list, index) => {
                return (
                    <div className="content-box" key={index}>
                        <h2>Product Name:{list.ProductName}</h2>
                        <h5>Product Id:{list._id}</h5>
                        <div className='btnmain'>
                        <button className="deletebtn" onClick={() => deleteProduct(list._id)}>Delete</button>
                        {/* <p><Button onClick={() => SelectUser(list._id)}>Update</Button></p> */}
                        <button className='updatebtn'><Link style={{textDecoration:"none", color:"blue"}} to={"/update-old-category/"+list._id}>Update</Link></button>
                        </div>
                    </div>
                )
            })}
            <br /><br />
        </div>
    )
}



export default Delete_Product;