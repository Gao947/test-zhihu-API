const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    __v: { type: Number, select: false },
    name: { type: String, required: true },
    password: { type: String, required: true, select: false },
    avatar_url: { type: String },
    gender: { type: String, enum: ['male', 'female', 'other'], default: 'other', required: true },
    headline: { type: String },
    locations: { type: [{type: String}] },
    business: { type: String },
    employments: { 
        type: [{
            company: { type: String },
            job: { type: String },
        }],
     },
     education: {
        type: [{
            school: { type: String },
            major: { type: String },
            diploma: { type: Number, enum: [1, 2, 3, 4, 5] },
            entrance_year: { type: Number },
            graduation_year: { type: Number },
        }],
     },
});

module.exports = model('User', userSchema);