const express = require('express');
const router = express.Router();
const { createFaculty, readFaculty, updateFaculty, deleteFaculty, readFaculties } = require('../collections/faculties');

// Create a faculty
router.post('/faculty', async (req, res) => {
  try {
    const result = await createFaculty(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Get a faculty by ID
router.get('/faculty/:id', async (req, res) => {
  try {
    const result = await readFaculty(req.params.id);
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

// Update a faculty by ID
router.patch('/faculty/:id', async (req, res) => {
  try {
    const result = await updateFaculty(req.params.id, req.body);
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

// Delete a faculty by ID
router.delete('/faculty/:id', async (req, res) => {
  try {
    const result = await deleteFaculty(req.params.id);
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

// Get all faculties
router.get('/faculties', async (req, res) => {
  try {
    const result = await readFaculties();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
