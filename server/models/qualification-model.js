import mongoose from 'mongoose';

const qualificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completionDate: { type: Date, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Qualification', qualificationSchema);