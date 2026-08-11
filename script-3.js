const galleryItems = [
  {
    type: "image",
    title: "Joyce Lotion",
    src: "gallery/joyce-lotion.jpg",
    story: "Expired lotion unknowingly passed around by half of the class.",
    tags: ["IHMCP"],
  },
  {
    type: "image",
    title: "BBM",
    src: "gallery/bbm.png",
    story: "placeholder text.",
    tags: ["Text", "Screenshot"],
  },
  {
    type: "image",
    title: "Hellene and Bela Drawing",
    src: "gallery/bellene-drawing.png",
    story: "add ko raw",
    tags: ["patlings"],
  },
  {
    type: "image",
    title: "girl fix your fucking feet😭",
    src: "gallery/fix-feet.jpg",
    story: "",
    tags: ["Text"],
  },
  {
    type: "image",
    title: "Pose 28",
    src: "gallery/pose28.jpg",
    story: "",
    tags: ["Camera"],
  },
  {
    type: "image",
    title: "Saki",
    src: "gallery/saki.webp",
    story: "",
    tags: ["bup"],
  },

  {
    type: "image",
    title: "Jaeyisna Mii World",
    src: "gallery/jaeyisna-miiworld.jpg",
    tags: ["Game"],
  },

  {
    type: "video",
    title: "Canon Interaction",
    src: "gallery/jeliance.mp4",
    poster: "gallery/jeliance.mp4",
    story: "Jelia and Vance Nintendo Mii Interaction",
    tags: ["Video", "Camera", "Game"],
  },

  {
    type: "image",
    title: "Niko PP",
    src: "gallery/niko-pp.jpg",
    story: "paa ko yan ah syempre hindi yan ano HAHAHAH",
    tags: ["Camera"],
  },

  {
    type: "video",
    title: "Anime Comp",
    src: "gallery/anime.mp4",
    poster: "gallery/anime.mp4",
    tags: ["Video", "Edit"],
  },

  {
    type: "video",
    title: "Reality is Lemons ☆*: .｡. o(≧▽≦)o .｡.:*☆",
    src: "gallery/reality-is-lemons.mp4",
    poster: "gallery/reality-is-lemons.mp4",
    tags: ["Video", "Edit"],
  },

  {
    type: "image",
    title: "Gab Santos FNAF",
    src: "gallery/gsantos-fnaf.jpg",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "Jelia Choke",
    src: "gallery/jelia-choke.jpg",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "Femboy Santos",
    src: "gallery/gsantos-femboy.jpg",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "Vance Peek",
    src: "gallery/vance-peek.jpg",
    tags: ["Photo", "Camera"],
  },

  {
    type: "image",
    title: "Fonsine",
    src: "gallery/fonsine.jpg",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "Marlaika at Gun Point",
    src: "gallery/marlaika-gun.jpg",
    tags: ["Photos", "Camera"],
  },

  {
    type: "image",
    title: "Jelia MOA",
    src: "gallery/jelia-moa.jpg",
    tags: ["Photo", "Camera"],
  },

  {
    type: "image",
    title: "KMS",
    src: "gallery/kms-russ.jpg",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "Bleh",
    src: "gallery/jelia-bleh.jpg",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "IHMCP Letters",
    src: "gallery/imma-letters.jpg",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "17 and 11🥰",
    src: "gallery/17-11.jpg",
    tags: ["Photo", "Camera"],
  },

  {
    type: "image",
    title: "Jelia If She Was From Mandela Catalogue",
    src: "gallery/jelia-mandela.jpg",
    tags: ["Photo"],
  },
];

const audioItems = [
  {
    title: "TANGINAMO VANCE",
    src: "audio/tanginamo-vance.mp3",
  },
  {
    title: "Genuine Noise Pollution",
    src: "audio/noise-pollution.mp4",
  },
];

const gallery = document.getElementById("gallery");
const previewImage = document.getElementById("preview-image");
const previewVideo = document.getElementById("preview-video");
const photoTitle = document.getElementById("photo-title");
const photoStory = document.getElementById("photo-story");
const photoTags = document.getElementById("photo-tags");
const popup = document.getElementById("popup");
const popupMedia = document.getElementById("popup-media");
const close = document.getElementById("close");
const audioGallery = document.getElementById("audio-gallery");

function showMedia(item) {
  photoTitle.textContent = item.title;
  photoStory.textContent = item.story || "No story available.";
  photoTags.innerHTML = "";

  if (item.tags) {
    item.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "tag";
      tagElement.textContent = tag;
      tagElement.addEventListener("click", (event) => {
        event.stopPropagation();
        alert("Tag: " + tag);
      });
      photoTags.appendChild(tagElement);
    });
  }

  if (item.type === "image") {
    previewVideo.pause();
    previewVideo.removeAttribute("src");
    previewVideo.removeAttribute("poster");
    previewVideo.load();
    previewVideo.style.display = "none";
    previewImage.src = item.src;
    previewImage.alt = item.title;
    previewImage.style.display = "block";
  } else if (item.type === "video") {
    previewImage.removeAttribute("src");
    previewImage.style.display = "none";
    previewVideo.src = item.src;
    if (item.poster) {
      previewVideo.poster = item.poster;
    } else {
      previewVideo.removeAttribute("poster");
    }
    previewVideo.style.display = "block";
    previewVideo.load();
  }
}

galleryItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "gallery-item";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;
    img.loading = "lazy";
    card.appendChild(img);
  } else if (item.type === "video") {
    card.classList.add("video-item");

    const video = document.createElement("video");
    video.src = item.src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";

    if (item.poster) {
      video.poster = item.poster;
    }

    card.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    card.appendChild(video);
  }

  card.addEventListener("click", () => {
    showMedia(item);
  });

  gallery.appendChild(card);
});

previewImage.addEventListener("click", () => {
  if (previewImage.src) {
    openPopup("image", previewImage.src);
  }
});

previewVideo.addEventListener("click", () => {
  if (previewVideo.src) {
    openPopup("video", previewVideo.src);
  }
});

function openPopup(type, src) {
  popupMedia.innerHTML = "";

  if (type === "image") {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Full Image";
    popupMedia.appendChild(img);
  } else if (type === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    popupMedia.appendChild(video);
  }

  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  popupMedia.innerHTML = "";
}

close.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

audioItems.forEach((item) => {
  const audioCard = document.createElement("div");
  audioCard.className = "audio-item";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const story = document.createElement("p");
  story.textContent = item.story || "";

  const audio = document.createElement("audio");
  audio.src = item.src;
  audio.controls = true;
  audio.preload = "metadata";

  audioCard.appendChild(title);
  audioCard.appendChild(story);
  audioCard.appendChild(audio);
  audioGallery.appendChild(audioCard);
});
