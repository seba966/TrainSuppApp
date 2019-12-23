using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TrainSuppApp.API.Data;
using TrainSuppApp.API.Dtos;
using TrainSuppApp.API.Models;
namespace TrainSuppApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private readonly IExercisesRepository _repo;
        private readonly IMapper _mapper;

        public ExercisesController(IExercisesRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddExercise(ExerciseForAddDto exerciseForAddDto)
        {
            var exerciseToAdd = new Exercise
            {
                Name = exerciseForAddDto.Name,
                Sets = exerciseForAddDto.Sets,
                DayId = exerciseForAddDto.DayId
            };

            var addedExercise = await _repo.AddExercise(exerciseToAdd);

            return StatusCode(201);
        }

        [HttpGet("all/day/{dayId}")]
        public async Task<IActionResult> GetDaysExercises(int dayId)
        {
            var exercises = await _repo.GetDaysExercises(dayId);

            var exercisesToReturn = _mapper.Map<IEnumerable<ExerciseForSendDto>>(exercises);

            return Ok(exercisesToReturn);
        }
    }
}