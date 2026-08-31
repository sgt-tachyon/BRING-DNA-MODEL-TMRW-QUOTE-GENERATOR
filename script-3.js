const DRIVE_FOLDER_ID = "1r3x7HkBZ3sTYxtvleYV9QHGcG-PCSdS_";
const GOOGLE_DRIVE_API_KEY = "AIzaSyBXjHcSztCsy5xPcjtevuGlpvecwzNfYdE";

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
    tags: ["Photo", "Camera"],
  },
  {
    type: "image",
    title: "Jelia MOA",
    src: "gallery/jelia-moa.jpg",
    tags: ["Photo", "Camera"],
  },
  { type: "image", title: "KMS", src: "gallery/kms-russ.jpg", tags: ["Photo"] },
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
    tags: ["Photo", "IHMCP"],
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
  {
    type: "image",
    title: "Tomas Simpson",
    src: "gallery/tomas-simpson.png",
    tags: ["Photo", "Text"],
  },
  {
    type: "image",
    title: "Vance Small Glasses",
    src: "gallery/vance-glasses.jpg",
    tags: ["Photo", "Camera"],
  },
  {
    type: "image",
    title: "OBEY",
    src: "gallery/obey.jpg",
    tags: ["Photo", "Camera", "IHMCP"],
  },
  {
    type: "image",
    title: "QUICHO GAINS🔥🔥🔥💪💪",
    src: "gallery/quicho-gains.jpg",
    tags: ["Photo", "Camera"],
  },
  {
    type: "image",
    title: "Nightmare Blunt Rotation",
    src: "gallery/nightmare-blunt-rotation.jpg",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "image",
    title: "Amp",
    src: "gallery/amp.jpg",
    tags: ["Photo", "Camera"],
  },
  {
    type: "image",
    title: "Vance Mog",
    src: "gallery/vance-mog.jpg",
    tags: ["Photo", "Camera", "Mogs"],
  },
  {
    type: "video",
    title: "Jelia's Coming to Town",
    src: "gallery/jelias-coming-to-town.mp4",
    tags: ["Video", "Camera"],
  },
  {
    type: "image",
    title: "Kyle, sino nagtanong?",
    src: "gallery/sino-nagtanong.jpg",
    tags: ["Photo", "Camera", "IHMCP"],
  },
  {
    type: "video",
    title: "Jophers Anime",
    src: "gallery/joph-anime.mp4",
    tags: ["Video", "IHMCP"],
  },
  {
    type: "video",
    title: "Walang Nanay",
    src: "gallery/walang-nanay.mp4",
    tags: ["Video", "IHMCP"],
  },
  {
    type: "image",
    title: "Gabriel Santos Kawaii Nap",
    src: "gallery/gsantos-sleep.jpg",
    tags: ["Video", "Camera"],
  },
  {
    type: "image",
    title: "Warrian Javert",
    src: "gallery/roblox-javert.png",
    tags: ["Photo", "Game", "IHMCP"],
  },
  {
    type: "image",
    title: "3 Cheese Panini",
    src: "gallery/3cheese-panini.png",
    tags: ["Photo", "Game", "IHMCP"],
  },
  {
    type: "image",
    title: "My Thursday",
    src: "gallery/my-thursday.jpg",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "🧍‍♀️",
    src: "gallery/jelia-stand.png",
    tags: ["Photo", "Camera"],
  },
  {
    type: "image",
    title: "Malate Fire",
    src: "gallery/malate-fire.jpg",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "image",
    title: "Triple Mog",
    src: "gallery/triple-mog.png",
    tags: ["Photo", "Camera", "Mogs"],
  },
  {
    type: "image",
    title: "No To Divorce Bill😝",
    src: "gallery/no-divorce.jpg",
    tags: ["Photo", "Camera"],
  },
  {
    type: "image",
    title: "Lol me su ugly XDDDDDD",
    src: "gallery/me-su-ugly.jpg",
    tags: ["Photo", "Text"],
  },
  {
    type: "video",
    title: "Niko Edit",
    src: "gallery/darna.mp4",
    tags: ["Video", "Edit"],
  },
  {
    type: "image",
    title: "Not Like Usual Self",
    src: "gallery/usual-self.png",
    tags: ["Photo"],
  },
  {
    type: "video",
    title: "Omegaverse",
    src: "gallery/omegaverse.mp4",
    tags: ["Video", "Edit"],
  },
  {
    type: "image",
    title: "RJ 33/alpha/🥀⛓️/bad boy",
    src: "gallery/rj-alpha.jpg",
    tags: ["Photo"],
  },
  {
    type: "video",
    title: "Jelia and vance Dance",
    src: "gallery/jeliance-dance.mp4",
    tags: ["Video", "Camera"],
  },
  {
    type: "image",
    title: "Aisac Peek",
    src: "gallery/aisac-peek.jpg",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "i love da beach",
    src: "gallery/love-da-beach.jpg",
    tags: ["Photo"],
  },
  {
    type: "pdf",
    title: "Jaeyisna Covid Comic",
    src: "pdf/jelia-covid.pdf",
    pages: 4,
    tags: ["PDF"],
  },
  { type: "pdf", title: "Saki Jamboard", src: "pdf/saki.pdf", tags: ["PDF"] },
  {
    type: "image",
    title: "Jaeyisna Grab",
    src: "gallery/jaeyisna-grab.jpg",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "Buff Marlaika",
    src: "gallery/buff-marlaika.jpg",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "Zed Tria",
    src: "gallery/zed-tria.png",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "IMMA Grade 3 Niko, Vance, and Ian",
    src: "gallery/imma-g3.png",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "image",
    title: "Immaculate",
    src: "gallery/immaculate.png",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "Quickie",
    src: "gallery/quickie.png",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "Javert Sans",
    src: "gallery/javert-sans.png",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "image",
    title: "Quicho Ackshually🤓☝️",
    src: "gallery/quicho-akshually.png",
    tags: ["Photo"],
  },
  {
    type: "video",
    title: "Marlaika Factgot.mp4",
    src: "gallery/marlaika-factgot.mp4",
    tags: ["Video", "IHMCP"],
  },
  {
    type: "video",
    title: "Marlaika Rose",
    src: "gallery/rose.mp4",
    tags: ["Video"],
  },
  {
    type: "image",
    title: "Anak Paiwan Ka",
    src: "gallery/anak-paiwan-ka.png",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "image",
    title: "Emo Aisac",
    src: "gallery/emo-aisac.png",
    tags: ["Photo"],
  },
  {
    type: "image",
    title: "ID Pic",
    src: "gallery/id-pic.png",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "image",
    title: "Damn GC Dead Asf",
    src: "gallery/this-gc-dead.png",
    tags: ["Photo", "Text"],
  },
  {
    type: "image",
    title: "Retreating",
    src: "gallery/retreating.png",
    tags: ["Photo"],
  },
  {
    type: "video",
    title: "I Was Busy Thinking Bout",
    src: "gallery/busy-thinking-bout.mp4",
    tags: ["Video"],
  },
  {
    type: "image",
    title: "Warrikk Tied-up",
    src: "gallery/warrikk-tied.png",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "video",
    title: "STI Intro",
    src: "gallery/sti-intro.mp4",
    tags: ["Video"],
  },
  { type: "video", title: "2838", src: "gallery/2838.mp4", tags: ["Video"] },
  {
    type: "video",
    title: "Hi Bring DNA Model Tmrw",
    src: "gallery/hi-dna-model.mp4",
    tags: ["Video"],
  },
  {
    type: "image",
    title: "Alfonsiel",
    src: "gallery/alfonsiel.png",
    tags: ["Photo", "IHMCP"],
  },
  {
    type: "image",
    title: "Marlaika Jail",
    src: "gallery/marlaika-jail.png",
    tags: ["Photo", "IHMCP"],
  },

  {
    type: "image",
    title: "😜",
    src: "gallery/vance-bleh.png",
    tags: ["Photo", "IHMCP"],
  },

  {
    type: "image",
    title: "Diba Si Maddox Toh",
    src: "gallery/seth-maddox.png",
    tags: ["Photo", "Text"],
  },

  {
    type: "image",
    title: "My Twitter Issue.",
    src: "gallery/my-twitter-issue.png",
    tags: ["Photo", "IHMCP"],
  },

  {
    type: "image",
    title: "Santos Cute",
    src: "gallery/gab-cute.png",
    tags: ["Photo", "Text"],
  },

  {
    type: "image",
    title: "Kyle IJBOL",
    src: "gallery/ijbol.jpg",
    tags: ["Photo", "Text"],
  },

  {
    type: "image",
    title: "Oppressed Activist",
    src: "gallery/oppressed-activist.png",
    tags: ["Photo", "Text"],
  },

  {
    type: "image",
    title: "My Wednesday",
    src: "gallery/my-wednesday.png",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "Castro is King🔥",
    src: "gallery/castro-king.png",
    tags: ["Photo", "IHMCP"],
  },

  {
    type: "image",
    title: "Ash QT",
    src: "gallery/ash-qt.png",
    tags: ["Photo", "IHMCP"],
  },

  {
    type: "image",
    title: "Calc Feet",
    src: "gallery/calc-feet.png",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "yES ANAK",
    src: "gallery/yes-anak.jpg",
    tags: ["Photo", "IHMCP"],
  },

  {
    type: "image",
    title: "Offline Texting",
    src: "gallery/offline-texting.png",
    tags: ["Photo"],
  },

  {
    type: "image",
    title: "I CANNOT STOP LAUGHING AT THUS.....☠️☠️☠️☠️☠️👻☠️",
    src: "gallery/jaeyisna-help.png",
    tags: ["Photo", "Camera"],
  },

  {
    type: "video",
    title: "Vitor Edit",
    src: "gallery/vitor-edit.mp4",
    tags: ["Video", "Edit"],
  },

  {
    type: "image",
    title: "Nagaaral Ka Pa Ba",
    src: "gallery/nagaaral-ka-paba.png",
    tags: ["Photo", "Text"],
  },

  {
    type: "image",
    title: "Valentines Promo",
    src: "gallery/valentines-promo.png",
    tags: ["Photo"],
  },

  {
    type: "video",
    title: "Niko Pigtails",
    src: "gallery/niko-pigtail.mp4",
    tags: ["Video", "Edit"],
  },

  {
    type: "video",
    title: "Warrikk Glitch",
    src: "gallery/warrikk-glitch.mp4",
    tags: ["Video"],
  },

  {
    type: "video",
    title: "Kycide",
    src: "gallery/kycide.mp4",
    tags: ["Video", "Edit"],
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

async function getAllDriveFiles() {
  if (
    !GOOGLE_DRIVE_API_KEY ||
    GOOGLE_DRIVE_API_KEY === "YOUR_NEW_API_KEY_HERE"
  ) {
    throw new Error("Google Drive API key is missing.");
  }

  const filesByName = new Map();
  const foldersToScan = [DRIVE_FOLDER_ID];
  const scannedFolders = new Set();

  while (foldersToScan.length > 0) {
    const folderId = foldersToScan.shift();

    if (scannedFolders.has(folderId)) {
      continue;
    }

    scannedFolders.add(folderId);

    let pageToken = null;

    do {
      const url = new URL("https://www.googleapis.com/drive/v3/files");

      url.searchParams.set("q", `'${folderId}' in parents and trashed = false`);

      url.searchParams.set(
        "fields",
        "nextPageToken,files(id,name,mimeType,resourceKey)",
      );

      url.searchParams.set("pageSize", "1000");
      url.searchParams.set("supportsAllDrives", "true");
      url.searchParams.set("includeItemsFromAllDrives", "true");
      url.searchParams.set("key", GOOGLE_DRIVE_API_KEY);

      if (pageToken) {
        url.searchParams.set("pageToken", pageToken);
      }

      const response = await fetch(url);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Google Drive API error ${response.status}: ${errorText}`,
        );
      }

      const data = await response.json();
      const files = data.files || [];

      for (const file of files) {
        if (file.mimeType === "application/vnd.google-apps.folder") {
          foldersToScan.push(file.id);
          continue;
        }

        if (!filesByName.has(file.name)) {
          filesByName.set(file.name, file);
        }
      }

      pageToken = data.nextPageToken || null;
    } while (pageToken);
  }

  return filesByName;
}

function getDriveImageUrl(file) {
  return (
    "https://drive.google.com/thumbnail?id=" +
    encodeURIComponent(file.id) +
    "&sz=w2000"
  );
}

function getDriveFileUrl(file) {
  return (
    "https://drive.google.com/uc?export=download&id=" +
    encodeURIComponent(file.id)
  );
}

async function resolveDriveMedia() {
  const driveFiles = await getAllDriveFiles();

  for (const item of galleryItems) {
    if (item.type !== "image" && item.type !== "pdf") {
      continue;
    }

    const filename = item.src.split("/").pop();
    const file = driveFiles.get(filename);

    if (!file) {
      console.warn("Google Drive file not found:", filename);
      continue;
    }

    if (item.type === "image") {
      item.src = getDriveImageUrl(file);
    } else if (item.type === "pdf") {
      item.src = getDriveFileUrl(file);
    }
  }

  return driveFiles;
}

const driveMediaReady = resolveDriveMedia().catch((error) => {
  console.error("Could not load Google Drive media:", error);

  alert(
    "Google Drive could not be loaded. Open the browser console (F12) for details.",
  );

  throw error;
});

const mediaGallery = document.getElementById("media-gallery");
const pdfGallery = document.getElementById("pdf-gallery");
const galleryMediaTab = document.getElementById("gallery-media-tab");
const galleryPdfTab = document.getElementById("gallery-pdf-tab");
const previewImage = document.getElementById("preview-image");
const previewVideo = document.getElementById("preview-video");
const photoTitle = document.getElementById("photo-title");
const photoStory = document.getElementById("photo-story");
const photoTags = document.getElementById("photo-tags");
const popup = document.getElementById("popup");
const popupMedia = document.getElementById("popup-media");
const close = document.getElementById("close");
const audioGallery = document.getElementById("audio-gallery");

function updateInfo(item) {
  photoTitle.textContent = item.title;
  photoStory.textContent = item.story || "";
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
}

function hideAllPreviewMedia() {
  previewImage.style.display = "none";
  previewVideo.style.display = "none";
}

function showMedia(item) {
  updateInfo(item);
  hideAllPreviewMedia();

  previewVideo.pause();
  previewVideo.removeAttribute("src");
  previewVideo.removeAttribute("poster");
  previewVideo.load();

  previewImage.removeAttribute("src");

  if (item.type === "image") {
    previewImage.src = item.src;
    previewImage.alt = item.title;
    previewImage.style.display = "block";
  } else if (item.type === "video") {
    previewVideo.src = item.src;
    previewVideo.style.display = "block";
    previewVideo.load();
  }
}

function openPdf(item) {
  window.open(item.src, "_blank", "noopener,noreferrer");
}

async function createMediaCard(item) {
  if (item.type === "image") {
    await driveMediaReady;
  }

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

  mediaGallery.appendChild(card);
}

async function createPdfCard(item) {
  await driveMediaReady;

  const card = document.createElement("div");
  card.className = "pdf-card";

  const title = document.createElement("div");
  title.className = "pdf-card-title";
  title.textContent = item.title;

  card.appendChild(title);

  card.addEventListener("click", () => {
    openPdf(item);
  });

  pdfGallery.appendChild(card);
}

async function createGallery() {
  for (const item of galleryItems) {
    if (item.type === "pdf") {
      await createPdfCard(item);
    } else {
      await createMediaCard(item);
    }
  }
}

function showGallerySection(section) {
  const showMedia = section === "media";

  mediaGallery.style.display = showMedia ? "grid" : "none";
  pdfGallery.style.display = showMedia ? "none" : "flex";

  galleryMediaTab.classList.toggle("active", showMedia);
  galleryPdfTab.classList.toggle("active", !showMedia);
}

galleryMediaTab.addEventListener("click", () => {
  showGallerySection("media");
});

galleryPdfTab.addEventListener("click", () => {
  showGallerySection("pdf");
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

previewImage.addEventListener("click", () => {
  if (previewImage.src) {
    openPopup("image", previewImage.src);
  }
});

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

createGallery();
showGallerySection("media");
