using Exam.Models;
using Microsoft.AspNetCore.Mvc;
using Exam.Infrastructure;

namespace Exam.Controllers;

[ApiController]
[Route("api/credit")]
public class CreditController : ControllerBase
{
    [HttpPost]
    public IActionResult Post(UserData userData)
    {
        var res = CreditCalculator.CalculateCredit(userData);
        if (res > 0)
            return Ok($"Вам одобрен кредит под {CreditCalculator.CalculateCredit(userData)}% годовых");
        return Ok("Кредит не одобрен");
    }
}