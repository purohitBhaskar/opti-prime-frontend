import React, { useEffect, useState } from 'react'
import "../styles/MainContent.css"
import gensetHome from "../assets/genset-home.png"
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom'
import GensetChart from './GensetChart'
import SwitchButton from './SwitchButton'
import { Switch, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'

const MainContent = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isGensetStarted, setIsGensetStarted] = useState(false)

    const handleSwitchToggle = () => {
        setIsSwitchOn(!isSwitchOn)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleYesButtonClick = () => {
        setIsGensetStarted(true)
    }

    return (
        <div className='main-content'>
            <div className="top-info-card">
                <div className="parameters-home-data">
                    <div className="home-img">
                        <img src={gensetHome} alt="" />
                    </div>
                    <div className="parameters-home-stats">
                        <div className="parameters-heading">OPTIPRIME PARAMETERS</div>
                        <div className="parameter-stats">
                            <div className="stat-card" id="voltage-card">
                                <div className="logo-title" id="voltage-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <g opacity="0.42" filter="url(#filter0_f_1758_1350)">
                                            <circle cx="28" cy="28" r="14" fill="#C37C5A" />
                                        </g>
                                        <path d="M34.7507 32.6791L28.8864 20.9505C28.6797 20.5372 28.3588 20.3 28.0059 20.3C27.6531 20.3 27.3321 20.5372 27.1254 20.9505L21.261 32.6791C21.0614 33.0784 21.0587 33.4883 21.2537 33.8037C21.4486 34.1191 21.8165 34.3 22.2629 34.3H33.7489C34.1954 34.3 34.5632 34.1191 34.7582 33.8037C34.9531 33.4883 34.9504 33.0783 34.7507 32.6791ZM30.0616 28.8399L26.0344 31.9519C25.9603 32.0091 25.8719 32.0376 25.7837 32.0376C25.6853 32.0376 25.5871 32.0022 25.5094 31.9323C25.3621 31.7999 25.3305 31.581 25.4343 31.4124L26.514 29.6578H25.2345C25.059 29.6578 24.903 29.5462 24.8464 29.3802C24.7897 29.2142 24.8449 29.0304 24.9837 28.9231L29.0109 25.8112C29.1675 25.6901 29.3885 25.6983 29.5358 25.8307C29.6831 25.9632 29.7147 26.182 29.6109 26.3507L28.5313 28.1054L29.8108 28.1053C29.9863 28.1053 30.1423 28.2169 30.1989 28.3829C30.2556 28.549 30.2004 28.7327 30.0616 28.8399Z" fill="#DDDDDD" />
                                        <defs>
                                            <filter id="filter0_f_1758_1350" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1758_1350" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    Voltage
                                </div>
                                <div className="value-stat" id="voltage">415 V</div>
                            </div>
                            <div className="stat-card" id="current-card">
                                <div className="logo-title" id="current-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <g opacity="0.42" filter="url(#filter0_f_1758_1350)">
                                            <circle cx="28" cy="28" r="14" fill="#C37C5A" />
                                        </g>
                                        <path d="M34.7507 32.6791L28.8864 20.9505C28.6797 20.5372 28.3588 20.3 28.0059 20.3C27.6531 20.3 27.3321 20.5372 27.1254 20.9505L21.261 32.6791C21.0614 33.0784 21.0587 33.4883 21.2537 33.8037C21.4486 34.1191 21.8165 34.3 22.2629 34.3H33.7489C34.1954 34.3 34.5632 34.1191 34.7582 33.8037C34.9531 33.4883 34.9504 33.0783 34.7507 32.6791ZM30.0616 28.8399L26.0344 31.9519C25.9603 32.0091 25.8719 32.0376 25.7837 32.0376C25.6853 32.0376 25.5871 32.0022 25.5094 31.9323C25.3621 31.7999 25.3305 31.581 25.4343 31.4124L26.514 29.6578H25.2345C25.059 29.6578 24.903 29.5462 24.8464 29.3802C24.7897 29.2142 24.8449 29.0304 24.9837 28.9231L29.0109 25.8112C29.1675 25.6901 29.3885 25.6983 29.5358 25.8307C29.6831 25.9632 29.7147 26.182 29.6109 26.3507L28.5313 28.1054L29.8108 28.1053C29.9863 28.1053 30.1423 28.2169 30.1989 28.3829C30.2556 28.549 30.2004 28.7327 30.0616 28.8399Z" fill="#DDDDDD" />
                                        <defs>
                                            <filter id="filter0_f_1758_1350" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1758_1350" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    Current
                                </div>
                                <div className="value-stat" id="current-stat">122 Amp</div>
                            </div>
                            <div className="stat-card" id="power-card">
                                <div className="logo-title" id="power-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <g opacity="0.42" filter="url(#filter0_f_1758_1350)">
                                            <circle cx="28" cy="28" r="14" fill="#C37C5A" />
                                        </g>
                                        <path d="M34.7507 32.6791L28.8864 20.9505C28.6797 20.5372 28.3588 20.3 28.0059 20.3C27.6531 20.3 27.3321 20.5372 27.1254 20.9505L21.261 32.6791C21.0614 33.0784 21.0587 33.4883 21.2537 33.8037C21.4486 34.1191 21.8165 34.3 22.2629 34.3H33.7489C34.1954 34.3 34.5632 34.1191 34.7582 33.8037C34.9531 33.4883 34.9504 33.0783 34.7507 32.6791ZM30.0616 28.8399L26.0344 31.9519C25.9603 32.0091 25.8719 32.0376 25.7837 32.0376C25.6853 32.0376 25.5871 32.0022 25.5094 31.9323C25.3621 31.7999 25.3305 31.581 25.4343 31.4124L26.514 29.6578H25.2345C25.059 29.6578 24.903 29.5462 24.8464 29.3802C24.7897 29.2142 24.8449 29.0304 24.9837 28.9231L29.0109 25.8112C29.1675 25.6901 29.3885 25.6983 29.5358 25.8307C29.6831 25.9632 29.7147 26.182 29.6109 26.3507L28.5313 28.1054L29.8108 28.1053C29.9863 28.1053 30.1423 28.2169 30.1989 28.3829C30.2556 28.549 30.2004 28.7327 30.0616 28.8399Z" fill="#DDDDDD" />
                                        <defs>
                                            <filter id="filter0_f_1758_1350" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1758_1350" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    Power
                                </div>
                                <div className="value-stat" id="power-stat">3224 Kw</div>
                            </div>
                            <div className="stat-card" id="power-kva-card">
                                <div className="logo-title" id="power-kva-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <g opacity="0.42" filter="url(#filter0_f_1758_1350)">
                                            <circle cx="28" cy="28" r="14" fill="#C37C5A" />
                                        </g>
                                        <path d="M34.7507 32.6791L28.8864 20.9505C28.6797 20.5372 28.3588 20.3 28.0059 20.3C27.6531 20.3 27.3321 20.5372 27.1254 20.9505L21.261 32.6791C21.0614 33.0784 21.0587 33.4883 21.2537 33.8037C21.4486 34.1191 21.8165 34.3 22.2629 34.3H33.7489C34.1954 34.3 34.5632 34.1191 34.7582 33.8037C34.9531 33.4883 34.9504 33.0783 34.7507 32.6791ZM30.0616 28.8399L26.0344 31.9519C25.9603 32.0091 25.8719 32.0376 25.7837 32.0376C25.6853 32.0376 25.5871 32.0022 25.5094 31.9323C25.3621 31.7999 25.3305 31.581 25.4343 31.4124L26.514 29.6578H25.2345C25.059 29.6578 24.903 29.5462 24.8464 29.3802C24.7897 29.2142 24.8449 29.0304 24.9837 28.9231L29.0109 25.8112C29.1675 25.6901 29.3885 25.6983 29.5358 25.8307C29.6831 25.9632 29.7147 26.182 29.6109 26.3507L28.5313 28.1054L29.8108 28.1053C29.9863 28.1053 30.1423 28.2169 30.1989 28.3829C30.2556 28.549 30.2004 28.7327 30.0616 28.8399Z" fill="#DDDDDD" />
                                        <defs>
                                            <filter id="filter0_f_1758_1350" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1758_1350" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    KVA
                                </div>
                                <div className="value-stat" id="power-kva-value">54231</div>
                            </div>
                            <div className="stat-card" id="frequency-card">
                                <div className="logo-title" id="frequency-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <g opacity="0.42" filter="url(#filter0_f_1758_1350)">
                                            <circle cx="28" cy="28" r="14" fill="#C37C5A" />
                                        </g>
                                        <path d="M34.7507 32.6791L28.8864 20.9505C28.6797 20.5372 28.3588 20.3 28.0059 20.3C27.6531 20.3 27.3321 20.5372 27.1254 20.9505L21.261 32.6791C21.0614 33.0784 21.0587 33.4883 21.2537 33.8037C21.4486 34.1191 21.8165 34.3 22.2629 34.3H33.7489C34.1954 34.3 34.5632 34.1191 34.7582 33.8037C34.9531 33.4883 34.9504 33.0783 34.7507 32.6791ZM30.0616 28.8399L26.0344 31.9519C25.9603 32.0091 25.8719 32.0376 25.7837 32.0376C25.6853 32.0376 25.5871 32.0022 25.5094 31.9323C25.3621 31.7999 25.3305 31.581 25.4343 31.4124L26.514 29.6578H25.2345C25.059 29.6578 24.903 29.5462 24.8464 29.3802C24.7897 29.2142 24.8449 29.0304 24.9837 28.9231L29.0109 25.8112C29.1675 25.6901 29.3885 25.6983 29.5358 25.8307C29.6831 25.9632 29.7147 26.182 29.6109 26.3507L28.5313 28.1054L29.8108 28.1053C29.9863 28.1053 30.1423 28.2169 30.1989 28.3829C30.2556 28.549 30.2004 28.7327 30.0616 28.8399Z" fill="#DDDDDD" />
                                        <defs>
                                            <filter id="filter0_f_1758_1350" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1758_1350" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    Frequency
                                </div>
                                <div className="value-stat" id="frequency-stat">49.5Hz</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="power-stat-control">
                    <div className="powergen-heading">POWERGEN CONTROLS</div>
                    <div className="running-time-switch">
                        <div className="running-time">
                            <div className="running-time-heading">Running Time</div>
                            <div className="running-time-value">30 mins</div>
                        </div>

                        <Switch size='lg' colorScheme='green' isChecked={isSwitchOn} onChange={handleSwitchToggle} />
                        {
                            isModalOpen && (
                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                    <ModalOverlay />
                                    <ModalContent >
                                        <ModalContent w='778px' h='350px' borderRadius='8px'>
                                            <ModalBody color='white' bg='#0F5B53' display='flex' flexDir='column' alignItems='center' justifyContent='space-between'>
                                                <div className="top-icon-close-btn"
                                                    style={{
                                                        width: "100%",
                                                        background: "transparent",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "space-between",
                                                        alignItems: "center"

                                                    }}
                                                >

                                                    <div className="close-btn" style={{ background: "transparent" }}
                                                        onClick={handleCloseModal}
                                                    >X</div>
                                                </div>
                                                <div className="genset-img-tile-desc" style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    gap: "10px",
                                                    background: "#0F5B53"
                                                }} >
                                                    <img src={gensetHome}
                                                        style={{
                                                            background: "transparent",
                                                            mixBlendMode: 'hard-light'
                                                        }}
                                                        alt="" />

                                                    <div className="title-desc" style={{
                                                        background: '#0F5B53'
                                                    }}>
                                                        <div className="title" style={{
                                                            background: '#0F5B53'
                                                        }}>Are you sure?</div>
                                                        <div className="desc" style={{
                                                            background: '#0F5B53'
                                                        }}>Do you really want to Start the genset?</div>
                                                    </div>




                                                </div>
                                                <div className="cancel-yes-btn"
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "space-between",
                                                        width: "100%",
                                                        gap: "20px",
                                                        background: "transparent"
                                                    }}
                                                >
                                                    <button className='cancel-btn'
                                                        style={{
                                                            display: "flex",
                                                            padding: "10px 20px",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            gap: "6px",
                                                            borderRadius: "8px",
                                                            border: "1px solid var(--Grey-2, #CACCCC)",
                                                            background: "var(--Grey-2, #CACCCC)",
                                                            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                                                            width: "100%"
                                                        }}
                                                        onClick={handleCloseModal}

                                                    >Cancel</button>
                                                    <button className='yes-btn'
                                                        style={{
                                                            display: "flex",
                                                            padding: "10px 20px",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            gap: "6px",
                                                            borderRadius: "8px",
                                                            border: "1px solid var(--Grey-2, #CACCCC)",
                                                            background: "var(--Grey-2, #19988B)",
                                                            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                                                            width: "100%"
                                                        }}

                                                        onClick={handleYesButtonClick}

                                                    >Yes</button>
                                                </div>




                                            </ModalBody>
                                        </ModalContent>
                                    </ModalContent>
                                </Modal>

                            )
                        }

                        {isGensetStarted && (
                            <Modal isOpen={isGensetStarted} onClose={() => setIsGensetStarted(false)}>
                                <ModalOverlay />
                                <ModalContent w='778px' h='350px' borderRadius='8px'>
                                    <ModalCloseButton color="#fff" />
                                    <ModalBody color='white' bg='#0F5B53' display='flex' flexDir='column' alignItems='center' justifyContent='space-between'>
                                        <div className="genset-img" style={{ background: "transparent" }}>
                                            <img src={gensetHome} alt=""
                                                style={{
                                                    background: "none",
                                                    mixBlendMode: "hard-light"
                                                }}
                                            />
                                        </div>
                                        <div className="tick-icon">
                                            <svg style={{background:"#0F5B53", border:"none"}} width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="4.5" y="4" width="48" height="48" rx="24" fill="#147A6F" />
                                                <rect x="4.5" y="4" width="48" height="48" rx="24" stroke="#0F5B53" stroke-width="8" />
                                                <path d="M36.5 22L25.5 33L20.5 28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                        <div className="generator-start"
                                            style={{
                                                background:"none"
                                            }}
                                        
                                        >Generator Started Successfully!</div>
                                        <div className="description"
                                            style={{
                                                background:"none"
                                            }}
                                        >You can switch off anytime by clicking the power control in dashboard</div>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        )}


                    </div>
                    <div className="energy-flow">

                    </div>
                </div>
            </div>
            <div className="middle-genset-details-card">
                <div className="middle-heading-dates-filters">
                    <div className="middle-heading">ELECTRICAL QUALITY PARAMETERS</div>
                    <div className="middle-right-dates-filters">
                        <div className="days-selection">
                            <div className="day-select" id="today">Today</div>
                            <div className="day-select" id="last-ten">Last 10 days</div>
                            <div className="day-select" id="last-thirty">Last 30 days</div>
                            <div className="day-select" id="last-sixty">Last 60 days</div>
                        </div>
                        <div className="calendar-filters">
                            <div className="calendar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                    <path d="M13.7136 6.25H2.46362M10.5886 1.25V3.75M5.58862 1.25V3.75M5.46362 13.75H10.7136C11.7637 13.75 12.2888 13.75 12.6899 13.5456C13.0427 13.3659 13.3295 13.079 13.5093 12.7262C13.7136 12.3251 13.7136 11.8001 13.7136 10.75V5.5C13.7136 4.4499 13.7136 3.92485 13.5093 3.52377C13.3295 3.17096 13.0427 2.88413 12.6899 2.70436C12.2888 2.5 11.7637 2.5 10.7136 2.5H5.46362C4.41352 2.5 3.88848 2.5 3.48739 2.70436C3.13459 2.88413 2.84775 3.17096 2.66799 3.52377C2.46362 3.92485 2.46362 4.4499 2.46362 5.5V10.75C2.46362 11.8001 2.46362 12.3251 2.66799 12.7262C2.84775 13.079 3.13459 13.3659 3.48739 13.5456C3.88848 13.75 4.41352 13.75 5.46362 13.75Z" stroke="#DDDDDD" stroke-width="1.21304" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Select Dates
                            </div>
                            <div className="filters">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                    <path d="M4.07251 7.5H11.5725M2.19751 3.75H13.4475M5.94751 11.25H9.69751" stroke="#DDDDDD" stroke-width="1.21304" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Filters</div>
                        </div>
                    </div>
                </div>
                <div className="middle-card-row">
                    <Link to='/generator1' className="genset-card-route" id="genset-1">
                        <div className="genset-icon-parameters-cards">
                            <div className="genset-img-generator"></div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 56 47" fill="none">
                                        <path d="M28 37.0463C37.9668 37.0463 46.0466 28.9665 46.0466 18.9996C46.0466 9.03275 37.9668 0.953003 28 0.953003C18.0331 0.953003 9.95334 9.03275 9.95334 18.9996C9.95334 28.9665 18.0331 37.0463 28 37.0463Z" fill="url(#paint0_linear_2337_1073)" />
                                        <path d="M22.5976 26.7219L29.158 20.1616C29.4668 19.8537 29.6407 19.4252 29.6407 18.9996V9.15601C29.6407 8.2492 28.9069 7.51541 28.0001 7.51541C27.0932 7.51541 26.3595 8.2492 26.3595 9.15601V18.3203L20.2777 24.402C19.6369 25.0428 19.6369 26.0811 20.2777 26.7219C20.9185 27.3629 21.9566 27.3629 22.5976 26.7219Z" fill="#0A3B36" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1073" x1="28" y1="37.0463" x2="28" y2="0.953003" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 37 32" fill="none">
                                        <path d="M25.1357 25.0772C25.8528 25.5929 26.891 25.4407 27.4204 24.6894C30.6728 20.112 30.1474 13.9036 26.1707 9.92698C21.8385 5.5883 14.2634 5.5883 9.93102 9.92698C5.95447 13.9035 5.42893 20.112 8.6813 24.6894C9.20357 25.428 10.2386 25.5994 10.966 25.0772C11.7063 24.5516 11.8793 23.5279 11.3538 22.7893C9.03382 19.5208 9.41193 15.0876 12.251 12.2469C15.3464 9.14834 20.7553 9.14834 23.8507 12.2469C26.6898 15.0876 27.0679 19.5208 24.7479 22.7893C24.2225 23.5279 24.3955 24.5517 25.1357 25.0772ZM7.61118 30.8082C8.252 30.1674 8.252 29.1291 7.61118 28.4882C1.83596 22.7164 1.84153 13.3717 7.61118 7.6055C10.3989 4.81611 14.1064 3.28125 18.0509 3.28125C21.9954 3.28125 25.7029 4.81611 28.4906 7.6055C34.2659 13.3773 34.2603 22.722 28.4906 28.4882C27.8498 29.1291 27.8498 30.1674 28.4906 30.8082C29.1316 31.449 30.1698 31.449 30.8106 30.8082C37.8659 23.7561 37.8652 12.3368 30.8106 5.28555C27.4044 1.87611 22.8703 0 18.0509 0C13.2315 0 8.69738 1.87611 5.29122 5.28555C-1.76412 12.3376 -1.76336 23.7569 5.29122 30.8082C5.93205 31.449 6.97024 31.449 7.61118 30.8082Z" fill="url(#paint0_linear_2337_1081)" />
                                        <path d="M17.9999 22.9688C20.7182 22.9688 22.9218 20.7652 22.9218 18.0469C22.9218 15.3286 20.7182 13.125 17.9999 13.125C15.2816 13.125 13.078 15.3286 13.078 18.0469C13.078 20.7652 15.2816 22.9688 17.9999 22.9688Z" fill="url(#paint1_linear_2337_1081)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1081" x1="18.0509" y1="56" x2="18.0509" y2="0" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2337_1081" x1="17.9999" y1="22.9688" x2="17.9999" y2="13.125" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#ADDCFF" />
                                                <stop offset="0.5028" stop-color="#EAF6FF" />
                                                <stop offset="1" stop-color="#EAF6FF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 40 30" fill="none">
                                        <path d="M20 0.9375L17.6562 5.625L20 10.3125C22.9062 10.3125 25.5312 11.4844 27.4531 13.4062L32.8906 12.6562L34.0859 6.77344C30.4765 3.16406 25.4845 0.9375 20 0.9375ZM5.91406 6.77344C2.30469 10.3829 0 15.3749 0 20.8594C0 21.5157 0.515547 22.0312 1.17188 22.0312H8.28125C8.93758 22.0312 9.45312 21.5157 9.45312 20.8594C9.45312 17.9531 10.625 15.3281 12.5469 13.4062L11.2341 7.40602L5.91406 6.77344ZM19.0364 13.1621C18.2193 14.3454 14.1406 20.3913 14.1406 23.2031C14.1406 26.4338 16.7682 29.0625 20 29.0625C23.2318 29.0625 25.8594 26.4338 25.8594 23.2031C25.8594 20.3913 21.7807 14.3454 20.9636 13.1621C20.5288 12.528 19.4713 12.528 19.0364 13.1621Z" fill="url(#paint0_linear_2337_1091)" />
                                        <path d="M34.086 6.77344L27.4532 13.4062C29.3751 15.3281 30.5469 17.9531 30.5469 20.8594C30.5469 21.5157 31.0625 22.0312 31.7188 22.0312H38.8282C39.4845 22.0312 40.0001 21.5157 40.0001 20.8594C40.0001 15.3749 37.6954 10.3829 34.086 6.77344ZM20.0001 0.9375C14.5156 0.9375 9.52358 3.16406 5.91412 6.77344L12.5469 13.4062C14.4688 11.4844 17.0938 10.3125 20.0001 10.3125V0.9375ZM20.0001 22.0312C19.3529 22.0312 18.8282 22.5559 18.8282 23.2031C18.8282 23.8503 19.3529 24.375 20.0001 24.375C20.6472 24.375 21.1719 23.8503 21.1719 23.2031C21.1719 22.5559 20.6472 22.0312 20.0001 22.0312Z" fill="url(#paint1_linear_2337_1091)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1091" x1="17.043" y1="29.0625" x2="17.043" y2="0.9375" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2337_1091" x1="22.9571" y1="24.375" x2="22.9571" y2="0.9375" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C3FFE8" />
                                                <stop offset="0.9973" stop-color="#F0FFF4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg width="50" height="50" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="56" height="56" rx="2" fill="url(#paint0_linear_2337_1088)" />
                                        <path d="M35.1818 33.944C33.0214 33.944 31.2627 35.7016 31.2627 37.8631C31.2627 40.0245 33.0214 41.7822 35.1818 41.7822C37.3423 41.7822 39.1009 40.0245 39.1009 37.8631C39.1009 35.7016 37.3424 33.944 35.1818 33.944ZM34.2021 28.9144H36.1616C37.2439 28.9144 38.1212 28.0371 38.1212 26.9549V14.2178C38.1212 12.597 36.8026 11.2784 35.1818 11.2784C33.561 11.2784 32.2425 12.597 32.2425 14.2178V26.9549C32.2425 28.0371 33.1199 28.9144 34.2021 28.9144Z" fill="url(#paint1_linear_2337_1088)" />
                                        <path d="M38.1212 31.6904V26.9549H32.2425V31.6904C29.1659 33.1601 27.5592 36.6873 28.6956 40.1361C29.5204 42.6898 32.0051 44.7215 35.1818 44.7215C38.9644 44.7215 42.0403 41.6523 42.0403 37.8631C42.0403 35.2372 40.4922 32.827 38.1212 31.6904ZM35.1818 40.8024C33.5553 40.8024 32.2425 39.4894 32.2425 37.8631C32.2425 36.2366 33.5553 34.9237 35.1818 34.9237C36.8084 34.9237 38.1212 36.2366 38.1212 37.8631C38.1212 39.4894 36.8085 40.8024 35.1818 40.8024ZM28.1148 27.0267L29.4601 27.8036C29.931 28.074 30.5308 27.9121 30.7978 27.4448C31.0695 26.976 30.9088 26.377 30.4399 26.1063L29.0944 25.3293L29.487 25.2241C30.0094 25.0844 30.3194 24.5467 30.1797 24.0242C30.0381 23.5008 29.5099 23.1918 28.978 23.3315L26.6946 23.9436L25.5493 23.2822L24.7411 22.056L25.5492 20.83L26.6945 20.1686L28.9779 20.7806C29.5024 20.9205 30.0383 20.6097 30.1796 20.0879C30.3193 19.5655 30.0093 19.0278 29.4869 18.888L29.0944 18.7828L30.4399 18.0059C30.9087 17.735 31.0695 17.1361 30.7977 16.6673C30.5279 16.1965 29.9251 16.0387 29.4601 16.3085L28.1148 17.0855L28.22 16.6931C28.3597 16.1707 28.0497 15.633 27.5273 15.4933C27.003 15.3546 26.4691 15.6627 26.3256 16.186L25.7128 18.4724L24.5698 19.1324L23.103 19.2201L22.4447 17.9051V16.5831L24.1172 14.9106C24.4999 14.5279 24.4999 13.9078 24.1172 13.5251C23.7345 13.1424 23.1144 13.1424 22.7317 13.5251L22.4447 13.8122V12.2582C22.4447 11.7167 22.0064 11.2784 21.4649 11.2784C20.9233 11.2784 20.4851 11.7167 20.4851 12.2582V13.8121L20.198 13.525C19.8153 13.1423 19.1953 13.1423 18.8126 13.525C18.4299 13.9077 18.4299 14.5278 18.8126 14.9105L20.4851 16.583V17.905L19.8268 19.2199L18.36 19.1323L17.217 18.4723L16.6042 16.1859C16.4627 15.6626 15.9346 15.3535 15.4026 15.4932C14.8802 15.6329 14.5702 16.1706 14.7099 16.693L14.8151 17.0853L13.4698 16.3084C13.0029 16.0415 12.402 16.1984 12.1322 16.6672C11.8605 17.1361 12.0212 17.735 12.4901 18.0058L13.8356 18.7828L13.443 18.888C12.9206 19.0277 12.6106 19.5654 12.7503 20.0878C12.8916 20.6099 13.4278 20.9204 13.952 20.7805L16.2354 20.1685L17.3807 20.8299L18.1888 22.056L17.3808 23.282L16.2355 23.9434L13.9521 23.3314C13.4297 23.1927 12.8939 23.5017 12.7504 24.0241C12.6106 24.5465 12.9206 25.0842 13.4431 25.2239L13.8356 25.3292L12.4901 26.1062C12.0212 26.377 11.8605 26.9759 12.1322 27.4448C12.3989 27.9115 12.9982 28.0743 13.4698 27.8036L14.8151 27.0266L14.7099 27.4189C14.5436 28.0411 15.0123 28.6522 15.6572 28.6522C16.0896 28.6522 16.4858 28.3643 16.6044 27.926L17.2172 25.6396L18.3602 24.9796L19.827 24.892L20.4852 26.2069V27.529L18.8128 29.2014C18.4301 29.5841 18.4301 30.2042 18.8128 30.5869C19.1955 30.9696 19.8155 30.9696 20.1982 30.5869L20.4853 30.2998V31.8538C20.4853 32.3953 20.9235 32.8335 21.4651 32.8335C22.0066 32.8335 22.4449 32.3953 22.4449 31.8538V30.2999L22.7319 30.587C23.1146 30.9697 23.7346 30.9697 24.1174 30.587C24.5001 30.2043 24.5001 29.5842 24.1174 29.2015L22.4449 27.529V26.207L23.1032 24.8921L24.57 24.9797L25.7129 25.6397L26.3258 27.9261C26.4671 28.4482 27.0032 28.7586 27.5275 28.6188C28.0499 28.4791 28.3599 27.9414 28.2202 27.419L28.1148 27.0267ZM43.0201 24.9953H41.0605C40.519 24.9953 40.0807 25.4335 40.0807 25.9751C40.0807 26.5167 40.519 26.9549 41.0605 26.9549H43.0201C43.5616 26.9549 43.9998 26.5167 43.9998 25.9751C43.9998 25.4335 43.5616 24.9953 43.0201 24.9953ZM43.0201 21.0762H41.0605C40.519 21.0762 40.0807 21.5144 40.0807 22.056C40.0807 22.5975 40.519 23.0358 41.0605 23.0358H43.0201C43.5616 23.0358 43.9998 22.5975 43.9998 22.056C43.9998 21.5144 43.5616 21.0762 43.0201 21.0762ZM43.0201 17.1571H41.0605C40.519 17.1571 40.0807 17.5953 40.0807 18.1369C40.0807 18.6784 40.519 19.1167 41.0605 19.1167H43.0201C43.5616 19.1167 43.9998 18.6784 43.9998 18.1369C43.9998 17.5953 43.5616 17.1571 43.0201 17.1571ZM41.0605 15.1976H43.0201C43.5616 15.1976 43.9998 14.7593 43.9998 14.2178C43.9998 13.6762 43.5616 13.238 43.0201 13.238H41.0605C40.519 13.238 40.0807 13.6762 40.0807 14.2178C40.0807 14.7593 40.519 15.1976 41.0605 15.1976Z" fill="url(#paint2_linear_2337_1088)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1088" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0A3D38" />
                                                <stop offset="1" stop-color="#051E1C" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2337_1088" x1="35.1818" y1="41.7822" x2="35.1818" y2="11.2784" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C3FFE8" />
                                                <stop offset="0.9973" stop-color="#F0FFF4" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_2337_1088" x1="27.9999" y1="44.7215" x2="27.9999" y2="11.2784" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg width="40" height="40" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group">
                                            <path id="Vector" d="M17.2148 39C16.5429 39 15.9961 38.4533 15.9961 37.7812V34.8177C15.9961 34.3409 15.6898 33.9305 15.234 33.7962C14.2559 33.5046 13.3043 33.1106 12.4053 32.6253C12.2524 32.5423 12.0789 32.4984 11.9032 32.4984C11.6204 32.4984 11.344 32.6119 11.145 32.8097L9.04968 34.9039C8.81948 35.1341 8.51343 35.261 8.18802 35.261C7.86261 35.261 7.55655 35.1341 7.32636 34.9039L4.095 31.6726C3.61992 31.1975 3.61992 30.4243 4.095 29.9492L6.19049 27.8548C6.52663 27.5177 6.60029 27.0104 6.37376 26.5927C5.89098 25.7016 5.49778 24.7507 5.20498 23.7662C5.07168 23.3174 4.65121 23.0039 4.18229 23.0039H1.21875C0.546762 23.0039 0 22.4572 0 21.7852V17.2148C0 16.5428 0.546762 15.9961 1.21875 15.9961H4.18229C4.65844 15.9961 5.06947 15.6893 5.20498 15.2327C5.49824 14.2479 5.89212 13.2963 6.37597 12.404C6.59732 11.9936 6.52107 11.4758 6.19041 11.1452L4.09492 9.05082C3.86428 8.82009 3.73753 8.5135 3.73798 8.18756C3.73844 7.86254 3.86527 7.55701 4.09492 7.32743L7.32629 4.09607C7.55648 3.8658 7.86254 3.73905 8.18794 3.73905C8.51335 3.73905 8.81941 3.86587 9.0496 4.09607L11.1451 6.19041C11.3491 6.39311 11.6165 6.50485 11.8981 6.50485C12.0736 6.50485 12.2497 6.45983 12.4075 6.37475C13.3033 5.88991 14.2542 5.49595 15.2337 5.20391C15.6826 5.07091 15.9961 4.65083 15.9961 4.18229V1.21875C15.9961 0.546762 16.5429 0 17.2148 0H21.7852C22.4571 0 23.0039 0.546762 23.0039 1.21875V4.18229C23.0039 4.65905 23.3102 5.06954 23.766 5.20383C24.7441 5.49542 25.6957 5.88938 26.5947 6.37475C26.7468 6.45808 26.9201 6.50203 27.0962 6.50203C27.3803 6.50203 27.6568 6.38846 27.8548 6.19041L29.9503 4.09607C30.1805 3.8658 30.4866 3.73905 30.812 3.73905C31.1374 3.73905 31.4434 3.86587 31.6736 4.09607L34.905 7.32743C35.3801 7.80259 35.3801 8.57566 34.905 9.05082L32.8095 11.1452C32.4734 11.4823 32.3997 11.9896 32.6262 12.4073C33.109 13.2984 33.5022 14.2493 33.795 15.2338C33.9283 15.6826 34.3489 15.9961 34.8177 15.9961H37.7812C38.4532 15.9961 39 16.5428 39 17.2148V21.7852C39 22.4572 38.4532 23.0039 37.7812 23.0039H34.8177C34.3416 23.0039 33.9306 23.3107 33.795 23.7673C33.5018 24.7521 33.1079 25.7037 32.624 26.5959C32.4027 27.0064 32.4789 27.5241 32.8096 27.8548L34.9051 29.9491C35.1357 30.1798 35.2625 30.4864 35.262 30.8124C35.2616 31.1374 35.1347 31.4429 34.9051 31.6725L31.6737 34.9039C31.4435 35.1341 31.1375 35.261 30.8121 35.261C30.4867 35.261 30.1806 35.1341 29.9504 34.9039L27.8549 32.8095C27.6524 32.607 27.3853 32.4955 27.1028 32.4955C26.9268 32.4955 26.7504 32.5404 26.5925 32.6252C25.6968 33.11 24.7459 33.5039 23.7664 33.7959C23.3174 33.9289 23.004 34.349 23.004 34.8176V37.7812C23.004 38.4533 22.4572 39 21.7852 39H17.2148Z" fill="url(#paint0_linear_2337_1099)" />
                                            <path id="Vector_2" d="M19.5001 29.8848C15.664 29.8848 12.5442 26.7638 12.5442 22.9277C12.5442 21.8309 12.8053 20.7386 13.2985 19.7678L18.3932 9.79374C18.8172 8.96133 20.183 8.96133 20.6069 9.79374L25.6994 19.7678C26.1948 20.7386 26.4559 21.8309 26.4559 22.9277C26.4559 26.7638 23.3362 29.8848 19.5001 29.8848Z" fill="#030F0E" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1099" x1="19.5" y1="39" x2="19.5" y2="0" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="genset-stats-table">
                            <div className="table-left">
                                <div className="stats-titles">
                                    <div className="stat-title">Voltage</div>
                                    <div className="stat-title">Power (kW)</div>
                                    <div className="stat-title">Power (kVA)</div>
                                </div>
                                <div className="stats-values">
                                    <div className="stat-value">10</div>
                                    <div className="stat-value">99</div>
                                    <div className="stat-value">99</div>
                                </div>
                            </div>
                            <div className="table-right">
                                <div className="stats-titles">
                                    <div className="stat-title">Power Factor</div>
                                    <div className="stat-title">Current (A)</div>
                                    <div className="stat-title">Engine running hours (Hr)</div>
                                </div>
                                <div className="stats-values">
                                    <div className="stat-value">83</div>
                                    <div className="stat-value">10</div>
                                    <div className="stat-value">54</div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="genset-card-route" id="genset-2">
                        <div className="genset-icon-parameters-cards">
                            <div className="genset-img-generator"></div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 56 47" fill="none">
                                        <path d="M28 37.0463C37.9668 37.0463 46.0466 28.9665 46.0466 18.9996C46.0466 9.03275 37.9668 0.953003 28 0.953003C18.0331 0.953003 9.95334 9.03275 9.95334 18.9996C9.95334 28.9665 18.0331 37.0463 28 37.0463Z" fill="url(#paint0_linear_2337_1073)" />
                                        <path d="M22.5976 26.7219L29.158 20.1616C29.4668 19.8537 29.6407 19.4252 29.6407 18.9996V9.15601C29.6407 8.2492 28.9069 7.51541 28.0001 7.51541C27.0932 7.51541 26.3595 8.2492 26.3595 9.15601V18.3203L20.2777 24.402C19.6369 25.0428 19.6369 26.0811 20.2777 26.7219C20.9185 27.3629 21.9566 27.3629 22.5976 26.7219Z" fill="#0A3B36" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1073" x1="28" y1="37.0463" x2="28" y2="0.953003" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 37 32" fill="none">
                                        <path d="M25.1357 25.0772C25.8528 25.5929 26.891 25.4407 27.4204 24.6894C30.6728 20.112 30.1474 13.9036 26.1707 9.92698C21.8385 5.5883 14.2634 5.5883 9.93102 9.92698C5.95447 13.9035 5.42893 20.112 8.6813 24.6894C9.20357 25.428 10.2386 25.5994 10.966 25.0772C11.7063 24.5516 11.8793 23.5279 11.3538 22.7893C9.03382 19.5208 9.41193 15.0876 12.251 12.2469C15.3464 9.14834 20.7553 9.14834 23.8507 12.2469C26.6898 15.0876 27.0679 19.5208 24.7479 22.7893C24.2225 23.5279 24.3955 24.5517 25.1357 25.0772ZM7.61118 30.8082C8.252 30.1674 8.252 29.1291 7.61118 28.4882C1.83596 22.7164 1.84153 13.3717 7.61118 7.6055C10.3989 4.81611 14.1064 3.28125 18.0509 3.28125C21.9954 3.28125 25.7029 4.81611 28.4906 7.6055C34.2659 13.3773 34.2603 22.722 28.4906 28.4882C27.8498 29.1291 27.8498 30.1674 28.4906 30.8082C29.1316 31.449 30.1698 31.449 30.8106 30.8082C37.8659 23.7561 37.8652 12.3368 30.8106 5.28555C27.4044 1.87611 22.8703 0 18.0509 0C13.2315 0 8.69738 1.87611 5.29122 5.28555C-1.76412 12.3376 -1.76336 23.7569 5.29122 30.8082C5.93205 31.449 6.97024 31.449 7.61118 30.8082Z" fill="url(#paint0_linear_2337_1081)" />
                                        <path d="M17.9999 22.9688C20.7182 22.9688 22.9218 20.7652 22.9218 18.0469C22.9218 15.3286 20.7182 13.125 17.9999 13.125C15.2816 13.125 13.078 15.3286 13.078 18.0469C13.078 20.7652 15.2816 22.9688 17.9999 22.9688Z" fill="url(#paint1_linear_2337_1081)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1081" x1="18.0509" y1="56" x2="18.0509" y2="0" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2337_1081" x1="17.9999" y1="22.9688" x2="17.9999" y2="13.125" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#ADDCFF" />
                                                <stop offset="0.5028" stop-color="#EAF6FF" />
                                                <stop offset="1" stop-color="#EAF6FF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 40 30" fill="none">
                                        <path d="M20 0.9375L17.6562 5.625L20 10.3125C22.9062 10.3125 25.5312 11.4844 27.4531 13.4062L32.8906 12.6562L34.0859 6.77344C30.4765 3.16406 25.4845 0.9375 20 0.9375ZM5.91406 6.77344C2.30469 10.3829 0 15.3749 0 20.8594C0 21.5157 0.515547 22.0312 1.17188 22.0312H8.28125C8.93758 22.0312 9.45312 21.5157 9.45312 20.8594C9.45312 17.9531 10.625 15.3281 12.5469 13.4062L11.2341 7.40602L5.91406 6.77344ZM19.0364 13.1621C18.2193 14.3454 14.1406 20.3913 14.1406 23.2031C14.1406 26.4338 16.7682 29.0625 20 29.0625C23.2318 29.0625 25.8594 26.4338 25.8594 23.2031C25.8594 20.3913 21.7807 14.3454 20.9636 13.1621C20.5288 12.528 19.4713 12.528 19.0364 13.1621Z" fill="url(#paint0_linear_2337_1091)" />
                                        <path d="M34.086 6.77344L27.4532 13.4062C29.3751 15.3281 30.5469 17.9531 30.5469 20.8594C30.5469 21.5157 31.0625 22.0312 31.7188 22.0312H38.8282C39.4845 22.0312 40.0001 21.5157 40.0001 20.8594C40.0001 15.3749 37.6954 10.3829 34.086 6.77344ZM20.0001 0.9375C14.5156 0.9375 9.52358 3.16406 5.91412 6.77344L12.5469 13.4062C14.4688 11.4844 17.0938 10.3125 20.0001 10.3125V0.9375ZM20.0001 22.0312C19.3529 22.0312 18.8282 22.5559 18.8282 23.2031C18.8282 23.8503 19.3529 24.375 20.0001 24.375C20.6472 24.375 21.1719 23.8503 21.1719 23.2031C21.1719 22.5559 20.6472 22.0312 20.0001 22.0312Z" fill="url(#paint1_linear_2337_1091)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1091" x1="17.043" y1="29.0625" x2="17.043" y2="0.9375" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2337_1091" x1="22.9571" y1="24.375" x2="22.9571" y2="0.9375" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C3FFE8" />
                                                <stop offset="0.9973" stop-color="#F0FFF4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg width="50" height="50" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="56" height="56" rx="2" fill="url(#paint0_linear_2337_1088)" />
                                        <path d="M35.1818 33.944C33.0214 33.944 31.2627 35.7016 31.2627 37.8631C31.2627 40.0245 33.0214 41.7822 35.1818 41.7822C37.3423 41.7822 39.1009 40.0245 39.1009 37.8631C39.1009 35.7016 37.3424 33.944 35.1818 33.944ZM34.2021 28.9144H36.1616C37.2439 28.9144 38.1212 28.0371 38.1212 26.9549V14.2178C38.1212 12.597 36.8026 11.2784 35.1818 11.2784C33.561 11.2784 32.2425 12.597 32.2425 14.2178V26.9549C32.2425 28.0371 33.1199 28.9144 34.2021 28.9144Z" fill="url(#paint1_linear_2337_1088)" />
                                        <path d="M38.1212 31.6904V26.9549H32.2425V31.6904C29.1659 33.1601 27.5592 36.6873 28.6956 40.1361C29.5204 42.6898 32.0051 44.7215 35.1818 44.7215C38.9644 44.7215 42.0403 41.6523 42.0403 37.8631C42.0403 35.2372 40.4922 32.827 38.1212 31.6904ZM35.1818 40.8024C33.5553 40.8024 32.2425 39.4894 32.2425 37.8631C32.2425 36.2366 33.5553 34.9237 35.1818 34.9237C36.8084 34.9237 38.1212 36.2366 38.1212 37.8631C38.1212 39.4894 36.8085 40.8024 35.1818 40.8024ZM28.1148 27.0267L29.4601 27.8036C29.931 28.074 30.5308 27.9121 30.7978 27.4448C31.0695 26.976 30.9088 26.377 30.4399 26.1063L29.0944 25.3293L29.487 25.2241C30.0094 25.0844 30.3194 24.5467 30.1797 24.0242C30.0381 23.5008 29.5099 23.1918 28.978 23.3315L26.6946 23.9436L25.5493 23.2822L24.7411 22.056L25.5492 20.83L26.6945 20.1686L28.9779 20.7806C29.5024 20.9205 30.0383 20.6097 30.1796 20.0879C30.3193 19.5655 30.0093 19.0278 29.4869 18.888L29.0944 18.7828L30.4399 18.0059C30.9087 17.735 31.0695 17.1361 30.7977 16.6673C30.5279 16.1965 29.9251 16.0387 29.4601 16.3085L28.1148 17.0855L28.22 16.6931C28.3597 16.1707 28.0497 15.633 27.5273 15.4933C27.003 15.3546 26.4691 15.6627 26.3256 16.186L25.7128 18.4724L24.5698 19.1324L23.103 19.2201L22.4447 17.9051V16.5831L24.1172 14.9106C24.4999 14.5279 24.4999 13.9078 24.1172 13.5251C23.7345 13.1424 23.1144 13.1424 22.7317 13.5251L22.4447 13.8122V12.2582C22.4447 11.7167 22.0064 11.2784 21.4649 11.2784C20.9233 11.2784 20.4851 11.7167 20.4851 12.2582V13.8121L20.198 13.525C19.8153 13.1423 19.1953 13.1423 18.8126 13.525C18.4299 13.9077 18.4299 14.5278 18.8126 14.9105L20.4851 16.583V17.905L19.8268 19.2199L18.36 19.1323L17.217 18.4723L16.6042 16.1859C16.4627 15.6626 15.9346 15.3535 15.4026 15.4932C14.8802 15.6329 14.5702 16.1706 14.7099 16.693L14.8151 17.0853L13.4698 16.3084C13.0029 16.0415 12.402 16.1984 12.1322 16.6672C11.8605 17.1361 12.0212 17.735 12.4901 18.0058L13.8356 18.7828L13.443 18.888C12.9206 19.0277 12.6106 19.5654 12.7503 20.0878C12.8916 20.6099 13.4278 20.9204 13.952 20.7805L16.2354 20.1685L17.3807 20.8299L18.1888 22.056L17.3808 23.282L16.2355 23.9434L13.9521 23.3314C13.4297 23.1927 12.8939 23.5017 12.7504 24.0241C12.6106 24.5465 12.9206 25.0842 13.4431 25.2239L13.8356 25.3292L12.4901 26.1062C12.0212 26.377 11.8605 26.9759 12.1322 27.4448C12.3989 27.9115 12.9982 28.0743 13.4698 27.8036L14.8151 27.0266L14.7099 27.4189C14.5436 28.0411 15.0123 28.6522 15.6572 28.6522C16.0896 28.6522 16.4858 28.3643 16.6044 27.926L17.2172 25.6396L18.3602 24.9796L19.827 24.892L20.4852 26.2069V27.529L18.8128 29.2014C18.4301 29.5841 18.4301 30.2042 18.8128 30.5869C19.1955 30.9696 19.8155 30.9696 20.1982 30.5869L20.4853 30.2998V31.8538C20.4853 32.3953 20.9235 32.8335 21.4651 32.8335C22.0066 32.8335 22.4449 32.3953 22.4449 31.8538V30.2999L22.7319 30.587C23.1146 30.9697 23.7346 30.9697 24.1174 30.587C24.5001 30.2043 24.5001 29.5842 24.1174 29.2015L22.4449 27.529V26.207L23.1032 24.8921L24.57 24.9797L25.7129 25.6397L26.3258 27.9261C26.4671 28.4482 27.0032 28.7586 27.5275 28.6188C28.0499 28.4791 28.3599 27.9414 28.2202 27.419L28.1148 27.0267ZM43.0201 24.9953H41.0605C40.519 24.9953 40.0807 25.4335 40.0807 25.9751C40.0807 26.5167 40.519 26.9549 41.0605 26.9549H43.0201C43.5616 26.9549 43.9998 26.5167 43.9998 25.9751C43.9998 25.4335 43.5616 24.9953 43.0201 24.9953ZM43.0201 21.0762H41.0605C40.519 21.0762 40.0807 21.5144 40.0807 22.056C40.0807 22.5975 40.519 23.0358 41.0605 23.0358H43.0201C43.5616 23.0358 43.9998 22.5975 43.9998 22.056C43.9998 21.5144 43.5616 21.0762 43.0201 21.0762ZM43.0201 17.1571H41.0605C40.519 17.1571 40.0807 17.5953 40.0807 18.1369C40.0807 18.6784 40.519 19.1167 41.0605 19.1167H43.0201C43.5616 19.1167 43.9998 18.6784 43.9998 18.1369C43.9998 17.5953 43.5616 17.1571 43.0201 17.1571ZM41.0605 15.1976H43.0201C43.5616 15.1976 43.9998 14.7593 43.9998 14.2178C43.9998 13.6762 43.5616 13.238 43.0201 13.238H41.0605C40.519 13.238 40.0807 13.6762 40.0807 14.2178C40.0807 14.7593 40.519 15.1976 41.0605 15.1976Z" fill="url(#paint2_linear_2337_1088)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1088" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0A3D38" />
                                                <stop offset="1" stop-color="#051E1C" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2337_1088" x1="35.1818" y1="41.7822" x2="35.1818" y2="11.2784" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C3FFE8" />
                                                <stop offset="0.9973" stop-color="#F0FFF4" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_2337_1088" x1="27.9999" y1="44.7215" x2="27.9999" y2="11.2784" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                            <div className="parameter-card">
                                <div className="parameter-logo">
                                    <svg width="40" height="40" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group">
                                            <path id="Vector" d="M17.2148 39C16.5429 39 15.9961 38.4533 15.9961 37.7812V34.8177C15.9961 34.3409 15.6898 33.9305 15.234 33.7962C14.2559 33.5046 13.3043 33.1106 12.4053 32.6253C12.2524 32.5423 12.0789 32.4984 11.9032 32.4984C11.6204 32.4984 11.344 32.6119 11.145 32.8097L9.04968 34.9039C8.81948 35.1341 8.51343 35.261 8.18802 35.261C7.86261 35.261 7.55655 35.1341 7.32636 34.9039L4.095 31.6726C3.61992 31.1975 3.61992 30.4243 4.095 29.9492L6.19049 27.8548C6.52663 27.5177 6.60029 27.0104 6.37376 26.5927C5.89098 25.7016 5.49778 24.7507 5.20498 23.7662C5.07168 23.3174 4.65121 23.0039 4.18229 23.0039H1.21875C0.546762 23.0039 0 22.4572 0 21.7852V17.2148C0 16.5428 0.546762 15.9961 1.21875 15.9961H4.18229C4.65844 15.9961 5.06947 15.6893 5.20498 15.2327C5.49824 14.2479 5.89212 13.2963 6.37597 12.404C6.59732 11.9936 6.52107 11.4758 6.19041 11.1452L4.09492 9.05082C3.86428 8.82009 3.73753 8.5135 3.73798 8.18756C3.73844 7.86254 3.86527 7.55701 4.09492 7.32743L7.32629 4.09607C7.55648 3.8658 7.86254 3.73905 8.18794 3.73905C8.51335 3.73905 8.81941 3.86587 9.0496 4.09607L11.1451 6.19041C11.3491 6.39311 11.6165 6.50485 11.8981 6.50485C12.0736 6.50485 12.2497 6.45983 12.4075 6.37475C13.3033 5.88991 14.2542 5.49595 15.2337 5.20391C15.6826 5.07091 15.9961 4.65083 15.9961 4.18229V1.21875C15.9961 0.546762 16.5429 0 17.2148 0H21.7852C22.4571 0 23.0039 0.546762 23.0039 1.21875V4.18229C23.0039 4.65905 23.3102 5.06954 23.766 5.20383C24.7441 5.49542 25.6957 5.88938 26.5947 6.37475C26.7468 6.45808 26.9201 6.50203 27.0962 6.50203C27.3803 6.50203 27.6568 6.38846 27.8548 6.19041L29.9503 4.09607C30.1805 3.8658 30.4866 3.73905 30.812 3.73905C31.1374 3.73905 31.4434 3.86587 31.6736 4.09607L34.905 7.32743C35.3801 7.80259 35.3801 8.57566 34.905 9.05082L32.8095 11.1452C32.4734 11.4823 32.3997 11.9896 32.6262 12.4073C33.109 13.2984 33.5022 14.2493 33.795 15.2338C33.9283 15.6826 34.3489 15.9961 34.8177 15.9961H37.7812C38.4532 15.9961 39 16.5428 39 17.2148V21.7852C39 22.4572 38.4532 23.0039 37.7812 23.0039H34.8177C34.3416 23.0039 33.9306 23.3107 33.795 23.7673C33.5018 24.7521 33.1079 25.7037 32.624 26.5959C32.4027 27.0064 32.4789 27.5241 32.8096 27.8548L34.9051 29.9491C35.1357 30.1798 35.2625 30.4864 35.262 30.8124C35.2616 31.1374 35.1347 31.4429 34.9051 31.6725L31.6737 34.9039C31.4435 35.1341 31.1375 35.261 30.8121 35.261C30.4867 35.261 30.1806 35.1341 29.9504 34.9039L27.8549 32.8095C27.6524 32.607 27.3853 32.4955 27.1028 32.4955C26.9268 32.4955 26.7504 32.5404 26.5925 32.6252C25.6968 33.11 24.7459 33.5039 23.7664 33.7959C23.3174 33.9289 23.004 34.349 23.004 34.8176V37.7812C23.004 38.4533 22.4572 39 21.7852 39H17.2148Z" fill="url(#paint0_linear_2337_1099)" />
                                            <path id="Vector_2" d="M19.5001 29.8848C15.664 29.8848 12.5442 26.7638 12.5442 22.9277C12.5442 21.8309 12.8053 20.7386 13.2985 19.7678L18.3932 9.79374C18.8172 8.96133 20.183 8.96133 20.6069 9.79374L25.6994 19.7678C26.1948 20.7386 26.4559 21.8309 26.4559 22.9277C26.4559 26.7638 23.3362 29.8848 19.5001 29.8848Z" fill="#030F0E" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_2337_1099" x1="19.5" y1="39" x2="19.5" y2="0" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00B59C" />
                                                <stop offset="1" stop-color="#9CFFAC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="parameter-stats">
                                    <div className="paramter-heading">Running time</div>
                                    <div className="paramter-value">30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="genset-stats-table">
                            <div className="table-left">
                                <div className="stats-titles">
                                    <div className="stat-title">Voltage</div>
                                    <div className="stat-title">Power (kW)</div>
                                    <div className="stat-title">Power (kVA)</div>
                                </div>
                                <div className="stats-values">
                                    <div className="stat-value">10</div>
                                    <div className="stat-value">99</div>
                                    <div className="stat-value">99</div>
                                </div>
                            </div>
                            <div className="table-right">
                                <div className="stats-titles">
                                    <div className="stat-title">Power Factor</div>
                                    <div className="stat-title">Current (A)</div>
                                    <div className="stat-title">Engine running hours (Hr)</div>
                                </div>
                                <div className="stats-values">
                                    <div className="stat-value">83</div>
                                    <div className="stat-value">10</div>
                                    <div className="stat-value">54</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-graph-card">
                <GensetChart className='genset-chart' />

            </div>
        </div >
    )
}

export default MainContent