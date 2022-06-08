namespace Exam.Models;

public class ApplicationResult
{
    public bool IsApproved;
    public double Percent;

    public ApplicationResult(bool isApproved, double percent)
    {
        IsApproved = isApproved;
        Percent = percent;
    }
}