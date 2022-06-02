import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css']
})
export class EscritorComponent implements OnInit {

  parametro: any;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.parametro = "";
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{ 
      console.log("parametro del padre: ", param);
      this.parametro = param.escritorId;
    });
  }

}
