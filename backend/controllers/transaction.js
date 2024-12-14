const incomeSchema = require("../model/incomeModel");

const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = incomeSchema({
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
    await income.save();
    return res
      .status(200)
      .json({ success: true, data: income, message: "Income Added . . . !" });
  } catch (error) {
    return res.status(402).json({ message: error.message });
  }
};

const getIncome = async (req, res) => {
  try {
    const incomes = await incomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: incomes,
      message: "Income get successfully . . . !",
    });
  } catch (error) {
    return res.status(402).json({ message: error.message });
  }
};
const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
       if(!id){
              throw new Error("id required . . . ")
       }
    const income  = await incomeSchema.findByIdAndDelete(id);

    if(!income){
       throw new Error("Invalid income id access . . . ")
    }
    res.status(200).json({
      success: true,
      message: "Income deleted successfully . . . !",
    });
  } catch (error) {
    return res.status(402).json({ message: error.message });
  }
};



module.exports = { addIncome, getIncome, deleteIncome };
