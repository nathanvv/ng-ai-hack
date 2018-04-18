import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css']
})
export class PersonalityComponent implements OnInit {
  @Input() personality;
  @Output() clicked = new EventEmitter<Personality>();

  constructor() { }

  ngOnInit() {
  }

}
