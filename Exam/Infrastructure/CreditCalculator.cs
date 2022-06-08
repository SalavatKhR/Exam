using Exam.Models;
using Exam.Models.Enums;

namespace Exam.Infrastructure;

public class CreditCalculator
{
    public static double CalculateCredit(UserData userData)
    {
        var creditRes = 0;
        creditRes += CalculateEmployment(userData);
        creditRes += CalculateTarget(userData);
        creditRes += CalculateGuarantee(userData);
        creditRes += CalculateCreditHistory(userData);
        creditRes += CheckCrimeRecords(userData);
        creditRes += CalculateAmount(userData);
        creditRes += CalculateAge(userData);
        return creditRes switch
        {
            80 => 30,
            84 => 26,
            88 => 22,
            92 => 19,
            96 => 15,
            100 => 12.5,
            _ => 0
        };
    }

    private static int CalculateEmployment(UserData userData)
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
    
    private static int CalculateTarget(UserData userData)
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
    
    private static int CalculateGuarantee(UserData userData)
    {
        var deposit = (int)userData.deposit;
        return deposit switch
        {
            0 => 14,
            1 => 8,
            _ => -1000
        };
    }
    
    private static int CalculateCreditHistory(UserData userData)
    {
        return 14;
    }

    private static int CheckCrimeRecords(UserData userData)
    {
        return 14;
    }
    
    private static int CalculateAmount(UserData userData)
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
    
    private static int CalculateAge(UserData userData)
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