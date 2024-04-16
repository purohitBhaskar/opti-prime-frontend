import React, { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling
import gensetImg from "../assets/genset-home.png";
import StartModal from './StartModal';

const Modal = ({ onClose }) => {
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleYesClick = () => {
        setShowSecondModal(true);
    };

    const handleCloseSecondModal = () => {
        setShowSecondModal(false);
        onClose(); // Close the first modal when the second modal is closed
    };

    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-alert-logo">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="4" y="4" width="48" height="48" rx="24" fill="#147A6F" /> <rect x="4" y="4" width="48" height="48" rx="24" stroke="#0F5B53" stroke-width="8" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1567 18.3155C27.524 18.1087 27.9385 18 28.36 18C28.7816 18 29.196 18.1087 29.5634 18.3155C29.9307 18.5223 30.2386 18.8203 30.4572 19.1807L30.4596 19.1846L30.4596 19.1846L37.3847 30.7456L37.3915 30.7569L37.3914 30.7569C37.6055 31.1278 37.7189 31.5483 37.7201 31.9766C37.7213 32.4049 37.6103 32.8261 37.3982 33.1982C37.1861 33.5702 36.8803 33.8803 36.5112 34.0975C36.142 34.3147 35.7225 34.4315 35.2942 34.4362L35.2852 34.4363V34.4362H21.4349H21.4259L21.4259 34.4362C20.9976 34.4315 20.578 34.3147 20.2089 34.0975C19.8398 33.8803 19.534 33.5702 19.3219 33.1982C19.1098 32.8261 18.9988 32.4049 19 31.9766C19.0012 31.5483 19.1145 31.1278 19.3287 30.7569L19.3353 30.7456L19.3353 30.7456L26.2605 19.1846L26.2629 19.1807L26.2629 19.1807C26.4815 18.8203 26.7893 18.5223 27.1567 18.3155ZM28.36 19.6352C28.2195 19.6352 28.0814 19.6714 27.9589 19.7404C27.837 19.809 27.7348 19.9078 27.6619 20.0272L27.661 20.0288L20.7421 31.5793C20.6725 31.7018 20.6356 31.8403 20.6352 31.9812C20.6348 32.124 20.6718 32.2644 20.7425 32.3884C20.8132 32.5124 20.9152 32.6158 21.0382 32.6882C21.1602 32.7599 21.2986 32.7988 21.4401 32.801H35.28C35.4214 32.7988 35.5599 32.7599 35.6819 32.6882C35.8049 32.6158 35.9069 32.5124 35.9776 32.3884C36.0483 32.2644 36.0852 32.124 36.0848 31.9812C36.0844 31.8403 36.0476 31.7018 35.978 31.5793L29.0591 20.0288L29.0581 20.0272C28.9853 19.9078 28.8831 19.809 28.7612 19.7404C28.6387 19.6714 28.5006 19.6352 28.36 19.6352ZM28.36 22.9897C28.8116 22.9897 29.1776 23.3557 29.1776 23.8073V27.0777C29.1776 27.5293 28.8116 27.8953 28.36 27.8953C27.9084 27.8953 27.5424 27.5293 27.5424 27.0777V23.8073C27.5424 23.3557 27.9084 22.9897 28.36 22.9897ZM28.36 29.5306C27.9084 29.5306 27.5424 29.8966 27.5424 30.3482C27.5424 30.7997 27.9084 31.1658 28.36 31.1658H28.3688C28.8204 31.1658 29.1864 30.7997 29.1864 30.3482C29.1864 29.8966 28.8204 29.5306 28.3688 29.5306H28.36Z" fill="#B7E6E1" /> </svg>
                    </div>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <div className="modal-img-warning">
                        <div className="modal-img">
                            <img src={gensetImg} alt="" />
                        </div>
                        <div className="modal-warning">
                            <div className="modal-warning-title">Are you sure?</div>
                            <div className="modal-warning-desc">Do you really want to start the genset?</div>
                        </div>
                    </div>
                    <div className="cancel-yes-btns">
                        <button className="cancel" onClick={onClose}>Cancel</button>
                        <button className="yes" onClick={handleYesClick}>Yes</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;
