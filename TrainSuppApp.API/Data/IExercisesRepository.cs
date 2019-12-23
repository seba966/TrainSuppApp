using System.Collections.Generic;
using System.Threading.Tasks;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public interface IExercisesRepository
    {
        Task<Exercise> AddExercise(Exercise day);
        Task<IEnumerable<Exercise>> GetDaysExercises(int dayId);
    }
}