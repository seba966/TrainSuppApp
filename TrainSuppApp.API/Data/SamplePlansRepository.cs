using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public class SamplePlansRepository : ISamplePlansRepository
    {
        public readonly DataContext _context;
        public SamplePlansRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SamplePlan>> GetSamplePlans(string goal)
        {
            var samplePlans = await _context.SamplePlans.Include(d => d.Days)
                .ThenInclude(e => e.Exercises).Where(s => s.Goal.Equals(goal))
                .ToListAsync();

            return samplePlans;
        }

        public async Task<SamplePlan> GetSamplePlan(int id) {
            var samplePlan = await _context.SamplePlans.Include(d => d.Days)
                .ThenInclude(e => e.Exercises).FirstOrDefaultAsync(s => s.Id == id); // powinno byc single or default

            return samplePlan;
        }
    }
}