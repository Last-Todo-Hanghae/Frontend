import { MenuContainer } from '../../Styles/styles'
import * as style from "../../Styles/styles"

function Menu ({children}) {
    const menuEntry = children.split(", ")
    const menuLink = {"My Todos":"/mytodo", "Your Todos":"/yourtodo","Logout": "#"}
    return (
        <MenuContainer>
            {menuEntry.map(menu => <a href={menuLink[menu]}>{menu}</a>)}
        </MenuContainer> 
    )
}

export default Menu