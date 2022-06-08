using Exam.Interfaces;
using Exam.Models;

namespace Exam.Infrastructure;

public class CriminalCheker: ICriminalCheker
{
    private readonly List<Passport> _criminalRecords = new()
    {
        new Passport(1111, 111111),
        new Passport(2222, 222222),
        new Passport(3333, 333333),
        new Passport(4444, 444444),
        new Passport(5555, 5555555)
    };

    public Task<bool> CheckAsync(Passport clientPassport)
    {
        var clientCriminalRecords = _criminalRecords.FirstOrDefault(p => p == clientPassport);
        return Task.FromResult(clientCriminalRecords != null);
    }
}