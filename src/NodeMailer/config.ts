import { MAIL, PASS_MAIL } from "../config";

export const config =  {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: MAIL,
        pass: PASS_MAIL
    }
}