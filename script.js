document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("idCardForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form values
      const studentId = document.getElementById("studentId").value;
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const number = document.getElementById("number").value;
      const address = document.getElementById("address").value;
      const confirmAddress = document.getElementById("confirmAddress").value;
      const picture = document.getElementById("picture").files[0];
  
      // Log values to console
      console.log("Student ID:", studentId);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Number:", number);
      console.log("Address:", address);
      console.log("Confirm Address:", confirmAddress);
      
      if (picture) {
        console.log("Picture File Name:", picture.name);
        console.log("Picture File Size:", picture.size, "bytes");
      }
    });
  
    // Image preview
    document.getElementById("picture").addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const preview = document.getElementById("preview");
          preview.src = e.target.result;
          preview.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  });
  