/*//? Handle Log Related Routes */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const expenseSchema = require("../../models/expense");
const Category = require("../../models/category");

//GET ALL EXPENSES
router.get("/", (req, res, next) => {
  expenseSchema
    .find()
    .sort({ isDeleted: false, expenseDate: -1 })
    .select("-_v")
    .populate("category", "name")
    .exec()
    .then((result) => {
      const response = {
        count: result.length,
        expenses: result.map((doc) => {
          return {
            itemAmount: doc.itemAmount,
            expenseDate: doc.expenseDate,
            itemName: doc.itemName,
            isDeleted: doc.isDeleted,
            category: doc.category,
            _id: doc._id,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => console.log(err));
});

//GET SINGLE EXPENSE BY ID
router.get("/:id", async (req, res, next) => {
  const expenseDetail = await expenseSchema.findById(req.params.id).exec();
  if (!expenseDetail)
    return res
      .status(404)
      .send("Something Went Wrong, there was not entry for given ID");
  res.status(200).json({ expenseDetail });
});

//CREATE A NEW EXPENSE ENTRY
router.post("/", (req, res, next) => {
  Category.findById(req.body.category)
    .exec()
    .then((category) => {
      console.log("CATEGORY", category);
      if (!category) {
        return res.status(404).json({
          message: "Category Not Found",
        });
      }

      const newExpense = new expenseSchema({
        _id: new mongoose.Types.ObjectId(),
        expenseDate: req.body.expenseDate,
        itemName: req.body.itemName,
        category: req.body.category,
        isDeleted: req.body.isDeleted,
        itemAmount: req.body.itemAmount,
        notes: req.body.notes,
      });
      return newExpense.save();
    })
    .then((result) => {
      if (result) {
        res.status(201).json({
          message: "Created Expense Successfully",
          createdExpense: {
            _id: new mongoose.Types.ObjectId(),
            expenseDate: result.expenseDate,
            itemName: result.itemName,
            category: result.category,
            itemAmount: result.itemAmount,
            isDeleted: result.isDelete,
            notes: result.notes,
          },
        });
      } else {
        res.status(404).json({
          message: "No Valid Entry Found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//UPDATE A EXISTING EXPENSE ENTRY
router.patch("/:id", async (req, res, next) => {
  const expenseDetail = await expenseSchema.findById(req.params.id).exec();
  if (!expenseDetail)
    return res.status(404).send("The expense with the given ID was not found.");
  let query = { $set: {} };
  for (let key in req.body) {
    query.$set[key] = req.body[key];
  }
  const updatedexpenseDetail = await expenseSchema
    .update({ _id: req.params.id }, query)
    .exec();
  console.log("UPDATED BACKEND", updatedexpenseDetail);
  res.status(200).json({ message: "Updated Successfully" });
});
module.exports = router;
