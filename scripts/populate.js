const allSponsorsData = [ /*  Copied from main website's populate-sponsors.js and later on modified paths of image url's */
    {
      name: 'adani',
      website: 'https://www.adani.com/',
      imageSource: './assets/sponsor/adani.webp'
    },
    {
      name: 'rupeezy',
      website: 'https://rupeezy.in/',
      imageSource: './assets/sponsor/rupeexy.webp'
    },
    {
      name: 'raphemphibr',
      website: 'https://www.raphe.com/',
      imageSource: './assets/old-sponsors/raphe-mphibr.png'
    },
    {
      name: 'bhopalangels',
      website: 'https://bhopalangels.com/',
      imageSource: './assets/sponsor/bhopal_angels.webp'
    },
    {
      name: 'aicrntu',
      website: 'https://www.aicrntu.com/',
      imageSource: './assets/sponsor/aicrntu.webp'
    },
    {
      name: 'boudhikip',
      website: 'https://www.boudhikip.com/',
      imageSource: './assets/sponsor/boudhik.webp'
    },
    {
      name: 'aws',
      website: 'https://aws.amazon.com/',
      imageSource: './assets/sponsor/aws.webp'
    },
    {
      name: 'coingape',
      website: 'https://coingape.com/',
      imageSource: './assets/sponsor/coingape.png'
    },
    {
      name: 'givemycertificate',
      website: 'https://givemycertificate.com/',
      imageSource: './assets/sponsor/arrow.webp'
    },
    {
      name: 'canva',
      website: 'https://www.canva.com/',
      imageSource: './assets/sponsor/canva.webp'
    },
    {
      name: 'icreate',
      website: 'https://www.icreate.org.in/',
      imageSource: './assets/sponsor/icreate.webp'
    },
    {
      name: 'jiosaavn',
      website: 'https://www.jiosaavn.com/',
      imageSource: './assets/sponsor/jiosaavn.webp'
    },
    {
      name: 'kitablovers',
      website: 'https://kitablovers.com/',
      imageSource: './assets/sponsor/kitab_lovers.webp'
    },
    {
      name: 'msg91',
      website: 'https://msg91.com/',
      imageSource: './assets/sponsor/msg91.webp'
    },
    {
      name: 'papertrade',
      website: 'https://papertrade.live/',
      imageSource: './assets/sponsor/papertrade.webp'
    },
    {
      name: 'recklabs',
      website: 'https://recklabs.com/',
      imageSource: './assets/sponsor/RECKLABS.webp'
    },
    {
      name: 'startupvisors',
      website: 'https://startupvisors.com/',
      imageSource: './assets/sponsor/startupvisors.webp'
    },
    {
      name: 'taskade',
      website: 'https://www.taskade.com/',
      imageSource: './assets/sponsor/taskade.webp'
    },
    {
      name: 'teachnook',
      website: 'https://teachnook.com/',
      imageSource: './assets/sponsor/teachnook.webp'
    },
    {
      name: 'techstory',
      website: 'https://techstory.in/',
      imageSource: './assets/sponsor/techstory.webp'
    },
    {
      name: 'unstop',
      website: 'https://unstop.com/',
      imageSource: './assets/sponsor/unstop.webp'
    },
    {
      name: 'wolframalpha',
      website: 'https://www.wolframalpha.com/',
      imageSource: './assets/sponsor/wolfram_research.webp'
    },
    {
      name: 'sixthsenseit',
      website: 'https://sixthsenseit.com/',
      imageSource: './assets/sponsor/sixthsenselogo.webp'
    },
    {
      name: 'skill-lync',
      website: 'https://skill-lync.com/',
      imageSource: './assets/old-sponsors/Asset%205.webp'
    },
    {
      name: 'ibentos',
      website: 'https://ibentos.com/',
      imageSource: './assets/old-sponsors/Asset%206.webp'
    },
    {
      name: 'edvoy',
      website: 'https://edvoy.com/',
      imageSource: './assets/old-sponsors/Asset%207.webp'
    },
    {
      name: 'freshworks',
      website: 'https://www.freshworks.com/',
      imageSource: './assets/old-sponsors/Asset%209.webp'
    },
    {
      name: 'startuplab',
      website: 'https://startuplab.no/',
      imageSource: './assets/old-sponsors/Asset%2011.webp'
    },
    {
      name: 'prepbytes',
      website: 'https://www.prepbytes.com/',
      imageSource: './assets/old-sponsors/Asset%2012.webp'
    },
    {
      name: 'geeksforgeeks',
      website: 'https://www.geeksforgeeks.org/',
      imageSource: './assets/old-sponsors/Asset%2013.webp'
    },
    {
      name: 'codingninjas',
      website: 'https://www.codingninjas.com/',
      imageSource: './assets/old-sponsors/Asset%2014.webp'
    },
    {
      name: 'primexbt',
      website: 'https://primexbt.com/',
      imageSource: './assets/old-sponsors/Asset%2015.webp'
    },
    {
      name: 'codingblocks',
      website: 'https://codingblocks.com/',
      imageSource: './assets/old-sponsors/Asset%2016.webp'
    },
    {
      name: 'polygon',
      website: 'https://www.polygon.com/',
      imageSource: './assets/old-sponsors/Asset%2018.webp'
    },
    {
      name: 'athenasquare',
      website: 'https://athenasquare.org/',
      imageSource: './assets/old-sponsors/Asset%2019.webp'
    },
    {
      name: 'finlatics',
      website: 'https://www.finlatics.com/',
      imageSource: './assets/old-sponsors/Asset%2021.webp'
    },
    {
      name: 'celo',
      website: 'https://celo.org/',
      imageSource: './assets/old-sponsors/Asset%2022.webp'
    },
    {
      name: 'elearnmarkets',
      website: 'https://www.elearnmarkets.com/',
      imageSource: './assets/old-sponsors/Asset%2023.webp'
    },
    {
      name: 'indiaaccelerator',
      website: 'https://www.indiaaccelerator.co/',
      imageSource: './assets/old-sponsors/Asset%2024.webp'
    },
    {
      name: 'ecellnitb',
      website: 'https://www.ecellnitb.in/#',
      imageSource: './assets/old-sponsors/Asset%2025.webp'
    },
    {
      name: 'workspace',
      website: 'http://www.workspace.com/',
      imageSource: './assets/old-sponsors/Asset%2026.webp'
    },
    {
      name: 'skwerup',
      website: 'https://www.skwerup.com/',
      imageSource: './assets/old-sponsors/Asset%2027.webp'
    },
    {
      name: 'devfolio',
      website: 'https://devfolio.co/hackathons/applied',
      imageSource: './assets/old-sponsors/Asset%2028.webp'
    },
    {
      name: 'filecoin',
      website: 'https://filecoin.io/',
      imageSource: './assets/old-sponsors/Asset%2029.webp'
    },
    {
      name: 'notesnaka',
      website: 'https://www.notesnaka.com/homepage/',
      imageSource: './assets/old-sponsors/Asset%2030.webp'
    },
    {
      name: 't3',
      website: 'https://www.t3.com/',
      imageSource: './assets/old-sponsors/Asset%2031.webp'
    },
    {
      name: 'linuxlinks',
      website: 'https://www.linuxlinks.com/linux-world/',
      imageSource: './assets/old-sponsors/Asset%2033.webp'
    },
    {
      name: 'icreateedu',
      website: 'https://www.icreateedu.com/',
      imageSource: './assets/old-sponsors/Asset%2034.webp'
    },
    {
      name: 'digitalocean',
      website: 'https://www.digitalocean.com/',
      imageSource: './assets/old-sponsors/Asset%2035.webp'
    },
    {
      name: 'codingminutes',
      website: 'https://codingminutes.com/',
      imageSource: './assets/old-sponsors/Asset%2036.webp'
    },
    {
      name: 'codingminutes',
      website: 'https://codingminutes.com/',
      imageSource: './assets/old-sponsors/3ways.webp'
    },
    {
      name: 'codingminutes',
      website: 'https://codingminutes.com/',
      imageSource: './assets/old-sponsors/ApnaCast.webp'
    },
    {
      name: 'ecellnitb',
      website: 'https://www.ecellnitb.in/#',
      imageSource: './assets/old-sponsors/bob.webp'
    },
    {
      name: 'bansalgroup',
      website: 'https://bansalgroup.in/',
      imageSource: './assets/old-sponsors/bansal.webp'
    },
    {
      name: 'codingminutes',
      website: 'https://codingminutes.com/',
      imageSource: './assets/old-sponsors/bv.webp'
    },
    {
      name: 'coolberg',
      website: 'https://coolberg.in/',
      imageSource: './assets/old-sponsors/coolberg.webp'
    },
    {
      name: 'crowdera',
      website: 'https://www.crowdera.com/',
      imageSource: './assets/old-sponsors/crowdera.webp'
    },
    {
      name: 'easemytrip',
      website: 'https://www.easemytrip.com/',
      imageSource: './assets/old-sponsors/easymytrip.webp'
    },
    {
      name: 'emb',
      website: 'https://emb.global/',
      imageSource: './assets/old-sponsors/Expand%20My%20Business.webp'
    },
    {
      name: 'forethought',
      website: 'https://www.forethought.co.in/',
      imageSource: './assets/old-sponsors/forethought.webp'
    },
    {
      name: 'freshworks',
      website: 'https://www.freshworks.com/',
      imageSource: './assets/old-sponsors/freashworks.webp'
    },
    {
      name: 'fantasytradingleague',
      website: 'https://fantasytradingleague.com/',
      imageSource: './assets/old-sponsors/ftlt.webp'
    },
    {
      name: 'goodworks',
      website: 'https://www.goodworks.in/',
      imageSource: './assets/old-sponsors/goodworks_cowork_logo.webp'
    },
    {
      name: 'hindustanpetroleum',
      website: 'https://www.hindustanpetroleum.com/',
      imageSource: './assets/old-sponsors/hpcl.webp'
    },
    {
      name: 'innovativescripts',
      website: 'https://innovativescripts.com/',
      imageSource: './assets/old-sponsors/inovative%20script.webp'
    },
    {
      name: 'iocl',
      website: 'https://iocl.com/',
      imageSource: './assets/old-sponsors/iocl.webp'
    },
    {
      name: 'learningwhiletravelling',
      website: 'https://learningwhiletravelling.com/',
      imageSource: './assets/old-sponsors/Learning%20While%20Traveling.webp'
    },
    {
      name: 'mguindia',
      website: 'https://www.mguindia.com/',
      imageSource: './assets/old-sponsors/mansarovar.webp'
    },
    {
      name: 'meity',
      website: 'https://www.meity.gov.in/',
      imageSource: './assets/old-sponsors/MEITY.webp'
    },
    {
      name: 'startup',
      website: 'https://startup.mp.gov.in/',
      imageSource: './assets/old-sponsors/mpsu.webp'
    },
    {
      name: 'panmacmillan',
      website: 'https://www.panmacmillan.co.in/',
      imageSource: './assets/old-sponsors/pan%20macmillan.webp'
    },
    {
      name: 'pedalstart',
      website: 'https://pedalstart.com/index.html',
      imageSource: './assets/old-sponsors/PedalStart.webp'
    },
    {
      name: 'quillbot',
      website: 'https://quillbot.com/',
      imageSource: './assets/old-sponsors/quillbot.webp'
    },
    {
      name: 'realvision',
      website: 'https://www.realvision.com/india',
      imageSource: './assets/old-sponsors/Real%20Vision.webp'
    },
    {
      name: 'redfmindia',
      website: 'https://www.redfmindia.in/',
      imageSource: './assets/old-sponsors/redfm.webp'
    },
    {
      name: 'roostoo',
      website: 'https://www.roostoo.com/',
      imageSource: './assets/old-sponsors/roostoo.webp'
    },
    {
      name: 'codingminutes',
      website: 'https://codingminutes.com/',
      imageSource: './assets/old-sponsors/sf.webp'
    },
    {
      name: 'starworks',
      website: 'https://starworks.world/',
      imageSource: './assets/old-sponsors/starworks_prime_logo.webp'
    },
    {
      name: 'stockwealthacademy',
      website: 'https://stockwealthacademy.com/',
      imageSource: './assets/old-sponsors/stock%20wealth%20academy.webp'
    },
    {
      name: 'stpi',
      website: 'https://stpi.in/',
      imageSource: './assets/old-sponsors/stpi.webp'
    },
    {
      name: 'webodoctor',
      website: 'https://www.webodoctor.com/',
      imageSource: './assets/old-sponsors/Webodoctor.webp'
    }
  ]

  /* The below comented out code was written to modify the paths of the object list above and log it to the development console by node.js and then it was copied from console and the object list above was replaced by it*/

