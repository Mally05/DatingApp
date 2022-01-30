import { Component, OnInit } from '@angular/core';
import { LikesParams } from '../_models/likesParams';
import { Member } from '../_models/member';
import { PaginatedResults, Pagination } from '../_models/pagination';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  predicate = 'liked';
  members: Partial<Member[]>;
  likesParams: LikesParams;
  pagination: Pagination;
  pageNumber = 1;
  pageSize =5;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes(){
    this.memberService.getLikes(this.predicate,this.pageNumber,this.pageSize).subscribe(response =>{
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  pageChanged(event:any){
    this.pageNumber = event.page;
    this.loadLikes();
  }
}
