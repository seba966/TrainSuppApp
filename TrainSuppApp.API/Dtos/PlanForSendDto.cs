using System.Collections.Generic;

namespace TrainSuppApp.API.Dtos
{
    public class PlanForSendDto
    {
        public int Id { get; set; }
        public string Goal { get; set; }
        public int UserId { get; set; }
        public List<DayForSendDto> Days { get; set; }
        public int? SamplePlanId { get; set; }
    }
}