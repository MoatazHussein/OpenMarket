import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-category-summary2',
  templateUrl: './category-summary2.component.html',
  styleUrl: './category-summary2.component.css'
})
export class CategorySummary2Component {
  category: Category = {id:1, name: 'وظائف شاغرة',imageUrl: ''};
  jobs: Job[] = [
    new Job(5,'معلم حلويات','شيف حلويات وكنافة وأصناف مختلفة سخنه وبارده قشطه وجبنه'),
    new Job(5,'معلم حلويات','شيف حلويات وكنافة وأصناف مختلفة سخنه وبارده قشطه وجبنه'),
    new Job(5,'معلم حلويات','شيف حلويات وكنافة وأصناف مختلفة سخنه وبارده قشطه وجبنه'),
    new Job(5,'معلم حلويات','شيف حلويات وكنافة وأصناف مختلفة سخنه وبارده قشطه وجبنه')
  ];

  shouldExclude(index: number): boolean {
    const jobsCount = this.jobs.length;
    if (jobsCount % 2 === 1) { //odd
      return index != jobsCount - 1;
    } else { //even
      return index != jobsCount - 1 && index != jobsCount - 2;
    }
  }
}
