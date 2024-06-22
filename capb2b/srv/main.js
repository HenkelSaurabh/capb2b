const cds = require("@sap/cds");
const logger = cds.log('capb2b')
module.exports = cds.service.impl ( function(){
    // console.log("Again something is written here as an Anonymous functions!!!");
    // this.on("READ","Books", function(req,next){
    //     console.log("Read Done!");
    //     //return[{ID: cds.utils.uuid() ,name:"soemthing",author_ID:"12132131"}]
    //     return next();
    // })
    // this.after("READ","Books",(data,req)=>{
    //     //logger(data)
    //     data.map(book => book.name+= '!')
    // })
    const changeData = (data)=>{
        if(data){
            const books = Array.isArray(data)? data : [data];
            books.forEach((book)=>{
                if(book.name?.toLowerCase().includes('harmless')){
                    book.urgency = "HIGH";
                }else{
                    book.urgency = 'NORMAL';
                }
            })
        }
    }

    this.after("READ","Books",(data)=>{
        changeData(data);
        logger(data);
    })
})