const mongoose = require("mongoose")

const ExpenseSchema = mongoose.Schema({
       title:{
              type:String,
              required:true,
              trim:true,
              maxLength : 50
       },
       amount : {
              type:Number,
              required:true,
              maxLength:20,
              trim:true,
       },
       type:{
              type:String,
              default:"Expense"
       },
       date:{
              type:Date,
              required:true,
              trim:true,
       },
       category : {
              type:String,
              required:true,
              trim:true,
              maxLength:20,
       },
       description : {
              type:String,
              trim:true,
              required:true,
       }
},{timestamps:true})

module.exports = mongoose.model("Expense",ExpenseSchema)