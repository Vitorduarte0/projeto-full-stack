import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export class NodeMailer {
  async sendEmailToNewUsers(email: string, password: string) {
    const NMAILER_CONFIG = {
      host: "smtp-mail.outlook.com",
      port: 587,
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    };

    const transporter = nodemailer.createTransport({
      host: NMAILER_CONFIG.host,
      port: NMAILER_CONFIG.port,
      secure: false,
      auth: {
        user: NMAILER_CONFIG.user,
        pass: NMAILER_CONFIG.pass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      text: `Usuário Cadastro Com Sucesso ✔`,
      subject: "Credenciais",
      from: "ENVIO DE CREDENCIAIS <vitormeta2022@outlook.com>",
      html: `<p>- EQUIPE VT Ecommerce. Segue ao lado seus dados para login na plataforma:<strong> email: ${email} e senha: ${password}</strong></p>`,
      to: [`${email}`]
    });
  }
}
/* const nodemailerTeste = new NodeMailer()
.sendHashLink() */
