/*
Age
Write a program that, given an age in seconds, calculates how old someone is in standard Earth years.

Then use the program to answer the following question: If I am 1031 million seconds old, how old am I?

Extensions

Given an age in seconds, calculate how old someone would be on:

Mercury (orbital period 0.2408467 Earth years)
Venus (orbital period 0.61519726 Earth years)
Mars (orbital period 1.8808158 Earth years)
Jupiter (orbital period 11.862615 Earth years)
Saturn (orbital period 29.447498 Earth years)
Uranus (orbital period 84.016846 Earth years)
Neptune (orbital period 164.79132 Earth years)
An Earth year is roughly 365.25 days, or 31557600 seconds.

If you're wondering why Pluto didn't make the cut, go watch this youtube video.

Source

Partially inspired by Chapter 1 in Chris Pine's online Learn to Program tutorial.
*/



//JACKS WAY:

// var SpaceAge = {
//     orbitalPeriods: {
//       mercury: 0.2498467,
//       venus: 0.61519726,
//       mars: 1.8808158,
//       jupiter: 11.862615,
//       saturn: 29.447498,
//       uranus: 84.016846,
//       neptune: 164.79132
//   },

//   ageOnEarth: function ( seconds ) {
//     return seconds / 31557600;
//   },

//   ageOnAnotherPlanet: function ( seconds, planetName ) {
//     var yearsOnEarth = SpaceAge.ageOnEarth ( seconds );
//     var yearsRatio = SpaceAge.orbitalPeriods[ planetName ];

//     var ageOnPlanet = yearsOnEarth / yearRatio;
//     return ageOnPlanet;
//   }
// };

var SpaceAge = {
  orbitalPeriods: {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  },

  ageOnEarth: function ( seconds ) {
    return seconds / 31557600;
  },

  ageOnOtherPlanet: function ( seconds, planetName ) {
    var yearsOnEarth = SpaceAge.ageOnEarth( seconds );
    var yearRatio = SpaceAge.orbitalPeriods[ planetName ];

    var ageOnPlanet = yearsOnEarth / yearRatio;
    return ageOnPlanet;
  }
};