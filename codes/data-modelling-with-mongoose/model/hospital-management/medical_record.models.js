import mongoose from 'mongoose'

const medial_recordSchema = mongoose.Schema({}, {timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medial_recordSchema)