import { HeaderContainer } from "./styles";
import {Timer, Scroll} from "phosphor-react";
import { NavLink } from "react-router-dom";
/* eslint-disable react/react-in-jsx-scope */
export function Header(){
    return (
      <HeaderContainer>
        <span>Logo</span>
        <nav>
            <NavLink to="/">
               <Timer size={24}/>
            </NavLink>
            <NavLink to="/history">
                <Scroll size={24}/>
            </NavLink>
        </nav>
      </HeaderContainer>
    );
}