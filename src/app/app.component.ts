import {Component, OnInit} from '@angular/core';
import {StoryblokService} from './storyblok.service';
import {Components} from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  story = {content: null, name: ''};
  components = Components;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'], () => {
      location.reload(true);
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', {version: 'published'})
      .then(data => {
        debugger;
        this.story = data.story;
      });
  }
}
