import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { MemberListComponent } from '../member-list/member-list.component';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})



export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(private memberServive: MembersService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addLike(member: Member){
    this.memberServive.addLike(member.userName).subscribe(() =>{
      this.toastr.success('You have liked ' + member.knownAs);
    })
    
  }

}
