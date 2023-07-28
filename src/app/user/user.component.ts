import { Component, Input } from '@angular/core';
import { User } from '../entities';
import { UserService } from '../user.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 

  list: User[] = [];
  selected: User | null = null;
  
  
  
  constructor(private userService : UserService,private notificationService:NotificationService) { }

      ngOnInit(): void {
        this.userService.fetchAll().
          subscribe(data=> this.list = data);
       
          
      }

      select(user: User) {
        if (this.selected == user) {
        this.selected = null;
        } else {
        this.selected = user;
         }
      }
   
       deleteSelected() {
         if (this.selected) {
          this.userService.delete(this.selected).subscribe(() => {
           this.list = this.list.filter(item => item != this.selected);
           this.notificationService.notify('Object delete success');
           this.selected = null;
            });
         }
       } 


}
