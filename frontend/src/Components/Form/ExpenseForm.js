import React, { useContext, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../../Context/globalContext";
import Button from "../Button/Button";
import { Plus } from "../../Utils/Icon";
const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
    &::placeholder {
      color: rgba(34, 34, 96, 0.5);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    select {
      color: rgba(34, 34, 96, 0.8);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3);
      
    }
  }
`;

const ExpenseForm = () => {
  const {addExpense } = useContext(GlobalContext);

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, category, description, date } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
       console.log("hii");
       
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="">
      <FormStyled>
        <div className="input-control">
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="Expense Title"
            onChange={handleInput("title")}
          />
        </div>
        <div className="input-control">
          <input
            type="number"
            value={amount}
            name="amount"
            placeholder="Expense amonut"
            onChange={handleInput("amount")}
          />
        </div>
        <div className="input-control">
          <DatePicker
            id="date"
            placeholderText="Enter a date "
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setInputState({ ...inputState, date: date })}
          />
        </div>
        <div className="selects incput-control">
          <select
            required
            value={category}
            name="Expense category"
            id="category"
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              {" "}
              Select Expense category
            </option>
            <option value="education"> education</option>
            <option value="groceries"> groceries</option>
            <option value="health"> health</option>
            <option value="subscription"> subscription</option>
            <option value="tour"> tour</option>
            <option value="clothing">clothing</option>
            <option value="girlfriend">girlfriend</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="input-control">
          <textarea
            type="text"
            value={description}
            name={"description"}
            placeholder="Expense description"
            rows="4"
            onChange={handleInput("description")}
          />
        </div>
        <div className="submit-btn">
          <Button
            type="submit"
            onClick={handleSubmit}
            icon={<Plus/>}
            name={"Add Expense"}
            bPad={".8rem 1.6rem"}
            bRad ={'30px'}
            bg={'var(--color-accent)'}
            color={'#fff'}
            hColor={'rem'}
          />
        </div>                               
      </FormStyled>
    </div>
  );
};

export default ExpenseForm;
