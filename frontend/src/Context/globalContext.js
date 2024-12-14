import { createContext, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext();

const BASE_URL = "http://localhost:5000/api/";

export const GlobalContextProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      const response = await axios
        .post(`${BASE_URL}add-income`, income)
      console.log(response);

      if (response.data.success) {
        console.log(response.data.message);
        getIncome()
      } else {
        console.log(response.message);

      }

    } catch (error) {
      console.log(error);

    }
  };

  const getIncome = async () => {
    try {
      const data = await fetch(`${BASE_URL}get-income`, {
        method: "get",
        headers: { "content-type": "application/json" }
      })
      const response = await data.json()
      console.log(response);

      if (response.success) {
        setIncome(response.data)
        console.log(response.message);
      }
      else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const deleteIncome = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
      console.log(response);

      if (response.data.success) {
        console.log(response.data.message);
        getIncome()
      }
      else {
        console.log(response.message);
      }
    } catch (error) {

    }
  }

  const handleIncome = () => {
    let totalIncome = 0;

    income.forEach((incomes) => {
      totalIncome += incomes.amount
    })
    console.log(totalIncome);
    return totalIncome
  }

  const addExpense = async (expense) => {
    try {
      const response = await axios
        .post(`${BASE_URL}add-expense`, expense)
      console.log(response);

      if (response.data.success) {
        console.log(response.data.message);
        getExpense()
      } else {
        console.log(response.message);

      }

    } catch (error) {
      console.log(error);

    }
  };

  const getExpense = async () => {
    try {
      const data = await fetch(`${BASE_URL}get-expense`, {
        method: "get",
        headers: { "content-type": "application/json" }
      })
      const response = await data.json()
      console.log(response);

      if (response.success) {
        setExpense(response.data)
        console.log(response.message);
      }
      else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const deleteExpense = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
      console.log(response);

      if (response.data.success) {
        console.log(response.data.message);
        getExpense()
      }
      else {
        console.log(response.message);
      }
    } catch (error) {

    }
  }

  const handleExpense = () => {
    let totalExpense = 0;

    expense.forEach((expenses) => {
      totalExpense += expenses.amount
    })
    console.log(totalExpense);
    return totalExpense
  }

  const totalBalance = () => {
    return handleIncome() - handleExpense()
  }

  const transactionHistory = () => {
    const history = [...income,...expense]
    history.sort((a,b)=>{
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    console.log(history);
    return history.slice(0,3)
    
  }




  return (
    <GlobalContext.Provider value={{ addIncome, getIncome, income, deleteIncome, handleIncome, addExpense, getExpense, deleteExpense, handleExpense, expense,transactionHistory, totalBalance }}>{children}</GlobalContext.Provider>
  );
};
