import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  data: any = {
    labels: ['value1', 'value12', 'value3', 'value4', 'value5', 'value6', 'value1', 'value12', 'value3', 'value4', 'value5', 'value6'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  }

options: any =  {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}
