/* =========================================================
  ROUTES PAGE SCRIPT
  - Mobile menu toggle
  - Load route data for each day
========================================================== */

/* =========================================================
  LOAD AND PROCESS ROUTE DATA FOR EACH DAY
========================================================== */
// Route-specific markup stays here; route descriptions live in data/routes.json.
const routeExtras = {
  1: {
    "Short Route": {
      cafes: `
<div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Chambers Coffee House</span>

              <a
                href="https://www.google.co.uk/maps/place/Chambers+Coffee+House/@54.3096066,-1.8287549,19z/data=!3m2!4b1!5s0x487c1bbf35a76789:0x9859c97d8a84da97!4m6!3m5!1s0x487c1bbf3510a2e9:0x9fd807bc69b8ab91!8m2!3d54.3096066!4d-1.8287549!16s%2Fg%2F1vvyxm_1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener"
                class="cafe-link"
              >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
             </p>

             <p>📍 Leyburn</p>
             <p>🚴 Distance: 18.5 miles</p>
          </div>
           <div class="cafe-entry">
            <p class="cafe-name">
             <span>Mill Race Teashop</span>

              <a
                href="https://www.google.co.uk/maps/place/Mill+Race+Teashop/@54.2923282,-1.9907126,16z/data=!4m6!3m5!1s0x487c1174c0f09401:0x297ca7c538196a0a!8m2!3d54.2931899!4d-1.9846237!16s%2Fg%2F1tczk0rw?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=1e459acf-5f2b-481a-8673-5085cacb74e0"
                target="_blank"
                rel="noopener"
                class="cafe-link"
              >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
             </p>

             <p>📍 Aysgarth</p>
             <p>🚴 Distance: 27.5 miles</p>
          </div>
        </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Leyburn.jpeg" alt="Leyburn" onclick="openLightbox(this)">
          <img src="pictures/Askrigg.jpeg" alt="Askrigg" onclick="openLightbox(this)">
          <img src="pictures/Aysgarth Falls.jpeg" alt="Aysgarth Falls" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
    "Medium Route": {
      cafes: `
<div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Station</span>

              <a
                href="https://www.google.co.uk/maps/place/The+Station/@54.4031369,-1.7293404,17z/data=!4m6!3m5!1s0x487c1f96f6b6333b:0x567fe16314589c26!8m2!3d54.4029356!4d-1.7295075!16s%2Fg%2F12vsj3lww?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=e316f6ed-0864-4915-ab37-3ea73df05082"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Richmond</p>
            <p>🚴 Distance: 20.5 miles</p>
          </div>
        

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Dales Bike Centre Cafe & Cakery</span>

              <a
                href="https://www.google.co.uk/maps/place/Dales+Bike+Centre/@54.3846248,-1.931957,18z/data=!4m9!3m8!1s0x487c1799c4040277:0x3fee480a3ad4e417!5m2!4m1!1i2!8m2!3d54.3848575!4d-1.9305501!16s%2Fg%2F1tdm_1c2?entry=tts&g_ep=EgoyMDI2MDkzMC4wIPu8ASoASAFQAw%3D%3D&skid=7518b111-6f75-4cb4-b937-966d6af8eebc"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Fremington</p>
            <p>🚴 Distance: 31.5 miles</p>
          </div>
          <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Copper Kettle</span>

              <a
                href="https://www.google.co.uk/maps/place/The+Copper+Kettle+Reeth+Ltd/@54.3882132,-1.9424586,17.25z/data=!4m6!3m5!1s0x487c17bc817aeced:0x7708636cc3223355!8m2!3d54.3883663!4d-1.9416143!16s%2Fg%2F1trxd7tb?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=f675a427-da19-442f-99f0-6297497838c4"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Reeth</p>
            <p>🚴 Distance: 32 miles</p>
          </div>
       

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Ghyllfoot Tearoom & Bistro</span>

              <a
                href="https://www.google.co.uk/maps/place/Ghyllfoot+Tearoom+%26+Bistro/@54.3797855,-2.0763643,18.25z/data=!4m6!3m5!1s0x487c150698d7ff9d:0x1ce5db0d7e72198!8m2!3d54.3795141!4d-2.0763124!16s%2Fg%2F1tgdbzjv?entry=tts&g_ep=EgoyMDI2MDkzMC4wIPu8ASoASAFQAw%3D%3D&skid=c398526f-8b57-459a-9930-a10e32342edc"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Gunnerside</p>
            <p>🚴 Distance: 38 miles</p>
          </div>
        

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Bake-Well, Market Place</span>

              <a
                href="https://www.google.co.uk/maps/place/The+Bake-Well,+Market+Place/@54.3148843,-2.080941,19.75z/data=!4m6!3m5!1s0x487c13cbb4c4aaad:0xc7416a5380fd49bc!8m2!3d54.3150452!4d-2.0808585!16s%2Fg%2F11jvr35zrd?entry=tts&g_ep=EgoyMDI2MDkzMC4wIPu8ASoASAFQAw%3D%3D&skid=0018e463-cb64-44f3-ab62-4bfb18bf635a"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Askrigg</p>
            <p>🚴 Distance: 45 miles</p>
          </div>
        </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Richmond.jpeg" alt="Richmond" onclick="openLightbox(this)">
          <img src="pictures/Swaledale.jpeg" alt="Swaledale" onclick="openLightbox(this)">
          <img src="pictures/Oxnop.webp" alt="Oxnop" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
    "Long Route": {
      cafes: `
<div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Station</span>

              <a
                href="https://www.google.co.uk/maps/place/The+Station/@54.4031369,-1.7293404,17z/data=!4m6!3m5!1s0x487c1f96f6b6333b:0x567fe16314589c26!8m2!3d54.4029356!4d-1.7295075!16s%2Fg%2F12vsj3lww?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=e316f6ed-0864-4915-ab37-3ea73df05082"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Richmond</p>
            <p>🚴 Distance: 22.5 miles</p>
          </div>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Dales Bike Centre Cafe & Cakery</span>

              <a
                href="https://www.google.co.uk/maps/place/Dales+Bike+Centre+-+Cafe+and+Cakery/@54.3846417,-1.9316853,18.5z/data=!4m6!3m5!1s0x487c1716ac1a610f:0x2e415da7048f6ac0!8m2!3d54.3848252!4d-1.9302484!16s%2Fg%2F11s9vw_zh6?entry=tts&g_ep=EgoyMDI2MDkzMC4wIPu8ASoASAFQAw%3D%3D&skid=9920d6b7-2f4c-44d4-bc91-ec2583717225"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Fremington</p>
            <p>🚴 Distance: 34 miles</p>
          </div>
          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Muker Village Store & Teashop</span>

              <a
                href="https://www.google.co.uk/maps/place/Muker+Village+Store+%26+Teashop/@54.3762204,-2.1406597,17z/data=!4m6!3m5!1s0x4887e655433af71f:0x396125c6c394ee3e!8m2!3d54.3763694!4d-2.1408211!16s%2Fg%2F1tl8k87k?entry=tts&g_ep=EgoyMDI2MDkzMC4wIPu8ASoASAFQAw%3D%3D&skid=b66aebce-47c6-4092-8032-ebdf5340e31b"
                target="_blank"
                rel="noopener"
                class="cafe-link"
                >
                View Map
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>

            <p>📍 Muker</p>
            <p>🚴 Distance: 53 miles</p>
          </div>
        </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Richmond.jpeg" alt="Richmond" onclick="openLightbox(this)">
          <img src="pictures/Swaledale.jpeg" alt="Swaledale" onclick="openLightbox(this)">
          <img src="pictures/Tan Hill.jpeg" alt="Tan Hill" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
  },
  2: {
    "Short Route": {
      cafes: `

<div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Ye Olde Naked Man Café</span>

              <a
            href="https://www.google.co.uk/maps/place/Ye+Olde+Naked+Man+Caf%C3%A9/@54.0688206,-2.2772245,18.25z/data=!4m6!3m5!1s0x487c77da2819313d:0x34e1245639f973d1!8m2!3d54.0687322!4d-2.2773522!16s%2Fg%2F1tdp0061?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Settle</p>
        <p>🚴 Distance: 22.5 miles</p>
      </div>
    </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Ribblehead Viaduct.jpg" alt="Ribblehead Viaduct" onclick="openLightbox(this)">
          <img src="pictures/Settle.jpg" alt="Settle" onclick="openLightbox(this)">
          
        </div>
      `.trim(),
    },
    "Medium Route": {
      cafes: `

    <div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Village Kitchen</span>

              <a
            href="https://www.google.co.uk/maps/place/The+Village+Kitchen/@54.1544561,-2.4683618,18z/data=!4m6!3m5!1s0x487c7dfd5d3f38ef:0xf424801504a7572e!8m2!3d54.1544561!4d-2.4672792!16s%2Fg%2F11ryhg6kzb?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=6acd75bb-3e72-40fb-bfd1-0d7cbba07f6b"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Ingleton</p>
        <p>🚴 Distance: 16 miles</p>
      </div>
      <div class="cafe-entry">
            <p class="cafe-name">
             <span>Ye Olde Naked Man Café</span>

              <a
            href="https://www.google.co.uk/maps/place/Ye+Olde+Naked+Man+Caf%C3%A9/@54.0688607,-2.277268,18.25z/data=!4m6!3m5!1s0x487c77da2819313d:0x34e1245639f973d1!8m2!3d54.0687322!4d-2.2773522!16s%2Fg%2F1tdp0061?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=1a6fcc00-de5f-439e-84d9-d0933694526c"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Settle</p>
        <p>🚴 Distance: 29 miles</p>
      </div>
      <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Old Barn Tearoom</span>

              <a
            href="https://www.google.co.uk/maps/place/The+Old+Barn+Tearoom/@54.060924,-2.1536667,17.75z/data=!4m15!1m8!3m7!1s0x487c757850f41937:0x2e31a2ec2d8180bd!2sMalham,+Skipton!3b1!8m2!3d54.0613371!4d-2.1530391!16zL20vMDN2MGg4!3m5!1s0x487b8a7e1a2b77c9:0x30d79cce6b8bcab!8m2!3d54.0603591!4d-2.1532099!16s%2Fg%2F1tfxxkwt?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Malham</p>
        <p>🚴 Distance: 40 miles</p>
      </div>
    </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Ribblehead Viaduct.jpg" alt="Ribblehead Viaduct" onclick="openLightbox(this)">
          <img src="pictures/Settle.jpg" alt="Settle" onclick="openLightbox(this)">
          <img src="pictures/Malham Cove.jpg" alt="Malham Cove" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
    "Long Route": {
      cafes: `

<div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Village Kitchen</span>

              <a
            href="https://www.google.co.uk/maps/place/The+Village+Kitchen/@54.1544561,-2.4683618,18z/data=!4m6!3m5!1s0x487c7dfd5d3f38ef:0xf424801504a7572e!8m2!3d54.1544561!4d-2.4672792!16s%2Fg%2F11ryhg6kzb?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=6acd75bb-3e72-40fb-bfd1-0d7cbba07f6b"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Ingleton</p>
        <p>🚴 Distance: 24.5 miles</p>
      </div>
      <div class="cafe-entry">
            <p class="cafe-name">
             <span>Ye Olde Naked Man Café</span>

              <a
            href="https://www.google.co.uk/maps/place/Ye+Olde+Naked+Man+Caf%C3%A9/@54.0688607,-2.277268,18.25z/data=!4m6!3m5!1s0x487c77da2819313d:0x34e1245639f973d1!8m2!3d54.0687322!4d-2.2773522!16s%2Fg%2F1tdp0061?entry=tts&g_ep=EgoyMDI2MTAxOS4wIPu8ASoASAFQAw%3D%3D&skid=1a6fcc00-de5f-439e-84d9-d0933694526c"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Settle</p>
        <p>🚴 Distance: 37 miles</p>
      </div>
      <div class="cafe-entry">
            <p class="cafe-name">
             <span>The Old Barn Tearoom</span>

              <a
            href="https://www.google.co.uk/maps/place/The+Old+Barn+Tearoom/@54.060924,-2.1536667,17.75z/data=!4m15!1m8!3m7!1s0x487c757850f41937:0x2e31a2ec2d8180bd!2sMalham,+Skipton!3b1!8m2!3d54.0613371!4d-2.1530391!16zL20vMDN2MGg4!3m5!1s0x487b8a7e1a2b77c9:0x30d79cce6b8bcab!8m2!3d54.0603591!4d-2.1532099!16s%2Fg%2F1tfxxkwt?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Malham</p>
        <p>🚴 Distance: 48 miles</p>
      </div>
    </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          
          <img src="pictures/Settle.jpg" alt="Settle" onclick="openLightbox(this)">
          <img src="pictures/Malham Cove.jpg" alt="Malham Cove" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
  },
  3: {
    "Short Route": {
      cafes: `

<div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Wharfe View Tea Room</span>

              <a
            href="https://www.google.co.uk/maps/place/Chambers+Coffee+House/@54.3096066,-1.8287549,19z/data=!3m2!4b1!5s0x487c1bbf35a76789:0x9859c97d8a84da97!4m6!3m5!1s0x487c1bbf3510a2e9:0x9fd807bc69b8ab91!8m2!3d54.3096066!4d-1.8287549!16s%2Fg%2F1vvyxm_1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Burnsall</p>
        <p>🚴 Distance: 10 miles</p>
      </div>
      <div class="cafe-entry">
            <p class="cafe-name">
             <span>Wildings Riverside Cafe</span>

              <a
            href="https://www.google.co.uk/maps/place/Wildings+Riverside+Cafe/@54.0832896,-1.7567267,119a,75y,140.15h,76.96t/data=!3m10!1e1!3m8!1sdErh5xx_tSfr57Z0DCg2KA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.040000000000006%26panoid%3DdErh5xx_tSfr57Z0DCg2KA%26yaw%3D140.15!7i16384!8i8192!9m2!1b1!2i37!4m7!3m6!1s0x487c00bc805f3789:0xee0fa92744435b15!8m2!3d54.0854999!4d-1.7603356!10e5!16s%2Fg%2F1tkrlb_x?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Pateley Bridge</p>
        <p>🚴 Distance: 20.5 miles</p>
      </div>
    </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Burnsall.jpeg" alt="Burnsall" onclick="openLightbox(this)">
          <img src="pictures/Fountains Abbey.jpg" alt="Fountains Abbey" onclick="openLightbox(this)">
    
        </div>
      `.trim(),
    },
    "Medium Route": {
      cafes: `
<div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Wharfe View Tea Room</span>

              <a
            href="https://www.google.co.uk/maps/place/Chambers+Coffee+House/@54.3096066,-1.8287549,19z/data=!3m2!4b1!5s0x487c1bbf35a76789:0x9859c97d8a84da97!4m6!3m5!1s0x487c1bbf3510a2e9:0x9fd807bc69b8ab91!8m2!3d54.3096066!4d-1.8287549!16s%2Fg%2F1vvyxm_1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Burnsall</p>
        <p>🚴 Distance: 10 miles</p>
      </div>
      <div class="cafe-entry">
            <p class="cafe-name">
             <span>Wildings Riverside Cafe</span>

              <a
            href="https://www.google.co.uk/maps/place/Wildings+Riverside+Cafe/@54.0832896,-1.7567267,119a,75y,140.15h,76.96t/data=!3m10!1e1!3m8!1sdErh5xx_tSfr57Z0DCg2KA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.040000000000006%26panoid%3DdErh5xx_tSfr57Z0DCg2KA%26yaw%3D140.15!7i16384!8i8192!9m2!1b1!2i37!4m7!3m6!1s0x487c00bc805f3789:0xee0fa92744435b15!8m2!3d54.0854999!4d-1.7603356!10e5!16s%2Fg%2F1tkrlb_x?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Pateley Bridge</p>
        <p>🚴 Distance: 20.5 miles</p>
      </div>
       <div class="cafe-entry">
            <p class="cafe-name">
             <span>Fountains Abbey Visitor Centre</span>

              <a
            href="https://www.google.co.uk/maps/place/Visitor+Centre+(Fountains+Abbey)/@54.1126886,-1.5849399,17z/data=!4m6!3m5!1s0x487eab77375930a7:0xe137ec9c5ab624a7!8m2!3d54.1130725!4d-1.5846447!16s%2Fg%2F1ptz164l4?entry=tts&g_ep=EgoyMDI2MTAyMC4wIPu8ASoASAFQAw%3D%3D&skid=fe1aa1f1-0e89-486c-a3dc-41d232365f27"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Fountains Abbey</p>
        <p>🚴 Distance: 32.5 miles</p>
      </div>
    </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Burnsall.jpeg" alt="Burnsall" onclick="openLightbox(this)">
          <img src="pictures/Fountains Abbey.jpg" alt="Fountains Abbey" onclick="openLightbox(this)">
          <img src="pictures/Ripon Cathedral.jpeg" alt="Ripon Cathedral" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
    "Long Route": {
      cafes: `

        
        <div class="cafe-card">
          <h5>Cafés En-Route:</h5>

          <div class="cafe-entry">
            <p class="cafe-name">
             <span>Wharfe View Tea Room</span>

              <a
            href="https://www.google.co.uk/maps/place/Chambers+Coffee+House/@54.3096066,-1.8287549,19z/data=!3m2!4b1!5s0x487c1bbf35a76789:0x9859c97d8a84da97!4m6!3m5!1s0x487c1bbf3510a2e9:0x9fd807bc69b8ab91!8m2!3d54.3096066!4d-1.8287549!16s%2Fg%2F1vvyxm_1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Burnsall</p>
        <p>🚴 Distance: 17 miles</p>
      </div>
       <div class="cafe-entry">
            <p class="cafe-name">
             <span>Fountains Abbey Visitor Centre</span>

              <a
            href="https://www.google.co.uk/maps/place/Visitor+Centre+(Fountains+Abbey)/@54.1126886,-1.5849399,17z/data=!4m6!3m5!1s0x487eab77375930a7:0xe137ec9c5ab624a7!8m2!3d54.1130725!4d-1.5846447!16s%2Fg%2F1ptz164l4?entry=tts&g_ep=EgoyMDI2MTAyMC4wIPu8ASoASAFQAw%3D%3D&skid=fe1aa1f1-0e89-486c-a3dc-41d232365f27"
            target="_blank"
            rel="noopener"
            class="cafe-link"
          >
            View Map
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>

        <p>📍 Fountains Abbey</p>
        <p>🚴 Distance: 39 miles</p>
      </div>
    </div>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/Bolton Abbey.jpeg" alt="Bolton Abbey" onclick="openLightbox(this)">
          <img src="pictures/Bardon Tower.jpg" alt="Bardon Tower" onclick="openLightbox(this)">
          <img src="pictures/Burnsall.jpeg" alt="Burnsall" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
  },
  4: {
    "Bonus Route": {
      cafes: `
<span>Possible cafe stops are:</span>
        <ul>
          <li>15 miles – Aber Falls Distillery Visitor Centre & Cafe, Abergwyngregyn</li>
          <li>20.8 miles – Penbakes Bakery and Cafe/Bistro, Penmaenmawr</li>
          <li>26 miles – Conwy</li>
          <li>30.5 miles – Llandudno</li>
        </ul>
      `.trim(),
      gallery: `
<div class="thumbnail-gallery">
          <img src="pictures/MenaiBridge.jpg" alt="Menai Bridge" onclick="openLightbox(this)">
          <img src="pictures/Conwy.jpg" alt="Conwy" onclick="openLightbox(this)">
          <img src="pictures/GreatOrme.jpg" alt="Great Orme" onclick="openLightbox(this)">
        </div>
      `.trim(),
    },
  },
};

let routeData = {};

async function loadRouteData() {
  try {
    const response = await fetch("data/routes.json");
    if (!response.ok) throw new Error("Could not load routes: " + response.status);
    routeData = await response.json();
    if (selector.value) handleDayChange();
  } catch (error) {
    console.error("Failed to load route data:", error);
  }
}

const selector = document.getElementById("daySelector");
const grid = document.getElementById("routeGrid");

if (selector && grid) {
  selector.addEventListener("change", handleDayChange);
  loadRouteData();
}

// Render route cards for the selected day.
function handleDayChange() {
  const day = selector.value;

  clearGrid();

  const routes = routeData?.[day];
  if (!routes || !routes.length) return;

  routes.forEach((route, index) => {
    const card = createRouteCard(route, index, day);
    grid.appendChild(card);
  });

  setupMoreLessToggles();
}

function clearGrid() {
  grid.innerHTML = "";
}

// Combine plain text from JSON with café and gallery markup from this file.
function createRouteCard(route, index, day) {
  const card = document.createElement("div");
  card.className = "route-card";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <img src="${route.img}" alt="${route.name}" />
    <div class="route-card-content">
      <h3>${route.name}</h3>
      <a href="${route.link}" target="_blank" rel="noopener noreferrer">View Route</a>

      <div class="description">${buildRouteDescription(route, day)}</div>
      <span class="more-link" style="display:none;">More</span>
    </div>
  `;

  return card;
}

function buildRouteDescription(route, day) {
  const paragraphs = route.description.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`);
  const extras = routeExtras[day]?.[route.name] || {};

  return [paragraphs.join("\n"), extras.cafes, extras.gallery].filter(Boolean).join("\n");
}

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function setupMoreLessToggles() {
  const cards = grid.querySelectorAll(".route-card");

  cards.forEach((card) => {
    const desc = card.querySelector(".description");
    const moreLink = card.querySelector(".more-link");

    if (!desc || !moreLink) return;

    // If it isn't overflowing, don't show More/Less
    if (!isClamped(desc)) return;

    moreLink.style.display = "inline-block";
    moreLink.textContent = "More";

    // Set initial max-height to current collapsed height (smooth base)
    desc.style.maxHeight = desc.scrollHeight + "px";

    // Force back to collapsed height (CSS handles it)
    requestAnimationFrame(() => {
      desc.style.maxHeight = ""; // lets CSS collapsed max-height apply
    });

    moreLink.addEventListener("click", () => {
      const isExpanded = desc.classList.toggle("expanded");

      if (isExpanded) {
        // Expand smoothly to full height
        desc.style.maxHeight = desc.scrollHeight + "px";
        moreLink.textContent = "Less";
      } else {
        // Collapse smoothly back to CSS collapsed height
        desc.style.maxHeight = ""; // back to CSS (3.6em)
        moreLink.textContent = "More";
      }
    });
  });
}

function isClamped(desc) {
  // Full height
  desc.classList.add("expanded");
  const fullHeight = desc.scrollHeight;
  desc.classList.remove("expanded");

  // Clamped height
  const clampedHeight = desc.scrollHeight;

  return fullHeight > clampedHeight + 5;
}

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  lightboxImg.src = img.src;
  caption.textContent = img.alt;
  lightbox.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}
