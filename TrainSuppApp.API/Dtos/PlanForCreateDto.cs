using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TrainSuppApp.API.Dtos
{
    public class PlanForCreateDto
    {
        [Required]
        public string Goal { get; set; }
        public int UserId { get; set; }
        public int? SamplePlanId { get; set; }
    }
}