const contacts = [
    "Kiruba:50110487",
    "Vetri:33484409",
    "Mahi:33734090",
    "Angelin:none",
    "Random:12345678",
  ];
  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  
  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
      const splitContact = contact.split(":");
      if (splitContact[0].toLowerCase() === searchName) {
        para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
        break;
      }
    }
    if (para.textContent === "") {
      para.textContent = `Sorry, ${searchName} is not in the contact list.`;
    }
  });
  