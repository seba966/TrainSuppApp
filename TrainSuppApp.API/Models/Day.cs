using System.Collections;
using System.Collections.Generic;

namespace TrainSuppApp.API.Models
{
    public class Day
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Plan Plan { get; set; }
        public int? PlanId { get; set; }
        public ICollection<Exercise> Exercises { get; set; }
        public SamplePlan SamplePlan { get; set; }
        public int? SamplePlanId { get; set; }
    }
}