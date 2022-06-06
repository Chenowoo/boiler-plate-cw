const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const config = require('./config/key');
//User 모델을 가져옴
const { User } = require("./models/User");

//application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({extended: true}));
//application/json 이렇게 된 것을 분석해서 가져올 수 있게 해줌
app.use(bodyParser.json());

const mongoose = require('mongoose')
//mongoDB 연결하는 부분
mongoose.connect(config.mongoURI)
.then(() => console.log('MongDB Connected...'))
.catch(err => console.log(err))
  


app.get('/', (req, res) => {
  res.send('Hello World! ~~~~~')
})

app.post('/register', (req, res) => {

  //회원 가입 할 때 필요한 정보들을 클라이언트에서 가져오면
  //그것들을 DB에 넣어준다.



  //User 모델을 가져옴
  const user = new User(req.body)
  //정보들이 user모델에 저장됨
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({   //저장한 userInfo를 클라이언트에 성공했다는 의미
      success: true    
  })
})
})

app.listen(port, () => {  console.log(`Example app listening on port ${port}`)})