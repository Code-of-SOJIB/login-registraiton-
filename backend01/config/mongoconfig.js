const mongoose = require('mongoose');


let mongoconfig=()=>{
    mongoose.connect('mongodb+srv://figmaxm:oxN9L4Ap43isyXPN@cluster0.44gbgr0.mongodb.net/figma?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Database Connected!'));
}

// mongodb+srv://figmaxm:oxN9L4Ap43isyXPN@cluster0.44gbgr0.mongodb.net/figma?retryWrites=true&w=majority&appName=Cluster0

module.exports=mongoconfig;