import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env['DB_USER']}:${process.env['DB_PASS']}@${process.env['DB_HOST']}`;
const dbName = process.env['DB_NAME'];
const mongoConfig = { useNewUrlParser: true, useUnifiedTopology: true };

let client = null;
let db = null;

export async function init() {
    if(!client) {
        client = await MongoClient.connect(uri, mongoConfig);
        db = client.db(dbName);
    }

    return { client, db }
}
