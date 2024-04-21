import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})



export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }




  getSerieList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }


    calcularAVGTemporadas(): number 
    {

      let series=this.series;
      let cantidad:number=0;

      series.forEach((serie) => cantidad = cantidad + serie.seasons);

      let denom:number=series.length
      return cantidad/denom;

    }


    
  ngOnInit() 
  {
    this.getSerieList();
  }

}
