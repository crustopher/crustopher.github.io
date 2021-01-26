const data=[
  {
      "date": "2021-01-23T13:00:00",
      "dateString": "23rd - 26th January 2021",
      "dateSub": "Australia Day Long Weekend",
      "trip": "Meningie",
      "leader": "Gordon"
  },
  {
      "date": "2021-02-21T13:00:00",
      "dateString": "21st February 2021",
      "dateSub": null,
      "trip": "Murray Mouth",
      "leader": "TBC"
  },
  {
      "date": "2021-03-06T13:00:00",
      "dateString": "6th - 8th March 2021",
      "dateSub": "Adelaide Cup Long Weekend",
      "trip": "Beechport",
      "leader": "TBC"
  },
  {
      "date": "2021-03-20T13:00:00",
      "dateString": "20th - 21st March 2021",
      "dateSub": null,
      "trip": "Moonta",
      "leader": "Lisa"
  },
  {
      "date": "2021-04-02T13:00:00",
      "dateString": "2nd - 5th April 2021",
      "dateSub": "Easter Long Weekend",
      "trip": "Mt Ives",
      "leader": "TBC"
  },
  {
      "date": "2021-04-24T13:00:00",
      "dateString": "24th - 26th April 2021",
      "dateSub": "Anzac Day",
      "trip": "Farina",
      "leader": "Gordon"
  },
  {
      "date": "2021-05-21T13:00:00",
      "dateString": "21st - 23rd May 2021",
      "dateSub": null,
      "trip": "Little Desert",
      "leader": "Chris"
  },
  {
      "date": "2021-06-12T13:00:00",
      "dateString": "12th - 14th June 2021",
      "dateSub": "Queen's Birthday Long Weekend",
      "trip": "Murray Sunset",
      "leader": "TBC"
  },
  {
      "date": "2021-06-26T13:00:00",
      "dateString": "26th - 27th June 2021",
      "dateSub": null,
      "trip": "Loveday",
      "leader": "TBC"
  },
  {
      "date": "2021-07-17T13:00:00",
      "dateString": "17th - 18th July 2021",
      "dateSub": null,
      "trip": "Geranium",
      "leader": "TBC"
  },
  {
      "date": "2021-08-07T13:00:00",
      "dateString": "7th - 8th August 2021",
      "dateSub": null,
      "trip": "Eden Valley",
      "leader": "Neil"
  },
  {
      "date": "2021-08-21T13:00:00",
      "dateString": "21st - 22nd August 2021",
      "dateSub": null,
      "trip": "Peake",
      "leader": "TBC"
  },
  {
      "date": "2021-09-11T13:00:00",
      "dateString": "11th - 12th September 2021",
      "dateSub": null,
      "trip": "Willangi or Terowie",
      "leader": "TBC"
  },
  {
      "date": "2021-10-02T13:00:00",
      "dateString": "2nd - 4th October 2021",
      "dateSub": "Labour Day Long Weekend",
      "trip": "Alpana Station",
      "leader": "TBC"
  },
  {
      "date": "2021-10-23T13:00:00",
      "dateString": "23rd - 24th October 2021",
      "dateSub": null,
      "trip": "Katarapko",
      "leader": "TBC"
  },
  {
      "date": "2021-11-13T13:00:00",
      "dateString": "13th - 14th November 2021",
      "dateSub": null,
      "trip": "Bushies",
      "leader": "Chris"
  },
  {
      "date": "2021-12-04T13:00:00",
      "dateString": "4th - 5th December 2021",
      "dateSub": null,
      "trip": "Normanville Christmas",
      "leader": ""
  }
]


const trip = data.filter(trip => new Date(trip.date).getTime() > new Date().getTime()).shift();

const span = $("<span>").append($("<b>").text(trip.trip),$("</br>"), trip.dateString, $("<br/>"),"Trip Leader: ",trip.leader);

$("#nexttrip").html(span);
