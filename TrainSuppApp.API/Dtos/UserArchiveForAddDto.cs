using System;

namespace TrainSuppApp.API.Dtos
{
    public class UserArchiveForAddDto
    {
        public int Age { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public double PAL { get; set; }
        public double BMI { get; set; }
        public string BMIlevel { get; set; }
        public double BMR { get; set; }
        public double TEE { get; set; }
        
        public int UserId { get; set; }
    }
}