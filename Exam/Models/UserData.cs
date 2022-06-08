using Exam.Models.Enums;

namespace Exam.Models;

public class UserData
{
    public string surname { get; set; }
    public string name { get; set; }
    public string patronymic { get; set; }
    public string passport_series { get; set; }
    public string passport_id { get; set; }
    public string issued_by { get; set; }
    public string registration { get; set; }
    public int age { get; set; }
    public int credit_amount { get; set; }
    public Employment employment { get; set; }
    public Purpose purpose { get; set; }
    public Deposit deposit { get; set; }
}