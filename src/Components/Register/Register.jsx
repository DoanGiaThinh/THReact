import { useEffect} from 'react';
import "./Register.scss";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = (props) => {
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }

    useEffect(() => {
        axios.get('http://localhost:1234/api/v1/listproduct').then((data) => {
            console.log(" Check data:",data);
        })
    },[]);

    return (
        <div className="register-container">
            <div className="container">
                <div className="row">
                    <div className="content-left col-sm-7 d-none d-sm-block">
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none"> Gear Store </div>
                        <div className='form-group'>
                            <label> Email: </label>
                            <input type="Email" className='form-control' name="email" id="" placeholder="Email"/>
                        </div>
                        <div className='form-group'>
                            <label> Họ Tên: </label>
                            <input type="text" className='form-control' name="username" id="" placeholder="Họ Tên"/>
                        </div>
                        <div className='form-group'>
                            <label> Số Điện Thoại: </label>
                            <input type="text" className='form-control' name="phone" id="" placeholder="Số Điện Thoại"/>
                        </div>
                        <div className='form-group'>
                            <label> Mật Khẩu: </label>
                            <input className="form-control" id="password" name="password"  type="password" placeholder="Mật Khẩu" />
                        </div>
                        <div className='form-group'>
                            <label> Xác Nhận Mật Khẩu: </label>
                            <input className="form-control" id="password" name="password"  type="password" placeholder="Xác Nhận Mật Khẩu" />
                        </div>

                        

                            <button type="submit" className="btn btn-primary" >Đăng Ký</button>
                            <hr />
                            <div className="text-center">
                                <button className="btn btn-success" onClick={()=> handleLogin()}> 
                                   Bạn đã có tài khoản. Đăng nhập ở đây
                                    </button>
                            </div>
                            

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;