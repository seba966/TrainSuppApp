namespace TrainSuppApp.API.Dtos
{
    public class UserParameters
    {
        public int Id { get; set; }
        public string Username { get; set; }  
        public int? PlanId { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public double PAL { get; set; }
        
        // public double BMI { get; set; }
        // public double BMR { get; set; }
        // public double TEE { get; set; }

    }
}