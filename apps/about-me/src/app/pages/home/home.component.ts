import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WORK_EXPERIENCE } from './constants';

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly WORK_EXPERIENCE = WORK_EXPERIENCE;
}
