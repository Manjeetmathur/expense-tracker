import React from "react";
import styled from "styled-components";
import {
  Bank,
  Bitcoin,
  Calender,
  Comment,
  Freelancing,
  Income,
  Investments,
  Other,
  Stocks,
  Trash,
  Youtube,
} from "../../Utils/Icon";
import Button from "../Button/Button";
import { dateFormat } from "../../Utils/DateFormat";

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }
  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      flex-direction: column;
      gap: 0.2rem;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicatorColor};
      }
    }
    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;
const ExpenseItem = ({
  id,
  title,
  category,
  amount,
  description,
  date,
  deleteItem,
  indicatorColor,
  type,
}) => {
  // console.log(id);
  
 
  const expenseIcon = () => {
    switch (category) {
      case "salary":
        return <Income />;
      case "freelancing":
        return <Freelancing />;
      case "investments":
        return <Investments />;
      case "stoks":
        return <Stocks />;
      case "bitcoin":
        return <Bitcoin />;
      case "bank":
        return <Bank />;
      case "youtube":
        return <Youtube />;
      case "other":
        return <Other />;
      default:
        return "";
    }
  };
 
  return (
    <IncomeItemStyled indicatorColor={indicatorColor}>
      <div className="icon">
       {type==='expense' ? expenseIcon() : ''}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              
              {amount}
            </p>
            <p>
              <Calender />
              {dateFormat(date)}
            </p>
            <p>
              <Comment />
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={<Trash />}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--color-green)"}
              icolor={"#fff"}
              color={"#fff"}
              hcolor={"var(--color-green)"}
              onClick={()=>deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
};

export default ExpenseItem;
