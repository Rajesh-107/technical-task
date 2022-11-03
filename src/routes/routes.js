const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const NewQuestion = require("../models/NewQuestion");

// get all quiz questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});


// get one quiz question
router.get("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const question = await Question.findOne({ _id });
    if (!question) {
      return res.status(404).json({});
    } else {
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});


// create one quiz question
router.post("/questions", async (req, res) => {
  try {
    const { description } = req.body;
    const { alternatives } = req.body;
    const question = await Question.create({
      description,
      alternatives,
    });
    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});


// update one quiz question
router.put("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const { description, alternatives } = req.body;
    let question = await Question.findOne({ _id });
    if (!question) {
      question = await Question.create({
        description,
        alternatives,
      });
      return res.status(201).json(question);
    } else {
      question.description = description;
      question.alternatives = alternatives;
      await question.save();
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});


// delete one quiz question
router.delete("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const question = await Question.deleteOne({ _id });
    if (question.deletedCount === 0) {
      return res.status(404).json();
    } else {
      return res.status(204).json();
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// this one is just a test
router.get("/", (req, res) => {
  res.send("H3ll0 W0RlD");
});

//new rest api
//true false questions
router.post("/Newquestions", async (req, res) => {
  try {
    const { newquestion } = req.body;
    const { answers } = req.body;
    const question = await NewQuestion.create({
      newquestion,
      answers,
    });
    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//all true false questions
router.get("/Newquestions", async (req, res) => {
  try {
    const questions = await NewQuestion.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// delete true false questions
router.delete("/Newquestions/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const question = await NewQuestion.deleteOne({ _id });
    if (question.deletedCount === 0) {
      return res.status(404).json();
    } else {
      return res.status(204).json();
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.put("/Newquestions/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const { newquestion, answers } = req.body;
    let question = await NewQuestion.findOne({ _id });
    if (!question) {
      question = await Question.create({
        newquestion,
        answers,
      });
      return res.status(201).json(question);
    } else {
      question.newquestion = newquestion;
      question.answers = answers;
      await question.save();
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});


module.exports = router;
