const baseUrl = 'https://app.pollity.io'
const votersCountElement = document.getElementById("votersCount");
const voteCountElement = document.getElementById("voteCount")

// Function to fetch registered voters
async function fetchRegisteredVoters() {
    try {
        const response = await fetch(`${baseUrl}/total-registered-voters/1`);
        const data = await response.json();
        
        // Assuming the API response has { total: 12134567 }
        if (data.totalVoters) {
            votersCountElement.textContent = data.totalVoters?.toLocaleString(); // Format number with commas
        } else {
            votersCountElement.textContent = "Data not available";
        }
    } catch (error) {
        console.error("Error fetching registered voters:", error);
        votersCountElement.textContent = "Failed to load data";
    }
}
async function fetchTotalVotes() {
    try {
        const response = await fetch(`${baseUrl}/total-votes/1`);
        const data = await response.json();
        
        // Assuming the API response has { total: 12134567 }
        if (data.totalVotes) {
            voteCountElement.textContent = data.totalVotes?.toLocaleString(); // Format number with commas
        } else {
            voteCountElement.textContent = "Data not available";
        }
    } catch (error) {
        console.error("Error fetching registered voters:", error);
        voteCountElement.textContent = "Failed to load data";
    }
}

// Call the function when the page loads
fetchRegisteredVoters();
fetchTotalVotes()


// bar-chart
// const ctx = document.getElementById('electionChart').getContext('2d');
// // chart
// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['PDP', 'APC', 'LP', 'APGA', 'AC', 'AD', 'FCB'],
//         datasets: [{
//             label: 'Votes',
//             data: [20000000, 10000000, 5000000, 1000000, 500000, 400000, 200000],
//             backgroundColor: ['white'],
//             borderRadius: 10
//         }]
//     },
//     options: {
//         responsive: true,
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

const ctx = document.getElementById('electionChart').getContext('2d');

// Function to fetch election data
async function fetchElectionData() {
    try {
        const response = await fetch(`${baseUrl}/voting-results/1`); // Replace with your actual endpoint
        const data = await response.json();

        // Extract party names and vote counts
        const parties = data.candidates.map(candidate => candidate.partyName);
        const votes = data.candidates.map(candidate => candidate.votes);

        // Define chart colors (for visual appeal)
        const colors = [
            '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFDB33', '#33FFF2', '#A133FF', '#33FFA1'
        ];

        // Render the Chart.js bar chart
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: parties, // Party Names
                datasets: [{
                    label: 'Votes',
                    data: votes, // Votes Count
                    backgroundColor: 'white',
                    borderRadius: 10
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        ticks: {
                            color: 'white' // Set X-axis labels color to white
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white' // Set Y-axis labels color to white
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white' // Set legend text color to white
                        }
                    }
                }
            }
        });

    } catch (error) {
        console.error("Error fetching election data:", error);
    }
}
// Fetch and render data
fetchElectionData();

