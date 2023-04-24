const mongoose = require('mongoose');
const db = require('../db');
const Photo = require('./photos')
const Center = require('./centers')

const FacultySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Designation: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  Qualifications: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Phone: {
    type: Number,
    required: true
  },
  Personal_Homepage: {
    type: String,
    required: true
  },
  Research_Areas: {
    type: String,
    required: true
  },
  Center_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Center'
  },
  Profile_Photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo'
  }
});

const Faculty = db.model('Faculty', FacultySchema);

async function createFaculty(Name, Designation, Department, Qualifications, Email, Address, Phone, Personal_Homepage, Research_Areas, CenterName, photoFilename, photoContentType, photoData) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const photo = new Photo({
      filename: photoFilename,
      contentType: photoContentType,
      data: photoData
    });

    const savedPhoto = await photo.save({ session });


    const faculty = new Faculty({
      Name,
      Designation,
      Department,
      Qualifications,
      Email, Address,
      Phone,
      Personal_Homepage,
      Research_Areas,
      CenterName,
      Profile_Photo: savedPhoto._id
    });

    const savedfaculty = await faculty.save({ session });

    await session.commitTransaction();
    session.endSession();

    return savedfaculty;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

async function readFaculties() {
  write
  try {
    const faculties = await Faculty.find().populate('Profile_Photo').populate('Center_ID');
    const FacultiesData = faculties.map(faculty => {
      const photoData = faculty.Profile_Photo ? faculty.Profile_Photo.data : null;
      return { ...faculty.toObject(), photoData };
    });
    return FacultiesData;
  } catch (error) {
    throw error;
  }
}

async function readFaculty(id) {
  try {
    const faculty = await Faculty.findById(id).populate('Profile_Photo').populate('Center_ID');
    const photoData = faculty.Profile_Photo ? faculty.Profile_Photo.data : null;
    return { ...faculty.toObject(), photoData };
  } catch (error) {
    throw error;
  }
}

async function updateFaculty(id, updates) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const faculty = await Faculty.findById(id).populate('Profile_Photo').populate('Center_ID').session(session);
    if (!faculty) {
      throw new Error('Faculty not found');
    }

    if (updates.photoFilename && updates.photoContentType && updates.photoData) {
      const newPhoto = new Photo({
        filename: updates.photoFilename,
        contentType: updates.photoContentType,
        data: updates.photoData
      });

      const savedPhoto = await newPhoto.save({ session });
      faculty.Profile_Photo = savedPhoto._id;
    }

    if (updates.Designation) {
      faculty.Designation = updates.Designation;
    }
    if (updates.Department) {
      faculty.Department = updates.Department;
    }
    if (updates.Qualifications) {
      faculty.Qualifications = updates.Qualifications;
    }
    if (updates.Email) {
      faculty.Email = updates.Email;
    }
    if (updates.Address) {
      faculty.Address = updates.Address;
    }
    if (updates.Phone) {
      faculty.Phone = updates.Phone;
    }
    if (updates.Personal_Homepage) {
      faculty.Personal_Homepage = updates.Personal_Homepage;
    }
    if (updates.Research_Areas) {
      faculty.Research_Areas = updates.Research_Areas;
    }
    if (updates.Center_ID) {
      faculty.Center_ID = updates.Center_ID;
    }

    const savedFaculty = await faculty.save({ session });

    await session.commitTransaction();
    session.endSession();

    return savedFaculty;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

function deleteFaculty(id) {
  return Faculty.findByIdAndDelete(id);
}


module.exports = {
  Faculty,
  createFaculty,
  readFaculties,
  readFaculty,
  updateFaculty,
  deleteFaculty,
};
