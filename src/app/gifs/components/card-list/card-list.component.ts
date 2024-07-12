import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';


@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [
    CommonModule,
    // HomePageComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {

  @Input() public gifs: Gif[] = [];

}
