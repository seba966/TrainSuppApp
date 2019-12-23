using System.ComponentModel.DataAnnotations;

namespace TrainSuppApp.API.Dtos
{
    public class ExerciseForAddDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Sets { get; set; }
        public int DayId { get; set; }
    }
}