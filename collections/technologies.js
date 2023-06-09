const mongoose = require('mongoose');
const db = require('../db');

const technologySchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  FacultyName: {
    type: String,
  },
  Keywords: [{
    type: String,
  }],
  CenterName: {
    type: String,
  },
  Overview: {
    type: String,
  },
  Potential_Applications: {
    type: String,
  },
  Related_Publications: [{
    type: String,
  }],
  Description: {
    type: String,
  },
  Type_of_Work: {
    type: String,
  },
  State_of_Work: {
    type: String,
  },
  Demo_Link: {
    type: String,
  },
});

module.exports = Technology = mongoose.model("Technology", technologySchema);

// async function createTechnology(Name, Status, FacultyName, CenterName, Publication_Number, Patent_Number, Research_Areas, Keyword, Description, Type_of_Work, Demo_Link) {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {


//     const technology = new Technology({
//       Name,
//       Status,
//       FacultyName,
//       CenterName,
//       Publication_Number,
//       Patent_Number,
//       Research_Areas,
//       Keyword,
//       Description,
//       Type_of_Work,
//       Demo_Link
//     });

//     const savedTechnology = await technology.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return savedTechnology;
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw error;
//   }
// }

// async function readTechnologies() {
//   write
//   try {
//     const technologies = await Technology.find().populate('FacultyName').populate('CenterName').populate('Publication_Number').populate('Patent_Number');
//     return technologies;
//   } catch (error) {
//     throw error;
//   }
// }

// async function readTechnology(id) {
//   try {
//     const technology = await Technology.findById(id).populate('FacultyName').populate('CenterName').populate('Publication_Number').populate('Patent_Number');
//     return technology;
//   } catch (error) {
//     throw error;
//   }
// }

// async function updateTechnology(id, updates) {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const technology = await Technology.findById(id).populate('FacultyName').populate('CenterName').populate('Publication_Number').populate('Patent_Number').session(session);
//     if (!technology) {
//       throw new Error('technology not found');
//     }

//     if (updates.Name) {
//       technology.Name = updates.Name;
//     }
//     if (updates.Status) {
//       technology.Status = updates.Status;
//     }
//     if (updates.FacultyName) {
//       technology.FacultyName = updates.FacultyName;
//     }
//     if (updates.CenterName) {
//       technology.CenterName = updates.CenterName;
//     }
//     if (updates.Publication_Number) {
//       technology.Publication_Number = updates.Publication_Number;
//     }
//     if (updates.Patent_Number) {
//       technology.Patent_Number = updates.Patent_Number;
//     }
//     if (updates.Research_Areas) {
//       technology.Research_Areas = updates.Research_Areas;
//     }
//     if (updates.Keyword) {
//       technology.Keyword = updates.Keyword;
//     }
//     if (updates.Description) {
//       technology.Description = updates.Description;
//     }
//     if (updates.Type_of_Work) {
//       technology.Type_of_Work = updates.Type_of_Work;
//     }
//     if (updates.Demo_Link) {
//       technology.Demo_Link = updates.Demo_Link;
//     }

//     const savedTechnology = await technology.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return savedTechnology;
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw error;
//   }
// }

// function deleteTechnology(id) {
//   return Technology.findByIdAndDelete(id);
// }

// module.exports = {
//   createTechnology,
//   readTechnologies,
//   readTechnology,
//   updateTechnology,
//   deleteTechnology,
// };
