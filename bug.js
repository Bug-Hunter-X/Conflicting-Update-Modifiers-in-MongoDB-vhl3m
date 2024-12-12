```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Make sure this URI is correct for your setup
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Incorrect update operation
    const result = await collection.updateOne({ name: "John Doe" }, { $set: { age: 30 }, $inc: { age: 5 } });

    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```