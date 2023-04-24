const express = require('express');
const router = express.Router();
const {
  createCenter,
  readCenter,
  updateCenter,
  deleteCenter,
  readCenters
} = require('../collections/centers');

// Create a new center
router.post('/centers', async (req, res, next) => {
  try {
    const center = await createCenter(req.body);
    res.json(center);
  } catch (error) {
    next(error);
  }
});

// Read a center by ID
router.get('/centers/:id', async (req, res, next) => {
  try {
    const center = await readCenter(req.params.id);
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
    const center = await updateCenter(req.params.id, req.body);
    if (center) {
      res.json(center);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// Delete a center by ID
router.delete('/centers/:id', async (req, res, next) => {
  try {
    const center = await deleteCenter(req.params.id);
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
    const centers = await readCenters();
    res.json(centers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
