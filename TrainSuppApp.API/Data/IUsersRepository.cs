using System.Collections.Generic;
using System.Threading.Tasks;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public interface IUsersRepository
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<User> UpdateUser(User user);
    }
}