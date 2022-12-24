import {createTransport} from "nodemailer"
import { config } from "./config"

export const sendMail = async (message: any) => {
    const transport = createTransport(config)
    await transport.sendMail(message)
}