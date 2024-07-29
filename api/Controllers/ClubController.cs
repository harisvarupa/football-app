using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.ClubDtos;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/club")]
    [ApiController]
    public class ClubController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public ClubController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var clubs = await _context.Clubs.ToListAsync();
            return Ok(clubs);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var club = await _context.Clubs.FindAsync(id);

            if (club == null)
            {
                return NotFound();
            }
            return Ok(club.ToClubDto());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ClubDto clubDto)
        {
            var clubModel = clubDto.ToClubFromClubDto();
            await _context.Clubs.AddAsync(clubModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = clubModel.Id }, clubModel);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] ClubDto updateDto)
        {
            var clubModel = await _context.Clubs.FindAsync(id);

            if (clubModel == null)
            {
                return NotFound();
            }

            clubModel.Name = updateDto.Name;
            clubModel.ImagePath = updateDto.ImagePath;

            await _context.SaveChangesAsync();
            return Ok(clubModel.ToClubDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var clubModel = await _context.Clubs.FindAsync(id);
            if (clubModel == null)
            {
                return NotFound();
            }
            _context.Clubs.Remove(clubModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}