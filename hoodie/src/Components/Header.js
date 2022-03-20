import React from "react";
import '../Css/Header.css';

function Header(){
    return(
        <div className="header-master">
            <div className="header-wrap">
                <div className="header-logo">
                    <div className="header-logo-image"></div>
                </div>
                <div className="header-util">
                    <div className="header-switch-body-color"></div>
                    <div className="header-scope"></div>
                    <div className="header-new-script">
                        <p className="header-new-script-p">새 글 작성</p>
                    </div>
                    <div className="header-my-info">
                        <div className="header-my-info-image">
                            <div className="header-my-info-image-div"></div>
                        </div>
                        <div className="header-my-info-chevron">
                            <div className="header-my-info-chevron-div"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;