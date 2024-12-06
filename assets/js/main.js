const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const countDown = () => {
  const countDownDate = new Date("2027-1-5 23:59:59").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").textContent = days;
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;
};

setInterval(() => {
  countDown();
}, 1000);

AOS.init({
  duration: 1000, 
  once: true  
});
