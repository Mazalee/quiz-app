import React from 'react'
import { useGlobalContext } from '../Context/Context'

const Modal = () => {
    const { correct, modal, closeModal, questions } = useGlobalContext();
  return (
    <div 
    className={`${modal ? 'modal-container isOpen' : 'modal-container'}`}>
        <div className='modal-content'>
            <h2>congrats</h2>
            <p>You answered {((correct / questions.length) * 100).toFixed(0)}%</p>
            <button className='close-btn' onClick={closeModal}>play again</button>
        </div>
    </div>
  )
}

export default Modal