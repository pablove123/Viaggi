import { Itinerary } from "../models/itinerary.js";
import { Profile } from "../models/profile.js";

const create = async (req,res) => {
  try{
    const itinerary = await Itinerary.create(req.body)
    const profile = await Profile.findById(req.user.profile)
    profile.itineraries.push(itinerary)
    await profile.save()
    res.status(200).json(itinerary)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}
const addToItinerary = async (req,res) => {
  try{
    const itinerary = await Itinerary.findById(req.params.itineraryId)
    itinerary.experiences.push(req.params.experienceId)
    await itinerary.save()
    res.status(200).json(itinerary)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}



export{
  create, 
  addToItinerary
}