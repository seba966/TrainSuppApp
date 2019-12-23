import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  model2: any = {};

  genders = ['kobieta', 'mężczyzna'];
  // pals = [1.2, 1.4, 1.7, 2, 2.4];

  pals: any[] = [{
    text: '1.2 - Brak aktywności fizycznej', value: 1.2
  }, {
    text: '1.4 - Niska aktywność fizyczna', value: 1.4
  }, {
    text: '1.7 - Umiarkowana aktywność fizyczna', value: 1.7
  }, {
    text: '2.0 - Wysoka aktywność fizyczna', value: 2
  }, {
    text: '2.4 - Bardzo wysoka aktywność fizyczna', value: 2.4
  }];




  constructor(private authService: AuthService, private alertify: AlertifyService, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Zarejestrowano pomyślnie');
      this.cancel();
      // this.addFirstArchive();
    }, error => {
      this.alertify.error(error);
    });
  }

  addFirstArchive() {
    this.model2 = this.model;
    this.model2.bmi = this.calculateBmi();
    this.model2.bmiLevel = this.bmiRating();
    this.model2.bmr = this.calculateBmr();
    this.model2.tee = this.calculateTee();
    this.userService.postUserArchive(this.model2).subscribe(() => {
      this.cancel();
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  test() {
    console.log(this.model.gender);
  }

  calculateBmi(): number {
    return Math.round(this.model2.bmi = this.model.weight / (this.model.height * this.model.height) * 100) / 100;
  }

  calculateTee(): number {
    return Math.round(this.model2.tee = this.model.pal * this.calculateBmr());
  }

  calculateBmr(): number {
    if (this.model.gender === 'mężczyzna') {
      return Math.round(this.model2.bmr = (9.99 * this.model.weight) + (625 * this.model.height) - (4.92 * this.model.age) + 5);
    }
    if (this.model.gender === 'kobieta') {
      return Math.round(this.model2.bmr = (9.99 * this.model.weight) + (625 * this.model.height) - (4.92 * this.model.age) - 161);
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
