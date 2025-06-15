/* main js */
(function ($) {
  ("use strict");

  /* Improved Loader */
  $(document).ready(function () {
    let loaderTimeout;
    let isLoaderVisible = false;

    // Show loader function
    function showLoader() {
      if (!isLoaderVisible) {
        isLoaderVisible = true;
        $(".bix-loader").stop(true, false).fadeIn("fast");
      }
    }

    // Hide loader function with safety timeout
    function hideLoader(delay = 0) {
      clearTimeout(loaderTimeout);
      loaderTimeout = setTimeout(function () {
        isLoaderVisible = false;
        $(".bix-loader").stop(true, false).fadeOut("slow");
      }, delay);
    }

    // Force hide loader (emergency fallback)
    function forceHideLoader() {
      clearTimeout(loaderTimeout);
      isLoaderVisible = false;
      $(".bix-loader").stop(true, false).hide();
    }

    // Initial page load
    $(window).on("load", function () {
      hideLoader(100);
    });

    // Handle clicks on links
    $(document).on("click", "a[href]", function (e) {
      const href = $(this).attr("href");

      // Don't show loader for hash links, mailto, tel, etc.
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      showLoader();
      hideLoader(500); // Longer delay for navigation
    });

    // Browser navigation
    $(window).on("popstate", function () {
      showLoader();
      hideLoader(300);
    });

    // Hash changes
    $(window).on("hashchange", function () {
      hideLoader(100);
    });

    // AJAX completion
    $(document).ajaxComplete(function () {
      hideLoader(200);
    });

    // Safety net - force hide loader after 3 seconds
    $(document).on("click", "a[href]", function () {
      setTimeout(forceHideLoader, 3000);
    });

    // Also hide on page visibility change (when user comes back to tab)
    $(document).on("visibilitychange", function () {
      if (!document.hidden) {
        hideLoader(100);
      }
    });
  });

  /*-- On click menu scroll section to section -- */
  // Cache selectors
  var lastId,
    topMenu = $(".bix-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind click handler to menu items
  menuItems.on("click", function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      },
      300
    );
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    }
  });

  /* Hero parallax mouse */
  if (matchMedia("only screen and (min-width: 991px)").matches) {
    $(window).on("mousemove", function (e) {
      var w = $(window).width();
      var h = $(window).height();
      var offsetX = 0.5 - e.pageX / w;
      var offsetY = 0.5 - e.pageY / h;

      $(".hero-parallax").each(function (i, el) {
        var offset = parseInt($(el).data("offset"));
        var translate =
          "translate3d(" +
          Math.round(offsetX * offset) +
          "px," +
          Math.round(offsetY * offset) +
          "px, 0px)";

        $(el).css({
          "-webkit-transform": translate,
          transform: translate,
          "moz-transform": translate,
        });
      });
    });
  }
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };

  /* Portfolio */
  $(function () {
    var filterList = {
      init: function () {
        $(".item-grid").mixItUp({
          selectors: {
            target: ".item",
            filter: ".filter",
          },
          load: {
            filter: "all",
          },
        });
      },
    };
    filterList.init();
  });

  /* Testimonials */
  $(".testimonials-slider").owlCarousel({
    loop: true,
    margin: 24,
    responsiveClass: true,
    dots: false,
    nav: false,
    pagination: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  /* Blog */
  $(".bix-blog-wrap").owlCarousel({
    loop: true,
    margin: 24,
    responsiveClass: true,
    dots: false,
    nav: false,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  /* Tab to top */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  /* Skill Progress */
  var progress = $("#progress");
  $(window).scroll(function () {
    var a = 0;
    var b = 0;
    var oTop = 0;
    if (progress.length) {
      var oTop = progress.offset().top - window.innerHeight;
      if (b == 0 && $(window).scrollTop() > oTop) {
        var max = -219.99078369140625;
        forEach(
          document.querySelectorAll(".progress"),
          function (index, value) {
            var percent = value.getAttribute("data-progress");
            value
              .querySelector(".fill")
              .setAttribute(
                "style",
                "stroke-dashoffset: " + ((100 - percent) / 100) * max
              );
            value.querySelector(".value").innerHTML = percent + "%";
          }
        );

        b = 1;
      }
    }
  });

  /* Tools Sidebar */
  $(".bix-tools-sidebar-toggle").on("click", function () {
    $(".bix-tools-sidebar").addClass("open-tools");
    $(".bix-tools-sidebar-overlay").fadeIn();
    $(".bix-tools-sidebar-toggle").hide();
  });
  $(".bix-tools-sidebar-overlay, .close-tools").on("click", function () {
    $(".bix-tools-sidebar").removeClass("open-tools");
    $(".bix-tools-sidebar-overlay").fadeOut();
    $(".bix-tools-sidebar-toggle").fadeIn();
  });

  /* color show */
  $(".bix-color li").on("click", function () {
    $("li").removeClass("active-variant");
    $(this).addClass("active-variant");
  });

  $(".color-primary").on("click", function () {
    $("#add_class").remove();
  });

  $(".color-1").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-1.css" id="add_class">'
    );
  });
  $(".color-2").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-2.css" id="add_class">'
    );
  });
  $(".color-3").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-3.css" id="add_class">'
    );
  });
  $(".color-4").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-4.css" id="add_class">'
    );
  });
  $(".color-5").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-5.css" id="add_class">'
    );
  });
  $(".color-6").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-6.css" id="add_class">'
    );
  });
  $(".color-7").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-7.css" id="add_class">'
    );
  });
  $(".color-8").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-8.css" id="add_class">'
    );
  });
  $(".color-9").on("click", function () {
    $("#add_class").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-9.css" id="add_class">'
    );
  });

  /* RTL-LTR Modes */
  $(".bix-tools-rtl .bix-tools-item").on("click", function () {
    $(".active-mode").removeClass("active-mode");
    $(this).addClass("active-mode");
  });
  $(".ltr").on("click", function () {
    $("#add_rtl").remove();
  });
  $(".rtl").on("click", function () {
    $("#add_rtl").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/rtl.css" id="add_rtl">'
    );
  });

  /*Dark Light Modes */
  $(".bix-tools-dark .bix-tools-item").on("click", function () {
    $(".active-dark-mode").removeClass("active-dark-mode");
    $(this).addClass("active-dark-mode");
  });
  $(".light").on("click", function () {
    $("#add_dark").remove();
  });
  $(".dark").on("click", function () {
    $("#add_dark").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/dark.css" id="add_dark">'
    );
  });

  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };

  $(document).ready(function () {
    $(".bix-tab a").click(function () {
      $(".tab").removeClass("tab-active");
      $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass(
        "tab-active"
      );
      $(".bix-tab").removeClass("active");
      $(this).parent(".bix-tab").addClass("active");
    });
    $(".bix-tab-popup a").click(function () {
      $(".tab-popup").removeClass("tab-active-popup");
      $(
        ".tab-popup[data-id-popup='" + $(this).attr("data-id-popup") + "']"
      ).addClass("tab-active-popup");
      $(".bix-tab-popup").removeClass("active");
      $(this).parent(".bix-tab-popup").addClass("active");
    });
  });

  /**  Custom Popup  **/
  $(".modal-trigger").on("click", function () {
    $(".bix-modal-overlay").fadeIn();
    $(".bix-modal").fadeIn();
  });
  $(".bix-modal-overlay, .bix-close-modal").on("click", function () {
    $(".bix-modal-overlay").fadeOut();
    $(".bix-modal").fadeOut();
  });
})(jQuery);
