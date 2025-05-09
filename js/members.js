const profileDisplay = document.getElementById('profile-display');
const profilePic = document.getElementById('profile-pic');
const profileDesc = document.getElementById('profile-desc');

const profiles = {
  yuta: {
    img: 'images/yuta.png',
    desc: 'Nah id Win',
  },
  rosie: {
    img: 'images/rosie.png',
    desc: 'literally a rose',
  },
  zqmbie: {
    img: 'images/zqmbie.png',
    desc: 'rides camels',
  },
  maoshroom: {
    img: 'images/mao.png',
    desc: 'stimming and eating lots of chicken',
  }
  
};

Object.values(profiles).forEach(profile => {
  const img = new Image();
  img.src = profile.img;
});

let currentProfile = null;

document.querySelectorAll('.profile-name').forEach(nameEl => {
  nameEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = nameEl.dataset.name;
    if (currentProfile === key) {
      profileDisplay.style.display = 'none';
      profilePic.src = '';
      profileDesc.textContent = '';
      currentProfile = null;
    } else {
      const profile = profiles[key];
      if (profile) {
        profilePic.src = profile.img;
        profileDesc.textContent = profile.desc;
        profilePic.alt = `${key} profile picture`;
        profileDisplay.style.display = 'flex';
        currentProfile = key;
      }
    }
  });
});
