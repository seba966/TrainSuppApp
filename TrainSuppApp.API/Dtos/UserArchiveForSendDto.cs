namespace TrainSuppApp.API.Dtos
{
    public class UserArchiveForSendDto
    {
        public int Id { get; set; }
        public int Age { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public double PAL { get; set; }
        public double BMI { get; set; }
        public string BMILevel { get; set; }
        public double BMR { get; set; }
        public double TEE { get; set; }
        public int UserId { get; set; }
    }
}