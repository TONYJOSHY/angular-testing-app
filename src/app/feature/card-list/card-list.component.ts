import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Course } from 'src/app/shared/models/course.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

  @Input() courses: Course[] = []

  editCourse(course: Course){

  }

}
