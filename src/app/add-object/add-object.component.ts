import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectService } from '../object.service';
import { Object} from '../entities';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.css']
})
export class AddObjectComponent {
  object:Object = {
    label:'',
    description: '',
    photo:[''],
    user: {
      name:'',
      firstName: '',
      address:'',
      
    }
  }
  constructor(private router:Router, private objectService:ObjectService, private notificationService:NotificationService){}

  handleSubmit() {
    this.objectService.add(this.object).subscribe(() => {
      this.notificationService.notify('Object add success');
      this.router.navigate(['/'])
    });
  }
}