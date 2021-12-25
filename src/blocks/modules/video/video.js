let videoPlayButton,
    videoWrapper = document.getElementsByClassName("section-video")[0],
    video = document.getElementsByTagName("video")[0],
    videoMethods = {
        renderVideoPlayButton: function () {
            if (videoWrapper.contains(video)) {
                this.formatVideoPlayButton();
                video.classList.add("has-media-controls-hidden");
                videoPlayButton = document.getElementsByClassName(
                    "video-overlay-play-button"
                )[0];
                videoPlayButton.addEventListener(
                    "click",
                    this.hideVideoPlayButton
                );
            }
        },

        formatVideoPlayButton: function () {
            videoWrapper.insertAdjacentHTML(
                "beforeend",
                '\
                <svg class="video-overlay-play-button" width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">\
                  <path d="M86 226.841V79.8666C86 70.9874 86 66.5479 88.8978 64.7975C91.7956 63.0471 95.7252 65.1131 103.584 69.2452L248.979 145.688C258.164 150.517 262.756 152.931 262.696 156.622C262.637 160.312 257.968 162.577 248.632 167.106L103.238 237.638C95.4993 241.392 91.6302 243.269 88.8151 241.506C86 239.742 86 235.442 86 226.841Z" fill="#BCE2C1" fill-opacity="0.8"/>\
                  <circle cx="153" cy="153" r="149" stroke="#BCE2C1" stroke-width="8"/>\
                </svg>\
            '
            );
        },

        hideVideoPlayButton: function () {
            video.play();
            videoPlayButton.classList.add("is-hidden");
            video.classList.remove("has-media-controls-hidden");
            video.setAttribute("controls", "controls");
        }
    };

videoMethods.renderVideoPlayButton();