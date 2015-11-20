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