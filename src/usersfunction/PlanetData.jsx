// src/components/PlanetData.js


export const generatePlanets = () => {
    const subjects = ['Math', 'Science', 'History', 'Geography', 'Astronomy'];
    const planetNames = ['Planet Math', 'Planet Science', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Kepler'];
  
    const questions = {
      Math: [
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "What is 28 - 10", options: ["18", "25", "3"], answer: "18" },
        { question: "What is 5 x 5?", options: ["10", "15", "25", "30"], answer: "25" },
        { question: "What is 10 / 2?", options: ["2", "5", "10", "20"], answer: "5" }
      ],
      Science: [
        { question: "What planet is closest to the sun?", options: ["Mars", "Venus", "Mercury", "Earth"], answer: "Mercury" },
        { question: "H2O is the chemical formula for what?", options: ["Helium", "Water", "Oxygen", "Hydrogen"], answer: "Water" },
        { question: "What connects to magnets?", options: ["Iron", "Wood", "All metal"], answer: "Iron" }
      ],
      History: [
        { question: "Who was the first US president?", options: ["Lincoln", "Washington", "Jefferson", "Adams"], answer: "Washington" },
        { question: "In what year did WWII end?", options: ["1942", "1945", "1939", "1950"], answer: "1945" }
      ],
      Geography: [
        { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "Rome"], answer: "Paris" },
        { question: "Which continent is Australia in?", options: ["Asia", "Australia", "Europe", "Africa"], answer: "Australia" }
      ],
      Astronomy: [
        { question: "What galaxy is Earth in?", options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"], answer: "Milky Way" },
        { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" }
      ]
    };
  
    return Array.from({ length: 12 }, (_, index) => {
      const subject = subjects[index % subjects.length];
      return {
        id: index + 1,
        name: `Planet ${planetNames[index % planetNames.length]} ${index + 1}`,
        subject,
        imageUrl: `https://source.unsplash.com/200x200/?planet,space&sig=${index}`,
        questions: questions[subject] || []
      };
    });
  };
  