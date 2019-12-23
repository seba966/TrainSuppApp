import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_dtos/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserBuforService } from 'src/app/_services/user-bufor.service';
import { UserArchiveForSend } from 'src/app/_dtos/userArchiveForSend';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  @Input() currentUser: User;
  user: User;

  updateMode = false;
  userArchiveForSend: UserArchiveForSend;

  constructor(private userService: UserService, private alertify: AlertifyService, private authService: AuthService,
              private userBufor: UserBuforService) { }

  userId: number = this.authService.decodedToken.nameid;
  bmi: number;
  bmiLevel: string;
  bmr: number;
  tee: number;
  date: Date;
  currentDate: string;

  bmiDescription: string;

  checked = false;


  ngOnInit() {
    this.userBufor.getCurrentUser().subscribe((user) => {
      this.user = user;
      this.bmi = this.calculateBmi();
      this.bmiLevel = this.bmiRating();
      this.bmr = this.calculateBmr();
      this.tee = this.calculateTee();
    });
    this.userService.getUser(this.userId).subscribe((user: User) => {
      this.user = user;
      this.bmi = this.calculateBmi();
      this.bmiLevel = this.bmiRating();
      this.bmr = this.calculateBmr();
      this.tee = this.calculateTee();
      this.checked = true;
    }, error => {
      this.alertify.error(error);
    });
    this.bmiDescription = this.bmiRating();
    // console.log(this.user.username);
  }

  updateToggle() {
    this.userArchiveForSend = {
      age: this.user.age,
      weight: this.user.weight,
      height: this.user.height,
      pal: this.user.pal,
      bmi: this.calculateBmi(),
      bmiLevel: this.bmiRating(),
      bmr: this.calculateBmr(),
      tee: this.calculateTee(),
      userId: this.user.id
    };
    this.updateMode = true;
  }

  cancelUpdateMode(updateMode: boolean) {
    this.updateMode = updateMode;
  }

  getCurrentDate() {

  }

  calculateBmi(): number {
    return Math.round(this.user.weight / (this.user.height * this.user.height) * 100) / 100;
  }

  calculateTee(): number {
    return Math.round(this.user.pal * this.calculateBmr());
  }

  calculateBmr(): number {
    if (this.user.gender === 'mężczyzna') {
      return Math.round(this.bmr = (9.99 * this.user.weight) + (625 * this.user.height) - (4.92 * this.user.age) + 5);
    }
    if (this.user.gender === 'kobieta') {
      return Math.round(this.bmr = (9.99 * this.user.weight) + (625 * this.user.height) - (4.92 * this.user.age) - 161);
    }
  }

  bmiRating(): string {
    if (this.calculateBmi() < 18.5) {
      return 'niedowaga';
    }
    if (18.5 <= this.calculateBmi() && this.calculateBmi() <= 24.99) {
      return 'norma';
    }
    if (25.0 <= this.calculateBmi() && this.calculateBmi() <= 29.99) {
      return 'nadwaga';
    }
    if (30.0 <= this.calculateBmi() && this.calculateBmi() <= 34.99) {
      return 'otyłość 1 stopnia';
    }
    if (35.0 <= this.calculateBmi() && this.calculateBmi() <= 39.99) {
      return 'otyłość 2 stopnia';
    }
    if (40 < this.calculateBmi()) {
      return 'otyłość 3 stopnia (olbrzymia)';
    }
  }
}
