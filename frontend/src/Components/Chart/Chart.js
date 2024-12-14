import React, { useContext,useEffect } from "react";
import {
  Chart as Chartjs,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { GlobalContext } from "../../Context/globalContext";
import { dateFormat } from "../../Utils/DateFormat";

const ChartStyled = styled.div``;

const Chart = () => {
  
  const {income,expense,getIncome,getExpense} = useContext(GlobalContext)

  const data = {
    labels: [income.map((element) => {
      const { date } = element;
      return dateFormat(date);
    })],
    dataSets: [
      {
        label: "Income",
        data: [
          income.map((inc) => {
            const { amount } = inc;
            return amount;
          }),
        ],
        backgroundColor: 'green'
      },
      {
        label: "Expense",
        data: [
          expense.map((exp) => {
            const { amount } = exp;
            return amount;
          }),
        ],
        backgroundColor: 'red'
      },
    ],
  };
  return <ChartStyled>
    {/* <Line data={data}/> */}
  </ChartStyled>;
};

export default Chart;
