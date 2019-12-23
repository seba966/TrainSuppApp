using System.Collections.Generic;
using System.Threading.Tasks;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public interface IUserArchivesRepository
    {
        Task<UserArchive> CreateUserArchive(UserArchive userArchive);
        Task<IEnumerable<UserArchive>> GetUserArchives(int userId);
    }
}