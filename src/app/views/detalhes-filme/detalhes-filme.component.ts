import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DetalhesFilme } from 'src/app/models/detalhes-filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css'],
})
export class DetalhesFilmeComponent implements OnInit {
  filme: DetalhesFilme | undefined;
  urlSeguroTrailer: SafeResourceUrl | undefined;

  constructor(
    private filmeService: FilmeService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (!id) return;

    this.filmeService.selecionarDetalhesFilme(id).subscribe((resposta) => {
      this.filme = resposta;

      this.urlSeguroTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.filme.trailers[0].sourceUrl
      );
    });
  }
}
