import { MenuContainer } from '../../Styles/styles'
import * as style from "../../Styles/styles"

function Menu ({children}) {
    const onClickHandler = () => {}
    const menuEntry = children.split(", ")
    const menuLink = {"My Todos":"/mytodo", "Your Todos":"/yourtodo","Logout": "#"}
    const menuOnClick = {"Logout": onClickHandler}
    return (
        <MenuContainer>
            {menuEntry.map(menu => <a href={menuLink[menu]} onclick={menuOnClick}>{menu}</a>)}
        </MenuContainer> 
    )
}

export default Menu