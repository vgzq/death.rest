const profileDisplay = document.getElementById('profile-display');
const profileLink = document.getElementById('profile-link');
const profilePic = document.getElementById('profile-pic');
const profileDesc = document.getElementById('profile-desc');

const profiles = {
  yuta: {
    img: 'images/yuta.png',
    desc: 'Nah id Win',
    link: 'https://refrain.lol'
  },
  rosie: {
    img: 'images/rosie.png',
    desc: 'literally a rose',
    link: 'https://crier.lol'
  },
  zqmbie: {
    img: 'images/zqmbie.png',
    desc: 'rides camels',
    link: 'https://guns.lol/zpmbiezz'
  },
  maoshroom: {
    img: 'images/mao.png',
    desc: 'stimming and eating lots of chicken',
    link: 'https://x.com/Le_Maoshroom'
  },
  krozeii: {
    img: 'images/krozeii.png',
    desc: 'They call me "A young prodigy"',
    link: 'https://guns.lol/krozeii'
  }
  
};

// Preload images
Object.values(profiles).forEach(profile => {
  const img = new Image();
  img.src = profile.img;
});

let currentProfile = null;

document.querySelectorAll('.profile-name').forEach(nameEl => {
  nameEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = nameEl.dataset.name;
    const profile = profiles[key];

    if (!profile) return;

    if (currentProfile === key) {
      profileDisplay.style.display = 'none';
      profilePic.src = '';
      profileDesc.textContent = '';
      profileLink.removeAttribute('href');
      currentProfile = null;
    } else {
      profilePic.src = profile.img;
      profileDesc.textContent = profile.desc;
      profilePic.alt = `${key} profile picture`;
      profileLink.href = profile.link;
      profileDisplay.style.display = 'flex';
      currentProfile = key;
    }
  });
});
