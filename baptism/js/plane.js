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
let position = 0;
let wind = [];

function generateWind() {
  wind = [];
  for (let i = 0; i < plane.length; i++) {
    let lineWind = '';
    for (let j = 0; j < 60; j++) {
      lineWind += Math.random() > 0.99 ? '_____' : ' ';
    }
    wind.push(lineWind);
  }
}

function movePlane() {
  generateWind();

  const planeWithWind = plane.map((line, index) => {
    const lineArray = line.split('');
    for (let i = 0; i < wind[index].length; i++) {
      if (lineArray[position + i] === ' ' && wind[index][i] === '_') {
        lineArray[position + i] = wind[index][i];
      }
    }
    return lineArray.join('');
  });

  planeEl.textContent = planeWithWind.join('\n');
}

setInterval(movePlane, 100);