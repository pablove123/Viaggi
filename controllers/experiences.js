import { Experience } from '../models/experience.js'
import { v2 as cloudinary } from 'cloudinary'
import { Profile } from '../models/profile.js'

const create = async (req,res) => {
  try{
    const experience = await Experience.create(req.body)
    res.status(200).json(experience)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const index = async (req,res) => {
  try{
    const experiences = await Experience.find({})
    res.status(200).json(experiences)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}
const show = async (req,res) => {
  try{
    const experience = await Experience.findById(req.params.id)
    res.status(200).json(experience)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const update = async (req,res) => {
  try{
    const experience = await Experience.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {new:true})
      res.status(200).json(experience)

  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteExperience = async (req,res) => {
  try{
    const experience = await Experience.findByIdAndDelete(req.params.id)
    res.status(200).json(experience)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const createReview = async (req,res) => {
  try{
  const experience = await Experience.findById(req.params.id)
  experience.review.push(req.body)
  await experience.save()

  const newReview = experience.review[experience.review.length -1]

  res.status(201).json(newReview)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteReview = async (req,res) => {
  try{

  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

export{
  create, 
  index, 
  show, 
  update, 
  deleteExperience as delete, 
  createReview, 
  deleteReview
}