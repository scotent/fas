// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["ACCOMODATIONINT", "AIRFARESINT", "CONSULTANCY", "EXHIBITIONTRADEFAIRS", "GRADUATES", "MATERIALS", "TEMPORARYSPECIALISTS" ],
    datasets: [{
      data: [9.7, 14.5, 12.3, 9.8, 22, 7.8, 23.9],
      backgroundColor: ['#619ed6', '#6ba547', '#ffe940', '#fda834', '#d097bc', '#ff5c5e', '#79e7ff'],
      hoverBackgroundColor: ['#119ed5', '#1ba546', '#efe949', '#eda833', '#c097bb', '#ef5c5d', '#69e7fe'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
