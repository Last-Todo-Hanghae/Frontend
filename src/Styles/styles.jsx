// 작성하실 때 용도를 주석으로 달아주세여~!
import { styled } from "styled-components";
import * as sVar from "./styleVarients";

// 기본 레이아웃
// 1. flexbox, 가운데 정렬
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 2. flexbox, 가운데 정렬, column 방향 정렬
export const FlexCenterColumn = styled(FlexCenter)`
  flex-direction: column;
`;
// 3. Layout 크기 지정
export const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;

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
export const ProfileContainer = styled(FlexCenter)`
  width: 20%;
`;
// 3. header container
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`;

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

// 로그인, 회원가입
// 1. 로그인, 회원가입 공통 style
export const SignContainer = styled(FlexCenter)`
  width: 100%;
  height: 600px;
  border: 1px solid black;
  flex-direction: column;
`;

// 2. 로그인, 회원가입 form
export const SignForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// 3. 로그인, 회원가입 input
export const SignInput = styled.input`
  width: 600px;
  height: 75px;
  border: 1px solid gray;
  border-radius: 50px;
`;

// 4. 로그인, 회원가입 button
export const SignBtn = styled.button`
  width: 200px;
  height: 70px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;

// YourTodo
// 1. YourTodo - todo Body
export const YourBody = styled(FlexCenter)`
  padding: 10px;
  gap: 10px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

// 2. YourTodo - todo Card
export const YourCard = styled.div`
  height: 350px;
  border: 1px solid gray;
  border-radius: 10px;
`;

// 3. YourTodo - todo Container
export const YourTodoContainer = styled.div`
  padding: 10px;
  gap: 10px;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
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

// Mytodo Input default btn
export const InputDefaultBtn = styled.button`
  width: 100px;
  height: 40px;
  color: ${sVar.black60};
  border: 1px solid ${sVar.black60};
  border-radius: 4px;
`;

// MyTodo Input State Btns
export const InputStateBtn = styled(InputDefaultBtn)`
  ${(props) => {
    if (props.inputState === "today") {
      return `
                color: ${sVar.blackGreen80};
                border: 1px solid ${sVar.blackGreen80};
            `;
    } else if (props.inputState === "week") {
      return `
                color: ${sVar.darkGreen100};
                border: 1px solid ${sVar.darkGreen100};
            `;
    } else if (props.inputState === "month") {
      return `
                color: ${sVar.midGreen80};
                border: 1px solid ${sVar.midGreen80};
            `;
    }
  }}
`;

// MyTodo List Container
export const MyTodoListContainer = styled(FlexCenterColumn)`
    > h3 {
        color: ${sVar.black80};
    }
`
// MyTodo TodoCard
// export const 