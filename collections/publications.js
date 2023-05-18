const mongoose = require('mongoose');
const db = require('../db');
const Faculty = require('./faculties')

const publicationSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    required: true
  },
  Author: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Publication_Number: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    required: true
  },
  Faculty_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  }
});

const Publication = mongoose.model('Publication', publicationSchema);

async function createPublication(Title, Date, Author, Publication_Number, Type, Status, Advisor) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {


    const publication = new Publication({
      Title,
      Date,
      Author,
      Type,
      Publication_Number,
      Status,
      Advisor
    });

    const savedPublication = await publication.save({ session });

    await session.commitTransaction();
    session.endSession();

    return savedPublication;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

async function readPublications() {
  write
  try {
    const publications = await Publication.find().populate('Faculty_ID');
    return publications;
  } catch (error) {
    throw error;
  }
}

async function readPublication(id) {
  try {
    const publication = await Publication.findById(id).populate('Faculty_ID');
    return publication;
  } catch (error) {
    throw error;
  }
}

async function updatePublication(id, updates) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const publication = await Publication.findById(id).populate('Faculty_ID').session(session);
    if (!publication) {
      throw new Error('publication not found');
    }

    if (updates.Title) {
      publication.Title = updates.Title;
    }
    if (updates.Date) {
      publication.Date = updates.Date;
    }
    if (updates.Publication_Number) {
      publication.Publication_Number = updates.Publication_Number;
    }
    if (updates.Status) {
      publication.Status = updates.Status;
    }
    if (updates.Faculty_ID) {
      publication.Faculty_ID = updates.Faculty_ID;
    }
    if (updates.Author) {
      publication.Author = updates.Author;
    }
    if (updates.Type) {
      publication.Type = updates.Type;
    }

    const savedPublication = await publication.save({ session });

    await session.commitTransaction();
    session.endSession();

    return savedPublication;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

function deletePublication(id) {
  return Publication.findByIdAndDelete(id);
}

module.exports = {
  Publication,
  createPublication,
  readPublications,
  readPublication,
  updatePublication,
  deletePublication,
};
