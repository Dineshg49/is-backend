const express = require('express');
const router = express.Router();
const { createTechnology, readTechnology, updateTechnology, deleteTechnology, readTechnologies } = require('../collections/technologies');

// Create a technology
router.post('/technology', async (req, res) => {
  try {
    const result = await createTechnology(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Get a technology by ID
router.get('/technology/:id', async (req, res) => {
  try {
    const result = await readTechnology(req.params.id);
    if (result) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Update a technology by ID
router.patch('/technology/:id', async (req, res) => {
  try {
    const result = await updateTechnology(req.params.id, req.body);
    if (result) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Delete a technology by ID
router.delete('/technology/:id', async (req, res) => {
  try {
    const result = await deleteTechnology(req.params.id);
    if (result) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Get all technologies
router.get('/technologies', async (req, res) => {
  try {
    const result = await readTechnologies();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
