function Hello(){
    
    const person ={name:'Gia Thinh',
        theme:{ backgroundColor: 'green',
            color: 'white'
        }
    };
    return (
        <div>
            <div style={person.theme}>
                <h1>Xin Chao: {person.name}</h1>
            </div>
            <div> Chuc ban thanh cong voi react</div>
        </div>
    )
    
}
const HelloPersion = ({name}) => {
    return (
        <>
        <h1>Xin chao ban: {name} </h1>
        </>
    )
}
export {
    Hello,
    HelloPersion
}