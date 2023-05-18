const express = require('express');
const router = express.Router();
const Patent = require('../collections/patents')


// Create a new patent
router.post('/patent', async (req, res) => {

  const newPatent = new Patent({
    Title: req.body.Title,
    Center_Name: req.body.Center_Name,
    Year: req.body.Year,
    Patent_Number: req.body.Patent_Number,
    Faculty: req.body.Faculty,
    Status : req.body.Status
  })
  newPatent.save()
    .then(patent => {
      res.status(200).json(patent);
      // res.send(tech);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// Get a patent by id
router.get('/patent/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Patent.findById(id);
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
    const { id } = req.params;
    const { body } = req;
    const result = await Patent.findById(id);

    if (!result) {
      res.status(404).send('Patent not found');
    }

    if (body.Title) {
      result.Title = body.Title;
    }
    if (body.Patent_Number) {
      result.Patent_Number = body.Patent_Number;
    }
    if (body.Faculty) {
      result.Faculty = body.Faculty;
    }
    if (body.Center_Name) {
      result.Center_Name = body.Center_Name;
    }
    if (body.Year) {
      result.Year = body.Year;
    }
     
    result.save()
    .then(patent => {
      res.status(200).json(patent);
    })
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a patent by id
router.delete('/patent/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Patent.findByIdAndDelete(id);
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
    const result = await Patent.find();
    res.json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
