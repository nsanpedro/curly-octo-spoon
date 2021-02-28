import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/companyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB IS CONNECTED!'))
.catch(err => console.log('error ocurred ==> ', err));