import { hash } from "bcryptjs";

export const hashPassword = async (password) => {
    const hashPasswors = await hash(password, 12);
} 