const express = require('express');
const router = express.Router();
const Center = require('../collections/centers')

// Create a new center
router.post('/centers', (req, res) => {
  const newCenter = new Center({
    Name: req.body.Name,
    Type: req.body.Type,
    Est_Year: req.body.Est_Year,
    Location: req.body.Location,
  })
  newCenter.save()
    .then(center => {
      res.status(200).json(user);
      res.send(center);
    })
    .catch(err => {
      res.status(400).send(err);
    });
  // res.send(req.body);
});

// Read a center by ID
router.get('/centers/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const center = await Center.findById(id);
    if (center) {
      res.json(center);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// Update a center by ID
router.put('/centers/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const result = await Center.findById(id);
    if (!result) {
      res.sendStatus(404);
    }
    if (body.Name) {
      result.Name = body.Name;
    }
    if (body.Type) {
      result.Type = body.Type;
    }
    if (body.Est_Year) {
      result.Est_Year = body.Est_Year;
    }
    if (body.Location) {
      result.Location = body.Location;
    }

    result.save()
    .then(center => {
      res.status(200).json(center);
    })

  } catch (error) {
    next(error);
  }
});

// Delete a center by ID
router.delete('/centers/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const center = await Center.findByIdAndDelete(id);
    if (center) {
      res.json(center);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// Read all centers
router.get('/centers', async (req, res, next) => {
  try {
    const centers = await Center.find();
    res.json(centers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// 6462837adad354247f1c15cc
// 646283e21ad47f5b1402bcfb
// 6464fb3f860f2aa33b4f0335
