var ctx = document.getElementById('gist').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
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
        datasets: [{
            label: 'Посетили стенд повторно',
            data: [6,49,24,69,72,60,34,69,72,24,19,2],
            backgroundColor: [
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)',
                'rgba(102,204,153,1)'

            ],
            

            
        },
        {
         label: 'Впервые посетили стенд',
         data: [36,24,15,44,12,32,10,57,24,12,15,14],
         backgroundColor: [
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)',
             'rgba(229,229,229,1)'
             

         ],
         
     }
      
      ]
    },
    options: {
        
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        },
        legend: {
            position: 'bottom'
     }
    }
    
});
