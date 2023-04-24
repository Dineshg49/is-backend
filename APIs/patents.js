const express = require('express');
const router = express.Router();
const {
  createPatent,
  readPatent,
  updatePatent,
  deletePatent,
  readPatents
} = require('../collections/patents');

// Create a new patent
router.post('/patent', async (req, res) => {
  try {
    const result = await createPatent(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get a patent by id
router.get('/patent/:id', async (req, res) => {
  try {
    const result = await readPatent(req.params.id);
    if (!result) {
      res.status(404).send('Patent not found');
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a patent by id
router.put('/patent/:id', async (req, res) => {
  try {
    const result = await updatePatent(req.params.id, req.body);
    if (!result) {
      res.status(404).send('Patent not found');
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a patent by id
router.delete('/patent/:id', async (req, res) => {
  try {
    const result = await deletePatent(req.params.id);
    if (!result) {
      res.status(404).send('Patent not found');
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all patents
router.get('/patents', async (req, res) => {
  try {
    const result = await readPatents();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
