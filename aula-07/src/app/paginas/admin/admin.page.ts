import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private cliente: ClientesService) {
  }

  ngOnInit() {
  }

}
