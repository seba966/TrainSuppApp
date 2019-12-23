using System.Collections.Generic;

namespace TrainSuppApp.API.Models
{
    public class SamplePlan
    {
        public int Id { get; set; }
        public string Goal { get; set; }
        public string Name { get; set; }
        public ICollection<Day> Days { get; set; }
        public ICollection<Plan> Plans { get; set; } 
    }
}