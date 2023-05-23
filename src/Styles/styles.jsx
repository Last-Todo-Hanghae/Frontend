// 작성하실 때 용도를 주석으로 달아주세여~!
import { styled } from "styled-components";
import * as sVar from "./styleVarients";

// 기본 레이아웃
// 1. flexbox, 가운데 정렬
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > label {
    color: ${sVar.black60};
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
  }
`;
// 2. flexbox, 가운데 정렬, column 방향 정렬
export const FlexCenterColumn = styled(FlexCenter)`
  flex-direction: column;
`;
// 3. Layout 크기 지정
export const Layout = styled(FlexCenterColumn)`
    /* ${props => {
    if (props.width > 1200) {
      return `width: 1200px;`
    } else {
      return `width: 800px;`
    }
  }} */
  max-width: 1200px;
  min-width: 800px;
`;
// 4. H1 크기 지정
export const H1 = styled.h1`
  font-size: 24pt;
  font-weight: bold;
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
`;
// 2. profile circle
export const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
`;
// 3. profile container
export const ProfileMiniContainer = styled(FlexCenter)`
  width: 20%;
  gap: 10px;
  margin: 10px;
`;
// 3. header container
export const HeaderContainer = styled(FlexCenter)`
  margin: 20px 0;
  width: 100%;
  display: flex;
`;
// 4. userProfile container
export const ProfileContainer = styled(FlexCenter)`
    gap: 15px;
    margin: 20px 10px 20px 10px;
    ${props => {
      if (!!props.gap) {
        return `gap: ${props.gap};`
      }
    }}
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
`;

// width 100% & flexbox
// 1. row flex + width 100%
export const FlexCenter100 = styled(FlexCenter)`
  width: 100%;
`
// 2. column flex + width 100%
export const FlexCenterColumn100 = styled(FlexCenterColumn)`
  width: 100%;
`

// 로그인, 회원가입
// 1. 로그인, 회원가입 공통 style
export const SignContainer = styled(FlexCenter)`
  width: 100%;
  height: 80vh;
  /* height: 600px; */
  /* border: 1px solid black; */
  flex-direction: column;

  > a {
    display: flex;
    margin: 20px 0 30px 0;
    text-decoration: none;
    font-size: 10pt;
    transition: color 0.4s ease-in-out, text-decoration 0.2s ease-in-out;

    &:hover {
      color: ${sVar.darkGreen80};
      text-decoration: underline;
    }
  }
`;

// 2. 로그인, 회원가입 form
export const SignForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// 3. 로그인, 회원가입 input
export const SignInput = styled.input`
  width: 80%;
  /* width: 600px; */
  height: 75px;
  border: 1px solid gray;
  border-radius: 50px;
`;



// YourTodo
// 1. YourTodo - todo Body
export const YourBody = styled(FlexCenter)`
  padding: 20px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

// 2. YourTodo - todo Card
export const YourCard = styled.div`
  width: 280px;
  height: 300px;
  box-shadow: 2px 8px 10px 2px rgba(34, 34, 34, 0.05);
  /* border: 1px solid ${sVar.black20}; */
  border-radius: 10px;
`;

// 3. YourTodo - todo Container
export const YourTodoContainer = styled(FlexCenterColumn)`
  padding: 10px;
  gap: 10px;

`;

// 4. YourTodo - todo 항목
export const YourTodoList = styled.div`
  border: 1px solid gray;

  width: 100%;
  height: 30px;
`

// MyTodo Input Container
export const InputContainer = styled(FlexCenter)`
  width: 660px;
  justify-content: space-around;
  padding: 30px 0 40px 0;
`;

// MyTodo Input
export const Input = styled.input`
  width: 380px;
  height: 35px;
  background-color: rgba(238, 238, 238, 0.4);
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 8px;
  padding: 5px 12px;
  box-shadow: 0 0 5px ${sVar.black40};
  caret-color: ${sVar.vividGreen100};
  &:focus {
    outline: 4px double ${sVar.vividGreen100};
  }
  &::placeholder {
    color: ${sVar.black40};
  }
`;

export const LogInput = styled(Input)`
  border-radius: 20px;
  /* background-color: ${sVar.defWhite}; */
  margin: 10px 0;
`

// Mytodo Input default btn
export const InputDefaultBtn = styled.button`
  width: 100px;
  height: 40px;
  color: ${sVar.black60};
  border: 1px solid ${sVar.black60};
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background-color: ${sVar.black60};
    color: ${sVar.defWhite};
  }
