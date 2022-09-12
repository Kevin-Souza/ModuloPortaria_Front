import { Component, OnInit } from '@angular/core';
import { PoSelectOption, PoTableColumn } from '@po-ui/ng-components';
import { visitante } from 'src/app/models/visitante';
import { VisitanteService } from './service/visitante.service';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.scss'],
})
export class VisitantesComponent implements OnInit {
  model = new visitante();
  visitantes!: visitante[];

  constructor(private visitanteService : VisitanteService) {}

  ngOnInit(): void {
   this.Buscar();
  }

  colunas: Array<PoTableColumn> = [
    { label: 'Id', property: 'id' },
    { label: 'Nome', property: 'nome' },
    { label: 'CPF', property: 'cpf' },
    { label: 'Motivo', property: 'motivo' },
  ];

  options: Array<PoSelectOption> = [
    { label: 'Visitante', value: 'visita' },
    { label: 'Prestação de serviço', value: 'Servico' },
    { label: 'Morador', value: 'morador' },
  ];

  OnSubmit(): void {
    this.visitanteService.insert(this.model).subscribe((data) => {
        console.log(this.model);
        alert('Visitante cadastrado !');
        this.Buscar();
    });
  }

  Buscar(){
    this.visitanteService.getAll().subscribe(
      dados => {
        this.visitantes = dados;
        console.log(this.visitantes);
      },
      (err)=>{
        console.log(err);
      })
  }



}
