import React from "react";

const ProfileLogo = ({ logo }) => {
    return (
        <div className="player-list">
            <div className="player-profile">
                <img src={logo} alt="New Player" />
                <div className="player-status">
                    <span>New</span>
                </div>
            </div>
            <div className="first-name">
                Zac Anderson
            </div>
            <div className="player-authentic">
                <div className="first-name player-tick">
                    @zacus
                </div>
                <div className="success-tick">
                    <svg width={14} height={14} fill="#8a94a6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="Icon__StyledSvg-sc-1rdji9f-0 dtoguV"><defs><path d="M14.2071068,3.79289322 C14.5976311,4.18341751 14.5976311,4.81658249 14.2071068,5.20710678 L7.20710678,12.2071068 L7.20710678,12.2071068 C7.05690513,12.3573084 6.87080989,12.4497402 6.67643151,12.4844021 L6.55903139,12.4982669 L6.55903139,12.4982669 L6.44096861,12.4982669 C6.20506395,12.4844021 5.9731352,12.3873488 5.79289322,12.2071068 L1.79289322,8.20710678 C1.40236893,7.81658249 1.40236893,7.18341751 1.79289322,6.79289322 C2.18341751,6.40236893 2.81658249,6.40236893 3.20710678,6.79289322 L6.5,10.085 L12.7928932,3.79289322 C13.1834175,3.40236893 13.8165825,3.40236893 14.2071068,3.79289322 Z" id="path-1" /></defs><g id="March-24" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="YourProfile_Strength" transform="translate(-19.000000, -218.000000)"><g id="Group-6" transform="translate(19.000000, 218.000000)"><circle id="Oval" fill="#F22384" cx={10} cy={10} r={10} /><g id="check-white" transform="translate(2.000000, 3.000000)"><mask id="mask-2" fill="white"><use xlinkHref="#path-1" /></mask><use id="Combined-Shape" fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1" /></g></g></g></g></svg>
                </div>
            </div>

            <div className="player-info">
                <div className="info-title"> Fever </div>
                <div className="bar-divider"> | </div>
                <div className="info-title info-number"> 25 </div>
            </div>
        </div>
    )
}

export default ProfileLogo