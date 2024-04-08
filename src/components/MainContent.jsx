import React from 'react'
import "../styles/MainContent.css"
import gensetHome from "../assets/genset-home.png"
import CustomizedSwitches from './SwitchButton'
import SwitchButton from './SwitchButton'
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom'
import GensetChart from './GensetChart'
const MainContent = () => {
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
                        <div className="switch-genset">
                            <SwitchButton className="button-prop" />
                        </div>
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
                <div className="middle-genset-img">
                    <div className="generator-img" id='generator-1'></div>
                    <div className="generator-img" id="generator-2"></div>
                </div>
                <div className="genset-card-both">
                    <Link to='/generator1' className="genset-card" id="genset-1">
                        <div className="voltage-power-data-tables">
                            <div className="voltage-power-data-left">
                                <div className="parameter-titles">
                                    <div className="title" id="voltage">Voltage (V)</div>
                                    <div className="title" id="power-kw">Power (kW)</div>
                                    <div className="title" id="power-kva">Power (kVA)</div>
                                </div>
                                <div className="parameter-values">
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                </div>
                            </div>
                            <div className="voltage-power-data-right">
                                <div className="parameter-titles">
                                    <div className="title" id="voltage">Voltage (V)</div>
                                    <div className="title" id="power-kw">Power (kW)</div>
                                    <div className="title" id="power-kva">Power (kVA)</div>
                                </div>
                                <div className="parameter-values">
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                </div>
                            </div>
                        </div>
                        <div className="running-time-pressure-parameters">
                            <div className="parameter" id="running-time">
                                <div className="running-time-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4.5 12.9375C4.5 16.8147 7.65405 20 11.5312 20C15.4084 20 18.5625 16.8147 18.5625 12.9375C18.5625 12.7273 18.5271 12.5215 18.5087 12.3127C18.2291 12.4061 17.9355 12.4688 17.625 12.4688C16.0741 12.4688 14.8125 11.2072 14.8125 9.65625C14.8125 9.1637 14.9425 8.67798 15.1879 8.25232L15.7334 7.30762C14.9023 6.68542 13.9479 6.27283 12.9375 6.06555V4.9375H13.875V4H9.1875V4.9375H10.125V6.04797C6.91943 6.70117 4.5 9.54175 4.5 12.9375ZM15.8507 15.7926L15.5573 16.1588C14.5726 17.3883 13.1055 18.0938 11.5312 18.0938C8.68811 18.0938 6.375 15.7806 6.375 12.9375C6.375 10.0944 8.68811 7.78125 11.5312 7.78125H12V11.6176C12.5444 11.8118 12.9375 12.3271 12.9375 12.9375C12.9375 13.0986 12.9045 13.2511 12.8545 13.3954L15.8507 15.7926Z" fill="#934621" />
                                        <path d="M11.5312 13.4062C11.7899 13.4062 12 13.1961 12 12.9374C12 12.6788 11.7899 12.4687 11.5312 12.4687C11.2726 12.4687 11.0625 12.6788 11.0625 12.9374C11.0625 13.1961 11.2726 13.4062 11.5312 13.4062Z" fill="#934621" />
                                        <path d="M11.531 14.3438C10.7556 14.3438 10.1248 13.7129 10.1248 12.9375C10.1248 12.3271 10.5178 11.8118 11.0623 11.6176V8.74487C9.11121 8.96143 7.57532 10.5186 7.35645 12.4688H8.24976V13.4062H7.35962C7.57874 15.3539 9.11462 16.8898 11.0623 17.1089V16.2188H11.9998V17.1102C12.9509 17.0043 13.8352 16.6006 14.5125 15.923L12.2697 14.1288C12.0543 14.2628 11.8027 14.3438 11.531 14.3438Z" fill="#934621" />
                                        <path d="M19.2501 8.72003L17.625 5.90619L15.9999 8.72052C15.8365 9.00385 15.75 9.32745 15.75 9.65619C15.75 10.6902 16.5909 11.5312 17.625 11.5312C18.6591 11.5312 19.5 10.6902 19.5 9.65619C19.5 9.3266 19.4135 9.00299 19.2501 8.72003Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title" id="running-time-title">
                                    Running Time
                                </div>
                                <div className="parameter-value" id="running-time-value">30 mins</div>
                            </div>
                            <div className="parameter" id="frequency">
                                <div className="running-time-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.9837 10.2202C17.8605 9.97385 17.6087 9.81821 17.3332 9.81821C17.0577 9.81821 16.8059 9.97385 16.6827 10.2202L14.5073 14.5709L11.7081 7.37285C11.6023 7.1009 11.3443 6.9185 11.0526 6.90948C10.7614 6.9011 10.4922 7.06672 10.3699 7.33164L7.65582 13.2121H4.72727C4.32557 13.2121 4 13.5377 4 13.9394C4 14.341 4.32557 14.6667 4.72727 14.6667H8.12118C8.40481 14.6667 8.6626 14.5017 8.78149 14.2441L10.973 9.49579L13.7463 16.6272C13.8505 16.8952 14.103 17.0767 14.3904 17.0901C14.4017 17.0906 14.413 17.0909 14.4242 17.0909C14.6986 17.0909 14.951 16.936 15.0746 16.6888L17.3332 12.1717L18.6221 14.7495C18.8017 15.1087 19.2386 15.2543 19.5978 15.0747C19.9571 14.8951 20.1027 14.4582 19.9231 14.099L17.9837 10.2202Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Frequency</div>
                                <div className="parameter-value">50 Hz</div>

                            </div>
                            <div className="parameter" id="engine-rpm">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6.82291 12.4331C6.92251 13.6502 7.43942 14.7761 8.30557 15.6423L8.63818 15.9749L6.64257 17.9706L6.30998 17.638C4.90751 16.2355 4.09699 14.4012 4.00016 12.4331H6.82291V12.4331Z" fill="#934621" />
                                        <path d="M6.8291 11.4924H4.00857C4.12789 9.69955 4.83841 8.01664 6.04545 6.67096L8.01758 8.64312C7.34049 9.45254 6.9291 10.4389 6.8291 11.4924Z" fill="#934621" />
                                        <path d="M15.6524 15.6128C16.5059 14.7593 17.0244 13.6603 17.1421 12.475H19.9966C19.8776 14.4126 19.0656 16.2186 17.6777 17.6066L17.349 17.9353L15.316 15.9492L15.6524 15.6128Z" fill="#934621" />
                                        <path d="M12.4852 6.80309V4.00006C14.2805 4.09887 15.9622 4.78929 17.3047 5.97815L15.3049 7.9779C14.5021 7.30705 13.5264 6.90052 12.4852 6.80309Z" fill="#934621" />
                                        <path d="M6.71206 6.00758C8.06107 4.81063 9.74724 4.11087 11.5439 4.00262V6.79951C10.4871 6.88988 9.49596 7.29807 8.68243 7.97792L6.71206 6.00758Z" fill="#934621" />
                                        <path d="M15.9699 8.64324L17.9716 6.64154C19.1916 8.00296 19.9008 9.7129 20 11.5343H17.1508C17.0656 10.4664 16.656 9.46436 15.9699 8.64324Z" fill="#934621" />
                                        <path d="M9.1925 17.1368H10.1332V18.0776H11.0845V19.0183H10.1332V19.9591H9.1925V19.0183H8.25175V18.0776H9.1925V17.1368Z" fill="#934621" />
                                        <path d="M15.7778 18.0776H13.426V19.0184H15.7778V18.0776Z" fill="#934621" />
                                        <path d="M11.5438 13.9249V9.14056H12.4845V13.9249C13.9575 14.4683 13.6055 16.6382 12.0141 16.6666C10.4225 16.6381 10.071 14.468 11.5438 13.9249Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Engine RPM</div>
                                <div className="parameter-value">50</div>

                            </div>
                            <div className="parameter" id="coolant-temp">
                                <div className="coolant-temp-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.1875 6.53124V5.59374H12.4687V4H11.5312V10.9717C10.8107 11.1763 10.2812 11.8397 10.2812 12.625C10.2812 13.5727 11.0523 14.3437 12 14.3437C12.9477 14.3437 13.7187 13.5727 13.7187 12.625C13.7187 11.8397 13.1893 11.1763 12.4687 10.9717V9.65623H14.1875V8.71873H12.4687V8.09373H14.1875V7.15624H12.4687V6.53124H14.1875Z" fill="#934621" />
                                        <path d="M17.3334 16.2499C16.2695 16.2499 16.2109 14.9999 14.6667 14.9999C13.1328 14.9999 13.0547 16.2499 12.0002 16.2499C12.0001 16.2499 12 16.2499 11.9999 16.2499C11.9998 16.2499 11.9998 16.2499 11.9997 16.2499C10.9453 16.2499 10.8671 14.9999 9.33314 14.9999C7.78899 14.9999 7.73039 16.2499 6.66652 16.2499C5.61718 16.2499 5.52343 14.9999 4 14.9999V15.9374C5.0664 15.9374 5.12109 17.1874 6.66658 17.1874C8.16795 17.1874 8.29295 15.9374 9.3332 15.9374C10.4336 15.9374 10.4453 17.1874 11.9998 17.1874C11.9998 17.1874 11.9999 17.1874 12 17.1874C12.0001 17.1874 12.0002 17.1874 12.0002 17.1874C13.5547 17.1874 13.5664 15.9374 14.6668 15.9374C15.707 15.9374 15.832 17.1874 17.3334 17.1874C18.8789 17.1874 18.9336 15.9374 20 15.9374V14.9999C18.4765 14.9999 18.3828 16.2499 17.3334 16.2499Z" fill="#934621" />
                                        <path d="M17.3334 19.0626C16.2695 19.0626 16.2109 17.8126 14.6667 17.8126C13.1328 17.8126 13.0547 19.0626 12.0002 19.0626C12.0001 19.0626 12 19.0626 11.9999 19.0626C11.9998 19.0626 11.9998 19.0626 11.9997 19.0626C10.9453 19.0626 10.8671 17.8126 9.33314 17.8126C7.78899 17.8126 7.73039 19.0626 6.66652 19.0626C5.61718 19.0626 5.52343 17.8126 4 17.8126V18.7501C5.0664 18.7501 5.12109 20.0001 6.66658 20.0001C8.16795 20.0001 8.29295 18.7501 9.3332 18.7501C10.4336 18.7501 10.4453 20.0001 11.9998 20.0001C11.9998 20.0001 11.9999 20.0001 12 20.0001C12.0001 20.0001 12.0002 20.0001 12.0002 20.0001C13.5547 20.0001 13.5664 18.7501 14.6668 18.7501C15.707 18.7501 15.832 20.0001 17.3334 20.0001C18.8789 20.0001 18.9336 18.7501 20 18.7501V17.8126C18.4765 17.8126 18.3828 19.0626 17.3334 19.0626Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Coolant Temp</div>
                                <div className="parameter-value">50°c</div>

                            </div>
                            <div className="parameter" id="lube-oil-pressure">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.526 11.2921H15.5397C17.0598 11.285 18.2942 10.046 18.2942 8.52399C18.2942 7.68838 17.8422 7.00177 17.2951 6.25528L15.526 4L13.7569 6.25528C13.2098 7.0017 12.7578 7.68829 12.7578 8.52396C12.7578 10.0503 13.9996 11.2921 15.526 11.2921Z" fill="#934621" />
                                        <path d="M15.5267 12.2296L15.5101 12.2295C13.4742 12.2208 11.8206 10.5619 11.8206 8.52393C11.8206 8.01896 11.9348 7.56752 12.1171 7.14585L11.0889 5.83508L7.4669 10.4525L7.45772 10.4646C6.53436 11.724 5.70557 12.9891 5.70557 14.6165C5.70557 17.5779 8.10902 19.9884 11.0678 19.9999L11.0897 20C14.0577 20 16.4725 17.585 16.4725 14.6166C16.4725 13.7274 16.2248 12.9464 15.8496 12.2154C15.7432 12.2246 15.6355 12.2296 15.5267 12.2296Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Lube Oil Pressure</div>
                                <div className="parameter-value">50 Psi</div>

                            </div>
                        </div>
                    </Link>
                    <Link to='/generator2' className="genset-card" id="genset-2">
                    <div className="voltage-power-data-tables">
                            <div className="voltage-power-data-left">
                                <div className="parameter-titles">
                                    <div className="title" id="voltage">Voltage (V)</div>
                                    <div className="title" id="power-kw">Power (kW)</div>
                                    <div className="title" id="power-kva">Power (kVA)</div>
                                </div>
                                <div className="parameter-values">
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                </div>
                            </div>
                            <div className="voltage-power-data-right">
                                <div className="parameter-titles">
                                    <div className="title" id="voltage">Voltage (V)</div>
                                    <div className="title" id="power-kw">Power (kW)</div>
                                    <div className="title" id="power-kva">Power (kVA)</div>
                                </div>
                                <div className="parameter-values">
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                    <div className="value" id="voltage">99</div>
                                </div>
                            </div>
                        </div>
                        <div className="running-time-pressure-parameters">
                            <div className="parameter" id="running-time">
                                <div className="running-time-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4.5 12.9375C4.5 16.8147 7.65405 20 11.5312 20C15.4084 20 18.5625 16.8147 18.5625 12.9375C18.5625 12.7273 18.5271 12.5215 18.5087 12.3127C18.2291 12.4061 17.9355 12.4688 17.625 12.4688C16.0741 12.4688 14.8125 11.2072 14.8125 9.65625C14.8125 9.1637 14.9425 8.67798 15.1879 8.25232L15.7334 7.30762C14.9023 6.68542 13.9479 6.27283 12.9375 6.06555V4.9375H13.875V4H9.1875V4.9375H10.125V6.04797C6.91943 6.70117 4.5 9.54175 4.5 12.9375ZM15.8507 15.7926L15.5573 16.1588C14.5726 17.3883 13.1055 18.0938 11.5312 18.0938C8.68811 18.0938 6.375 15.7806 6.375 12.9375C6.375 10.0944 8.68811 7.78125 11.5312 7.78125H12V11.6176C12.5444 11.8118 12.9375 12.3271 12.9375 12.9375C12.9375 13.0986 12.9045 13.2511 12.8545 13.3954L15.8507 15.7926Z" fill="#934621" />
                                        <path d="M11.5312 13.4062C11.7899 13.4062 12 13.1961 12 12.9374C12 12.6788 11.7899 12.4687 11.5312 12.4687C11.2726 12.4687 11.0625 12.6788 11.0625 12.9374C11.0625 13.1961 11.2726 13.4062 11.5312 13.4062Z" fill="#934621" />
                                        <path d="M11.531 14.3438C10.7556 14.3438 10.1248 13.7129 10.1248 12.9375C10.1248 12.3271 10.5178 11.8118 11.0623 11.6176V8.74487C9.11121 8.96143 7.57532 10.5186 7.35645 12.4688H8.24976V13.4062H7.35962C7.57874 15.3539 9.11462 16.8898 11.0623 17.1089V16.2188H11.9998V17.1102C12.9509 17.0043 13.8352 16.6006 14.5125 15.923L12.2697 14.1288C12.0543 14.2628 11.8027 14.3438 11.531 14.3438Z" fill="#934621" />
                                        <path d="M19.2501 8.72003L17.625 5.90619L15.9999 8.72052C15.8365 9.00385 15.75 9.32745 15.75 9.65619C15.75 10.6902 16.5909 11.5312 17.625 11.5312C18.6591 11.5312 19.5 10.6902 19.5 9.65619C19.5 9.3266 19.4135 9.00299 19.2501 8.72003Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title" id="running-time-title">
                                    Running Time
                                </div>
                                <div className="parameter-value" id="running-time-value">30 mins</div>
                            </div>
                            <div className="parameter" id="frequency">
                                <div className="running-time-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.9837 10.2202C17.8605 9.97385 17.6087 9.81821 17.3332 9.81821C17.0577 9.81821 16.8059 9.97385 16.6827 10.2202L14.5073 14.5709L11.7081 7.37285C11.6023 7.1009 11.3443 6.9185 11.0526 6.90948C10.7614 6.9011 10.4922 7.06672 10.3699 7.33164L7.65582 13.2121H4.72727C4.32557 13.2121 4 13.5377 4 13.9394C4 14.341 4.32557 14.6667 4.72727 14.6667H8.12118C8.40481 14.6667 8.6626 14.5017 8.78149 14.2441L10.973 9.49579L13.7463 16.6272C13.8505 16.8952 14.103 17.0767 14.3904 17.0901C14.4017 17.0906 14.413 17.0909 14.4242 17.0909C14.6986 17.0909 14.951 16.936 15.0746 16.6888L17.3332 12.1717L18.6221 14.7495C18.8017 15.1087 19.2386 15.2543 19.5978 15.0747C19.9571 14.8951 20.1027 14.4582 19.9231 14.099L17.9837 10.2202Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Frequency</div>
                                <div className="parameter-value">50 Hz</div>

                            </div>
                            <div className="parameter" id="engine-rpm">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6.82291 12.4331C6.92251 13.6502 7.43942 14.7761 8.30557 15.6423L8.63818 15.9749L6.64257 17.9706L6.30998 17.638C4.90751 16.2355 4.09699 14.4012 4.00016 12.4331H6.82291V12.4331Z" fill="#934621" />
                                        <path d="M6.8291 11.4924H4.00857C4.12789 9.69955 4.83841 8.01664 6.04545 6.67096L8.01758 8.64312C7.34049 9.45254 6.9291 10.4389 6.8291 11.4924Z" fill="#934621" />
                                        <path d="M15.6524 15.6128C16.5059 14.7593 17.0244 13.6603 17.1421 12.475H19.9966C19.8776 14.4126 19.0656 16.2186 17.6777 17.6066L17.349 17.9353L15.316 15.9492L15.6524 15.6128Z" fill="#934621" />
                                        <path d="M12.4852 6.80309V4.00006C14.2805 4.09887 15.9622 4.78929 17.3047 5.97815L15.3049 7.9779C14.5021 7.30705 13.5264 6.90052 12.4852 6.80309Z" fill="#934621" />
                                        <path d="M6.71206 6.00758C8.06107 4.81063 9.74724 4.11087 11.5439 4.00262V6.79951C10.4871 6.88988 9.49596 7.29807 8.68243 7.97792L6.71206 6.00758Z" fill="#934621" />
                                        <path d="M15.9699 8.64324L17.9716 6.64154C19.1916 8.00296 19.9008 9.7129 20 11.5343H17.1508C17.0656 10.4664 16.656 9.46436 15.9699 8.64324Z" fill="#934621" />
                                        <path d="M9.1925 17.1368H10.1332V18.0776H11.0845V19.0183H10.1332V19.9591H9.1925V19.0183H8.25175V18.0776H9.1925V17.1368Z" fill="#934621" />
                                        <path d="M15.7778 18.0776H13.426V19.0184H15.7778V18.0776Z" fill="#934621" />
                                        <path d="M11.5438 13.9249V9.14056H12.4845V13.9249C13.9575 14.4683 13.6055 16.6382 12.0141 16.6666C10.4225 16.6381 10.071 14.468 11.5438 13.9249Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Engine RPM</div>
                                <div className="parameter-value">50</div>

                            </div>
                            <div className="parameter" id="coolant-temp">
                                <div className="coolant-temp-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.1875 6.53124V5.59374H12.4687V4H11.5312V10.9717C10.8107 11.1763 10.2812 11.8397 10.2812 12.625C10.2812 13.5727 11.0523 14.3437 12 14.3437C12.9477 14.3437 13.7187 13.5727 13.7187 12.625C13.7187 11.8397 13.1893 11.1763 12.4687 10.9717V9.65623H14.1875V8.71873H12.4687V8.09373H14.1875V7.15624H12.4687V6.53124H14.1875Z" fill="#934621" />
                                        <path d="M17.3334 16.2499C16.2695 16.2499 16.2109 14.9999 14.6667 14.9999C13.1328 14.9999 13.0547 16.2499 12.0002 16.2499C12.0001 16.2499 12 16.2499 11.9999 16.2499C11.9998 16.2499 11.9998 16.2499 11.9997 16.2499C10.9453 16.2499 10.8671 14.9999 9.33314 14.9999C7.78899 14.9999 7.73039 16.2499 6.66652 16.2499C5.61718 16.2499 5.52343 14.9999 4 14.9999V15.9374C5.0664 15.9374 5.12109 17.1874 6.66658 17.1874C8.16795 17.1874 8.29295 15.9374 9.3332 15.9374C10.4336 15.9374 10.4453 17.1874 11.9998 17.1874C11.9998 17.1874 11.9999 17.1874 12 17.1874C12.0001 17.1874 12.0002 17.1874 12.0002 17.1874C13.5547 17.1874 13.5664 15.9374 14.6668 15.9374C15.707 15.9374 15.832 17.1874 17.3334 17.1874C18.8789 17.1874 18.9336 15.9374 20 15.9374V14.9999C18.4765 14.9999 18.3828 16.2499 17.3334 16.2499Z" fill="#934621" />
                                        <path d="M17.3334 19.0626C16.2695 19.0626 16.2109 17.8126 14.6667 17.8126C13.1328 17.8126 13.0547 19.0626 12.0002 19.0626C12.0001 19.0626 12 19.0626 11.9999 19.0626C11.9998 19.0626 11.9998 19.0626 11.9997 19.0626C10.9453 19.0626 10.8671 17.8126 9.33314 17.8126C7.78899 17.8126 7.73039 19.0626 6.66652 19.0626C5.61718 19.0626 5.52343 17.8126 4 17.8126V18.7501C5.0664 18.7501 5.12109 20.0001 6.66658 20.0001C8.16795 20.0001 8.29295 18.7501 9.3332 18.7501C10.4336 18.7501 10.4453 20.0001 11.9998 20.0001C11.9998 20.0001 11.9999 20.0001 12 20.0001C12.0001 20.0001 12.0002 20.0001 12.0002 20.0001C13.5547 20.0001 13.5664 18.7501 14.6668 18.7501C15.707 18.7501 15.832 20.0001 17.3334 20.0001C18.8789 20.0001 18.9336 18.7501 20 18.7501V17.8126C18.4765 17.8126 18.3828 19.0626 17.3334 19.0626Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Coolant Temp</div>
                                <div className="parameter-value">50°c</div>

                            </div>
                            <div className="parameter" id="lube-oil-pressure">
                                <div className="parameter-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.526 11.2921H15.5397C17.0598 11.285 18.2942 10.046 18.2942 8.52399C18.2942 7.68838 17.8422 7.00177 17.2951 6.25528L15.526 4L13.7569 6.25528C13.2098 7.0017 12.7578 7.68829 12.7578 8.52396C12.7578 10.0503 13.9996 11.2921 15.526 11.2921Z" fill="#934621" />
                                        <path d="M15.5267 12.2296L15.5101 12.2295C13.4742 12.2208 11.8206 10.5619 11.8206 8.52393C11.8206 8.01896 11.9348 7.56752 12.1171 7.14585L11.0889 5.83508L7.4669 10.4525L7.45772 10.4646C6.53436 11.724 5.70557 12.9891 5.70557 14.6165C5.70557 17.5779 8.10902 19.9884 11.0678 19.9999L11.0897 20C14.0577 20 16.4725 17.585 16.4725 14.6166C16.4725 13.7274 16.2248 12.9464 15.8496 12.2154C15.7432 12.2246 15.6355 12.2296 15.5267 12.2296Z" fill="#934621" />
                                    </svg>
                                </div>
                                <div className="parameter-title">Lube Oil Pressure</div>
                                <div className="parameter-value">50 Psi</div>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bottom-graph-card">
                <GensetChart className='genset-chart'/>
            </div>
        </div>
    )
}

export default MainContent