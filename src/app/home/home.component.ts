import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: any;
  images: any;
  messageForm: FormGroup;
  category: string;

  constructor(private formBuilder: FormBuilder, private apiCall: ApiService) {
    this.messageForm = this.formBuilder.group({
      location: ['', Validators.required]
    })
  }
  ngOnInit() {
    this.apiCall.getEvents('miami').subscribe(data => {
      this.events = data[0].events.event
      console.log(this.events[0]);
    })

    this.apiCall.getImages('miami').subscribe(data => {
      this.images = data
      this.images = this.images.results
    })
  }

  handleChange(location) {
    this.apiCall.getEvents(location).subscribe(data => {
      this.events = data[0].events.event
    })

    this.apiCall.getImages('miami').subscribe(data => {
      this.images = data
      this.images = this.images.results
    })
  }

}
