import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env['DB_USER']}:${process.env['DB_PASS']}@${process.env['DB_HOST']}`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export const get = async () => {
    client.connect(err => {
        if (err) {
            return {
                code: 500,
                body: {
                    title: 'Error connecting to MongoDB',
                    error: err
                }
            };
        }
        const collection = client.db("test").collection("devices");
        console.log(`get -> collection`, collection);


        // perform actions on the collection object
        client.close();
    });

	return {
        code: 200,
        body: {
            title: 'Test Success!',
            body: null
        }
    };
};
