import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum, Thread } from '../services/data';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  forum: Forum;
  thread: Thread;

  constructor(private forumsService: ForumsService , private route : ActivatedRoute) { }

  ngOnInit() {
    let forum = this.route.snapshot.parent.params['forum_alias'];
    this.route.params.subscribe(p=>{
      this.thread = this.forumsService.thread(forum,p["thread_alias"])
    })
  }
}
