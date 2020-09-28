$(".check").on("change", function () {
  var empty = $(".check");
  for (let i = 0; i < empty.length; i++) {
    if (empty[i].checked) {
      $(empty[i]).closest(".item").fadeOut(500);
      setTimeout(() => {
        $(empty[i]).closest(".item").remove();
      }, 300);
    }
  }
});
