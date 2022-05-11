import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cb48302ad74147",
    pass: "f1a997494a3a4b",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedback Widget <oi@feedbakwidget.com>",
      to: "Mateus Souza <mateus_souza_teles@hotmail.com>",
      subject,
      html: body,
    });
  }
}
