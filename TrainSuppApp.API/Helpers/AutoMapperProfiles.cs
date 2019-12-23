using System.Linq;
using AutoMapper;
using TrainSuppApp.API.Dtos;
using TrainSuppApp.API.Helpers;
using TrainSuppApp.API.Models;


namespace TrainingSuppApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserParameters>()
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<Plan, PlanForCreateDto>();
            CreateMap<Plan, PlanForSendDto>();
            CreateMap<Day, DayForSendDto>();
            CreateMap<Exercise, ExerciseForSendDto>();
            CreateMap<SamplePlan, SamplePlansForSendDto>();
            CreateMap<UserArchive, UserArchiveForSendDto>();
        }
    }
}