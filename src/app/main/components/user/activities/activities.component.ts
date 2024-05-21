import { ProviderService } from 'src/app/main/service/provider.service';
import { Component } from '@angular/core';
import { Activities } from 'src/app/main/api/activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  activities!: Activities;
  dates!: Array<string>;

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.logs().subscribe({
      next: (res: Activities) => {
        this.activities = res;
        this.dates = Object.keys(this.activities);
        console.log(this.dates)
      }
    });
  }
}
