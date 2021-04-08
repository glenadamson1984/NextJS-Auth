import {MongoClient} from 'mongodb';

//mongodb+srv://<username>:<password>@cluster0.fadas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
export const connectToDatabase = async () => {
    const client = await MongoClient.connect('mongodb+srv://blog:blog123@cluster0.fadas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    return client;
}