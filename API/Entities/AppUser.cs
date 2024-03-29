using System;
using System.Collections;
using System.Collections.Generic;
using API.Extentions;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
        
        public DateTime DateOfBirth { get; set; }
        public DateTime LastActive { get; set; } = DateTime.Now;
        public DateTime Created { get; set; } = DateTime.Now;
        public string KnownAs { get; set; }
        public string Gender { get; set; }
        public string LookingFor { get; set; }
        public string Introduction { get; set; }
        public string Interests { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public ICollection<Photos> Photos { get; set; }
        
        public ICollection<UserLike> LikedUsers { get; set; }
       
        public ICollection<UserLike> LikedByUsers { get; set; }  
        public ICollection<Message> MessagesSent { get; set; }
        public ICollection<Message> MessagesRecieved { get; set; }

    }
}