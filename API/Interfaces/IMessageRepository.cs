using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message);
        void DeleteMessage(Message message);

        Task<Message> GetMessage(int id);
        Task<PagedList<MessageDto>> GetMessageForUser();
        Task<IEnumerable<MessageDto>> GetMessageThread(int currentUserId, int recipientUserId);
        Task<bool> SaveAllAsync();
        
    }
}