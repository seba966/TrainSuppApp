using System.Collections.Generic;
using System.Threading.Tasks;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public interface ISamplePlansRepository
    {
        Task<IEnumerable<SamplePlan>> GetSamplePlans(string goal);
        Task<SamplePlan> GetSamplePlan(int id);
    }
}