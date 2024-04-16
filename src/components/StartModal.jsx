import React, { useState } from 'react'
import "./StartModal.css"
import gensetImg from "../assets/genset-home.png"
import tickIcon from "../assets/check.png"
const StartModal = ({onClose}) => {
    const [showSecondModal, setShowSecondModal] = useState(false)
    const handleCloseSecondModal = ()=>{
        setShowSecondModal(false)
    }
    return (

        <div className='start-modal'>
            <button className='close-button' onClick={{handleCloseSecondModal}}>X</button>
            <div className="gensetimg-confirm">
                <img src={gensetImg} alt="" />

            </div>
            <div className="tick-icon">
                <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.5" y="4" width="48" height="48" rx="24" fill="#147A6F" />
                    <rect x="4.5" y="4" width="48" height="48" rx="24" stroke="#0F5B53" stroke-width="8" />
                    <path d="M36.5 22L25.5 33L20.5 28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
            <div className="start-title">Genset Started Successfully!</div>
            <div className="start-subtitle">You can switch off anytime by clicking the power control in dashboard</div>
        </div>
    )
}

export default StartModal