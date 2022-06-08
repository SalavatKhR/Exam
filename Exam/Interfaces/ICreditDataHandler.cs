using Exam.Models;
using Exam.Models.Enums;

namespace Exam.Interfaces;

public interface ICreditDataHandler
{
    int CalculateEmployment(UserData userData);
    
    int CalculateTarget(UserData userData);
    
    int CalculateGuarantee(UserData userData);
    
    int CalculateCreditHistory(UserData userData);
    
    Task<int> CheckCrimeRecords(Passport passport);
    
    int CalculateAmount(UserData userData);
    
    int CalculateAge(UserData userData);
}