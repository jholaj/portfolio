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
    bobT += 0.08;
    planeEl.style.transform = 'translateY(' + (Math.sin(bobT) * 5).toFixed(1) + 'px)';
  }, 40);
}
