
const mongoose=require('mongoose')
const DB_Connection=async()=>{
   await mongoose.connect(process.env.DB_URL).then(
    console.log("DB connected")
   ).catch(err=>{
    console.log({msg:"Falid to connect to DB",err})

   });

}
module.exports=DB_Connection;