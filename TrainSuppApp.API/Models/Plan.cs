using System.Collections;
using System.Collections.Generic;

namespace TrainSuppApp.API.Models
{
    public class Plan
    {
        public int Id { get; set; }
        public string Goal { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public ICollection<Day> Days { get; set; }
        public SamplePlan SamplePlan { get; set; }
        public int? SamplePlanId { get; set; }
    }
}