import { MAIL } from "../config"

export const message = (mailUser: any, message: string, subject: string) => {

    return {
        from: MAIL,
        to: mailUser,
        subject: subject,
        text: message
    }
}