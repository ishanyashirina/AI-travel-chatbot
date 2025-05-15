const travelData = {
  paris: {
    budget: 900,
    flights: ["Air France - $450", "Lufthansa - $480"],
    hotels: ["Ibis Budget ($90/night)", "Sofitel Paris ($200/night)"],
    packages: ["City Tour (3 days): $700", "Romantic Paris (5 days): $950"]
  },
  bali: {
    budget: 800,
    flights: ["Singapore Airlines - $400", "Qatar Airways - $420"],
    hotels: ["Bali Villas ($120/night)", "Kuta Central ($60/night)"],
    packages: ["Beach Break (6 days): $750", "Nature Tour (4 days): $580"]
  },
  dubai: {
    budget: 1000,
    flights: ["Emirates - $300", "Air India - $280"],
    hotels: ["Burj Al Arab ($500/night)", "Rove Downtown ($100/night)"],
    packages: ["Desert Safari (3 days): $850", "Luxury Dubai (4 days): $1100"]
  },
  london: {
    budget: 1100,
    flights: ["British Airways - $460", "Virgin Atlantic - $440"],
    hotels: ["The Ritz ($350/night)", "Premier Inn ($100/night)"],
    packages: ["London Explorer (5 days): $1000", "Historic London (3 days): $720"]
  },
  rome: {
    budget: 950,
    flights: ["Alitalia - $500", "Vueling - $460"],
    hotels: ["Hotel Artemide ($150/night)", "Hotel Quirinale ($120/night)"],
    packages: ["Roman Holiday (4 days): $800", "Italy Tour (6 days): $1200"]
  },
  tokyo: {
    budget: 1200,
    flights: ["ANA - $600", "Japan Airlines - $580"],
    hotels: ["Shinjuku Granbell ($150/night)", "APA Hotel ($90/night)"],
    packages: ["Tokyo Explorer (5 days): $1000", "Japan Culture Tour (7 days): $1300"]
  },
  sydney: {
    budget: 1300,
    flights: ["Qantas - $700", "Emirates - $750"],
    hotels: ["Hyatt Sydney ($200/night)", "YHA Hostel ($80/night)"],
    packages: ["Sydney Sights (5 days): $1150", "Australia Tour (7 days): $1500"]
  },
  newyork: {
    budget: 1000,
    flights: ["Delta - $400", "United - $450"],
    hotels: ["The Plaza ($350/night)", "Pod 51 Hotel ($100/night)"],
    packages: ["NYC Essentials (4 days): $900", "Broadway Tour (3 days): $750"]
  },
  barcelona: {
    budget: 950,
    flights: ["Iberia - $420", "Vueling - $400"],
    hotels: ["Hotel Arts ($180/night)", "Hostel One ($60/night)"],
    packages: ["Barcelona Bliss (5 days): $870", "Spanish Fiesta (4 days): $720"]
  },
  bangkok: {
    budget: 700,
    flights: ["Thai Airways - $350", "AirAsia - $300"],
    hotels: ["Mandarin Hotel ($100/night)", "Lub D Hostel ($40/night)"],
    packages: ["Bangkok Getaway (4 days): $620", "Thai Culture Trip (5 days): $680"]
  },
  istanbul: {
    budget: 800,
    flights: ["Turkish Airlines - $420", "Pegasus - $390"],
    hotels: ["Swissotel ($160/night)", "Sirkeci Mansion ($90/night)"],
    packages: ["Istanbul Explorer (5 days): $770", "Ottoman Trail (4 days): $680"]
  },
  amsterdam: {
    budget: 1000,
    flights: ["KLM - $450", "Transavia - $400"],
    hotels: ["Hotel Notting Hill ($180/night)", "The Student Hotel ($100/night)"],
    packages: ["Dutch Delight (4 days): $880", "Holland Tour (5 days): $990"]
  },
  zurich: {
    budget: 1100,
    flights: ["Swiss Air - $480", "Lufthansa - $500"],
    hotels: ["Baur au Lac ($300/night)", "ibis Zurich ($110/night)"],
    packages: ["Swiss Scenic Tour (4 days): $980", "Alpine Adventure (6 days): $1150"]
  },
  cairo: {
    budget: 750,
    flights: ["EgyptAir - $300", "Nile Air - $280"],
    hotels: ["Marriott Cairo ($160/night)", "Cairo Hostel ($60/night)"],
    packages: ["Pyramids Tour (4 days): $700", "Egypt Explorer (5 days): $800"]
  },
  singapore: {
    budget: 850,
    flights: ["Singapore Airlines - $350", "Scoot - $320"],
    hotels: ["Marina Bay Sands ($400/night)", "Hotel 81 ($80/night)"],
    packages: ["City Discovery (3 days): $790", "Singapore Fun (5 days): $900"]
  },
  venice: {
    budget: 950,
    flights: ["Alitalia - $470", "EasyJet - $430"],
    hotels: ["Hotel Danieli ($250/night)", "Domus Ciliota ($90/night)"],
    packages: ["Venetian Romance (4 days): $880", "Italy Escape (6 days): $990"]
  },
  seoul: {
    budget: 900,
    flights: ["Korean Air - $480", "Asiana Airlines - $450"],
    hotels: ["Lotte Hotel ($200/night)", "24 Guesthouse ($70/night)"],
    packages: ["Korean Wave Tour (5 days): $850", "Seoul City Life (4 days): $740"]
  },
  cape_town: {
    budget: 850,
    flights: ["South African Airways - $420", "Ethiopian Airlines - $390"],
    hotels: ["Table Bay Hotel ($180/night)", "Mojo Hotel ($70/night)"],
    packages: ["Cape Adventure (5 days): $800", "SA Safari (6 days): $1000"]
  },
  toronto: {
    budget: 950,
    flights: ["Air Canada - $440", "WestJet - $420"],
    hotels: ["Fairmont Royal York ($220/night)", "HI Toronto Hostel ($85/night)"],
    packages: ["Canada Classic (4 days): $870", "Niagara Tour (5 days): $940"]
  },
  lisbon: {
    budget: 800,
    flights: ["TAP Portugal - $370", "EasyJet - $350"],
    hotels: ["Altis Grand Hotel ($160/night)", "Lisbon Hostel ($60/night)"],
    packages: ["Lisbon Escape (4 days): $750", "Portugal Highlights (5 days): $890"]
  }
};

