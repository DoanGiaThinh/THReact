import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Category = () => {
    const [categories, setCategories] = useState([]); // Lưu danh sách nhóm
    const [products, setProducts] = useState([]); // Lưu danh sách sản phẩm
    const [selectedCategory, setSelectedCategory] = useState(null); // Lưu nhóm được chọn
    const navigate = useNavigate();

    // Lấy danh sách nhóm
    useEffect(() => {
        axios.get('http://localhost:1234/api/v1/listcategories')
            .then(response => {
                if (response.data && response.data.nhom) {
                    setCategories(response.data.nhom);
                } else {
                    setCategories([]);
                }
            })
            .catch(error => {
                console.error("Error fetching category list:", error);
            });
    }, []);

    // Gọi API lấy sản phẩm theo nhóm khi nhóm được chọn
    const fetchProductsByCategory = (idnhom) => {
        setSelectedCategory(idnhom); // Lưu nhóm đang chọn
        axios.get(`http://localhost:1234/api/v1/listproduct/category?category=${idnhom}`)
            .then(response => {
                if (response.data && response.data.sanpham) {
                    setProducts(response.data.sanpham);
                } else {
                    setProducts([]);
                }
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    };

    // Hàm reset
    const resetView = () => {
        setProducts([]); // Xóa danh sách sản phẩm
        setSelectedCategory(null); // Bỏ chọn nhóm
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Category and Products</h1>

            {/* Danh sách nhóm */}
            <div className="row mb-4">
                <h2 className="mb-3">Categories</h2>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`col-md-4 mb-3 ${selectedCategory === category.idnhom ? 'border border-primary' : ''}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => fetchProductsByCategory(category.idnhom)}
                    >
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <h5 className="card-title">{category.ten}</h5>
                                <p className="card-text">ID: {category.idnhom}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Nút Reset */}
            {selectedCategory && (
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <button className="btn btn-secondary" onClick={resetView}>
                            Reset
                        </button>
                    </div>
                </div>
            )}

            {/* Danh sách sản phẩm */}
            {products.length > 0 && (
                <div className="row">
                    <h2 className="mb-3">Products</h2>
                    {products.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}
                        onClick={() => navigate(`/detailproduct/${product.masp}`)}
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
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
