import moment from 'moment-timezone/builds/moment-timezone-with-data-10-year-range';

const abbrs = {
  // '-05': 'COT',
  // '-04': 'VET',
  // '-03': 'CLST',
  // '-01': 'AZOT',
  // '+01': 'WEST',
  // '+03': 'TRT',
  // '+0330': 'IRST',
  // '+04': 'GST',
  // '+05': 'YEKT',
  // '+0545': 'NPT',
  // '+06': 'ALMT',
  // '+07': 'ICT',
  // '+08': 'SGT',
  // '+09': 'YAKT',
  // '+10': 'VLAT',
  // '+11': 'MAGT',
  // '+12': 'PETT',
  // '+13': 'FJT',
  // '+14': 'WST',
};

moment.fn.zoneName = function () {
  const abbr = this.zoneAbbr();
  return abbrs[abbr] || abbr;
};

export default moment;
