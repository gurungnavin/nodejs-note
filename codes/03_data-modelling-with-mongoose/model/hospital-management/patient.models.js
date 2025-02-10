import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },

  medicalHistory: {
    type: [String],
    default: []
  },
  // Removed appointments field since it's not required
});

export const Patient = mongoose.model('Patient', patientSchema);