import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  content: String, 
  rating: Number, 
})

const expSchema = new Schema({
  city: {type: String, enum:["Rome", "Venice", "Florence"]},
  photo: String, 
  name: String, 
  category: String, 
  description: String, 
  author: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  review: [reviewSchema]
},{
  timestamps: true,
})

const Experience = mongoose.model('Experience', expSchema)

export { Experience }