const galleryItems = [
  {
    title: "Joyce Lotion",
    image: "gallery/joyce-lotion.jpg",
    story: "Expired lotion unknowingly passed around by half of the class.",
    tags: ["IHMCP"],
  },

  {
    title: "BBM",
    image: "gallery/bbm.png",
    story: "placeholder text.",
    tags: ["Text", "Screenshot"],
  },

  {
    title: "placeholder",
    image: "gallery/glasses-dog.jpg",
    story: "placeholder text.",
    tags: ["burp", "burp", "butp"],
  },
];

const gallery = document.getElementById("gallery");
const previewImage = document.getElementById("preview-image");
const photoTitle = document.getElementById("photo-title");
const photoStory = document.getElementById("photo-story");
const photoTags = document.getElementById("photo-tags");

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

const close = document.getElementById("close");

galleryItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "gallery-item";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  card.appendChild(img);
  gallery.appendChild(card);

  card.addEventListener("click", function () {
    previewImage.src = item.image;
    popupImg.src = item.image;
    photoTitle.textContent = item.title;
    photoStory.textContent = item.story;
    photoTags.innerHTML = "";

    item.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "tag";
      tagElement.textContent = tag;

      tagElement.onclick = function () {
        alert("Tag: " + tag);
      };
      photoTags.appendChild(tagElement);
    });
  });
});

previewImage.onclick = function () {
  if (previewImage.src) {
    popup.style.display = "flex";
  }
};

close.onclick = function () {
  popup.style.display = "none";
};

popup.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};
