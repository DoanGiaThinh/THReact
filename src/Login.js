import { useState } from "react";
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
    return(
        <form onSubmit ={(e)=> handleSubmit(e)}>
            <label htmlFor="name">Enter your username:</label>
            <input id="name" name="name" value={state.name} type="text" onChange={handleChange} />
            <label htmlFor="password">Enter your password:</label>
            <input id="password" name="password" value={state.password} type="password" onChange={handleChange} />
            <label htmlFor="admin">Is Admin?</label>
            <input id="isadmin" name="isadmin" checked={state.isadmin} type="checkbox" onChange={handleChange} />
            <button type="submit">Đăng nhập</button>
        </form>
        
    )
}
export default Login