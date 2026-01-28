// Menu Toggle for Mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Register DataLabels Plugin
Chart.register(ChartDataLabels);

// Donut Chart for Book Categories
const donutCtx = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(donutCtx, {
    type: 'polarArea',
    data: {
        labels: ['EBooks', 'EJournals', 'Audiobooks'],
        datasets: [{
            data: [1245, 867, 432],
            backgroundColor: [
                'rgba(99, 102, 241, 0.6)',  // Indigo
                'rgba(236, 72, 153, 0.6)',  // Pink
                'rgba(6, 182, 212, 0.6)'    // Cyan
            ],
            borderWidth: 2,
            borderColor: '#fff',
            hoverBorderColor: '#fff',
            hoverBorderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                ticks: { display: false },
                grid: { color: 'rgba(0,0,0,0.05)' }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                padding: 12,
                cornerRadius: 8,
                titleFont: { size: 13, weight: 600 },
                callbacks: {
                    label: function (context) {
                        const total = 2544;
                        const percentage = ((context.parsed / total) * 100).toFixed(1);
                        return ` ${context.label}: ${context.parsed} (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 14
                },
                padding: 6,
                formatter: function (value, context) {
                    return value;
                },
                textShadowBlur: 4,
                textShadowColor: 'rgba(0,0,0,0.3)'
            }
        }
    }
});

// Bar Chart with Line
const barCtx = document.getElementById('barChart').getContext('2d');

// Generate month labels
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Generate data
// Generate data
// Generate data
const borrowedBooks = [110, 100, 120, 80, 115, 130, 90, 110, 95, 105, 125, 140];
const returnedBooks = [95, 85, 105, 70, 100, 115, 75, 95, 85, 90, 110, 125];
const profitData = [45, 35, 55, 30, 40, 50, 25, 45, 35, 40, 60, 75];

// Create Gradients
const gradientIndigo = barCtx.createLinearGradient(0, 0, 0, 400);
gradientIndigo.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
gradientIndigo.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

const gradientPink = barCtx.createLinearGradient(0, 0, 0, 400);
gradientPink.addColorStop(0, 'rgba(236, 72, 153, 0.5)');
gradientPink.addColorStop(1, 'rgba(236, 72, 153, 0.0)');

const gradientCyan = barCtx.createLinearGradient(0, 0, 0, 400);
gradientCyan.addColorStop(0, 'rgba(6, 182, 212, 0.5)');
gradientCyan.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

const barChart = new Chart(barCtx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: 'Total Sales',
                data: borrowedBooks,
                borderColor: '#6366f1',
                backgroundColor: gradientIndigo,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.4,
                fill: true
            },
            {
                label: 'Returned',
                data: returnedBooks,
                borderColor: '#ec4899',
                backgroundColor: gradientPink,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#ec4899',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.4,
                fill: true
            },
            {
                label: 'Profit',
                data: profitData,
                borderColor: '#06b6d4',
                backgroundColor: gradientCyan,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#06b6d4',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.4,
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    padding: 20,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                padding: 12,
                cornerRadius: 8,
                titleFont: { size: 13 },
                bodyFont: { size: 12 },
                displayColors: true,
                borderWidth: 0
            },
            datalabels: {
                display: false
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 11 },
                    color: '#9ca3af'
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f3f4f6',
                    borderDash: [5, 5],
                    drawBorder: false
                },
                ticks: {
                    font: { size: 11 },
                    color: '#9ca3af',
                    stepSize: 50
                }
            }
        }
    }
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Theme toggle functionality (optional enhancement)
const themeToggle = document.querySelector('.fa-moon')?.parentElement;
if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        // This can be expanded to implement dark mode
        console.log('Theme toggle clicked');
    });
}

// Books Orders & Returns Donut Chart
const booksDonutCtx = document.getElementById('booksDonutChart')?.getContext('2d');
if (booksDonutCtx) {
    const booksDonutChart = new Chart(booksDonutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Total Orders', 'Total Returns'],
            datasets: [{
                data: [2156, 388],
                backgroundColor: [
                    '#10b981',  // Green for Orders
                    '#ef4444'   // Red for Returns
                ],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#313a46',
                    padding: 12,
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#e9ecef',
                    borderWidth: 1,
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            const total = 2544;
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + context.parsed.toLocaleString() + ' books (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Books Monthly Downloads Bar Chart
const booksBarCtx = document.getElementById('booksBarChart')?.getContext('2d');
if (booksBarCtx) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const ebooksDownloads = [450, 520, 480, 590, 620, 680, 550, 600, 580, 640, 720, 780];
    const ejournalsDownloads = [320, 380, 360, 420, 450, 480, 400, 430, 410, 460, 500, 540];
    const audiobooksDownloads = [180, 210, 200, 240, 260, 290, 230, 250, 240, 280, 310, 340];

    const booksBarChart = new Chart(booksBarCtx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'EBooks',
                    data: ebooksDownloads,
                    backgroundColor: '#6366f1',
                    borderRadius: 4,
                    barThickness: 15
                },
                {
                    label: 'EJournals',
                    data: ejournalsDownloads,
                    backgroundColor: '#ec4899',
                    borderRadius: 4,
                    barThickness: 15
                },
                {
                    label: 'Audiobooks',
                    data: audiobooksDownloads,
                    backgroundColor: '#06b6d4',
                    borderRadius: 4,
                    barThickness: 15
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#313a46',
                    padding: 12,
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#e9ecef',
                    borderWidth: 1,
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + ' downloads';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6c757d'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#f0f0f0',
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6c757d',
                        stepSize: 200,
                        callback: function (value) {
                            return value;
                        }
                    }
                }
            }
        }
    });
}
