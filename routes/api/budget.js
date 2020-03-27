/*//? Handle Log Related Routes */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const budgetSchema = require("../../models/budget");

router.get("/", (req, res, next) => {
  budgetSchema
    .find()
    .select("-_v")
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => console.log(err));
});
router.post("/", async (req, res, next) => {
  const budget = await budgetSchema
    .find()
    .select("-_v")
    .exec();
  if (budget.length === 0) {
    const newBudget = new budgetSchema({
      _id: new mongoose.Types.ObjectId(),
      totalBudget: req.body.totalBudget
    });
    newBudget
      .save()
      .then(result => {
        console.log(result);
        if (result) {
          res.status(201).json({
            message: "Created Budget Successfully",
            createdExpense: {
              _id: new mongoose.Types.ObjectId(),
              totalBudget: req.body.totalBudget
            }
          });
        } else {
          res.status(404).json({
            message: "No Valid Entry Found"
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  } else {
    const updatedBudget = await budgetSchema
      .findByIdAndUpdate(budget[0]._id, {
        $set: { totalBudget: req.body.totalBudget }
      })
      .select("totalBudget _id")
      .exec();
    res.status(200).json(updatedBudget);
  }
});
module.exports = router;
