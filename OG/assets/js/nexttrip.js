var trips = [
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0]
];
var next;
var today = new Date();

trips[0][0] = new Date(2020, 8, 13)
trips[0][1] = "<b>Willangi</b><br />12th - 13th September 2020<br />Trip Leader: Aaron "
trips[1][0] = new Date(2020, 8, 27)
trips[1][1] = "<b>Barossa</b><br />26th - 27th September, 2020<br />Trip Leader: Neil "
trips[2][0] = new Date(2020, 9, 5)
trips[2][1] = "<b>Warraweena</b><br />3rd - 5th October, 2020<br />Trip Leader: Mike "
trips[3][0] = new Date(2020, 9, 25)
trips[3][1] = "<b>katarapko</b><br />24th - 25th October, 2020<br />Trip Leader: Warren "
trips[4][0] = new Date(2020, 10, 15)
trips[4][1] = "<b>Bushys</b><br />14th - 15th November, 2020<br />Trip Leader: Chris "
trips[5][0] = new Date(2020, 10, 29)
trips[5][1] = "<b>Deep Creek</b><br />28th - 29th November, 2020<br />Trip Leader: Rick "
trips[6][0] = new Date(2020, 11, 6)
trips[6][1] = "<b>Normanville Christmas</b><br />5th - 6th December, 2020"

for (var i = 0; i < trips.length; i++) {
  if (today < trips[i][0]) {
    next = trips[i][1];
    break;
  }
}

$("#nexttrip").html(next);
