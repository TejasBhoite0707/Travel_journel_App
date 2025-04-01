
const UploadTheImage=async(req,res)=>{
    try{
if(!req.file){
    return res.status(400).json({error:true,message:"No image uploaded"});
}
const imageUrl=`http://localhost:8000/uploads/${req.file.filename}`;
res.status(200).json({imageUrl});
    }
    catch(err){
res.status(500).json({message:err.message});
    }
}

export default UploadTheImage;
