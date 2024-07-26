import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
        transition('* => *', [
          query(':enter', style({opacity: 0}), {optional: true}),
          query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: 0.5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
          ]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: 0.5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
            ]))
          ]), {optional: true})
        ])
      ]
    )
  ]
})

export class HomeComponent implements OnInit {

  itemCount: number = 0;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals: string[] = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];

  constructor() {
  }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    if (this.goalText.trim()) {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
    }
  }

  removeItem(i: number) {
    this.goals.splice(i, 1);
  }
}
