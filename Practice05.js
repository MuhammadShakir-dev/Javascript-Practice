<script>
      /*

            Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
            [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]


            */

            var a = parseInt(prompt("Enter a value that you want to convert."));
            var farh = (a - 32)/1.8;
            var cel = (a * 1.8) + 32;
            var b = prompt("Select 1 For Centigrade and 2 For Farhenheit");
            if(b == "1"){
                      alert("You ans in Centigrade is : " + cel);
            }else if(b == "2"){
                alert("Your ans in Fahrenheit is : " + farh);
            }else{
                alert("Please select a valid option")
            }
    </script>
