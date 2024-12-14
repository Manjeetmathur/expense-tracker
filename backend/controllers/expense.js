const expenseSchema = require("../model/expenseModel");

const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = expenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !category || !description || !date) {
      return res
        .status(400)
        .json({ message: "All fields are required . . . !" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount should be positive . . . !" });
    }
    await expense.save();
    return res
      .status(200)
      .json({ success: true, data: expense, message: "expense Added . . . !" });
  } catch (error) {
    return res.status(402).json({ message: error.message });
  }
};

const getExpense = async (req, res) => {
  try {
    const expense = await expenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: expense,
      message: "expense get successfully . . . !",
    });
  } catch (error) {
    return res.status(402).json({ message: error.message });
  }
};
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
       if(!id){
              throw new Error("id required . . . ")
       }
    const expense  = await expenseSchema.findByIdAndDelete(id);

    if(!expense){
       throw new Error("Invalid income id access . . . ")
    }
    res.status(200).json({
      success: true,
      message: "expense deleted successfully . . . !",
    });
  } catch (error) {
    return res.status(402).json({ message: error.message });
  }
};



module.exports = { addExpense, getExpense, deleteExpense };
