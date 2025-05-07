const subscribeCheckbox = document.getElementById('subscribe');
        const formFields = document.getElementById('formFields');
        const form = document.getElementById('contactForm');
        const message = document.getElementById('message');

        subscribeCheckbox.addEventListener('change', () => {
            formFields.classList.toggle('hidden', !subscribeCheckbox.checked);
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!subscribeCheckbox.checked) {
                alert("A folytatáshoz fel kell iratkoznod a hírlevélre!");
                return;
            }

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/;

            if (!emailRegex.test(email)) {
                alert("Kérlek, adj meg egy érvényes email címet!");
                return;
            }

            if (!passwordRegex.test(password)) {
                alert("A jelszónak legalább 10 karakterből kell állnia, tartalmaznia kell kis- és nagybetűt, számot, valamint speciális karaktert.");
                return;
            }

            if (password !== confirmPassword) {
                alert("A megadott jelszavak nem egyeznek!");
                return;
            }

            if (firstName.length < 3 || firstName.length > 20) {
                alert("A keresztnévnek 3 és 20 karakter közöttinek kell lennie.");
                return;
            }

            if (lastName.length < 3 || lastName.length > 20) {
                alert("A vezetéknévnek 3 és 20 karakter közöttinek kell lennie.");
                return;
            }

            message.classList.remove('hidden');
            
            

            setTimeout(() => {
                window.location.href = "contactDeveloper.html"; 
            }, 1000);
        });

        const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });