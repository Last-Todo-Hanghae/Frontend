import * as style from "../../Styles/styles"

function UserProfileMini({children}) {

    return (
        <style.ProfileContainer>
            <style.ProfileCircle />
            <span>{children}</span>
        </style.ProfileContainer>
    )


}

export default UserProfileMini