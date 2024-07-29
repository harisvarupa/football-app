using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.ClubDtos;
using api.Models;

namespace api.Mappers
{
    public static class ClubMapper
    {
        public static ClubDto ToClubDto(this Club clubModel)
        {
            return new ClubDto
            {
                Name = clubModel.Name,
                ImagePath = clubModel.ImagePath,
            };
        }
        public static Club ToClubFromClubDto(this ClubDto clubDto)
        {
            return new Club
            {
                Name = clubDto.Name,
                ImagePath = clubDto.ImagePath,
            };
        }
    }
}