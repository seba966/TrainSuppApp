import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { User } from 'src/app/_dtos/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserArchive } from 'src/app/_dtos/userArchive';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private userService: UserService, private auth: AuthService, private datePipe: DatePipe) {}

  userArchives: UserArchive[];
  selectedArchive: UserArchive;
  selectedArchiveId: number;
  arraysAreEmpty = true;
  date: Date;

  archiveIds: string[] = [];
  archiveWeights: number[] = [];

  public chartType = 'line';

  public chartDatasets: Array<any> = [
    { data: this.archiveWeights, label: 'Masa ciała' }
  ];

  public chartLabels: Array<any> = this.archiveIds;

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  // public chartDatasets: Array<any> = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Masa ciała' }
  // ];

  // public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(0, 137, 132, .2)',
  //     borderColor: 'rgba(0, 10, 130, .7)',
  //     borderWidth: 2,
  //   }
  // ];

  public chartOptions: any = {
    responsive: true
  };

  select() {
    this.selectedArchive = this.userArchives.find(x => x.id === this.selectedArchiveId);
  }

  ngOnInit() {
    this.userService.getUserArchives(this.auth.decodedToken.nameid).subscribe((userArchives: UserArchive[]) => {
      this.userArchives = userArchives;
      this.userArchives.forEach(element => {
        this.archiveIds.push(this.datePipe.transform(element.created, 'yyyy-MM-dd'));
        this.archiveWeights.push(element.weight);
      });
      this.arraysAreEmpty = false;
      // this.selectedArchive = this.userArchives.
    });

  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}


