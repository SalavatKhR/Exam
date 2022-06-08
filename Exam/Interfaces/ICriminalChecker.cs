using Exam.Models;

namespace Exam.Interfaces;

public interface ICriminalCheker
{
    Task<bool> CheckAsync(Passport passport);
}