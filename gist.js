var income = document.getElementById("income").getContext("2d");
    var barData = {
        labels : ["10:00","11:00","12:00","13:00","14:00","15:00", "16:00", "17:00"],
        datasets : [
            {
                fillColor : "#48A497",
                strokeColor : "#48A4D1",
                data : [23,79,24,69,102,150, 170, 160]
            },
            {
                fillColor : "rgba(0,185,86,1)",
                strokeColor : "rgba(0,185,86,0.4)",
                data : [34,50,65,40,70,80, 120, 170]
            }

        ]
    }
   new Chart(income).Bar(barData);