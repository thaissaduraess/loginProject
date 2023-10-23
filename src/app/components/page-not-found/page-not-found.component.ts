import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent  implements OnInit {
  titleMessage:string = "Pagina não encontrada"
  subTitleMessage:string = "Essa rota ainda não foi definida na aplicação."
  constructor() { }

  ngOnInit() {
  }

}
