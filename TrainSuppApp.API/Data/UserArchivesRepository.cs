using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public class UserArchivesRepository : IUserArchivesRepository   
    {
        public readonly DataContext _context;
        public UserArchivesRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<UserArchive> CreateUserArchive(UserArchive userArchive)
        {
            await _context.UserArchives.AddAsync(userArchive);

            await _context.SaveChangesAsync();

            return userArchive;
        }

        public async Task<IEnumerable<UserArchive>> GetUserArchives(int userId)
        {
            var userArchives = await _context.UserArchives.Where(x => x.UserId.Equals(userId)).ToListAsync();

            return userArchives;
        }
    }
}