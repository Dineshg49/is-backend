const express = require('express');
const router = express.Router();

const Faculty = require('../collections/faculties')
// const { createFaculty, readFaculty, updateFaculty, deleteFaculty, readFaculties } = require('../collections/faculties');

// Create a faculty
router.post('/faculty', async (req, res) => {
  try {
    const newFaculty = new Faculty({
      Name: req.body.Name,
      Designation: req.body.Designation,
      Email: req.body.Email,
      Department: req.body.Department,
    })
    newFaculty.save()
      .then(faculty => {
        res.status(200).json(faculty);
        // res.send(faculty);
      })
      .catch(err => {
        res.status(400).send(err);
      });
    // res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Get a faculty by ID
router.get('/faculty/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Faculty.findById(id);
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


// Delete a faculty by ID
router.delete('/faculty/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Faculty.findByIdAndDelete(id);
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
    const result = await Faculty.find();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
