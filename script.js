$(document).ready(
    function () {

//event handlers
$("#calculateButton").click(calculateBMI);

// validation
var myRules =
    {
        weight:
            {
                required: true,
                min: 88,
                max: 353,
            },
        height:
            {
                required: true,
                min: 59,
                max: 79,
            }
    };
var myMessages =
    {
        weight:
            {
                required: "This field is required",
                min: "The minimum weight is 88lbs",
                max: "The maximum weight is 353lbs",
            },
        height:
            {
                required: "This field is required",
                min: "The minimum height is 59in.",
                max: "The maximum height is 79inches",
            }
    };
$("form").validate(
    {
        submitHandler: calculateBMI,
        rules: myRules,
        messages: myMessages
    }
);


    function calculateBMI(event)
    { event.preventDefault();
        var weight = $("#weight").val();
        weight = parseFloat(weight);

        var height = $("#height").val();
        height = parseFloat(height);


//calculations

        var squaredHeight = height * height;
        var subtotal = weight / squaredHeight;
        var fixed = 703;
        var BMI = fixed * subtotal;

    function calculateHealth() {
        event.preventDefault();
        var output2 = parseInt($("#output2").val());
        if (BMI < 18.50)
        {
            $("#output2").text("underweight");
        }
        else if (BMI > 18.50 && BMI <= 25)
        {
            $("#output2").text("healthy weight");
        }
        else if (BMI > 25 && BMI <= 30)
        {
            $("#output2").text("overweight");
        }
        else if (BMI > 30)
        {
            $("#output2").text("obese");
        }

    }

//output into paragraphs
$("#output").text(`Your BMI is ${BMI.toFixed(2)} which means you are:`);
$("#output2").text(calculateHealth);

}
}
);