<script>
      /*
              Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

*/
      var a = parseInt(prompt("Enter your first number"));
      var b = parseInt(prompt("Enter your second number"));
      var c = prompt("Slect an Operatio (+ , - , * ,  / )");
      var sum = a + b;
      var sub = a - b;
      var mul = a * b;
      var div = a / b;
      if (c == "+") {
        alert("The Sum of your numbers are : " + sum);
      } else if (c == "-") {
        alert("The difference of your numbers are : " + sub);
      } else if (c == "*") {
        alert("The Multiply of " + " " + a + " & "  + " " + b + " are : " + mul);
      } else if (c == "/") {
        alert("The Answer  of " + " " + a + " / " + " " + b + " are : " + div);
      } else {
        alert("Select valid option");
      }
    </script>
