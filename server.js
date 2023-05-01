const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Feedback = require('./model/feedback');
const Learnsch =require('./model/learn')

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

mongoose.connect('mongodb+srv://singhvaibhav654:U4CoJal4fNdyz7rS@cluster0.vdb4chf.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database!');
}).catch((error) => {
  console.log('Error connecting to database: ', error);
});

app.post('/api/contact', async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
  
    res.send('Received your message!');
  
    const contact = new Feedback({
      name: name,
      email: email,
      message: message
    });
  
    try {
      await contact.save();
      res.send('Contact saved');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error saving contact');
    }
  });
 
  app.get("/api/val", async(req,res) => {
    try {
        const data = await Learnsch.find();
        res.json(data);
    } catch (error) {
        res.status(500).send({ msg : "could not get /", error : error.message, status : false })
    }
})
app.post("/api/senddata",async (req, res) => {
  
    var myData = new Learnsch(req.body);
     myData.save()
     .then(item => {
     res.send("item saved to database");
       })
     .catch(err => {
      res.status(400).send("unable to save to database");
       });
});
  
  
  
  

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
