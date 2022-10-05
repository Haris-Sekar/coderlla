import mongoose from 'mongoose'; 

const schema = new mongoose.Schema({ 
    courseId:{
        type : String,
        required : true,
        length : 6,
        pattern : /[a-zA-Z0-9.*]/
    },
    courseName : { 
        type : String,
        required : true,
    },
    class : {
        type : String,
        required : true,
    },
    courseTeacher : {  
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0,
        required : true
    },
    courseStudent : { 
        type: [String], 
        default : []
    },
    test : { 
        type : [String],
        default : []
    }    
});


const model = mongoose.model('course', schema);

export default model;