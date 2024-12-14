import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import Chart from '../Chart/Chart'
import { GlobalContext } from '../../Context/globalContext'
import { Income } from '../../Utils/Icon'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

const DashboardStyled = styled.div`

  .stats-con {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 2rem;
    .chart-con{
      grid-column: 1/4;
      height: 400px;
      .amount-icon{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income, .expense{
          grid-column: span 2;
        }
        .income,.expense, .balance{
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow : 0 1px 15px rgba(0,0,0,.3);
          border-radius: 20px;
          padding:1rem;
          p{
            font-size: 2.5rem;
            font-weight: 700;
          }
        }
        .balance{
          grid-column: 2/4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p{
            color: var(--color-green);
            opacity: 0.6;
            font-size: 3rem;
          }
        }
      }
    }
    .history-con{
      grid-column: 4/-1;
      h2{
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-item{
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow : 0 1px 15px rgba(0,0,0,.3);
        border-radius: 20px;
        padding:1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          font-size: 1.5rem;
          font-size: 600;
        }
      }
    }
  }

`
const Dashboard = () => {
  const { income, expense, getIncome, getExpense, handleExpense, handleIncome, totalBalance, transactionHistory } = useContext(GlobalContext)

  useEffect(() => {
    getExpense()
    getIncome()
  }, [])
  return (
    <DashboardStyled>
      
      <InnerLayout>
        <h1>All Transaction</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-icon">
              <div className="income">
                <h2>Total Income</h2>
                <p><Income /> {handleIncome()}</p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p><Income /> {handleExpense()}</p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p style={{
                  color: totalBalance() < 0 ? "red" : "green",
                }}><Income /> {totalBalance()}</p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <TransactionHistory />
            <h2 className="salary-title">
              <span>Min</span>Max
            </h2>
            <div className="salary-item">
              <p>
                {Math.min(...income.map(item => item.amount))}
              </p>
              <p>
                {Math.max(...income.map(item => item.amount))}
              </p>
            </div>
            <h2 className="salary-title">
              <span>Min</span>Max
            </h2>
            <div className="salary-item">
              <p>
                {Math.min(...expense.map(item => item.amount))}
              </p>
              <p>
                {Math.max(...expense.map(item => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

export default Dashboard
