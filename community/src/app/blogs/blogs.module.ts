import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

import { BlogsService } from './services/blogs.service';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: ':post_id', component: BlogComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule { }
