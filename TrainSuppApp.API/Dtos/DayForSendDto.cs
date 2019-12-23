using System.Collections.Generic;

namespace TrainSuppApp.API.Dtos
{
    public class DayForSendDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? PlanId { get; set; }
        public List<ExerciseForSendDto> Exercises { get; set; }
    }
}