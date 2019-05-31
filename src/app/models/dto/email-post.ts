import { Email } from '../email';

export class EmailPost{
    to = '';
    subject = '';
    content = '';
    created_at = '';

    constructor(email: Email){
        this.to = email.destinatario;
        this.subject = email.assunto;
        this.content   = email.mensagem;

    }
}