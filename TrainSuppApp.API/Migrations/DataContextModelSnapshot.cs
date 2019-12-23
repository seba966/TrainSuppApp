﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TrainSuppApp.API.Data;

namespace TrainSuppApp.API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.0-rtm-30799");

            modelBuilder.Entity("TrainSuppApp.API.Models.Day", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int?>("PlanId");

                    b.Property<int?>("SamplePlanId");

                    b.HasKey("Id");

                    b.HasIndex("PlanId");

                    b.HasIndex("SamplePlanId");

                    b.ToTable("Days");
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.Exercise", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("DayId");

                    b.Property<string>("Name");

                    b.Property<string>("Sets");

                    b.HasKey("Id");

                    b.HasIndex("DayId");

                    b.ToTable("Exercises");
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.Plan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Goal");

                    b.Property<int?>("SamplePlanId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("SamplePlanId");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Plans");
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.SamplePlan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Goal");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("SamplePlans");
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Gender");

                    b.Property<double>("Height");

                    b.Property<double>("PAL");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.Property<double>("Weight");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.UserArchive", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Age");

                    b.Property<double>("BMI");

                    b.Property<string>("BMIlevel");

                    b.Property<double>("BMR");

                    b.Property<DateTime>("Created");

                    b.Property<double>("Height");

                    b.Property<double>("PAL");

                    b.Property<double>("TEE");

                    b.Property<int>("UserId");

                    b.Property<double>("Weight");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserArchives");
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.Day", b =>
                {
                    b.HasOne("TrainSuppApp.API.Models.Plan", "Plan")
                        .WithMany("Days")
                        .HasForeignKey("PlanId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TrainSuppApp.API.Models.SamplePlan", "SamplePlan")
                        .WithMany("Days")
                        .HasForeignKey("SamplePlanId");
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.Exercise", b =>
                {
                    b.HasOne("TrainSuppApp.API.Models.Day", "Day")
                        .WithMany("Exercises")
                        .HasForeignKey("DayId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.Plan", b =>
                {
                    b.HasOne("TrainSuppApp.API.Models.SamplePlan", "SamplePlan")
                        .WithMany("Plans")
                        .HasForeignKey("SamplePlanId");

                    b.HasOne("TrainSuppApp.API.Models.User", "User")
                        .WithOne("Plan")
                        .HasForeignKey("TrainSuppApp.API.Models.Plan", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TrainSuppApp.API.Models.UserArchive", b =>
                {
                    b.HasOne("TrainSuppApp.API.Models.User", "User")
                        .WithMany("UserArchives")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
