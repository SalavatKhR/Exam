using System.Net;
using Exam.Infrastructure.Services;
using Exam.Interfaces;
using Exam.Models;

namespace Exam.Infrastructure;

public class CreditCalculator: ICreditCalculator
{
    private readonly ICreditDataHandler _creditDataHandler;
    
    public CreditCalculator(ICreditDataHandler creditDataHandler)
    {
        _creditDataHandler = creditDataHandler;
    }

    public Task<ApplicationResult> Calculate(UserData userData)
    {
        var res = 0;
        res += _creditDataHandler.CalculateEmployment(userData);
        res += _creditDataHandler.CalculateTarget(userData);
        res += _creditDataHandler.CalculateGuarantee(userData);
        res += _creditDataHandler.CalculateCreditHistory(userData);
        res += _creditDataHandler.CheckCrimeRecords(
            new Passport(userData.passport_series, userData.passport_id)
            ).Result;
        res += _creditDataHandler.CalculateAmount(userData);
        res += _creditDataHandler.CalculateAge(userData);
        if (res < 80)
            return Task.FromResult(new ApplicationResult(false, 0));
        var percent = res switch
        {
            < 84 => 30,
            < 88 => 26,
            < 92 => 22,
            < 96 => 19,
            < 100 => 19,
            _ => 12.5
        };
        return Task.FromResult(new ApplicationResult(true, percent));

    }
    
}