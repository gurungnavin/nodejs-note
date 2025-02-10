import mongoose from 'mongoose'

const patientSchema = mongoose.Schema({}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);