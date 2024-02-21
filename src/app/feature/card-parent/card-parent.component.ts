import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from '../card-list/card-list.component';
import { COURSES } from '../card-list/courses';

@Component({
  selector: 'app-card-parent',
  standalone: true,
  imports: [CommonModule, CardListComponent],
  templateUrl: './card-parent.component.html',
  styleUrls: ['./card-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardParentComponent {

  courseList = COURSES;

}
