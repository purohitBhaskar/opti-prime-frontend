import React from 'react'
import "../styles/TopBar.css"
import profileImg from "../assets/avatar.png"
const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className="search-box">
                <div className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z" fill="#DDDDDD" />
                    </svg>
                </div>
                <input type="text" placeholder='Search' />
            </div>
            <div className="alerts-profile-icon">
                <div className="alerts">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                        <path d="M9.99981 12.6667C9.99981 13.7712 9.10438 14.6667 7.99981 14.6667C6.89524 14.6667 5.99981 13.7712 5.99981 12.6667M9.19748 4.15904C9.48781 3.85909 9.66648 3.45041 9.66648 3C9.66648 2.07953 8.92029 1.33333 7.99981 1.33333C7.07934 1.33333 6.33315 2.07953 6.33315 3C6.33315 3.45041 6.51182 3.85909 6.80214 4.15904M11.9998 7.46667C11.9998 6.54725 11.5784 5.66549 10.8282 5.01536C10.0781 4.36524 9.06068 4 7.99981 4C6.93895 4 5.92153 4.36524 5.17139 5.01536C4.42124 5.66549 3.99981 6.54725 3.99981 7.46667C3.99981 8.98787 3.62257 10.1004 3.15186 10.8965C2.61537 11.8037 2.34713 12.2574 2.35772 12.3658C2.36984 12.4897 2.39216 12.5289 2.49271 12.6024C2.58059 12.6667 3.02215 12.6667 3.90527 12.6667H12.0944C12.9775 12.6667 13.419 12.6667 13.5069 12.6024C13.6075 12.5289 13.6298 12.4897 13.6419 12.3658C13.6525 12.2574 13.3843 11.8037 12.8478 10.8965C12.3771 10.1004 11.9998 8.98787 11.9998 7.46667Z" stroke="#DDDDDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="profile-icon">
                    <img src={profileImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopBar