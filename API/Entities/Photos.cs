using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]
    public class Photos
    {
        public int Id { get; set; } 
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        // Here I fully define the relationship between AppUser and Photos. This will not allow the 
        // AppUserId to be set to Null.
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
        
        
        
    }
}