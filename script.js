document.addEventListener("DOMContentLoaded", function () {
    const infoButtons = document.querySelectorAll(".info-btn");

    if (window.innerWidth < 768) {
        infoButtons.forEach((button) => {
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                const apkItem = this.closest(".apk-item");
                const dropdown = apkItem.querySelector(".info-dropdown");

                document.querySelectorAll(".info-dropdown").forEach((d) => {
                    if (d !== dropdown) {
                        d.classList.remove("active");
                    }
                });

                dropdown.classList.toggle("active");
            });
        });

        document.addEventListener("click", function () {
            document.querySelectorAll(".info-dropdown").forEach((d) => {
                d.classList.remove("active");
            });
        });
    }
});
