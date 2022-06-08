using Exam.Infrastructure;
using Exam.Models;

namespace Exam.Interfaces;

public interface ICreditCalculator
{
    Task<ApplicationResult> Calculate(UserData userData);
}