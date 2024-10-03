function HelloChaoXin ({name}){
    const hiAll = () =>{
        alert("hello everyone")
    }
    const hiYou = (name) =>{
        alert("Hello " + name)
    }
    return(
        <span>
            <button onClick={hiAll}> Hi All</button>
            <button onClick={() => hiYou(name)}> Hi you</button>
        </span>
    )
}
export default HelloChaoXin