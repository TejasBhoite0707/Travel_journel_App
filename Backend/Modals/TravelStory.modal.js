import mongoose, { Schema } from 'mongoose';
const TravelStorySchema=mongoose.Schema({
    title:{type:String,required:true},
    story:{type:String,required:true},
    visitedLocation:{type:[String],default:[]},
    isFavourite:{type:Boolean,default:false},
    userId:{ type:Schema.Types.ObjectId , ref:"user",required:true},
    createdOn:{type:Date, default:Date.now},
    imageUrl:{type:String,required:true},
    visitedDate:{type:Date,required:true},
})

const TravelStoryModel=mongoose.model("TravelStory",TravelStorySchema);
export default TravelStoryModel;
