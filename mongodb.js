const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://awellbro:Awellbro@drinks.gg5mw3e.mongodb.net/";
const client = new MongoClient(uri);

const db = client.db('drinksDb');
const collection = db.collection('drinksDb');

async function insert(){
    try {
        //await client.connect();
        //const first = await collection.findOne();
        //console.log(first)
        await collection.insertOne({
            name: "Mai Tai",
            ingredients: ["rum", "pineapple", "ice"],
            instructions: "test3",
        });

        
        
    } catch(error){
        console.log('error', error);
    } finally {
        await client.close();
    }
};

insert();

