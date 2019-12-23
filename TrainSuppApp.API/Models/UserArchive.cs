using System;

namespace TrainSuppApp.API.Models
{
    public class UserArchive
    {
        public int Id { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public int Age { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public double PAL { get; set; }
        public double BMI { get; set; }
        public string BMIlevel { get; set; }
        public double BMR { get; set; }
        public double TEE { get; set; }
        
        public User User { get; set; }
        public int UserId { get; set; }
    }
}