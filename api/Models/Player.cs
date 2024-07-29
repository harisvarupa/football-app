using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string ImagePath { get; set; } = string.Empty;
        public bool PremierLeague { get; set; }
        public bool LaLiga { get; set; }
        public bool SerieA { get; set; }
        public bool Bundesliga { get; set; }
        public bool Ligue1 { get; set; }
        public bool ChampionsLeague { get; set; }
        public bool Nation { get; set; }
    }
}