import { MAIL } from "../config"

export const message = (mailUser: any, subject: string, message: string, message_html: string) => {

    return {
        from: MAIL,
        to: mailUser,
        subject: subject,
        text: message,
        html: message_html
    }
}