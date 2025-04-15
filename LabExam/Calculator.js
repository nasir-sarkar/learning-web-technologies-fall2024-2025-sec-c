function setupCalculator()
{
    let display = document.getElementById("display");
    let error = document.getElementById("error");

    let btn0 = document.getElementById("btn0");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
    let btn9 = document.getElementById("btn9");

    let add = document.getElementById("add");
    let sub = document.getElementById("sub");
    let mul = document.getElementById("mul");
    let div = document.getElementById("div");
    let per = document.getElementById("per");

    let clear = document.getElementById("clear");
    let equal = document.getElementById("equal");

    let fValue = "";
    let sValue = "";
    let operator = "";
    let isFirst = true;

    btn0.addEventListener("click", function () 
    {
        display.value += "0";
        if (isFirst) 
        {
            fValue += "0";
        } 
        else 
        {
            sValue += "0";
        }
    });

    btn1.addEventListener("click", function () 
    {
        display.value += "1";
        if (isFirst) 
        {
            fValue += "1";
        } 
        else 
        {
            sValue += "1";
        }
    });

    btn2.addEventListener("click", function () 
    {
        display.value += "2";
        if (isFirst) 
        {
            fValue += "2";
        } 
        else 
        {
            sValue += "2";
        }
    });

    btn3.addEventListener("click", function () 
    {
        display.value += "3";
        if (isFirst) 
        {
            fValue += "3";
        } 
        else 
        {
            sValue += "3";
        }
    });

    btn4.addEventListener("click", function () 
    {
        display.value += "4";
        if (isFirst) 
        {
            fValue += "4";
        } 
        else 
        {
            sValue += "4";
        }
    });

    btn5.addEventListener("click", function () 
    {
        display.value += "5";
        if (isFirst) 
        {
            fValue += "5";
        } 
        else 
        {
            sValue += "5";
        }
    });

    btn6.addEventListener("click", function () 
    {
        display.value += "6";
        if (isFirst) 
        {
            fValue += "6";
        } 
        else 
        {
            sValue += "6";
        }
    });

    btn7.addEventListener("click", function () 
    {
        display.value += "7";
        if (isFirst) 
        {
            fValue += "7";
        } 
        else 
        {
            sValue += "7";
        }
    });

    btn8.addEventListener("click", function () 
    {
        display.value += "8";
        if (isFirst) 
        {
            fValue += "8";
        } 
        else 
        {
            sValue += "8";
        }
    });

    btn9.addEventListener("click", function () 
    {
        display.value += "9";
        if (isFirst) 
        {
            fValue += "9";
        } 
        else 
        {
            sValue += "9";
        }
    });

    add.addEventListener("click", function () 
    {
        if (fValue === "") 
        {
            error.innerHTML = "Enter a number first!";
            error.style.color = "red";
        } 
        else 
        {
            display.value += "+";
            operator = "+";
            isFirst = false;
            error.innerHTML = "";
        }
    });

    sub.addEventListener("click", function () 
    {
        if (fValue === "") 
        {
            error.innerHTML = "Enter a number first!";
            error.style.color = "red";
        } 
        else 
        {
            display.value += "-";
            operator = "-";
            isFirst = false;
            error.innerHTML = "";
        }
    });

    mul.addEventListener("click", function () 
    {
        if (fValue === "") 
        {
            error.innerHTML = "Enter a number first!";
            error.style.color = "red";
        } 
        else 
        {
            display.value += "*";
            operator = "*";
            isFirst = false;
            error.innerHTML = "";
        }
    });

    div.addEventListener("click", function () 
    {
        if (fValue === "") 
        {
            error.innerHTML = "Enter a number first!";
            error.style.color = "red";
        } 
        else 
        {
            display.value += "/";
            operator = "/";
            isFirst = false;
            error.innerHTML = "";
        }
    });

    per.addEventListener("click", function () {
        if (fValue === "")
        {
            error.innerHTML = "Enter a number first!";
            error.style.color = "red";
        } 
        else 
        {
            display.value += "%";
            operator = "%";
            sValue = (Number(fValue) / 100);
            isFirst = false;
            error.innerHTML = "";
        }
    });

    clear.addEventListener("click", function () 
    {
        display.value = "";
        error.innerHTML = "";
        fValue = "";
        sValue = "";
        operator = "";
        isFirst = true;
    });

    equal.addEventListener("click", function () {
        if (fValue === "" || sValue === "" || operator === "") 
        {
            error.innerHTML = "Invalid expression!";
            error.style.color = "red";
        } 
        else 
        {
            let result = 0;
            if (operator === "+") 
            {
                result = Number(fValue) + Number(sValue);
            } 
            else if (operator === "-") 
            {
                result = Number(fValue) - Number(sValue);
            } 
            else if (operator === "*") 
            {
                result = Number(fValue) * Number(sValue);
            } 
            else if (operator === "/") 
            {
                if (Number(sValue) === 0) 
                {
                    error.innerHTML = "Cannot divide by zero!";
                    error.style.color = "red";
                    return;
                } 
                else 
                {
                    result = Number(fValue) / Number(sValue);
                }
            } 
            else if (operator === "%") 
            {
                result = (Number(fValue) / 100).toString();
            }

            display.value = result;
            error.innerHTML = "";
            fValue = result.toString();
            sValue = "";
            operator = "";
            isFirst = true;
        }
    });
}

setupCalculator();
