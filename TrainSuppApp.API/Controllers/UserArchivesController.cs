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
    public class UserArchivesController : ControllerBase
    {
        private readonly IUserArchivesRepository _repo;
        private readonly IMapper _mapper;

        public UserArchivesController(IUserArchivesRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpPost("add")]
        public async Task<IActionResult> CreateUserArchive(UserArchiveForAddDto userArchiveForAddDto)
        {
            var userArchiveToCreate = new UserArchive
            {
                // Updated = DateTime.Today,
                Age = userArchiveForAddDto.Age,
                Height = userArchiveForAddDto.Height,
                Weight = userArchiveForAddDto.Weight,
                PAL = userArchiveForAddDto.PAL,
                BMI = userArchiveForAddDto.BMI,
                BMIlevel = userArchiveForAddDto.BMIlevel,
                BMR = userArchiveForAddDto.BMR,
                TEE = userArchiveForAddDto.TEE,
                UserId = userArchiveForAddDto.UserId
            };

            var createdUserArchive = await _repo.CreateUserArchive(userArchiveToCreate);

            return StatusCode(201);
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserArchives(int userId) {
            var userArchives = await _repo.GetUserArchives(userId);

            return Ok(userArchives);
        }


    }
}