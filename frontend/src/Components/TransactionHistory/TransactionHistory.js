import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Context/globalContext";

const HistoryStyled = styled.div`
       display: flex;
       flex-direction: column;;
       gap: 1rem;
       .history-item {
              background: #fcf6f9;
              border: 2px solid #ffffff;
              box-shadow : 0 1px 15px rgba(0,0,0,.7);
              padding: 1rem;
              border-radius: 2px;
              display: flex;
              justify-content: space-between;
              align-items: center;
       }
`;

const TransactionHistory = () => {
       const { transactionHistory } = useContext(GlobalContext);

       const [...history] = transactionHistory();
       console.log(history);

       return (
              <HistoryStyled>
                     <h2>Recent History</h2>
                     {history.map((item) => {
                            const { _id, title, amount, type } = item;
                            return (
                                   <div className="history-item" key={_id}>
                                          <p
                                                 style={{
                                                        color: type === "Expense" ? "red" : "green",
                                                 }}
                                          >
                                                 {title}
                                          </p>
                                          <p
                                                 style={{
                                                        color: type === "Expense" ? "red" : "green",
                                                 }}
                                          >
                                                 {
                                                        type === 'Expense' ? `-${amount}` : `+${amount}`
                                                 }
                                          </p>
                                   </div>
                            );
                     })}
              </HistoryStyled>
       );
};

export default TransactionHistory;
