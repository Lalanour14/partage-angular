
import { ObjectService } from '../object.service';
import { Component, OnInit } from '@angular/core';
import { Object } from '../entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: Object[] = [];
  selected: Object | null = null;

  constructor(private objectService : ObjectService) { }

  ngOnInit(): void {
this.objectService.fetchAll().
subscribe(data=> this.list = data);

  }


  select(object: Object) {
    if (this.selected == object) {
      this.selected = null;
    } else {
      this.selected = object;
    }
  }

  deleteSelected() {
    if (this.selected) {
      this.objectService.delete(this.selected).subscribe(() => {
        this.list = this.list.filter(item => item != this.selected);
        this.selected = null;
      });
    }
  }
}



