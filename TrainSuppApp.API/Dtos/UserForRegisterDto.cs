using System;
using System.ComponentModel.DataAnnotations;

namespace TrainSuppApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; } 
        [Required]
        [StringLength(15, MinimumLength = 4, ErrorMessage = "Twoje hasło musi mieć od 4 do 15 znaków")]
        public string Password { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public double Height { get; set; }
        [Required]
        public double Weight { get; set; }
        [Required]
        public double PAL { get; set; }
    }
}