// allSponsorsData.forEach(spn => {
//     spn.imageSource = spn.imageSource.replace("https://esummit.ecellnitb.in", ".");
//     spn.imageSource = spn.imageSource.replace("./assets/logo/", "./assets/old-sponsors/");
//     spn.imageSource = spn.imageSource.replace("./assets/images/sponsors/", "./assets/old-sponsors/");
//   }
// );
// console.log(allSponsorsData);

const spnContainer = document.getElementById("all-sponsors-brands")

spnContainer.innerHTML = "" // erase off all the previous HTML in the container

let HTML_to_push = ""; // inintialise a string that will be pushed as HTML in the contianer.

allSponsorsData.forEach(spn =>{
    // start adding HTML for each child component to our string
    HTML_to_push += `
            <div class="sponsor-image-wrapper" data-sponsorname="${spn.name}" >
                    <a href="${spn.website}"><img src="${spn.imageSource}" alt="Sponsor"class="sponsor-image"></a>
            </div>
    
    ` 
})

spnContainer.innerHTML += HTML_to_push; // push string to main container as HTML




document.addEventListener('DOMContentLoaded', function () {
  const viewMoreBtn = document.getElementById('spn-hide-btn');
  const container = document.querySelector('#all-sponsors-brands');

  let isContentVisible = false;

  viewMoreBtn.addEventListener('click', function () {
      if (isContentVisible) {
        container.style.height = '630px'; 
        container.style.overflow = 'hidden';  
        viewMoreBtn.textContent = 'View More';
          
          
      } else {
        container.style.height = 'auto'; 
          container.style.overflow = 'visible';
          viewMoreBtn.textContent = 'View Less';
       
          
      }
      isContentVisible = !isContentVisible;
  });


});








