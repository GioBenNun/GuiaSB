// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".mobile-menu-button")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden")
        }

        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Navbar scroll effect
  const navbar = document.getElementById("navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("bg-opacity-95", "shadow-lg")
      } else {
        navbar.classList.remove("bg-opacity-95", "shadow-lg")
      }
    })
  }

  // Add fade-in animation to sections when they come into view
  const sections = document.querySelectorAll("section")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      })
    },
    { threshold: 0.1 },
  )

  sections.forEach((section) => {
    observer.observe(section)
  })
})
