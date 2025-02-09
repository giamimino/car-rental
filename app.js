document.addEventListener("DOMContentLoaded", () => {
  const brands = document.querySelectorAll(".brand");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Array.from(brands).indexOf(entry.target) * 50; // Ensures order-based delay
        setTimeout(() => {
          entry.target.classList.add("show");
        }, delay);

        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.05 }); // იწყებს ჩატვირთვას, როცა 15% გამოჩნდება

  brands.forEach((brand) => observer.observe(brand));
});

document.addEventListener("DOMContentLoaded", () => {
  const cars = document.querySelectorAll(".car");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Array.from(cars).indexOf(entry.target) * 100; // Ensures order-based delay
        setTimeout(() => {
          entry.target.classList.add("show");
        }, delay);

        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.15 }); // იწყებს ჩატვირთვას, როცა 15% გამოჩნდება

  cars.forEach((car) => observer.observe(car));
});


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fadeInRight");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            "opacity 0.3s ease-out, transform 0.3s ease-out, filter 0.3s ease-out";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0) scale(1)";
          entry.target.style.filter = "blur(0)";
        } else {
          entry.target.style.transition =
            "opacity 0.2s ease-in, transform 0.2s ease-in, filter 0.2s ease-in";
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateX(-200px) scale(0.5)";
          entry.target.style.filter = "blur(10px)";
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fadeInLeft");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0) scale(1)";
          entry.target.style.filter = "blur(0)";
          entry.target.style.transition =
            "opacity 0.3s ease-out, transform 0.3s ease-out, filter 0.3s ease-out";
        } else {
          entry.target.style.transition =
            "opacity 0.2s ease-in, transform 0.2s ease-in, filter 0.2s ease-in";
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateX(200px) scale(0.5)";
          entry.target.style.filter = "blur(10px)";
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fadeUp");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0) scale(1)";
          entry.target.style.filter = "blur(0)";
          entry.target.style.transition =
            "opacity 0.3s ease-out, transform 0.3s ease-out, filter 0.3s ease-out";
        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(100px) scale(0.5)";
          entry.target.style.filter = "blur(10px)";
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".autoDisplay");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.filter = "blur(0)";
        entry.target.style.transform = "translateY(0) scale(1)";
        entry.target.style.transition = "all 0.4s ease";
      }
    });
  }, { threshold: 0.3 });

  elements.forEach((el) => {
    el.style.opacity = "0.2";
    el.style.filter = "blur(10px)";
    el.style.transform = "translateY(-200px) scale(0)";
    observer.observe(el);
  });
});

// Select all elements with the autoBlur class
document.querySelectorAll('.autoBlur').forEach(element => {
  function updateBlurEffect() {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementHeight = rect.height;
    const elementTop = rect.top;

    // Calculate animation progress (0 to 1)
    let progress = (viewportHeight - elementTop) / (viewportHeight + elementHeight);
    progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

    let blur, opacity;

    if (progress <= 0.35) {
      // Entering phase (0% → 35%)
      const phaseProgress = progress / 0.35;
      blur = 40 * (1 - phaseProgress);
      opacity = phaseProgress;
    } else if (progress <= 0.65) {
      // Middle phase (35% → 65%)
      blur = 0;
      opacity = 1;
    } else {
      // Exiting phase (65% → 100%)
      const phaseProgress = (progress - 0.65) / 0.35;
      blur = 40 * phaseProgress;
      opacity = 1 - phaseProgress;
    }

    // Apply styles
    element.style.filter = `blur(${blur}px)`;
    element.style.opacity = opacity;
  }

  // Throttled scroll/resize handlers
  let isRunning = false;
  function throttleUpdate() {
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(() => {
        updateBlurEffect();
        isRunning = false;
      });
    }
  }

  // Event listeners
  window.addEventListener('scroll', throttleUpdate);
  window.addEventListener('resize', throttleUpdate);

  // Initial calculation
  updateBlurEffect();
});