import express from 'express';
import mongoose from 'mongoose';

import BusinessProfile from '../models/businessProfile.js';
import Business from '../models/business.js'
import Contact from '../models/contact.js'

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newProfile = new BusinessProfile(req.body);
        const saveProfile = await newProfile.save();

        res.status(201).json(saveProfile);
    } catch (err) {
        console.error("POST / error: ", err);
        res.status(500).json({ message: "Could not create profile" })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const profile = await BusinessProfile.findById(id)
            .populate("businesses")
            .populate("contacts")

        if(!profile) {
            return res.status(404).json({message: "Profile cannot be found"});
        }

        res.status(200).json(profile);
    } catch(err) {
        console.error("GET / error: ", err);
        res.status(500).json({message: "Server error!"})
    }
})

export default router;