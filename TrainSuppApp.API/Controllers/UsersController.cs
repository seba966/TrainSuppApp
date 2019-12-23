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
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IUsersRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserParameters>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            var userToReturn = _mapper.Map<UserParameters>(user);

            return Ok(userToReturn);
        }
        
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            var userForUpdate = await _repo.GetUser(id);
            
            userForUpdate.Height = userForUpdateDto.Height;
            userForUpdate.Weight = userForUpdateDto.Weight;
            userForUpdate.PAL = userForUpdateDto.PAL;
            
            var updatedUser = await _repo.UpdateUser(userForUpdate);

            return StatusCode(201);
        }
    }
}