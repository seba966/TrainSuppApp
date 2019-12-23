using System.Collections;
using System.Collections.Generic;

namespace TrainSuppApp.API.Models
{
    public class Exercise
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Sets { get; set; }
        public Day Day { get; set; }
        public int DayId { get; set; }
    }
}