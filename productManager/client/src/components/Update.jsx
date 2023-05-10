import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/product/" + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={updateProduct} className="container col-5 mt-3">
            <h3>Update a Product</h3>
                <p>
                    <label>Title</label><br/>
                    <input type="text" 
                        name="title" value={title} 
                        onChange={(e) => { setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" 
                        name="price" value={price} 
                        onChange={(e) => { setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" 
                        name="description" value={description} 
                        onChange={(e) => { setDescription(e.target.value)}} />
                </p>
                <Link to={'/home'}> Home </Link>
                <input type="submit" className="btn btn-primary mx-3"/>
            </form>
        </div>
    )
}
export default Update;