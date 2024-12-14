import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "../../Utils/MenuItems";
import p1 from "../../Image/p1.png"
const NavStyled = styled.div`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-icon {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: .2rem;
      box-shadow: 0px 2px 17px ;
    }
    h2{
      color: rgba(34,34,96,1);
    }
    p{
      color: rgba(34,34,96,0.7);
    }
  }
  .menu-items{
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    li{
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: .6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34,34,96,0.7);
      padding-left:1rem ;
      position: relative;
      i{
        color: rgba(34,34,96,0.7);
        font-size: 1.4rem;
        transition: all .4s ease-in-out;
      }
    }
  }
  .active{
    color: rgba(34,34,96,1) !important;
    i{
      color: rgba(34,34,96,1) !important;
    }
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

const Navigation = ({active,setActive}) => {

  

  return (
    <NavStyled>
      <div className="user-icon">
        <img src={p1} alt="" />
        <div className="text">
          <h2>Manjeet</h2>
          <p>Your Money</p>
        </div>
      </div>
      <div className="">
       <ul className="menu-items">
        {MenuItems.map((item)=>{
          return <li key={item.id} onClick={() => setActive(item.id)} className={active ===item.id ? 'active' : '' }>
            {item.icon}
            <span>{item.title}</span>
          </li>
        })}
       </ul>
       
      </div>
      <div className="button-nav">
        <li className=""> Sign Out</li>
      </div>
    </NavStyled>
  );
};

export default Navigation;
