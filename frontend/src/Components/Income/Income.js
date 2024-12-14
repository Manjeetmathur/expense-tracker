import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { GlobalContext } from "../../Context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0 ,0,0,.8) ;
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content{
    display: flex;
    gap: 2rem;
    .income{
      flex: 1;
    }
  }

`;
const Income = () => {
  const { addIncome,getIncome,income ,deleteIncome,handleIncome} = useContext(GlobalContext);
  useEffect(()=> {
   
      getIncome()
   
  },[])
  console.log(income);
  const totalIncome = handleIncome()

  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Incomes</h2>
        <h2 className="total-income">Total Income <span>Rs.{totalIncome}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="income">
              {income.map((income) => {
                  const {_id,id,title,amount,category,description,date} = income
                  // console.log(id);
                  
                  return <IncomeItem key={_id} id={_id} title={title} amount ={amount} category = { category} description = {description} date = {date} deleteItem={deleteIncome} />
              })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

export default Income;
