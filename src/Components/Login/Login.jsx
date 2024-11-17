import { useState } from "react";
import "./Login.scss";
import { useNavigate } from 'react-router-dom';

function Login(){
    const [state, setState]= useState ({
            
        name: "",  
        password: "",   
        isadmin: false
        
    })
    const handleChange = (e) =>{
        e.preventDefault();
        const{name, value, type, checked} = e.target;
        setState({
            ...state,
            [name]:type ==='checkbox'?checked:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(state);
        
    }
    let navigate = useNavigate();
    const handleCreateNewAccount = () => {
        navigate('/register');
    }
    return(
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="content-left col-sm-7 d-none d-sm-block">
                        <div className='brand'>
                            Gear Store
                        </div>
                        <div className='detail'>
                            Nơi Chứa Đựng Các Mặt Hàng Ngoại Vi Uy Tín Nhất Việt Nam                        </div>
                        
                    </div>
                    <div className="content-right col-12 col-sm-5">
                        <div className="brand d-sm-none"> Gear Store </div>
                        <form className="d-flex flex-column gap-3 py-3" onSubmit ={(e)=> handleSubmit(e)}>
                            <input className="form-control" id="name" name="name" value={state.name} type="text" onChange={handleChange} placeholder="Tài Khoản Hoặc Email" />
                            <input className="form-control" id="password" name="password" value={state.password} type="password" onChange={handleChange} placeholder="Mật Khẩu" />
                            <label className="text-center" htmlFor="admin">Is Admin? <input id="isadmin" name="isadmin" checked={state.isadmin} type="checkbox" onChange={handleChange} /></label>
                            
                            <button type="submit" class="btn btn-primary" >Đăng nhập</button>
                            <hr />
                            <div className="text-center">
                                <button className="btn btn-success" onClick={()=> handleCreateNewAccount()}> 
                                   Đăng ký 
                                    </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login