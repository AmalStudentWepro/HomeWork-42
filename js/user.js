function createUserInfo(data) {
    const userInfoContainer = document.getElementById("user-info-container");
  
    const userName = document.createElement("h1");
    userName.textContent = `User: ${data.name}`;
  
    const userEmail = document.createElement("div");
    userEmail.classList.add("info-item");
    userEmail.innerHTML = `<span>Email:</span><span>${data.email}</span>`;
  
    const userPhone = document.createElement("div");
    userPhone.classList.add("info-item");
    userPhone.innerHTML = `<span>Phone:</span><span>${data.phone}</span>`;
  
    const userWebsite = document.createElement("div");
    userWebsite.classList.add("info-item");
    const websiteLink = document.createElement("a");
    websiteLink.href = `https://${data.website}`;
    websiteLink.textContent = data.website;
    userWebsite.innerHTML = `<span>Website:</span>`;
    userWebsite.appendChild(websiteLink);
  
    const userCompany = document.createElement("div");
    userCompany.classList.add("info-item");
    userCompany.innerHTML = `<span>Company:</span><span><strong>${data.company.name}</strong></span>`;
  
    const userCatchPhrase = document.createElement("div");
    userCatchPhrase.classList.add("info-item");
    userCatchPhrase.innerHTML = `<span>Catchphrase:</span><span>${data.company.catchPhrase}</span>`;
  
    const userAddress = document.createElement("div");
    userAddress.classList.add("info-item", "info-item-address");
    userAddress.innerHTML = `<span>Address:</span><span>${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</span>`;
  
    userInfoContainer.appendChild(userName);
    userInfoContainer.appendChild(userEmail);
    userInfoContainer.appendChild(userPhone);
    userInfoContainer.appendChild(userWebsite);
    userInfoContainer.appendChild(userCompany);
    userInfoContainer.appendChild(userCatchPhrase);
    userInfoContainer.appendChild(userAddress);
  }
  
  createUserInfo(user);
  