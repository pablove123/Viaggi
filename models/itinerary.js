import mongoose from 'mongoose'

const Schema = mongoose.Schema

const itinerarySchema = new Schema({
  experiences: [{type: Schema.Types.ObjectId, ref: "Experience"}],
  name: String, 
},{
  timestamps: true,
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export { Itinerary }