// models/ViewCount.js
import mongoose from 'mongoose';

const viewCountSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const ViewCount = mongoose.models.ViewCount || mongoose.model('ViewCount', viewCountSchema);

export default ViewCount;
