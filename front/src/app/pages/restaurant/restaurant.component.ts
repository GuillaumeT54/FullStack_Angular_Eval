import { Component, OnInit } from '@angular/core';
import {RestaurantFormContent} from "../../components/restaurant-form/restaurant-form.component";
import {Restaurant} from "../../dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {


  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {
  }


  public ngOnInit(): void {
    this.restaurantService.getRestaurant().subscribe({
      next: restaurants => this.restaurants = restaurants
    })
  }

  public createRestaurant(restaurant: RestaurantFormContent): void {
    this.restaurantService.createRestaurant(restaurant.nom).subscribe({
      next: value => this.restaurants.push(value)
    })
  }

}
