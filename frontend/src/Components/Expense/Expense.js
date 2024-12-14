import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { GlobalContext } from "../../Context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "../Form/ExpenseForm";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

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
const Expense = () => {
  const {getExpense,deleteExpense,handleExpense,expense} = useContext(GlobalContext);
  useEffect(()=> {
   
      getExpense()
   
  },[])
  console.log(expense);
  const totalExpense= handleExpense()

  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Expenses</h2>
        <h2 className="total-income">Total Expense <span>Rs.{totalExpense}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="income">
              {expense.map((expenses) => {
                  const {_id,id,title,amount,category,description,date} = expenses
                  // console.log(id);
                  
                  return <ExpenseItem key={_id} id={_id} title={title} amount ={amount} category = { category} description = {description} date = {date} deleteItem={deleteExpense} />
              })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

export default Expense;
