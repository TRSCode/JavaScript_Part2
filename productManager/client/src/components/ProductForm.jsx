import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProduct([...product, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
        .catch(err =>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler} className="container p-3 mb-2 bg-primary text-white col-2">
            <h3>Add a Product</h3>
            <p>
                <label className="form-label">Title</label><br/>
                <input type="text" className="form-control" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label className="form-label">Price</label><br/>
                <input type="text" className="form-control" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label className="form-label">Description</label><br/>
                <input type="text" className="form-control" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" className="btn btn-success mx-3"/>
        </form>
    )
}
export default ProductForm;