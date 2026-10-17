// 1. Identify the backend network summary route and global HTML counter tag
const BACKEND_ANALYTICS_URL = 'http://localhost:5000/api/analytics/summary';
const totalClicksCount = document.getElementById('totalClicksCount');

// ==========================================
// CORE METRICS LOADER FUNCTION
// ==========================================
async function loadDashboardMetrics() {
  try {
    // Fetch the data from our backend summary database engine calculations
    const response = await fetch(BACKEND_ANALYTICS_URL);
    const data = await response.json();

    if (!response.ok) throw new Error('Failed to download ledger summaries');

    // Update our hero counter text variable parameters
    totalClicksCount.textContent = data.totalClicks;

    // ==========================================
    // BUILD CHART 1: BROWSER CLICKS
    // ==========================================
    const browserLabels = data.browsers.map(item => item._id || 'Unknown');
    const browserCounts = data.browsers.map(item => item.count);

    new Chart(document.getElementById('browserChart'), {
      type: 'bar', // A clean, vertical column chart layout
      data: {
        labels: browserLabels,
        datasets: [{
          label: 'Clicks',
          data: browserCounts,
          backgroundColor: ['#38bdf8', '#0284c7', '#0369a1', '#f43f5e'] // Soft aesthetic bar colors
        }]
      },
      options: {
        plugins: { legend: { display: false } }, // Hide the chart title box to save space
        scales: { y: { beginAtZero: true, grid: { color: '#334155' } } }
      }
    });

    // ==========================================
    // BUILD CHART 2: OPERATING SYSTEMS
    // ==========================================
    const osLabels = data.operatingSystems.map(item => item._id || 'Unknown');
    const osCounts = data.operatingSystems.map(item => item.count);

    new Chart(document.getElementById('osChart'), {
      type: 'doughnut', // A clean, modern circular ring chart layout
      data: {
        labels: osLabels,
        datasets: [{
          data: osCounts,
          backgroundColor: ['#4ade80', '#22c55e', '#15803d', '#a855f7'],
          borderWidth: 0 // Remove the thick borders around chart slices
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#94a3b8' } } } // Color coordinate data labels gray
      }
    });

  } catch (error) {
    console.error('Frontend tracking metrics setup failure:', error);
    totalClicksCount.textContent = '⚠️ Error';
  }
}

// Automatically fire this function as soon as the browser loads up the screen page
window.addEventListener('DOMContentLoaded', loadDashboardMetrics);
