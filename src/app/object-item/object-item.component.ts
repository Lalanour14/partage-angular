import { Component, Input } from '@angular/core';
import { Object } from '../entities';

@Component({
  selector: 'app-object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.css']
})
export class ObjectItemComponent {
  @Input({required:true})
  object:Object;
}
