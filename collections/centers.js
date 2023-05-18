const mongoose = require('mongoose');
const db = require('../db');
const Photo = require('./photos')

const centerSchema = new mongoose.Schema({
    Name: {
        type: String,
        // required: true
    },
    Type: {
        type: String,
        // required: truse
    },
    Est_Year: {
        type: Number,
        // required: true
    },
    Location: {
        type: String,
        // required: true
    },
    Thumbnail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }
});

module.exports = Center = mongoose.model("Centers", centerSchema);

// const Center = mongoose.model('Center', centerSchema);

// async function createCenter(Name, Type, Est_Year, Location, photoFilename, photoContentType, photoData) {
   

//     try {
//         // const photo = new Photo({
//         //     filename: photoFilename,
//         //     contentType: photoContentType,
//         //     data: photoData
//         // });

//         // const savedPhoto = await photo.save({ session });

//         const center = new Center({
//             Name : Name,
//             Type : Type,
//             // Est_Year,
//             // Location,
//             // Thumbnail: savedPhoto._id
//         });

//         const savedCenter = await center.save();
//         return savedCenter;
//     } catch (error) {
//         await session.abortTransaction();
//         session.endSession();
//         throw error;
//     }
// }

// async function readCenters() {
//     try {
//         const centers = await Center.find().populate('Thumbnail');
//         const centersData = centers.map(center => {
//           const photoData = center.Thumbnail ? center.Thumbnail.data : null;
//           return { ...center.toObject(), photoData };
//         });
//         return centersData;
//       } catch (error) {
//         throw error;
//       }
// }

// async function readCenter(id) {
//     try {
//         const center = await Center.findById(id).populate('Thumbnail');
//         const photoData = center.Thumbnail ? center.Thumbnail.data : null;
//         return { ...center.toObject(), photoData };
//       } catch (error) {
//         throw error;
//       }
// }

// async function updateCenter(id, updates) {
//     const session = await mongoose.startSession();
//     session.startTransaction();
  
//     try {
//       const center = await Center.findById(id).populate('Thumbnail').session(session);
//       if (!center) {
//         throw new Error('Center not found');
//       }
  
//       if (updates.photoFilename && updates.photoContentType && updates.photoData) {
//         const newPhoto = new Photo({
//           filename: updates.photoFilename,
//           contentType: updates.photoContentType,
//           data: updates.photoData
//         });
  
//         const savedPhoto = await newPhoto.save({ session });
//         center.Thumbnail = savedPhoto._id;
//       }
      
//       if (updates.Name) {
//         center.Name = updates.Name;
//       }
//       if (updates.Type) {
//         center.Type = updates.Type;
//       }
//       if (updates.Est_Year) {
//         center.Est_Year = updates.Est_Year;
//       }
//       if (updates.Location) {
//         center.Location = updates.Location;
//       }
  

  
//       const savedCenter = await center.save({ session });
  
//       await session.commitTransaction();
//       session.endSession();
  
//       return savedCenter;
//     } catch (error) {
//       await session.abortTransaction();
//       session.endSession();
//       throw error;
//     }
//   }

// function deleteCenter(id) {
//     return Center.findByIdAndDelete(id);
// }

// module.exports = {
//     // Center,
//     // createCenter,
//     readCenters,
//     // readCenter,
//     // updateCenter,
//     // deleteCenter,
// };
