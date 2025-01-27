import { Schema, model, Document, ObjectId } from 'mongoose';   

const reactionSchema = new mongoose.Schema({
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        return new Date(timestamp).toLocaleString(); // Format the timestamp on query
      },
    },
  });
  
  // Create a model from the schema (optional, depending on your use case)
  const Reaction = mongoose.model('Reaction', reactionSchema);
  
  module.exports = Reaction;