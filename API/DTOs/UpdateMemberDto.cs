using System.Collections.Generic;

namespace API.DTOs
{
    public class UpdateMemberDto
    {
        public string Introduction { get; set; }
        public string Country { get; set; }
        public string Interests { get; set; }
        public string LookingFor { get; set; }
        public string City { get; set; }
        
        public ICollection<PhotoDto> Photos { get; set; }
    }
}