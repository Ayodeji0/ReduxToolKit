import { closeModal } from '../features/modal/ModalSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/CartSlice';

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className ='modal-container'>
        <div className="modal">
            <h4>Are you Sure you want to Remove all Items from cart</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" type="button" onClick={()=>{
                    dispatch(clearCart())
                    dispatch(closeModal())
                }}>Confirm</button>
                <button className="btn clear-btn" type="button" onClick={()=>{
                    dispatch(closeModal())
                }}>Cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal