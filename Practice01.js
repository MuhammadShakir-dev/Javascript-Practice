<script>
        /*
           write a javascript program that take date , day and year from user and sort it into two different date formats according to the users need.

        */
        var date = prompt("Enter the date");
        var month = prompt("Enter the month");
        var year = prompt("Enter the year");
       var get= prompt("For mm-dd-yy select 1 OR For dd-mm-yy select 2");
        if(get=1){
            alert(month + "-" + date + "-" + year);
        }else{
            alert(date + "-" + month + "-" + year);
        }
        
    </script>
