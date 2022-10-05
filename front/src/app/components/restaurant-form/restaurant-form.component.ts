import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  public nomInput: string = "";
  public adresseInput: string = "";
  public evaluationInput: string = "";

  @Output()
  public restaurantCreated: EventEmitter<RestaurantFormContent> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public save(form: NgForm): void {

    if (form.valid) {
      this.restaurantCreated.emit({
        adresse: this.adresseInput,
        nom: this.nomInput,
        evaluation: this.evaluationInput
      });
    }
  }

}

export interface RestaurantFormContent {

  nom: string;
  adresse: string;
  evaluation: string;

}
