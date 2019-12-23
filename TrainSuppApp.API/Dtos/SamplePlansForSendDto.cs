using System.Collections.Generic;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Dtos
{
    public class SamplePlansForSendDto
    {
        public int Id { get; set; }
        public string Goal { get; set; }
        public string Name { get; set; }
        public ICollection<Day> Days { get; set; }
        public ICollection<Plan> Plans { get; set; } 
    }
}