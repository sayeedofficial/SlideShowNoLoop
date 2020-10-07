var count = 1;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (count == 5) {
    count = 0;
  }
  document.getElementById("image").src = `Images/img${++count}.jpg`;
});
document.getElementById("prevBtn").addEventListener("click", () => {
  if (count == 0) {
    count = 5;
  }
  document.getElementById("image").src = `Images/img${--count}.jpg`;
});


