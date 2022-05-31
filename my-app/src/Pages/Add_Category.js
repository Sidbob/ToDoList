import axios from "axios";
import React, { useState } from "react";


const Add_Category = () => {




    const [category, setCategory] = useState({ category_name: "" });


    function submit(e) {
        e.preventDefault();

        const { category_name } = category;

        axios.post('http://localhost:3000/category/add', {
            category_name
        })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setCategory(response.data.data)
                alert('Category Added Successfully')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                alert('Failed To Add Category')
            })

    }

    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setCategory({ ...category, [name]: value })
    }
    return (


        <>
            <h1>Add Category</h1>

            <form onSubmit={submit}>

                <input type="text" placeholder="Add New Category"
                    onChange={(e) => handle(e)}
                    name="category_name"
                    value={category.category_name}
                />
                <br /><br />
                <button type="submit">Add Category</button>

            </form>
        </>

    )
}

export default Add_Category;