import axios from "axios";
import React, { useState } from "react";





const Add_Product = () => {

    const [product, setProduct] = useState({
        ProductName: "", Description: "", Price: "", short_desp: "", Subcategory_id: "", Category_id: "", ImageFile: ""
    });
    // ImageFile: "" 

    // const [productImage, setProductImage] = useState('')


    function submit(e) {
        e.preventDefault();

        const { ProductName, Description, Price, short_desp, Subcategory_id, Category_id,ImageFile } = product;
        // ImageFile
        // console.log('==',product.ImageFile,'===',product.ImageFile.name)
        // const formdata = new FormData();

        // formdata.append('ImageFile', product.ImageFile, product.ImageFile.name)
        // formdata.append('ProductName', product.ProductName)
        // formdata.append('Description', product.Description)
        // formdata.append('Price', product.Price)
        // formdata.append('short_desp', product.short_desp)
        // formdata.append('Subcategory_id', product.Subcategory_id)
        // formdata.append('Category_id', product.Category_id)
        // console.log(formdata)
        // let formData = new FormData();

        // formData.append("ProductName", product.ProductName);
        // formData.append("Description", product.Description);
        // formData.append("Price", product.Price);
        // formData.append("short_desp", product.short_desp);
        // formData.append("Subcategory_id", product.Subcategory_id);
        // formData.append("Category_id", product.Category_id);
        // formData.append("public", productImage);
        // console.log(formData)



        axios.post('http://localhost:3000/product/add',
            // formdata
             {
                ProductName, Description, Price, short_desp, Subcategory_id, Category_id,ImageFile
            }
            // ,ImageFile
        )
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setProduct(response.data.data)
                alert('Product Added Successfully')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                alert('Failed To Add Product')
            })

    }

    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({ ...product, [name]: value })
    }


    // const imageUpload = (event) => {
    //     console.log(event.target.files[0])
    //     setProduct({ ...product, profilePic: event.target.files[0] })

    // }


    return (
        <>


            <div className="categorybox">
                <h1 style={{ fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif", margin: "20px" }}>Add New Product</h1>

                <form onSubmit={submit}>

                    <input type="text" placeholder="ProductName"
                        onChange={(e) => handle(e)}
                        name="ProductName"
                        value={product.ProductName}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    /><br /><br />
                    <input type="text" placeholder="Description"
                        onChange={(e) => handle(e)}
                        name="Description"
                        value={product.Description}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    /><br /><br />
                    <input type="text" placeholder="Price"
                        onChange={(e) => handle(e)}
                        name="Price"
                        value={product.Price}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    /><br /><br />
                    <input type="text" placeholder="Short Description"
                        onChange={(e) => handle(e)}
                        name="short_desp"
                        value={product.short_desp}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    /><br /><br />



                    <input type="text" placeholder="Subcategory_id"
                        onChange={(e) => handle(e)}
                        name="Subcategory_id"
                        value={product.Subcategory_id}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    /><br /><br />
                    <input type="text" placeholder="Category_id"
                        onChange={(e) => handle(e)}
                        name="Category_id"
                        value={product.Category_id}
                        style={{ padding: "8px 20px", border: "none", width: "60%", borderRadius: "3px", margin: "10px" }}
                    />
                    <br /><br />

                    <label for="public">Select a file</label>
                    <input type="file" id="public" name="public" onChange={
                        (e) => {
                            console.log(e.target.files[0])
                            setProduct({ ...product, ImageFile: e.target.files[0] })
                        }}

                    />



                    <button type="submit"
                        style={{ color: "white", backgroundColor: "#222222", padding: "10px 20px", border: "none", borderRadius: "4px", margin: "10px" }}
                    >Add Product</button>

                </form>

            </div>






        </>
    )
}

export default Add_Product;