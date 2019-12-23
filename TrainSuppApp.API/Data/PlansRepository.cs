using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public class PlansRepository : IPlansRepository
    {
       public readonly DataContext _context;
        public PlansRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Plan> CreatePlan(Plan plan)
        {
            await _context.Plans.AddAsync(plan);

            await _context.SaveChangesAsync();

            return plan;
        }

        public async Task<Plan> GetPlan(int id)
        {
            var plan = await _context.Plans.FirstOrDefaultAsync(p => p.Id == id);

            return plan;
        }

        public async Task<Plan> GetUsersPlan(int userId)
        {
            var plan = await _context.Plans.FirstOrDefaultAsync(u => u.UserId == userId);

            return plan;
        }

        public async Task<string> DropPlan(int userId) 
        {
            _context.Remove(await _context.Plans.Where(x => x.UserId.Equals(userId)).FirstOrDefaultAsync());
            int isSaved = await _context.SaveChangesAsync();

            if(isSaved > 0)
                return "Usunięto plan";

            return "Nie usunięto planu";
        }

    }
}