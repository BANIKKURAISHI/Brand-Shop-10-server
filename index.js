const express=require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express()
const port=process.env.PORT||5000
app.use(cors())
app.use(express.json())
//mdkuraishirahmanbanik 
//S3BNtMTOEbgT2wFM


app.get('/',(req,res)=>{
  res.send("This is number 10")
})

const uri = "mongodb+srv://mdkuraishirahmanbanik:S3BNtMTOEbgT2wFM@cluster0.ngnhqow.mongodb.net/?retryWrites=true&w=majority";

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

   app.get("/brand",async(req,res)=>{
    const result =await userCollection.find().toArray()
    res.send(result)
   })
  //  app.get("/products/:brands",async(req,res)=>{
  //   const brand=req.params.brand
  //   const query={brand:brand}
  //   const cursor=userProduction.find(query)
  //   const result =await cursor.toArray()
  //   res.send(result)
  //  })
  
  app.get("/products",async(req,res)=>{
    const result =await userProduction.find().toArray()
    res.send(result)
   })

   app.post("/products",async(req,res)=>{
   const product=req.body 
   const result =await userProduction.insertOne(product)
   res.send(result)
   console.log(product)


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