let userBudget = null;

function sendMessage() {
  const input = document.getElementById("userInput").value.trim();
  if (!input) return;

  addMessage(input, 'user');
  document.getElementById("userInput").value = "";

  setTimeout(() => {
    if (!userBudget && /\d+/.test(input)) {
      userBudget = parseInt(input.match(/\d+/)[0]);
      addMessage(`Got it! Your budget is $${userBudget}. Now tell me a place you'd like to go.`, 'bot');
    } else {
      botResponse(input.toLowerCase());
    }
  }, 500);
}

function botResponse(msg) {
  for (const place in travelData) {
    if (msg.includes(place.replace('_', ' '))) {
      const data = travelData[place];
      if (userBudget && userBudget < data.budget) {
        addMessage(`Trips to ${capitalize(place)} usually start at $${data.budget}. You might want to increase your budget or choose another destination.`, 'bot');
      } else {
        addMessage(`
          ✈️ <strong>Flights to ${capitalize(place)}:</strong><br> - ${data.flights.join('<br>')}<br><br>
          🏨 <strong>Hotels:</strong><br> - ${data.hotels.join('<br>')}<br><br>
          📦 <strong>Travel Packages:</strong><br> - ${data.packages.join('<br>')}
        `, 'bot');
      }
      return;
    }
  }

  if (msg.includes("hi") || msg.includes("hello")) {
    addMessage("Hi! I'm your travel assistant 🌍. What's your travel budget in USD?", 'bot');
  } else if (msg.includes("thanks") || msg.includes("thank you")) {
    addMessage("You're welcome! Let me know if you'd like to explore more places ✈️", 'bot');
  } else {
    addMessage("Please tell me your travel budget and a destination like 'Paris', 'Tokyo', or 'Bali'.", 'bot');
  }
}

function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.innerHTML = text;
  document.getElementById("messages").appendChild(msgDiv);
  msgDiv.scrollIntoView({ behavior: "smooth" });
}

function capitalize(word) {
  return word.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
}
