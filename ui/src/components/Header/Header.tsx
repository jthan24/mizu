import React from "react";
import {AuthPresentation} from "../AuthPresentation/AuthPresentation";
import {AnalyzeButton} from "@up9/mizu-common"
import logo from '../assets/Mizu-logo.svg';
import './Header.sass';
import {UI} from "@up9/mizu-common"

interface HeaderProps {
    analyzeStatus: any
}
export const Header: React.FC<HeaderProps> = ({analyzeStatus}) => {
    return <div className="header">
        <div style={{display: "flex", alignItems: "center"}}>
            <div className="title"><img src={logo} alt="logo"/></div>
            <div className="description">Traffic viewer for Kubernetes</div>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
            {analyzeStatus?.isAnalyzing && <AnalyzeButton analyzeStatus={analyzeStatus}/>}
            <UI.InformationIcon/>
            <AuthPresentation/>
        </div>
    </div>;
}
