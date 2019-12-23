using Microsoft.EntityFrameworkCore;
using TrainSuppApp.API.Models;

namespace TrainSuppApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<User>()
            //     .HasOne<Plan>(u => u.Plan)
            //     .WithOne(p => p.User)
            //     .HasForeignKey<Plan>(u => u.UserId)
            //     .OnDelete(DeleteBehavior.SetNull);
            
            modelBuilder.Entity<User>()
                .HasMany<UserArchive>(u => u.UserArchives)
                .WithOne(us => us.User)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Plan>()
                .HasMany<Day>(p => p.Days)
                .WithOne(d => d.Plan)
                .OnDelete(DeleteBehavior.Cascade);

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Day> Days { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<SamplePlan> SamplePlans { get; set; }
        public DbSet<UserArchive> UserArchives { get; set; }
    }


    
}