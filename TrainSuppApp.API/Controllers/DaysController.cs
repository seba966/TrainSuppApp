using System;
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
    public class DaysController : ControllerBase
    {
        private readonly IDaysRepository _repo;
        private readonly IMapper _mapper;

        public DaysController(IDaysRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddDay(DayForAddDto dayForAddDto)
        {
            var dayToAdd = new Day
            {
                Name = dayForAddDto.Name,
                PlanId = dayForAddDto.PlanId
            };

            var addedDay = await _repo.AddDay(dayToAdd);

            return StatusCode(201);
        }

        [HttpGet("plan/{planId}")]
        public async Task<IActionResult> GetPlansDay(int planId)
        {
            var day = await _repo.GetPlansDay(planId);

            var plansDayToReturn = new DayForSendDto
            {
                Id = day.Id,
                Name = day.Name,
                PlanId = day.PlanId 
            };

            return Ok(plansDayToReturn);
        }

        [HttpGet("all/plan/{planId}")]
        public async Task<IActionResult> GetPlansDays(int planId)
        {
            var days = await _repo.GetPlansDays(planId);

            var plansDaysToReturn = _mapper.Map<IEnumerable<DayForSendDto>>(days);

            return Ok(plansDaysToReturn);
        }
    }
}