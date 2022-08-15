import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { requestCarsList } from 'src/app/core/ngrx/actions/cars.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private store:Store
  ) {
    this.getData()
  }

  ngOnInit(): void {
  }

  getData(){
    this.store.dispatch(requestCarsList({search:''}))
  }


}
