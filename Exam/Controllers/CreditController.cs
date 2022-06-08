using Exam.Models;
using Microsoft.AspNetCore.Mvc;
using Exam.Infrastructure;
using Exam.Interfaces;

namespace Exam.Controllers;

[ApiController]
[Route("api/credit")]
public class CreditController : ControllerBase
{
    private readonly ICreditCalculator _creditCalculator;

    public CreditController(ICreditCalculator creditCalculator)
    {
        _creditCalculator = creditCalculator;
    }

    [HttpPost]
    public IActionResult Post(UserData userData)
    {
        var res = _creditCalculator.Calculate(userData).Result;
        if(res.IsApproved)
            return Ok($"Вам одобрен кредит под {res.Percent}%");
        return Ok("Кредит не одобрен");
    }
}