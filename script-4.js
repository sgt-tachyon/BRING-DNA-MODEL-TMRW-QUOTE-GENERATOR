document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.parentElement;
    document.querySelectorAll(".dropdown").forEach((item) => {
      if (item !== dropdown) {
        item.classList.remove("open");
      }
    });
    dropdown.classList.toggle("open");
  });
});

const dreams = {
  vance1: {
    title: "Vance - Dream #1",
    text: "Placeholder.",
  },
  vance2: {
    title: "Vance - Dream #2",
    text: "Placeholder.",
  },
  vance3: {
    title: "Vance - Dream #3",
    text: "Placeholder.",
  },
  jelia1: {
    title: "Jelia - Dream #1",
    text: "Placeholder.",
  },
  jelia2: {
    title: "Jelia - Dream #2",
    text: "Placeholder.",
  },
  jelia3: {
    title: "Jelia - Dream #3",
    text: "Placeholder.",
  },
  niko1: {
    title: "Niko - Dream #1",
    text: `MAPUA SPOOKY ROBLOX CHALLENGE/EVENT

i had a dream where i was at the gym, it didn't look like the gym at mapua intra at but dream me recognized it as that. suddenly, there was an announcement blasting in the speakers talking about an event. i forgot what the event was but we were suddenly given a number of circus peanuts and i forgot what they were for but shortly after we took them, a flood of zombie-like people started to run into the gym. i got suddenly teleported into a house and vance and jelia were there too. you guys were using my stuff to kill the zombies or whatever because they were there fsr and there were no actual usable weapons either 😭 fsr, we didn't really take it that serious bv we were still laughing and making jokes and one of the "weapons" we had was a perfume bottle and i was like "let me smell" 💀 i also wasn't fighting either for obvious dream me reasons (i was too scared to get close to the zombies) so you guys were doing all the fighting and actively protecting me while i was pointing at possible weapons the whole time💀💀💀
    
RUSSIAN MEN FUCKING KILLS JELIA AND VANCE

okay so the whole zombie things comes in like, levels. the first levels were zombies and you guys were easily whacking them. but then it suddenly became 2 russian people. we all stopped joking this time because somehow, in that dream, we all collectively knew that we're in a more serious situation. they weren't zombies but when the guy saw us, he immediately pulled out a gun and killed us. we all revived for the second round but there weren't any zombies anymore, just the same 2 russians. the guy sees us again and pulls a gun on us. he points it at vance first and i was trying to pull the gun away from the direction of vance's head but he was too strong ALSO WALANG GINAGAWA SI VANCE PARA UMIWAS GAGO NAKATAYO LANG SIYA. the moment the guy pulls the trigger on vance, the dreams automatically censors it by cutting to a shot of the house outside. 3 gunshots were heard. im the only one who revived this time. i immediately spawn to behind the 2 russians. the guy, as always, sees me and begins shooting at me. i tried hiding behind the russian woman but she didn't react to the bullets at all. he kept firing and i could actually feel what it was like to be a target of the cartel jesus fucking christ. the next level starts and this time, i had a gun. i hid behind the russian woman and fired but they weren't doing any damage at all. the guy starts firing at me. i could FEEL the gunshots btw.
    
MAPUA CHALLENGE FUCKING KILLS VTUBERS

i died and was suddenly spectating other people playing. i was looking at vtubers as their irl self and fsr dream me instantly knew which person was which vtuber. they were like, getting seriously injured and one vtuber, gigi murin(who was the only one using their vtuber avatar fsr, just more realistic) got her legs seriously injured and honestly looked like she was so disheveled and was in such disarray.`
  },
  niko2: {
    title: "Niko - Dream #2",
    text: "Placeholder text.",
  },
  niko3: {
    title: "Niko - Dream #3",
    text: "Placeholder text.",
  },
};

function showDream(id) {
  const dream = dreams[id];

  if (!dream) return;

  document.getElementById("dream-title").textContent = dream.title;
  document.getElementById("dream-text").innerHTML = dream.text.replace(
    /\n/g,
    "<br>",
  );
}

let lastScroll = 0;

const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".dream-sidebar");

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;

  if (current > lastScroll && current > 80) {
    navbar.classList.add("hide");
    sidebar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("hide");
    sidebar.classList.remove("nav-hidden");
  }

  lastScroll = current;
});
