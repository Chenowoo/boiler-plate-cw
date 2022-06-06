const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1 //중복사용 불가
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {         //사용자인지 관리자인지 구분
        typle: Number,
        default: 0
    },
    image: String,
    token: {        //유효성 관리
        type: String
    },
    tokenExp: {     //유효기간
        type: Number
    }

})

//스키마를 모델로 감싸기 위함
const User = mongoose.model('User', userSchema) 

//이 모델을 다른 곳에서도 쓰기 위함
module.exports = {User}