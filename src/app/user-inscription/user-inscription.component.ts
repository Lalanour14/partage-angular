import { Component } from '@angular/core';
import { User } from '../entities';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent {

  user:User = {
      name:'',
      firstName: '',
      address:'',
      }
    constructor (private router:Router,private userService:UserService,private notificationService:NotificationService){}
    handleSubmit() {
      this.userService.add(this.user).subscribe(() => {
        this.notificationService.notify('Object add success');
        this.router.navigate(['/'])
      });
    }
  }




