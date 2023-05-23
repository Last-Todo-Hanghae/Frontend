
import * as style from "../../Styles/styles"
function Modal({ userId, isOpen, onClose, children }) {
    if (!isOpen) return null;  

    return (
        <style.ModalBackground onClick={onClose}>
            <style.Modal onClick={(event) => event.stopPropagation()}>
                {children}
            </style.Modal>
        </style.ModalBackground>
    )
}

export default Modal;