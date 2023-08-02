import arangodb from "npm:arangojs";

const mydb = new arangodb.Database({ databaseName: "test-db" });
const collection = mydb.collection("test-collection");
const exists = await collection.exists();
console.log(exists);
