const express = require('express');
const router = express.Router();
const {
  createPublication,
  readPublication,
  updatePublication,
  deletePublication,
  readPublications
} = require('../collections/publications');

// Create a new publication
router.post('/publication', async (req, res) => {
  try {
    const result = await createPublication(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get a publication by id
router.get('/publication/:id', async (req, res) => {
  try {
    const result = await readPublication(req.params.id);
    if (!result) {
      res.status(404).send('Publication not found');
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a publication by id
router.put('/publication/:id', async (req, res) => {
  try {
    const result = await updatePublication(req.params.id, req.body);
    if (!result) {
      res.status(404).send('Publication not found');
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a publication by id
router.delete('/publication/:id', async (req, res) => {
  try {
    const result = await deletePublication(req.params.id);
    if (!result) {
      res.status(404).send('Publication not found');
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all publications
router.get('/publications', async (req, res) => {
  try {
    const result = await readPublications();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
