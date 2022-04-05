const buttonDash = document.getElementById("dash_btn");
const showPanel = document.querySelector(".dash-clicked");

buttonDash.addEventListener("click", () => {
	showPanel.classList.toggle("visible");
});
