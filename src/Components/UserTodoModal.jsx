import Modal from './Common/Modal';
import * as style from "../Styles/styles"
import { useQuery } from 'react-query';
import { TodoAPI } from '../Axios/api';
import UserProfile from './Common/UserProfile'
import YourTodoListDetailed from './YourTodoListDetailed';
import { useQueryClient, useMutation } from 'react-query';
import { FilledHeart, EmptyHeart } from '../Assets/icons';

function UserTodoModal ({ userId, isOpen, onClose }) {
    // yourTodo 상세조회 API에 request
    const { data } = useQuery(["yourtodo", userId], () => TodoAPI.getYourTodoDetail(userId))
    const queryClient = useQueryClient();

    const mutation = useMutation(TodoAPI.updateLike, {
      onSuccess: () => {
        queryClient.invalidateQueries("yourtodo");
      }
    });
    if (!isOpen || data === undefined || data.data.mytodo.length === 0) return null;

    console.log(data)
    const todos = data.data.mytodo;
    let todays = []
    let weeks = []
    let months = []
    if (!!todos.length) {
        todays = todos.filter(todo => todo.todoPriority === "today")
        weeks = todos.filter(todo => todo.todoPriority === "week")
        months = todos.filter(todo => todo.todoPriority === "month")
    }
    const profileGap="40px";
    const iconWidth="40px";
    const onLikeClickHandler = () => {
        mutation.mutate({ userId: userId });
    }
    
    return (
        <style.ModalBackground onClick={onClose}>
            <style.Modal onClick={(event) => event.stopPropagation()}>
                    <style.ProfileContainer gap={profileGap}>
                    <style.ProfileCircle />
                    <span>{data.data.userName}</span>
                    <button onClick={onLikeClickHandler} style={{border:'0px'}}>
                        {data.data.isLike ? <FilledHeart width={iconWidth} /> : <EmptyHeart width={iconWidth} />}
                    </button>
                </style.ProfileContainer>
                <style.FlexCenter>
                    <style.DetailedTodoContainer>
                        <YourTodoListDetailed todos={todays} priority="today" />
                        <YourTodoListDetailed todos={weeks} priority="week" />
                        <YourTodoListDetailed todos={months} priority="month" />
                    </style.DetailedTodoContainer>
                </style.FlexCenter>
            </style.Modal>
        </style.ModalBackground>
    )

}

export default UserTodoModal;