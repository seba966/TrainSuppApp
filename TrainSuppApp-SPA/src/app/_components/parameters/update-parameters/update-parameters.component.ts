import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/_dtos/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserBuforService } from 'src/app/_services/user-bufor.service';
import { UserArchive } from 'src/app/_dtos/userArchive';
import { UserArchiveForSend } from 'src/app/_dtos/userArchiveForSend';

@Component({
  selector: 'app-update-parameters',
  templateUrl: './update-parameters.component.html',
  styleUrls: ['./update-parameters.component.css']
})
export class UpdateParametersComponent implements OnInit {
  @Input() currentUser: User;
  @Input() currentUserArchiveForSend: UserArchiveForSend;
  @Output() cancelUpdate = new EventEmitter();
  model: any = {};
  model2: any = {};
  constructor(private userService: UserService, private alertify: AlertifyService,
              private userBufor: UserBuforService) {}

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

  ngOnInit() {
    this.model.weight = this.currentUser.weight;
    this.model.height = this.currentUser.height;
    this.model.pal = this.currentUser.pal;
    this.model2 = this.currentUserArchiveForSend;
  }

  update() {
    // model usera przeslij na archiwum
      // putnij model na usera
    this.userService.postUserArchive(this.model2).subscribe(() => {
      this.alertify.success('Przesłano parametry do archiwum');
      this.userService.updateUser(this.currentUser.id, this.model).subscribe(() => {
        this.alertify.success('Pomyślnie zaktualizowano parametry');
        this.currentUser.weight = this.model.weight;
        this.currentUser.height = this.model.height;
        this.currentUser.pal = this.model.pal;
        this.userBufor.setCurrentUser(this.currentUser);
        this.cancelUpdate.emit(false);
      });
    });

  }

  cancel() {
    this.cancelUpdate.emit(false);
  }

}
