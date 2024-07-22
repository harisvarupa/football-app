using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/player")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public PlayerController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var players = await _context.Players.ToListAsync();
            var playerDto = players.Select(s => s.ToPlayerDto());
            return Ok(players);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var player = await _context.Players.FindAsync(id);

            if (player == null)
            {
                return NotFound();
            }
            return Ok(player.ToPlayerDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreatePlayerRequestDto playerDto)
        {
            var playerModel = playerDto.ToPlayerFromPlayerDto();
            await _context.Players.AddAsync(playerModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = playerModel.Id }, playerModel);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePlayerRequestDto updateDto)
        {
            var playerModel = await _context.Players.FindAsync(id);

            if (playerModel == null)
            {
                return NotFound();
            }

            playerModel.Name = updateDto.Name;
            playerModel.ImagePath = updateDto.ImagePath;
            playerModel.PremierLeague = updateDto.PremierLeague;
            playerModel.LaLiga = updateDto.LaLiga;
            playerModel.SerieA = updateDto.SerieA;
            playerModel.Bundesliga = updateDto.Bundesliga;
            playerModel.Ligue1 = updateDto.Ligue1;

            await _context.SaveChangesAsync();
            return Ok(playerModel.ToPlayerDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var playerModel = await _context.Players.FindAsync(id);
            if (playerModel == null)
            {
                return NotFound();
            }
            _context.Players.Remove(playerModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}