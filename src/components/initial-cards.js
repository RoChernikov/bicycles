import highwayBike1 from '../images/bikes/cervelo-caledonia(highway).jpg';
import highwayBike2 from '../images/bikes/cannondale-systemsix(highway).jpg';
import highwayBike3 from '../images/bikes/trek-domane(highway).jpg';
import gravelBike1 from '../images/bikes/cervelo-aspero(gravel).jpg';
import gravelBike2 from '../images/bikes/specialized-s-works-diverge(gravel).jpg';
import gravelBike3 from '../images/bikes/cannondale-topstone(gravel).jpg';
import ttBike1 from '../images/bikes/specialized-s-works-shiv(tt).jpg';
import ttBike2 from '../images/bikes/bmc-timemachine(tt).jpg';
import ttBike3 from '../images/bikes/cervelo-p-series(tt).jpg';

const bikeCards = [
  { type: 'highway', image: highwayBike1, caption: 'Cervelo Caledonia-5' },
  {
    type: 'highway',
    image: highwayBike2,
    caption: 'Cannondale Systemsix Himod'
  },
  { type: 'highway', image: highwayBike3, caption: 'Trek Domane SL-7' },
  { type: 'gravel', image: gravelBike1, caption: 'Cervelo Aspero GRX 810' },
  {
    type: 'gravel',
    image: gravelBike2,
    caption: 'Specialized S-Works Diverge'
  },
  {
    type: 'gravel',
    image: gravelBike3,
    caption: 'Cannondale Topstone Lefty 3'
  },
  { type: 'tt', image: ttBike1, caption: 'Specialized S-Works Shiv' },
  { type: 'tt', image: ttBike2, caption: 'BMC Timemachine 01 ONE' },
  { type: 'tt', image: ttBike3, caption: 'Cervelo P-Series' }
];

export default bikeCards;
