 // Mobile drawer
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('drawer');
  function closeDrawer(){drawer.classList.remove('open')}
  menuBtn?.addEventListener('click', ()=> drawer.classList.toggle('open'));

  // Contact form
  document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const status = document.getElementById("formStatus");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        const userName = data.get("name") || ""; 
        status.textContent = "Thanks, " + userName + "! We will contact you shortly.";
        form.reset();
      } else {
        status.textContent = "Oops! Something went wrong.";
      }
    } catch (err) {
      status.textContent = "Network error. Please try again.";
    }
  });