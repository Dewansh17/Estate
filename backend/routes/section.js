import express from "express";
import Section from "../models/Section.js";

const router = express.Router();


// GET all sections
router.get("/", async (req, res) => {
  const sections = await Section.find();
  res.json(sections);
});


// PUT update section by name
router.put("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const { content } = req.body;

    const updated = await Section.findOneAndUpdate(
      { name },
      { content },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
