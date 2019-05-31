import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() email: Email;
  @Output() meDeletaAi = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  apagarEmail(){

    if(confirm('Vc tem certeza?')){
      this.meDeletaAi.emit();
    }

  }

}
