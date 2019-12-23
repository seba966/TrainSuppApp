using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public class DaysRepository : IDaysRepository
    {
        public readonly DataContext _context;
        public DaysRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Day> AddDay(Day Day)
        {
            await _context.Days.AddAsync(Day);

            await _context.SaveChangesAsync();

            return Day;
        }

        public async Task<Day> GetPlansDay(int planId)
        {
            var day = await _context.Days.LastOrDefaultAsync(d => d.PlanId == planId);

            return day;
        }

        public async Task<IEnumerable<Day>> GetPlansDays(int planId)
        {
            var days = await _context.Days.Include(e => e.Exercises).Where(d => d.PlanId.Equals(planId)).ToListAsync();

            return days;
        }
    }
}