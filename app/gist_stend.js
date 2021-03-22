var ctx = document.getElementById('gist').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
   //      datasets : [
   //       {
   //           fillColor : "#48A497",
   //           strokeColor : "#48A4D1",
   //           data : [456,479,324,569,702,600]
   //       },
   //       {
   //           fillColor : "rgba(73,188,170,0.4)",
   //           strokeColor : "rgba(72,174,209,0.4)",
   //           data : [364,504,605,400,345,320]
   //       }

   //   ]
        datasets: [
        {
         label: 
         'Впервые посетили павильон',
         
         
         data: [36,24,15,44,12,32,10],
         backgroundColor: [
             'rgba(255,255,255,1)',
             'rgba(0255,255,255,1)',
             'rgba(0255,255,255,1)',
             'rgba(255,255,255,1)',
             'rgba(0255,255,255,1)',
             'rgba(0255,255,255,1)',
             'rgba(255,255,255,1)',
            

         ],
         
     }
      
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});