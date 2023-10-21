const express=require('express')
const cors=require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app=express()
const port=process.env.PORT||5000
app.use(cors())
app.use(express.json())

//mdkuraishirahmanbanik 
//S3BNtMTOEbgT2wFM


app.get('/',(req,res)=>{
  res.send("This is number 10")
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ngnhqow.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
     await client.connect();
     const userCollection =client.db('brandDB').collection('brand')
     const userProduction =client.db('brandDB').collection('products')
     const userCarts =client.db('brandDB').collection('carts')
     
    app.get("/carts",async(req,res)=>{
    const result =await userCarts.find().toArray()
    res.send(result)
     })


    app.post("/carts",async(req,res)=>{
      const product=req.body 
      const result =await userCarts.insertOne(product)
      res.send(result)
      console.log(product)})



   app.get("/brand",async(req,res)=>{
    const result =await userCollection.find().toArray()
    res.send(result)
   })
   app.get("/products/:brand",async(req,res)=>{
    const brand=req.params.brand
    const query={brand:brand}
    const cursor=userProduction.find(query)
    const result =await cursor.toArray()
    res.send(result)
   })
  
  
  app.get("/products",async(req,res)=>{
    const result =await userProduction.find().toArray()
    res.send(result)
   })
   app.get("/product",async(req,res)=>{
    const result =await userCollection.find().toArray()
    res.send(result)
   })

   app.get ('/product/:id',async(req,res)=>{
    const id=req.params.id 
    console.log(id)
    const query={_id:new ObjectId(id)}
    const result=await userProduction.findOne(query)
    res.send(result)})

   app.post("/products",async(req,res)=>{
   const product=req.body 
   const result =await userProduction.insertOne(product)
   res.send(result)
   console.log(product)})


   app.put ("/product/:id",async(req,res)=>{
    const id =req.params.id 
    const query={_id:new ObjectId(id)}
    const option ={upsert:true}
    const update =req.body
    const up={
      $set:{
        
        name:update.name,
        brand:update.brand,
        type:update.type,
        details:update.details,
        price:update.price,
        rating:update.rating,
        details:update.details
      }
    }
    const result =await userProduction.updateOne(query,up,option)
    res.send(result)
})


   
   

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   // Ensures that the client will close when you finish/error
   // await client.close();
  }
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
run().catch(console.dir);