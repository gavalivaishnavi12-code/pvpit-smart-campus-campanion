function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Dark mode toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light" : "🌙 Dark";
});

// Data for each block
const blockDetails = {
  main: {
    title: "🏢 Main Academic Building",
    body: `
      <ul>
        <li>Admin Office</li>
        <li>Staff Rooms</li>
        <li>BCA Department</li>
        <li>General Classrooms</li>
      </ul>
    `
  },
  computer: {
    title: "💻 Computer / CSDS Block",
    body: `
      <ul>
        <li>CSE Department</li>
        <li>CSDS Department</li>
        <li>Computer Labs</li>
        <li>Computer Center</li>
      </ul>
    `
  },
  entc: {
    title: "🔬 ENTC Labs Block",
    body: `
      <ul>
        <li>ENTC Department</li>
        <li>Electronics Labs</li>
        <li>Communication Labs</li>
        <li>Project Labs</li>
      </ul>
    `
  },
  mechcivil: {
    title: "🏗️ Mechanical & Civil Workshops",
    body: `
      <ul>
        <li>Mechanical Workshop</li>
        <li>Civil Engineering Labs</li>
        <li>Machine Shop</li>
      </ul>
    `
  },
  library: {
    title: "📚 Library & Reading Hall",
    body: `
      <ul>
        <li>Book Section</li>
        <li>Digital Library</li>
        <li>Reading Hall</li>
      </ul>
    `
  },
  fe: {
    title: "🧪 FE / Basic Science Labs",
    body: `
      <ul>
        <li>Physics Lab</li>
        <li>Chemistry Lab</li>
        <li>First Year Labs</li>
      </ul>
    `
  },
  sports: {
    title: "🏀 Sports & Open Ground",
    body: `
      <ul>
        <li>Outdoor Games</li>
        <li>Events & Functions</li>
        <li>Practice Ground</li>
      </ul>
    `
  },
  parking: {
    title: "🅿️ Parking Area",
    body: `
      <ul>
        <li>Two-Wheeler Parking</li>
        <li>Four-Wheeler Parking</li>
      </ul>
    `
  }
};

// Add click listeners to blocks
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".map-block").forEach(block => {
    block.addEventListener("click", () => {
      const key = block.getAttribute("data-block");
      const data = blockDetails[key];

      if (data) {
        document.getElementById("blockModalTitle").innerHTML = data.title;
        document.getElementById("blockModalBody").innerHTML = data.body;

        const modal = new bootstrap.Modal(document.getElementById("blockModal"));
        modal.show();
      }
    });
  });
});

// Highlight logic for search
function clearHighlights() {
  document.querySelectorAll(".map-block").forEach(b => b.classList.remove("highlight"));
}

// Map from rooms to blocks
const roomToBlock = {
  "cse lab": "block-computer",
  "cse-101": "block-computer",
  "cse-102": "block-computer",
  "csds lab": "block-computer",

  "entc lab": "block-entc",
  "entc-201": "block-entc",

  "mech lab": "block-mechcivil",
  "workshop": "block-mechcivil",
  "civil lab": "block-mechcivil",

  "physics lab": "block-fe",
  "chemistry lab": "block-fe",

  "bca lab": "block-main",
  "admin office": "block-main",
  "office": "block-main",

  "library": "block-library",
  "sports ground": "block-sports",
  "parking": "block-parking"
};

// Search function
function findClass() {
  const input = document.getElementById("classInput").value.toLowerCase().trim();
  const result = document.getElementById("classResult");

  clearHighlights();

  if (roomToBlock[input]) {
    const blockId = roomToBlock[input];
    const blockEl = document.getElementById(blockId);

    showSection("map");
    blockEl.classList.add("highlight");

    result.textContent = "✅ Found! Highlighted on Campus Map.";
    result.className = "text-success fw-bold";
  } else {
    result.textContent = "❌ Not found. Please select a place from the list.";
    result.className = "text-danger fw-bold";
  }
}

function goToBlock() {
  showSection("map");
}