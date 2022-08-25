import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-updater-component',
  templateUrl: './event-updater-component.component.html',
  styleUrls: ['./event-updater-component.component.css']
})
export class EventUpdaterComponentComponent implements OnInit {

  constructor() { }

  phrase = "Sometimes in life... ";

  ngOnInit(): void {
  }

  updatePhrase() {
    this.phrase+= " your situation will keep repeating itself until you lean your lesson.";
  }
}