// election results
async function fetchAndDisplayTopCandidates(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (!data.success) throw new Error("Data fetch was not successful");

        const candidates = data.candidates;

        // Sort candidates by votes in descending order
        const sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);

        // Get the top three candidates
        const topThree = sortedCandidates.slice(0, 3);

        // Define colors for the top three positions
        const colors = ["red", "blue", "yellow"];

        // Select the container where results will be displayed
        const resultsContainer = document.getElementById('results');

        // Generate and insert the HTML
        resultsContainer.innerHTML = topThree.map((candidate, index) => `
            <div class="party">
                <div>
                    <span class="dot ${colors[index]}"></span> ${candidate.partyName} - 
                    ${index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"} place
                </div>
                <div class="num">
                    ${candidate.votes.toLocaleString()}
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error("Error fetching or processing data:", error);
        document.getElementById('results').innerHTML = `<p style="color:red;">Failed to load election results.</p>`;
    }
}
fetchAndDisplayTopCandidates(`${baseUrl}/voting-results/1`);

// map
document.addEventListener("DOMContentLoaded", function () {
    const electionData = {
        "NG-AB": { votes: 1200000, party: "APC" },  // Abia
        "NG-AD": { votes: 900000, party: "PDP" },   // Adamawa
        "NG-AK": { votes: 850000, party: "LP" },    // Akwa Ibom
        "NG-AN": { votes: 1100000, party: "PDP" },  // Anambra
        "NG-BA": { votes: 970000, party: "APC" },   // Bauchi
        "NG-BE": { votes: 1050000, party: "PDP" },  // Benue
        "NG-BO": { votes: 1200000, party: "APC" },  // Borno
        "NG-BY": { votes: 600000, party: "LP" },    // Bayelsa
        "NG-CR": { votes: 750000, party: "PDP" },   // Cross River
        "NG-DE": { votes: 680000, party: "LP" },    // Delta
        "NG-EB": { votes: 720000, party: "APC" },   // Ebonyi
        "NG-ED": { votes: 950000, party: "PDP" },   // Edo
        "NG-EK": { votes: 800000, party: "LP" },    // Ekiti
        "NG-EN": { votes: 1030000, party: "PDP" },  // Enugu
        "NG-FC": { votes: 1200000, party: "LP" },   // FCT (Abuja)
        "NG-GO": { votes: 700000, party: "APC" },   // Gombe
        "NG-IM": { votes: 990000, party: "PDP" },   // Imo
        "NG-JI": { votes: 880000, party: "APC" },   // Jigawa
        "NG-KD": { votes: 1300000, party: "PDP" },  // Kaduna
        "NG-KE": { votes: 670000, party: "LP" },    // Kebbi
        "NG-KN": { votes: 900000, party: "LP" },    // Kano
        "NG-KO": { votes: 740000, party: "PDP" },   // Kogi
        "NG-KT": { votes: 980000, party: "APC" },   // Katsina
        "NG-KW": { votes: 870000, party: "PDP" },   // Kwara
        "NG-LA": { votes: 1500000, party: "PDP" },  // Lagos
        "NG-NA": { votes: 920000, party: "APC" },   // Nasarawa
        "NG-NI": { votes: 860000, party: "LP" },    // Niger
        "NG-OG": { votes: 1100000, party: "APC" },  // Ogun
        "NG-ON": { votes: 950000, party: "LP" },    // Ondo
        "NG-OS": { votes: 890000, party: "PDP" },   // Osun
        "NG-OY": { votes: 1020000, party: "APC" },  // Oyo
        "NG-PL": { votes: 870000, party: "LP" },    // Plateau
        "NG-RI": { votes: 1100000, party: "LP" },   // Rivers
        "NG-SO": { votes: 720000, party: "APC" },   // Sokoto
        "NG-TA": { votes: 780000, party: "PDP" },   // Taraba
        "NG-YO": { votes: 910000, party: "APC" },   // Yobe
        "NG-ZA": { votes: 870000, party: "PDP" }    // Zamfara
    };
 
    const colors = { PDP: "red", APC: "blue", LP: "green" };

    const nigeriaMap = document.getElementById("nigeria-map");

    nigeriaMap.addEventListener("load", function () {
        const svgDoc = nigeriaMap.contentDocument;
        console.log(svgDoc)
        const paths = svgDoc.querySelectorAll("path");
        console.log(paths)
        let totalVotes = { PDP: 0, APC: 0, LP: 0 };

        Object.entries(electionData).forEach(([stateId, data]) => {
            const statePath = svgDoc.getElementById(stateId);
            if (statePath) {
                statePath.style.fill = colors[data.party];
                totalVotes[data.party] += data.votes;
            } else {
                console.warn(`State not found: ${stateId}`);
            }
        });

        // document.getElementById("pdp-votes").textContent = totalVotes.PDP.toLocaleString();
        // document.getElementById("apc-votes").textContent = totalVotes.APC.toLocaleString();
        // document.getElementById("lp-votes").textContent = totalVotes.LP.toLocaleString();
    });
});


// doughnut

const ctx2 = document.getElementById("electionChart2").getContext("2d");

new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: ["Not Started", "In Progress", "Completed"],
        datasets: [{
            data: [1000032, 2000032, 32000],  // Sample values
            backgroundColor: ["gray", "#3498db", "#2ecc71"],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        cutout: "60%",  // Controls the size of the inner hole
        plugins: {
            legend: { display: false }, // Hide default legend
        }
    }
});

// pie

const genderCtx = document.getElementById("genderChart").getContext("2d");
const ageCtx = document.getElementById("ageChart").getContext("2d");

// Gender Chart
new Chart(genderCtx, {
    type: "pie",
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            data: [80, 20], // Example values
            backgroundColor: ["#008000", "#90ee90"],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Age Chart
new Chart(ageCtx, {
    type: "pie",
    data: {
        labels: ["18-30", "31-40", "41-50", "51-60", "61-70", ">70"],
        datasets: [{
            data: [40, 35, 25, 20, 60, 10], // Example values
            backgroundColor: ["#2ecc71", "#27ae60", "#1abc9c", "#16a085", "#0b8457", "#055a33"],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// table
// Sort Table Columns
function sortTable(columnIndex) {
    let table = document.getElementById("electionTable");
    let rows = Array.from(table.rows).slice(1);
    let ascending = table.getAttribute("data-sort") !== "asc";
    
    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.trim();
        let cellB = rowB.cells[columnIndex].innerText.trim();
        
        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    table.setAttribute("data-sort", ascending ? "asc" : "desc");

    rows.forEach(row => table.appendChild(row));
}

// Search Functionality
document.getElementById("searchInput").addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll(".table__row");

    rows.forEach(row => {
        let state = row.cells[0].innerText.toLowerCase();
        row.style.display = state.includes(filter) ? "" : "none";
    });
});


// leaderboard
async function fetchLeaderboardData() {
    try {
        const response = await fetch(`${baseUrl}/voting-results/1`); // Replace with your actual API URL
        const data = await response.json();

        if (data.success) {
            const leaderboardContainer = document.getElementById('leaderboard');
            leaderboardContainer.innerHTML = '';

            const topCandidates = data.candidates.sort((a, b) => b.votes - a.votes).slice(0, 4);
            const highestVote = topCandidates[0].votes || 1; // Avoid division by zero

            topCandidates.forEach((candidate, index) => {
                const card = document.createElement('div');
                card.classList.add('leaderboard__card');

                const percentageChange = ((candidate.votes / highestVote) * 100 - 100).toFixed(1);
                        const changeClass = percentageChange >= 0 ? 'leaderboard__change--up' : 'leaderboard__change--down';
                        const changeSymbol = percentageChange >= 0 ? '+' : '';

                card.innerHTML = `
                <div class="leaderboard_content">
                    <img src="${candidate.partyLogoURL}" alt="${candidate.partyName}" class="leaderboard__logo">
                    <h3 class="leaderboard__name">${candidate.partyName}</h3>
                    <h2 class="leaderboard__score">${candidate.votes}</h2>
                    </div>
                    <div class="leaderboard__change-container">
                     ${index === 0 ? `<span class="leaderboard__position">1st</span>` : "-"}
                     <span class="leaderboard__change ${changeClass}">${changeSymbol}${percentageChange}%</span>
                    </div>
                `;

                leaderboardContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error fetching leaderboard data:', error);
    }
}

fetchLeaderboardData()