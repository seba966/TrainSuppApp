using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public class ExercisesRepository : IExercisesRepository
    {
        public readonly DataContext _context;
        public ExercisesRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Exercise> AddExercise(Exercise exercise)
        {
            await _context.Exercises.AddAsync(exercise);

            await _context.SaveChangesAsync();

            return exercise;
        }

        public async Task<IEnumerable<Exercise>> GetDaysExercises(int dayId)
        {
            var exercises = await _context.Exercises.Where(e => e.DayId.Equals(dayId)).ToListAsync();

            return exercises;
        }   
    }
}