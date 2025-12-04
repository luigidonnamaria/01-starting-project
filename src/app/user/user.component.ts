import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = signal(DUMMY_USERS[randomNumber]);
  userPath = computed(()=> 'assets/users/'+ this.selectedUser().avatar);
  

  /**get userPath() {

    return 'assets/users/' + this.selectedUser.avatar;
  }

 **/
 

  onClickSelectedUser(){
    const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomNumber]);

   
  }

}
