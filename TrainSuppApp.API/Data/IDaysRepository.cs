using System.Collections.Generic;
using System.Threading.Tasks;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public interface IDaysRepository
    {
         Task<Day> AddDay(Day day);
         Task<Day> GetPlansDay(int planId);
         Task<IEnumerable<Day>> GetPlansDays(int planId);
    }
}