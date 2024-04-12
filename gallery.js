function showImage(imageSrc) {
  var expandedImgContainer = document.getElementById("expanded_img");
  var img = document.getElementById("image");
  img.src = imageSrc;
  expandedImgContainer.style.display = "block";
}

function closeImage() {
  document.getElementById("expanded_img").style.display = "none";
}
