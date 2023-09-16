// basic

export const color = {
  // background color
  bg_white: '#f8f9fa',
  bg_lightgrey: '#343a40',
  bg_coal: '#212529',
  bg_lightcoal: '#343a40',
  bg_darkgrey: '#111111',
  bg_greygreen: '#C8C8B6',
  // button color
  btn_lightgrey: '#dee2e6',
  btn_orange: '#f08c00',
  btn_orange_hover: '#e67700',
  // text color
  text_white: '#FFFFFF',
  text_lightgrey: '#dee2e6',
  text_grey: '#666666',
  text_darkgrey: '#111111',
  // border
  border_darkblue: '#1971c2',
  // timeline
  timeline_darkgrey: '#222222'
};

export const font = {
  title: `'Sigmar One', cursive`,
  content: `'Lexend', sans-serif`,
  chinese: `'Noto Sans HK', sans-serif`
};



// URLS

export const mapURL = {
  HomeMap_LateQingPeriod: 'https://api-demo-website-mphil-thesis.onrender.com/api/v1/maps/home-map/late-qing-period',
  HomeMap_PreWarPeriod: 'https://api-demo-website-mphil-thesis.onrender.com/api/v1/maps/home-map/pre-war-period',
  HomeMap_WartimePeriod: 'https://api-demo-website-mphil-thesis.onrender.com/api/v1/maps/home-map/wartime-period',
  HomeMap_StatMap: 'https://api-demo-website-mphil-thesis.onrender.com/api/v1/maps/home-map//stat-layer',
  Timeline_Historical: 'https://api-demo-website-mphil-thesis.onrender.com/api/v1/timeline',
  Literature: 'https://api-demo-website-mphil-thesis.onrender.com/api/v1/literatures'
};



//  slides shows

export const background = {
  home: {
    section_01: '/images/home/section01-image-01.svg',
    section_02: '/images/home/section02-image-01.jpg',
    section_03: '/images/home/section03-image-01.jpg',
    section_04: '/images/home/section04-image-01.jpg',
    section_05: '/images/home/section05-image-01.jpg',
    section_06: '/images/home/section06-image-01.jpg',
  },
  chapter01: {
    section_01: '/images/chapter-01/section01-image-01.jpg',
    section_02: '/images/chapter-01/section02-image-01.jpg',
    section_04: '/images/chapter-01/section04-image-01.jpg',
  },
  chapter02: {
    section_01: '/images/chapter-02/section01-image-01.jpg',
    section_02: '/images/chapter-02/section02-image-01.jpg',
    section_03: '/images/chapter-02/section03-image-01.jpg',
    section_05: '/images/chapter-02/section05-image-01.jpg',
    section_06: '/images/chapter-02/section06-image-01.jpg',
    section_07: '/images/chapter-02/section07-image-01.jpg',
    section_08: '/images/chapter-02/section08-image-01.jpg'
  },
  chapter03: {
    section_01: '/images/chapter-03/section01-image-01.jpg',
  }
};

export const emergeLines = {
  chapter01: {
    // half-display sections
    length: 800 * 6,
    // dividers
    slide_00_end: 1760,
    slide_01_end: 1760 + 800 * 1,
    slide_02_end: 1760 + 800 * 2,
    slide_03_end: 1760 + 800 * 3,
    slide_04_end: 1760 + 800 * 4,
    slide_05_end: 1760 + 800 * 5,
    slide_06_end: 1760 + 800 * 6,
    slide_07_end: 1760 + 800 * 7,
  },
  chapter02: {
    // half-display sections
    length: 800 * 6,
    // dividers
    slide_00_end: 2560,
    slide_01_end: 2560 + 800 * 1,
    slide_02_end: 2560 + 800 * 2,
    slide_03_end: 2560 + 800 * 3,
    slide_04_end: 2560 + 800 * 4,
    slide_05_end: 2560 + 800 * 5,
    slide_06_end: 2560 + 800 * 6,
    slide_07_end: 2560 + 800 * 7,
  },
  chapter04: {
    // first 2 half-display sections
    length_01: 800 * 3,
    // seceond 1 half displau section
    length_02: 800,
    // dividers
    slide_00_end: 150,
    slide_01_end: 150 + 800 * 1,
    slide_02_end: 150 + 800 * 2,
    slide_03_end: 150 + 800 * 3,
    slide_04_end: 150 + 800 * 4,
    slide_05_end: 150 + 800 * 5,
    slide_06_end: 150 + 800 * 6,
    slide_07_end: 150 + 800 * 7,
  }
};


// maps
export const map_settings = {
  leaflet_homemap: {
    minZoom: 3,
    maxZoom: 8,
    scrollWheelZoom: false
  },
  leaflet_markers: {
    url: {
      policing_active: '/icons/markers/marker_policing_active.png',
      policing_inactive: '/icons/markers/marker_policing_inactive.png',
      academy_active: '/icons/markers/marker_academy_active.png',
      academy_inactive: '/icons/markers/marker_academy_inactive.png',
      academy_selected: '/icons/markers/marker_academy_selected.png',
      faction_juntong: '/icons/markers/marker_faction_juntong.png',
      faction_academy: '/icons/markers/marker_faction_academy.png',
    },
    size: 20
  },
  map_details: {
    chapter01: {
      center: [28.22735122941235, 112.94625030865075],
      zoom: 5
    },
    chapter02: {
      center: [28.22735122941235, 112.94625030865075],
      zoom: 4
    },
    chapter04: {
      center: [28.22735122941235, 112.94625030865075],
      zoom: 5
    },
    statisticMap: {
      center: [34.263601652827624, 108.93970564424313],
      zoom: 4.5
    }
  }
};

// timeline

export const timeline_style = {
  url: {
    lateqing: '/icons/timeline/timeline_lateqing.svg',
    beiyang: '/icons/timeline/timeline_beiyang.svg',
    nationalist: '/icons/timeline/timeline_nationalist.jpg'
  },
  border_color: {
    lateqing: '#fab005',
    beiyang: '#339af0',
    nationalist: '#f06595'
  }
};
