function countdown() {
    const targetDate = new Date("July 14, 2023").getTime();
  
    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = padZero(days);
      document.getElementById("hours").textContent = padZero(hours);
      document.getElementById("minutes").textContent = padZero(minutes);
      document.getElementById("seconds").textContent = padZero(seconds);
    }, 1000);
  }
  
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }
  
  countdown();
  