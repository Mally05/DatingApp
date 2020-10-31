using API.Data.Services;
using API.Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
         string CreateToken(AppUser user);
    }
}