import { Email } from '../email';

export class EmailPost{
    to = '';
    subject = '';
    content = '';
    created_at = '';
    id = '';

    constructor(email: Email){
        this.to = email.destinatario;
        this.subject = email.assunto;
        this.content  = email.mensagem;
        this.id = email.id;
    }
}