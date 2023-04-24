const mongoose = require('mongoose');
const db = require('../db');

const RnDShowcaseSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  locations: {
    type: String,
    required: true
  },
  technologies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Technology'
  }],
  keynoteSpeaker: {
    type: String,
  },
  researchCenters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Center'
  }],
  date: {
    type: Date,
  }
});
// 

const RnDShowcase = db.model('RnD', RnDShowcaseSchema);

async function createRnDShowcase(data) {
    try {
      const showcase = new RnDShowcase(data);
      const result = await showcase.save();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async function readRnDShowcase(id) {
    try {
      const result = await RnDShowcase.findById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async function updateRnDShowcase(id, data) {
    try {
      const result = await RnDShowcase.findByIdAndUpdate(id, data, { new: true });
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async function deleteRnDShowcase(id) {
    try {
      const result = await RnDShowcase.findByIdAndDelete(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async function readRnDShowcases() {
    try {
      const result = await RnDShowcase.find();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = { createRnDShowcase, readRnDShowcase, updateRnDShowcase, deleteRnDShowcase, readRnDShowcases };



  // doubt with the Rnd Schema=> should the technologies be an array?
  // why are we using users as separate collection, for authorizing all APIs (like sending JSON etc)



  // change the RND showcase according to https://portal2022-rndshowcase.iiit.ac.in/
  // https://rndshowcase.iiit.ac.in/

  // remove the functionalities to create other faculty inside technologies
  // create users with id password to access the creation of faculty etc page.



