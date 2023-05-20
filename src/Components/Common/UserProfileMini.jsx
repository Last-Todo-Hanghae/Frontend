import * as style from "../../Styles/styles"

function UserProfileMini({children}) {

    return (
        <style.ProfileMiniContainer>
            <style.ProfileCircle />
            <span>{children}</span>
        </style.ProfileMiniContainer>
    )


}

export default UserProfileMini