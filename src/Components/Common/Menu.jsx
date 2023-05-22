import { Link, useNavigate } from "react-router-dom";
import { MenuContainer } from "../../Styles/styles";
import { useDispatch } from "react-redux";
import { changeIsLog, logout } from "../../Redux/modules/todoSlice";

function Menu({ children }) {
  // 중앙 state 관리
  const dispatch = useDispatch();
  // 로그아웃 시 login 페이지로 이동하기 위한 hook
  const navigate = useNavigate();

  // 로그아웃 클릭 핸들러
  const onClickHandler = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    
    dispatch(changeIsLog());
    navigate("/", {replace:true});
    alert('로그아웃 성공!')
  };

  const menuEntry = children.split(", ");
  const menuLink = {
    "My Todos": "/mytodo",
    "Your Todos": "/yourtodo",
    Logout: "/",
  };

  const menuOnClick = { Logout: onClickHandler };

  return (
    <MenuContainer>
      {menuEntry.map((menu) => (
        <Link to={menuLink[menu]} onClick={menuOnClick[menu]}>
          {menu}
        </Link>
      ))}
    </MenuContainer>
  );
}

export default Menu;
