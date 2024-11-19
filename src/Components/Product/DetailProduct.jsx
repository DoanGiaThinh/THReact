import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


const DetailProduct = () => {
    const { masp } = useParams(); // Lấy masp từ URL
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:1234/api/v1/detailproduct/${masp}`)
            .then(response => {
                if (response.data.errCode === 1 && response.data.sanpham) {
                    setProduct(response.data.sanpham); // Lưu dữ liệu sản phẩm
                } else {
                    console.error("Product not found or invalid response");
                }
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [masp]);

    return (
        <div className="container mt-4">
            {product ? (
                <div>
                    <div>
                        <button className="btn btn-secondary" onClick={() => navigate('/listproduct')}>
                            Quay Lại
                        </button>
                    </div>
                    <h1 className="text-center mb-4">{product.ten}</h1>
                    <div className="card">
                        <img
                            src={product.hinhanh}
                            className="card-img-top"
                            alt={product.ten}
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.ten}</h5>
                            <p className="card-text">{product.mota}</p>
                            <p className="card-text">Price: {product.gia} VND</p>
                            <p className="card-text">Product ID: {product.masp}</p>
                            <p className="card-text">Category ID: {product.idnhom}</p>
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
            ) : (
                <div className="text-center">Loading product details...</div>
            )}
        </div>
    );
};

export default DetailProduct