`;

// 4. 로그인, 회원가입 button
export const SignBtn = styled(InputDefaultBtn)`
  transition: background-color 0.2s ease-in-out,
              color 0.2s ease-in-out,
              border 0.2s ease-in-out;
  
  &:hover {
    background-color: ${sVar.vividGreen80};
    border: 1px solid ${sVar.vividGreen100};
    color: ${sVar.defWhite};
  }
  /* width: 160px;
  height: 40px; */
  /* border: 1px solid gray;
  border-radius: 10px; */
  /* cursor: pointer; */
`;

// MyTodo Input State Btns
export const InputStateBtn = styled(InputDefaultBtn)`
  ${(props) => {
    if (props.inputState === "today") {
      return `
                background-color: ${sVar.blackGreen80};
                color: ${sVar.defWhite};
                border: 1px solid ${sVar.blackGreen80};
                &:hover {
                  background-color: ${sVar.blackGreen80};
                  color: ${sVar.defWhite};
                  border: 1px solid ${sVar.blackGreen80};
                }
            `;
    } else if (props.inputState === "week") {
      return `
                background-color: ${sVar.darkGreen80};
                color: ${sVar.defWhite};
                border: 1px solid ${sVar.darkGreen80};
                &:hover {
                  background-color: ${sVar.darkGreen80};
                  color: ${sVar.defWhite};
                  border: 1px solid ${sVar.darkGreen80};
                }
            `;
    } else if (props.inputState === "month") {
      return `
                background-color: ${sVar.midGreen80};
                color: ${sVar.defWhite};
                border: 1px solid ${sVar.midGreen80};
                &:hover {
                  background-color: ${sVar.midGreen80};
                  color: ${sVar.defWhite};
                  border: 1px solid ${sVar.midGreen80};
                }
            `;
    }
  }}
`;

// MyTodo small inputStateBtns
export const InputStateBtnSmall = styled(InputStateBtn)`
    width: auto;
    height: auto;
    padding: 4px 6px;
`
export const InputDefaultBtnSmall = styled(InputDefaultBtn)`
    width: auto;
    height: auto;
    padding: 4px 6px;

    ${props => {
      if (props.modify === true) {
        return `
          background-color: ${sVar.blackGreen40};
          color: ${sVar.defWhite};
        `
      }
      if (props.modify !== undefined) {
        return `
          &:hover {
            background-color: ${sVar.blackGreen40};
            color: ${sVar.defWhite};
          }
        `
      }
    }}
`

// MyTodo Checkbox
export const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    transition: background 0.4s;
    border: 2px solid ${sVar.black40};
    &:checked {
        background: ${sVar.darkGreen80};
        color: ${sVar.defWhite};
        border: none;
    }
`

// MyTodo Entry
export const Entry = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    font-size: 14px;
    ${props => {
    if (props.isDone) {
      return `
                text-decoration: line-through;
                color: ${sVar.black20};
            `
    }
  }}
`
export const ModifyingEntry = styled.input`
  display: flex;
  width: 130px;
  border: none;
  border-bottom: 1px solid ${sVar.black40};
  &:focus {
    outline: none;
    caret-color: ${sVar.black20};
  }
`

// MyTodo Container
export const MyTodoContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`

// YourTodoDetailContainer
export const DetailedTodoContainer = styled(MyTodoContainer)`
  width: 95%;
`

// MyTodo List Container
export const MyTodoListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h3 {
        font-size: 14pt;
        color: ${sVar.black80};
        font-weight: bold;
        padding: 10px;
    }
`

// MyTodoCard Container
export const MyTodoCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 10px;
`


// MyTodoBtn Container
export const MyTodoCardBtnContainer = styled(FlexCenter)`
    width: 100%;
    padding: 10px;
    gap: 10px;

`

// MyTodoCardEntry Container
export const MyTodoCardEntryContainer = styled(FlexCenterColumn)`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    /* border: 1px solid ${sVar.black20}; */
    margin: 10px 0;
    box-shadow: 2px 8px 10px 2px rgba(34, 34, 34, 0.05);
`

export const YourTodoEntryContainer = styled(MyTodoCardEntryContainer)`
  width: 85%;
  padding: 10px;
  box-shadow: 2px 8px 10px 2px rgba(34, 34, 34, 0.02);
  border: 1.5px solid ${sVar.black20};
  margin: 0 10px 5px 10px;
  color: ${sVar.black60};
`

// MyTodo Text Container
export const MyTodoTextContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    align-items: center;
`

// no border btn
export const NoBorderBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`


// 기본 모달 스타일
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${sVar.black60};
  display: flex;
  justify-content: center;
  align-items: center;
` 
export const Modal = styled.div`
  background-color: #FBFBFD;
  padding: 1em;
  position: relative;
  width: 780px;
  min-height: 400px;
  border-radius: 10px;
`
