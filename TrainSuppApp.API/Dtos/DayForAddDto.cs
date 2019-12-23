using System.ComponentModel.DataAnnotations;

namespace TrainSuppApp.API.Dtos
{
    public class DayForAddDto
    {
        [Required]
        public string Name { get; set; }
        public int PlanId { get; set; }
    }
}