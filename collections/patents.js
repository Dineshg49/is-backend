const mongoose = require('mongoose');
const db = require('../db');

const patentSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Center_Name: {
    type: String,
  },
  Status: {
    type: String,
  },
  Year: {
    type: Number,
  },
  Patent_Number: {
    type: String,
    required: true
  },
  Faculty: [{
    type: String,
  }],

});

module.exports = Patent = mongoose.model("Patent", patentSchema);


// async function createPatent(Title, Inventor, Year, Patent_Number, Status, Faculty, Center) {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {


//     const patent = new Patent({
//       Title,
//       Inventor,
//       Year,
//       Patent_Number,
//       Status,
//       Advisor,
//       CenterName,
//     });

//     const savedPatent = await patent.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return savedPatent;
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw error;
//   }
// }

// async function readPatents() {
//   write
//   try {
//     const patents = await Patent.find().populate('Faculty_ID').populate('Center_ID');
//     return patents;
//   } catch (error) {
//     throw error;
//   }
// }

// async function readPatent(id) {
//   try {
//     const patent = await Patent.findById(id).populate('Faculty_ID').populate('Center_ID');
//     return patent;
//   } catch (error) {
//     throw error;
//   }
// }

// async function updatePatent(id, updates) {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const patent = await Patent.findById(id).populate('Faculty_ID').populate('Center_ID').session(session);
//     if (!patent) {
//       throw new Error('patent not found');
//     }

//     if (updates.Title) {
//       patent.Title = updates.Title;
//     }
//     if (updates.Inventor) {
//       patent.Inventor = updates.Inventor;
//     }
//     if (updates.Patent_Number) {
//       patent.Patent_Number = updates.Patent_Number;
//     }
//     if (updates.Status) {
//       patent.Status = updates.Status;
//     }
//     if (updates.Faculty_ID) {
//       patent.Faculty_ID = updates.Faculty_ID;
//     }
//     if (updates.Center_ID) {
//       patent.Center_ID = updates.Center_ID;
//     }
//     if (updates.Year) {
//       patent.Year = updates.Year;
//     }

//     const savedPatent = await patent.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return savedPatent;
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw error;
//   }
// }

// function deletePatent(id) {
//   return Patent.findByIdAndDelete(id);
// }

// module.exports = {
//   Patent,
//   createPatent,
//   readPatents,
//   readPatent,
//   updatePatent,
//   deletePatent,
// };
