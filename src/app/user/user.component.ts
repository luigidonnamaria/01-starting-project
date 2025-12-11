import { Component, Input , Output, input, computed, EventEmitter} from '@angular/core';
import { type User} from './user.model';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user !: User;
  @Input({required:true}) selected!: boolean;
  @Output()  select = new EventEmitter();

   get userPath() {

    return 'assets/users/' + this.user.avatar;
  }

  //****SIGNAL INPUT

  // avatar = input.required<string>();
  // name = input.required<string>();
  
  // userPath = computed(()=>{
  //   return 'assets/users/'+ this.avatar()
  //   })

  onClickSelectedUser(){
   
    this.select.emit(this.user.id);
   
  }

}
