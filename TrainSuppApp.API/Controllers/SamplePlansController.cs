using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TrainSuppApp.API.Data;
using TrainSuppApp.API.Dtos;

namespace TrainSuppApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SamplePlansController : ControllerBase
    {
        private readonly ISamplePlansRepository _repo;

        private readonly IMapper _mapper;

        public SamplePlansController(ISamplePlansRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet("goal/{goal}")]
        public async Task<IActionResult> GetSamplePlans(string goal)
        {
            var samplePlans = await _repo.GetSamplePlans(goal);

            var samplePlansToReturn = _mapper.Map<IEnumerable<SamplePlansForSendDto>>(samplePlans);

            return Ok(samplePlans);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSamplePlan(int id)
        {
            var samplePlan = await _repo.GetSamplePlan(id);

            return Ok(samplePlan);
        }

    }
}