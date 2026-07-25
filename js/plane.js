const plane = [
    "                      ___                                          ",
    "                      \\\ \\                                         ",
    "                       \\\ `\\                                       ",
    "    ___                 \\\  \\                                      ",
    "   |    \\                \\\  `\\                                    ",
    "   |_____\\                \\    \\                                   ",
    "   |______\\                \\    `\\                                 ",
    "   |       \\                \\     \\                                ",
    "   |      __\\__---------------------------------._.                ",
    " __|---~~~__o_o_o_o_o_o_o_o_o_o_o_o_o_o_o_o_o_o_[][\\__             ",
    "|___                         /~      )                \\          ",
    "    ~~~---..._______________/      ,/_________________/            ",
    "                           /      /                                ",
    "                          /     ,/                                 ",
    "                         /     /                                   ",
    "                        /    ,/                                    ",
    "                       /    /                                      ",
    "                      //  ,/                                       ",
    "                     //  /                                         ",
    "                    // ,/                                          ",
    "                   //_/                                            "
];

const planeEl = document.getElementById('plane-art');
const LINE_WIDTH = 70;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// wind streaks flying right-to-left past the plane
let streaks = [];
let bobT = 0;
let flying = false;

function spawnStreak() {
  streaks.push({
    line: Math.floor(Math.random() * plane.length),
    x: LINE_WIDTH + Math.floor(Math.random() * 15),
    len: 3 + Math.floor(Math.random() * 6),
    speed: 2 + Math.floor(Math.random() * 3),
  });
}

function renderPlane() {
  const rows = plane.map(line => line.padEnd(LINE_WIDTH, ' ').split(''));
  streaks.forEach(s => {
    const row = rows[s.line];
    for (let i = 0; i < s.len; i++) {
      const x = s.x + i;
      if (x >= 0 && x < LINE_WIDTH && row[x] === ' ') {
        row[x] = '_';
      }
    }
  });
  planeEl.textContent = rows.map(r => r.join('')).join('\n');
}

function tick() {
  streaks.forEach(s => { s.x -= s.speed; });
  streaks = streaks.filter(s => s.x + s.len > 0);
  if (Math.random() > 0.55) spawnStreak();
  renderPlane();
}

renderPlane();

if (!reducedMotion) {
  setInterval(tick, 90);

  // gentle bobbing while idle
  setInterval(() => {
    if (flying) return;
    bobT += 0.08;
    planeEl.style.transform = 'translateY(' + (Math.sin(bobT) * 5).toFixed(1) + 'px)';
  }, 40);
}

// takeoff animation on language click
function flyAway() {
  if (flying) return;
  flying = true;

  if (reducedMotion) {
    planeEl.remove();
    return;
  }

  // lock current height so the layout can collapse smoothly under the flying plane
  planeEl.style.maxHeight = planeEl.offsetHeight + 'px';
  planeEl.style.transition = 'transform 1.1s ease-in, max-height 0.6s ease-in-out 0.4s, margin 0.6s ease-in-out 0.4s';
  void planeEl.offsetHeight; // force reflow so maxHeight transition starts from the locked value

  planeEl.style.transform = 'translateX(' + (window.innerWidth + 200) + 'px) translateY(-120px) rotate(-6deg)';
  planeEl.style.maxHeight = '0';
  planeEl.style.margin = '0';

  setTimeout(() => planeEl.remove(), 1200);
}

document.addEventListener('DOMContentLoaded', function() {
  const langButtons = document.querySelectorAll('.lang-button');
  langButtons.forEach(button => {
    button.addEventListener('click', flyAway);
  });
});
