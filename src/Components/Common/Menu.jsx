import { MenuContainer } from '../../Styles/styles'
import * as style from "../../Styles/styles"

function Menu ({children}) {
    const menuEntry = children.split(", ")
    return (
        <MenuContainer>
            {menuEntry.map(menu => <a href='#'>{menu}</a>)}
        </MenuContainer> 
    )
}

export default Menu