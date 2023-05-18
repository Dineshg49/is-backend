const express = require('express');
const router = express.Router();
const Technology = require('../collections/technologies')

var ObjectId = require('mongodb').ObjectID;
// const { createTechnology, readTechnology, updateTechnology, deleteTechnology, readTechnologies } = require('../collections/technologies');

// Create a technology
router.post('/technology',  (req, res) => {

  console.log(req.body);

  const newTech = new Technology({
    Name : req.body.Name,
    FacultyName: req.body.FacultyName,
    Keywords: req.body.Keywords,
    CenterName: req.body.CenterName,
    Overview: req.body.Overview,
    Potential_Applications: req.body.Potential_Applications,
    Related_Publications: req.body.Related_Publications,
    Description: req.body.Description,
    Type_of_Work: req.body.Type_of_Work,
    State_of_Work: req.body.State_of_Work,
    Demo_Link: req.body.Demo_Link,
  })
  newTech.save()
  .then(tech => {
    res.status(200).json(tech);
    // res.send(tech);
  })
  .catch(err => {
    res.status(400).send(err);
  });

});

// Get a technology by ID
router.get('/technology/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result =  await Technology.findById(id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});



// Delete a technology by ID
router.delete('/technology/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Technology.findByIdAndDelete(id);
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
    const result =  await Technology.find();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;

// 64633ba57bb601626e9fde0b
// 64639e101de20fa72dd74b22
// 64639e640dbac191418cc702
// 646407ab280430e8e79d38f4
// 6464fd91860f2aa33b4f0339
// 646504e6aad5fb7b3e9c9707