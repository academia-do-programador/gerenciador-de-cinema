import { Component, OnInit } from '@angular/core';
import { DetalhesFilme } from 'src/app/models/detalhes-filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css'],
})
export class DetalhesFilmeComponent implements OnInit {
  filme: DetalhesFilme | undefined;

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService
      .selecionarDetalhesFilme(5)
      .subscribe((resposta) => {
        this.filme = resposta;
      });
  }
}
