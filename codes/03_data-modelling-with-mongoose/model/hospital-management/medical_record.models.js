import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
  patient: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  }],
  diagnosis: {
    type: String,
    required: true
  },
  prescription: {
    type: String,
    required: true
  },
  testResults: {
    type: [String],
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);