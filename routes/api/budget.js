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
  const budgetDetail = await budgetSchema.findById("budget1234").exec();
  if (!budgetDetail) {
    const newBudget = new budgetSchema({
      totalBudget: req.body.totalBudget
    });
    newBudget
      .save()
      .then(result => {
        //console.log(result);
        if (result) {
          res.status(201).json({
            message: "Created Budget Successfully",
            createdExpense: {
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
    let query = { $set: {} };
    for (let key in req.body) {
      if (budgetDetail[key] && budgetDetail[key] !== req.body[key])
        query.$set[key] = req.body[key];
    }
    const updatedbudgetDetail = await budgetSchema
      .updateOne({ _id: "budget1234" }, query)
      .exec();

    res.status(200).json(budgetDetail);
  }
});

router.patch("/:id", async (req, res, next) => {
  //budget1234
  const budgetDetail = await budgetSchema.findById(req.params.id).exec();
  if (!budgetDetail)
    return res.status(404).send("The expense with the given ID was not found.");
  let query = { $set: {} };
  for (let key in req.body) {
    if (budgetDetail[key] && budgetDetail[key] !== req.body[key])
      query.$set[key] = req.body[key];
  }
  const updatedbudgetDetail = await budgetSchema
    .updateOne({ _id: req.params.id }, query)
    .exec();

  res.status(200).json(budgetDetail);
});
module.exports = router;
