// Load the Visualization API and the corechart package.
google.charts.load("current", {
    packages: ["corechart"]
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Topping");
    data.addColumn("number", "Slices");
    data.addRows([
        ["Myself", 3],
        ["Tazeen", 1],
        ["Brother", 1],
        ["Mother", 1],
        ["Father", 2],
    ]);

    // Set chart options
    var options = {
        title: "How Much Pizza I Ate Last Night",
        width: 800,
        height: 800,
        colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],
        is3D: true,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(
        document.getElementById("chart_div")
    );
    chart.draw(data, options);
}