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
    public class PlansController : ControllerBase
    {
        private readonly IPlansRepository _repo;
        // private readonly IMapper _mapper;

        public PlansController(IPlansRepository repo, IMapper mapper)
        {
            _repo = repo;
            // _mapper = mapper;
        }

        [HttpPost("add")]
        public async Task<IActionResult> CreatePlan(PlanForCreateDto planForCreateDto)
        {
            var planToCreate = new Plan
            {
                Goal = planForCreateDto.Goal,
                UserId = planForCreateDto.UserId,
                SamplePlanId = planForCreateDto.SamplePlanId
            };

            var createdPlan = await _repo.CreatePlan(planToCreate);

            return StatusCode(201);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPlan(int id)
        {
            var plan = await _repo.GetPlan(id);

            var planToReturn = new PlanForSendDto
            {
                Id = plan.Id,
                Goal = plan.Goal,
                UserId = plan.UserId
            };

            return Ok(planToReturn);
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUsersPlan(int userId)
        {
            var plan = await _repo.GetUsersPlan(userId);

            var usersPlanToReturn = new PlanForSendDto
            {
                Id = plan.Id,
                Goal = plan.Goal,
                UserId = plan.UserId,
                SamplePlanId = plan.SamplePlanId
            };
            
            return Ok(usersPlanToReturn);
        }

        [HttpDelete("drop/{userId}")]
        public async Task<IActionResult> DropPlan(int userId)
        {
            var response = await _repo.DropPlan(userId);

            return Ok(response);
        }

        // [HttpPost("days/add")]
        // public async Task<IActionResult> AddDay(DayForAddDto dayForAddDto)
        // {
        //     var dayToAdd = new TrainingDay
        //     {
        //         Name = dayForAddDto.Name,
        //         PlanId = dayForAddDto.PlanId
        //     };

        //     var addedDay = await _repo.AddDay(dayToAdd);

        //     return StatusCode(201);
        // }

        // [HttpPost("exercises/add")]
        // public async Task<IActionResult> AddExercise(ExerciseForAddDto exerciseForAddDto)
        // {
        //     var exerciseToAdd = new Exercise
        //     {
        //         Name = exerciseForAddDto.Name,
        //         TrainingDayId = exerciseForAddDto.TrainingDayId
        //     };

        //     var addedExercise = await _repo.AddExercise(exerciseToAdd);

        //     return StatusCode(201);
        // }
    }
}