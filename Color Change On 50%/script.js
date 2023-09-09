var rect = document.querySelector("#center");
console.log(rect.style.width);
rect.addEventListener("mousemove", function (details) {
  var rectangleLocation = rect.getBoundingClientRect();
  //   console.log("Width is ", rectangleLocation.width); // gives width of the rectangle
  var insideLocation = details.x - rectangleLocation.left;
  //   console.log(insideLocation);
  var FullWidth = rectangleLocation.width;
  if (insideLocation < FullWidth / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      FullWidth / 2,
      255,
      0,
      insideLocation
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      FullWidth / 2,
      FullWidth,
      0,
      255,
      insideLocation
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor},0.9)`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});

//Mouse Rectangle pe aaya;
