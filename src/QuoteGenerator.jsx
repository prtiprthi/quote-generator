import { useState } from "react";

function useQuoteGenerator() {
  const quotes = [
    "You make every day brighter just by being you. ☀️",
    "I believe in you and all that you do. 🌟",
    "You’re stronger than you think. 💪",
    "Your kindness inspires everyone around you. 🌸",
    "Every day with you is a new adventure. ✨",
    "You make impossible things possible. 🚀",
    "Your heart is bigger than the universe. ❤️",
    "I’m so proud of everything you achieve. 🎖️",
    "You light up every room you enter. 💡",
    "Keep chasing your dreams — you’re amazing. 🌈",
    "Your courage amazes me every day. 🦁",
    "You deserve all the happiness in the world. 🍀",
    "Your laughter is contagious and magical. 😄",
    "You are my favorite person in every way. 💕",
    "You make ordinary moments extraordinary. 🌷",
    "Believe in yourself as much as I believe in you. 💎",
    "You’re braver than any challenge that comes your way. ⚡",
    "Your creativity is beautiful and inspiring. 🎨",
    "You are my sunshine on cloudy days. 🌞",
    "Your determination is incredible. 🏆",
    "You make love feel so easy and beautiful. 💌",
    "I admire your passion and drive. 🔥",
    "You’re an amazing person, inside and out. 🌹",
    "Every little thing you do is impressive. 🌟",
    "You make my world a better place. 🌍",
    "Your patience and wisdom amaze me. 🦉",
    "You have a heart full of gold. 🥇",
    "Your optimism is truly inspiring. 🌈",
    "You’re a gift to everyone who knows you. 🎁",
    "You can handle anything life throws at you. 💪",
    "Your confidence lights up the room. ✨",
    "You make me feel loved every single day. 💖",
    "Your smile can turn any day around. 😄",
    "You’re my hero in big and small ways. 🦸‍♂️",
    "Keep shining, because the world needs your light. 🌟",
  ];

  /*
  const quotes = [
    "The best way to get started is to quit talking and begin doing. 🌟",
    "Don't let yesterday take up too much of today. 💖",
    "It's not whether you get knocked down, it's whether you get up. 🌸",
    "Success is not in what you have, but who you are. ✨",
    "The harder you work for something, the greater you'll feel when you achieve it. 💪",
    "Believe you can and you're halfway there. 🌈",
    "Do something today that your future self will thank you for. 💌",
    "Don't watch the clock; do what it does. Keep going. ⏰",
    "Opportunities don't happen. You create them. 🌱",
    "Dream big and dare to fail. 🌙",
    "Act as if what you do makes a difference. It does. 🌼",
    "The only limit to our realization of tomorrow is our doubts of today. ⭐",
    "Great things never come from comfort zones. 🚀",
    "Push yourself, because no one else is going to do it for you. 🔥",
    "Success is the sum of small efforts repeated day in and day out. 💫",
    "Hardships often prepare ordinary people for an extraordinary destiny. 🌻",
    "Start where you are. Use what you have. Do what you can. 🍀",
    "Don't wait for opportunity. Create it. 🎯",
    "It always seems impossible until it's done. 🏆",
    "Your limitation - it's only your imagination. 🌟",
    "Sometimes later becomes never. Do it now. ⏳",
    "Little things make big days. 🌷",
    "Great things are done by a series of small things brought together. 💎",
    "Success doesn’t just find you. You have to go out and get it. 🏅",
    "Motivation gets you started. Habit keeps you going. 🔑",
    "Don’t stop when you’re tired. Stop when you’re done. 💥",
    "The secret of getting ahead is getting started. ✨",
    "Focus on being productive instead of busy. 📌",
    "The way to get started is to quit talking and begin doing. 🌟",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful. 🌈",
    "Your future is created by what you do today, not tomorrow. 💖",
    "The harder the conflict, the greater the triumph. 🏔️",
  ];*/

  const [currentQuote, setCurrentQuote] = useState(
    /*"Hi Hari ❤️ <br> Welcome to Preethi's little quote corner 🎀"*/
    "Hi Hari ❤️ Welcome to Preethi's little love notes 💌"
  );

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return { currentQuote, generateQuote };
}

export default useQuoteGenerator;
