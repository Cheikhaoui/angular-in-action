import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, Route } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum } from '../services/data';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum: Forum;

  constructor(private forumsService: ForumsService , private activeRoute : ActivatedRoute , private routes : Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(param=>{
      this.forum = this.forumsService.forum(param['forum_alias'])
      if(!this.forum) this.routes.navigate(['/not-found'])
    })
  }
}
