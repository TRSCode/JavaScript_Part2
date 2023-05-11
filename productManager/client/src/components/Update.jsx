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
            <form onSubmit={updateProduct} className="container p-2 bg-primary text-white col-3">
                <h3 className="text-center">Update a Product</h3>
                <hr/>
                <p>
                    <label className="form-label">Title</label><br/>
                    <input type="text" className="form-control"
                        name="title" value={title} 
                        onChange={(e) => { setTitle(e.target.value)}} />
                </p>
                <p>
                    <label className="form-label">Price</label><br/>
                    <input type="text" className="form-control"
                        name="price" value={price} 
                        onChange={(e) => { setPrice(e.target.value)}} />
                </p>
                <p>
                    <label className="form-label">Description</label><br/>
                    <input type="text" className="form-control"
                        name="description" value={description} 
                        onChange={(e) => { setDescription(e.target.value)}} />
                </p>
                <div className="d-flex justify-content-center">
                    <Link to={'/home'} className="text-light"> Home </Link>
                    <input type="submit" className="btn btn-success mx-3"/>
                </div>
            </form>
        </div>
    )
}
export default Update;