using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Models;

namespace api.Mappers
{
    public static class PlayerMappers
    {
        public static PlayerDto ToPlayerDto(this Player playerModel)
        {
            return new PlayerDto
            {
                Id = playerModel.Id,
                Name = playerModel.Name,
                ImagePath = playerModel.ImagePath,
                PremierLeague = playerModel.PremierLeague,
                LaLiga = playerModel.LaLiga,
                SerieA = playerModel.SerieA,
                Bundesliga = playerModel.Bundesliga,
                Ligue1 = playerModel.Ligue1,
                ChampionsLeague = playerModel.ChampionsLeague,
                Nation = playerModel.Nation,
            };
        }
        public static Player ToPlayerFromPlayerDto(this CreatePlayerRequestDto playerDto)
        {
            return new Player
            {
                Name = playerDto.Name,
                ImagePath = playerDto.ImagePath,
                PremierLeague = playerDto.PremierLeague,
                LaLiga = playerDto.LaLiga,
                SerieA = playerDto.SerieA,
                Bundesliga = playerDto.Bundesliga,
                Ligue1 = playerDto.Ligue1,
                ChampionsLeague = playerDto.ChampionsLeague,
                Nation = playerDto.Nation,
            };
        }
    }
}