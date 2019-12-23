namespace TrainSuppApp.API.Dtos
{
    public class ExerciseForSendDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Sets { get; set; }
        public int TrainingDayId { get; set; }
    }
}