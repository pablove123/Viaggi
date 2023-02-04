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

  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}
const show = async (req,res) => {
  try{

  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const update = async (req,res) => {
  try{

  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteExperience = async (req,res) => {
  try{

  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const createReview = async (req,res) => {
  try{

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