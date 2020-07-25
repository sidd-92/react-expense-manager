/*//? Handle Log Related Routes */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const categorySchema = require("../../models/category");

router.get("/", (req, res, next) => {
  categorySchema
    .find()
    .select("-_v")
    .exec()
    .then((result) => {
      const response = {
        count: result.length,
        categories: result.map((doc) => {
          return {
            name: doc.name,
            _id: doc._id,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res, next) => {
  const newCategory = new categorySchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  newCategory
    .save()
    .then((result) => {
      console.log(result);
      if (result) {
        res.status(201).json({
          message: "Created Category Successfully",
          createdExpense: {
            _id: new mongoose.Types.ObjectId(),
            name: result.name,
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

router.delete("/:categoryID", (req, res, next) => {
  const id = req.params.categoryID;
  categorySchema
    .findByIdAndRemove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Category Deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Given ID Not Available In DB",
        error: err,
      });
    });
});
module.exports = router;
