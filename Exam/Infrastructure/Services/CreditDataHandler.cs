using Exam.Interfaces;
using Exam.Models;
using Exam.Models.Enums;

namespace Exam.Infrastructure.Services;

public class CreditDataHandler: ICreditDataHandler
{
    private readonly ICriminalCheker _criminalChecker;

    public CreditDataHandler(ICriminalCheker criminalChecker)
    {
        _criminalChecker = criminalChecker;
    }

    public int CalculateEmployment(UserData userData)
    {
        var employment = (int)userData.employment;
        return employment switch
        {
            0 => 14,
            1 => 12,
            2 => 8,
            3 => userData.age < 70 ? 5 : 0,
            4 => 0,
            _ => -1000
        };
    }
    
    public int CalculateTarget(UserData userData)
    {
        var purpose = (int)userData.purpose;
        return purpose switch
        {
            0 => 14,
            1 => 8,
            2 => 12,
            _ => -1000
        };
    }
    
    public int CalculateGuarantee(UserData userData)
    {
        var deposit = (int)userData.deposit;
        return deposit switch
        {
            0 => 14,
            1 => 8,
            _ => -1000
        };
    }
    
    public int CalculateCreditHistory(UserData userData)
    {
        return 14;
    }

    public async Task<int> CheckCrimeRecords(Passport passport)
    {
        var checkCrime = await _criminalChecker.CheckAsync(passport);
        return checkCrime ? 0 : 14;
    }
    
    public int CalculateAmount(UserData userData)
    {
        var amount = userData.credit_amount;
        return amount switch
        {
            < 1000000 => 12,
            < 5000000 => 14,
            < 10000000 => 8,
            _ => 0
        };
    }
    
    public int CalculateAge(UserData userData)
    {
        var age = userData.age;
        var amount = userData.credit_amount;
        var deposit = userData.deposit;
        switch (age)
        {
            case < 21:
                return -1000;
            case < 29:
                return amount switch
                {
                    < 1000000 => 12,
                    < 3000000 => 9,
                    _ => 0
                };
            case < 59:
                return 14;
            case < 72 when deposit != Deposit.None:
                return 8;
            case < 72:
                return 0;
            default:
                return -1000;
        }
    }
}