 $(function(){
    var dps = [2478,5267];  
    var label = ["Africa","Asia"];
    var chart = new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: label,
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: dps
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });

    // var chart = new CanvasJS.Chart("bar-chart", {
    //     title: {
    //         text: "Accepting DataPoints from User Input"
    //     },
    //     data: [{
    //         type: "bar",
    //         labels: label,
    //         data: dps
    //     }]
    // });

    function addDataPointsAndRender() {
        xValue = document.getElementById("xValue").value;
        yValue = document.getElementById("yValue").value;

        var labels = xValue;
            // You create the new dataset `Vendas` with new data and color to differentiate
                
                // backgroundColor: 'rgba(99, 255, 132, 0.2)',
                // borderColor: 'rgba(99, 255, 132, 1)',
                // borderWidth: 1,
              var  data =  yValue;
            
        
            // You add the newly created dataset to the list of `data`
            label.push(labels);
            dps.push(data);
        
            // You update the chart to take into account the new dataset
            chart.update();
        
    }

    var renderButton = document.getElementById("renderButton");
    renderButton.addEventListener("click", addDataPointsAndRender);

    function myFunction() {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }
})  
 