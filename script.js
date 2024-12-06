const form = document.getElementById('reservation-form'); 

form.addEventListener('submit',(e) =>{ 
    e.preventDefault();
     const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
       const phone = document.getElementById('phone').value;
        const arrivalDate = document.getElementById('arrival-date').value;
         const departureDate = document.getElementById('departure-date').value;
          const roomType = document.getElementById('room-type').value;
           
          // ارسال داده‌ها به سرور 

           fetch('/reservation', {
             method: 'POST',
              headers: {
                 'Content-Type': 'application/json' 
                },

                 body: JSON.stringify({ 
                    name, 
                    email,
                    phone, 
                    arrivalDate, 
                    departureDate, 
                    roomType 
                }) 
                }) 
                  
                .then((response) => response.json()) 
                .then((data) => console.log(data)) 
                .catch((error) => console.error(error)); });



