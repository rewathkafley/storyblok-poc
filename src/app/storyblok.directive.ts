import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appStoryblok]'
})
export class StoryblokDirective implements OnInit{

  @Input() appStoryblok: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    if (typeof this.appStoryblok === 'undefined') {
      return;
    }

    const options = JSON.parse(this.appStoryblok.replace('<!--#storyblok#', '').replace('-->', ''));

    this.el.nativeElement.setAttribute('data-blok-c', JSON.stringify(options));
    this.el.nativeElement.setAttribute('data-blok-uid', options.id + '-' + options.uid);
  }

}
