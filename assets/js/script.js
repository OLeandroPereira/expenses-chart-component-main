const ctx = document.getElementById('grafico');
const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
        datasets: [{
            label: 'R$',
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
            ],
        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
