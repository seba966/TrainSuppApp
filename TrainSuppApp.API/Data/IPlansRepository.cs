using System.Threading.Tasks;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public interface IPlansRepository
    {
        Task<Plan> CreatePlan(Plan plan);
        Task<Plan> GetPlan(int id);
        Task<Plan> GetUsersPlan(int userId);
        Task<string> DropPlan(int userId);
    }
}