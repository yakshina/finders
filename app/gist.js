var chart = dc.barChart('#bar');

         d3.csv("../charts/people.csv", function(errors, people) {
            var mycrossfilter = crossfilter(people);

            var ageDimension = mycrossfilter.dimension(function(data) { 
               return ~~((Date.now() - new Date(data.DOB)) / (31557600000)) 
            });
            var ageGroup = ageDimension.group().reduceCount();

            chart
               .width(800)
               .height(300)
               .x(d3.scale.linear().domain([15,70]))
               .brushOn(false)
               .yAxisLabel("Count")
               .xAxisLabel("Age")
               .dimension(ageDimension)
               .group(ageGroup)
               .on('renderlet', function(chart) {
                  chart.selectAll('rect').on('click', function(d) {
                     console.log('click!', d);
                  });
               });
            chart.render();
         });