const mongoose=require('mongoose');


exports.db = ()=>{
mongoose.connect(`mongodb+srv://SivaSSR:Siva2298@cluster.garse2f.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
console.log('Connection established');
}).catch((err)=>{
    console.log(err);
})
};