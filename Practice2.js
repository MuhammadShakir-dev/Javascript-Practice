<script>
        /*
             Write a javascript program that findes area of triangle

        */
       var side1 =parseInt(prompt("Enter value of side 1"));
       var side2 = parseInt(prompt("Enter value of side 2"));
       var side3 = parseInt(prompt("Enter value of side 3"));
       var s = (side1 + side2 + side3)/2;
       var area = s*((s-side1)*(s-side2)*(s-side3));
       var area1 = Math.sqrt(area);
       alert("Area of triangle is : " + area1 );
    </script>
