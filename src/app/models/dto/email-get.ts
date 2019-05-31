import { EmailPost } from './email-post';

export class EmailGet {

  destinatario = '';
  assunto = '';
  mensagem = '';
  dataEnvio = '';
  id = '';

  constructor(emailIngles: EmailPost) {

    this.destinatario = emailIngles.to;
    this.assunto = emailIngles.subject;
    this.mensagem = emailIngles.content;
    this.dataEnvio = emailIngles.created_at;
    this.id = emailIngles.id;

  }

}