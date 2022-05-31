


import axios from "axios";
import React, { useState } from "react";


const Add_Subcategory = () => {


    const [subcategory, setSubCategory] = useState({ subcategoryname: "",category_id: "" });


    function submit(e) {
        e.preventDefault();

        const { subcategoryname, category_id } = subcategory;

        axios.post('http://localhost:3000/sub_category/add', {
            subcategoryname, category_id
        }
        )
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setSubCategory(response.data.data)
                alert('Sub-Category Added Successfully')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                alert('Failed To Add Sub-Category')
            })

    }

    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSubCategory({ ...subcategory, [name]: value })
    }





    return (
        <>

            <div className="categorybox">
                <h1 style={{ fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif", margin: "20px" }}>Add New Sub-Category</h1>

                <form onSubmit={submit}>

                    <input type="text" placeholder="Add New Sub-Category"
                        onChange={(e) => handle(e)}
                        name="subcategoryname"
                        value={subcategory.subcategoryname}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    />
                    <br /><br />

                    <input type="text" placeholder="Add category_id"
                        onChange={(e) => handle(e)}
                        name="category_id"
                        value={subcategory.category_id}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    />
                    <br /><br />


                    <button type="submit"
                        style={{ color: "white", backgroundColor: "#222222", padding: "10px 20px", border: "none", borderRadius: "4px", margin: "10px" }}
                    >Add Sub-Category</button>

                </form>
            </div>


        </>

    )
}

export default Add_Subcategory;