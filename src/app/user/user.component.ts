import { Component } from '@angular/core';
import { User } from '../entities';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
  user:User;
  list: User[] = [];
 
  
  constructor(private userService : UserService) { }

      ngOnInit(): void {
        this.userService.fetchAll().
          subscribe(data=> this.list = data);
       
          
      }


}
