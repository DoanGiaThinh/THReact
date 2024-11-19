import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); // Dùng để chuyển hướng

    useEffect(() => {
        axios.get('http://localhost:1234/api/v1/listproduct')
            .then(response => {
                if (response.data && response.data.sanpham) {
                    setProducts(response.data.sanpham);
                } else {
                    setProducts([]);
                }
            })
            .catch(error => {
                console.error("Error fetching product list:", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Product List</h1>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div
                            className="col-md-4 mb-4"
                            key={index}
                            onClick={() => navigate(`/detailproduct/${product.masp}`)} // Chuyển hướng khi bấm
                        >
                            <div className="card h-100">
                                <img
                                    src={product.hinhanh}
                                    className="card-img-top"
                                    alt={product.ten}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.ten}</h5>
                                    <p className="card-text">Giá: {product.gia} VND</p>
                                    <p className="card-text">{product.mota}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-end align-items-center gap-2">
                                    <button className="btn btn-primary">
                                        <i className="bi bi-cart-plus"></i> Thêm Vào Giỏ Hàng
                                    </button>
                                    <button className="btn btn-success">
                                        <i className="bi bi-bag"></i> Mua
                                    </button>
                                    <button className="btn btn-outline-danger">
                                        <i className="bi bi-heart"></i>
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <div className="alert alert-warning text-center">
                            No products found.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;
