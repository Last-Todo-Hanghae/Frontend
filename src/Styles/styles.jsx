// 작성하실 때 용도를 주석으로 달아주세여~!
import { styled } from 'styled-components';
import * as sVar from "./styleVarients"

// 기본 레이아웃
// 1. flexbox, 가운데 정렬
export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`
// 2. flexbox, 가운데 정렬, column 방향 정렬
export const FlexCenterColumn = styled(FlexCenter)`
    flex-direction: column;
`
// 3. Layout 크기 지정
export const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
`

// 헤더
// 1. My Todos, Your Todos, Logout 메뉴 정렬
export const MenuContainer = styled(FlexCenter)`
    width: 80%;
    justify-content: space-around;
    > a {
        font-weight: bold;
        text-decoration: none;
        border-bottom: transparent;
    }

    > a:selected {
        border-bottom: 2px solid ${sVar.blackGreen20};
    }
`
// 2. profile circle
export const ProfileCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
`
// 3. profile container
export const ProfileContainer = styled(FlexCenter)`
    width: 20%;
`
// 3. header container
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
`

// 모달
// 1. 모달 배경 (어둡게)
const ModalBackgroundStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${sVar.black40};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`


// 로그인, 회원가입 공통 style
export const SignContainer = styled(FlexCenter)`
    width: 100%;
    height: 600px;
    border: 1px solid black;
    flex-direction: column;
`

// 로그인, 회원가입 form
export const SignForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
`

// 로그인, 회원가입 input
export const SignInput = styled.input`
    width: 600px;
    height: 75px;
    border: 1px solid gray;
    border-radius: 50px;
`

// 로그인, 회원가입 button
export const SignBtn = styled.button`
    width: 200px;
    height: 70px;
    border: 1px solid gray;
    border-radius: 10px;
    cursor: pointer;
`

// YourTodo Body
export const YourBody = styled(FlexCenter)`
    padding: 10px;
    gap: 10px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

// YourTodo Card
export const YourCard = styled.div`
    height: 350px;
    border: 1px solid gray;
    border-radius: 10px;
`

