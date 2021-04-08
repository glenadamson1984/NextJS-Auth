import { connectToDatabase } from "../../../helpers/db";
import { hashPassword } from "./auth";

const handler = (req, res) => {
    const data = req.body;

    const {email, password} = data;

    const client = await connectToDatabase();

    const db = client.db();

    const hashPassword = await hashPassword(password)

    const result =  await db.collection("users").insertOne({
        email: email,
        password: hashPassword
    });

    res.status(200).json({message: "added"});
}

export default handler;
