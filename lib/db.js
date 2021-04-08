import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://blog:blog123@cluster0.fadas.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
