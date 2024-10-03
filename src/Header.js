function Item({link, content}){
    return(
        <li><a href={link}>{content}</a></li>
    )
}
function Menu({list}){
    return(
        <>
            {list.map((data) =>(
                <ul>
                    <Item link={data.url} content={data.text}/>
                </ul>
            ))}
        </>
    )
}
function Header(){
    const listMenu = [
        { url:'/1', text: 'day la trang 1' },
        { url:'/2', text: 'day la trang 2' }
    ]
    return(
        <>
            <Menu list = {listMenu}/>
        </>
    )
}
export {
    Item,
    Menu,
    Header
}