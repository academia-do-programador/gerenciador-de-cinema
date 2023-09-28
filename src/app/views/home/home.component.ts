import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filmes: Filme[] = [];

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService
      .selecionarFilmes()
      .subscribe((resposta) => (this.filmes = resposta));
  }
}
