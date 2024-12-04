const mongoose = require('mongoose')


const connectdb = async() =>{
    try{
        await mongoose.connect('mongodb+srv://bouslimiyoussef:you2005y@cluster0.a1kj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('connected to database')
    }catch(err){
        console.log(err)
    }
}

module.exports  = connectdb