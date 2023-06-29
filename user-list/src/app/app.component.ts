import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface User {
  id: number;
  pic: string;
  name: string;
  lastName: string;
  dni: string;
  civilStatus: string;
  postalCode: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-list';
  users: Array<any> = [];
  visible = false;
  selectedUser: User = {
    id: 0,
    pic: '',
    name: '',
    lastName: '',
    dni: '',
    civilStatus: '',
    postalCode: ''
  };

  constructor(
    private http: HttpClient
  ) {}

  async ngOnInit(): Promise<void> {
    this.http.get('http://demo6378504.mockable.io/user')
      .subscribe(users => this.users = users as Array<any>);
  }

  showProfileCard(user: User) {
    this.selectedUser = user;
    this.visible = true;
  }
}
