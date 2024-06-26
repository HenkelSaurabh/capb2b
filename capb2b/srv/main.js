// Updated until 13.30 on 22nd June

const cds = require("@sap/cds");
const logger = cds.log('capb2b')

const {Books} = cds.entities('bookshop');

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

    this.on('totalStock', async()=>{
        const result = await SELECT .one .from(Books) .columns('sum(stock) as TotalStock');
        return result.TotalStock;
    })

// Test change
    this.after("READ",Books,(data)=>{
        changeData(data);
        logger(data);
    })
})