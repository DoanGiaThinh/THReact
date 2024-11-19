import { useEffect, useState } from 'react';
import "./Register.scss";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [sex, setSex] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const defaultValidInput = {
        isValidUsername: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        isValidEmail: true
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);


    let navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }

    useEffect(() => {


    }, []);

    const isValidInputs = () => {

        setObjCheckInput(defaultValidInput);

        if (!username) {
            toast.error("Vui long nhap username");
            setObjCheckInput({ ...defaultValidInput, isValidUsername: false });
            return false;
        }
        if (!password) {
            toast.error("Vui long nhap password");
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
            return false;
        }
        if (!confirmPassword) {
            toast.error("Vui long nhap password");
            setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Password khong khop");
            return false;
        }
        if (!fullname) {
            toast.error("Vui long nhap fullname");
            return false;
        }
        if (!address) {
            toast.error("Vui long nhap address");
            return false;
        }
        if (!email) {
            toast.error("Vui long nhap email");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        let regx = /\S+@\S+\.\S+/;
        if (!regx.test(email)) {
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            toast.error("Email khong hop le");
            return false;
        }
        if (!sex) {
            toast.error("Vui long chon gioi tinh");
            return false;
        }


        return true;
    }
    const handleRegister = () => {


        let check = isValidInputs();

        if (check === true) {

            axios.post('http://localhost:1234/api/v1/register', {
                username,
                password,
                fullname,
                address,
                sex,
                email,
                role
            })
        }
    }

    return (
        <div className="register-container">
            <div className="container">
                <div className="row">
                    <div className="content-left col-sm-7 d-none d-sm-block">
                        <div className="brand"> Gear Store </div>
                        {/* <div className="image">

                        </div> */}
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none"> Gear Store </div>
                        <div className='form-group'>

                            <input type="text" className={objCheckInput.isValidUsername ? 'form-control' : 'form-control is-invalid'} placeholder="Tên Tài Khoản"
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>

                            <input className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} type="password" placeholder="Mật Khẩu"
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>

                            <input className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'} type="password" placeholder="Xác Nhận Mật Khẩu"
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>

                            <input type="text" className='form-control' placeholder="Họ Tên"
                                value={fullname} onChange={(event) => setFullname(event.target.value)}
                            />
                        </div>
                        {/* <div className='form-group'>
                            <label> Số Điện Thoại: </label>
                            <input type="text" className='form-control' placeholder="Số Điện Thoại" />
                        </div> */}

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Địa chỉ"
                                value={address} onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="form-group">

                            <select className="form-select"
                                value={sex} onChange={(event) => setSex(event.target.value)} >
                                <option value="" disabled selected>Giới Tính</option>
                                <option value="Male">Nam</option>
                                <option value="Famale">Nữ</option>
                                <option value="Other">Khác</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="email" className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} placeholder="Email"
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" value="Vai trò: User (Người dùng)"
                                onChange={(event) => setRole(event.target.value)}
                                readOnly />
                        </div>



                        <button type="button" className="btn btn-primary" onClick={() => handleRegister()} >Đăng Ký</button>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => handleLogin()}>
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