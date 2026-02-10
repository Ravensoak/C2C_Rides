/* =========================================================
  ROUTES PAGE SCRIPT
  - Mobile menu toggle
  - Load route data for each day
========================================================== */

/* =========================================================
  LOAD AND PROCESS ROUTE DATA FOR EACH DAY
========================================================== */
const routeData = {
1: [
  {
    img: 'pictures/Day1-Short.png',
    name: 'Short Route',
    //distance: '12 km',//
    //elevation: '150 m',//
    description: `
      <p>Choose this route if you want a more relaxed cycling pace with less distance and climbing.</p>
      <p>The route makes its way to Betws-y-Coed and follows quiet country lanes to Capel Curig, offering a gentle introduction to the dramatic landscapes ahead. From Capel Curig, the journey turns toward Snowdon (Yr Wyddfa), whose imposing summit dominates the horizon — weather permitting!</p>
      <p>At the Llanberis junction, the route descends Snowdon’s southern slopes and enters the picturesque village of Beddgelert, known for its welcoming cafés and rich folklore. If time allows, a visit to Gelert’s grave provides a poignant glimpse into one of Wales’s most enduring fables. Continuing south, the path traces the Welsh Highland Railway and the scenic river valley to Nantmor, before leaving the main road and heading toward Garreg.<br>
      Just beyond, the RSPB reserve offers a chance to observe nesting ospreys from its viewing gallery — subject to seasonal return.</p>
      <p>Upon reaching Tremadog, riders may opt for a brief detour into Porthmadog or continue directly to Criccieth. The town greets visitors with sweeping views of its coastal charm and the striking silhouette of Criccieth Castle overlooking the bay.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>10 miles - Betws-Y-Coed</li>
          <li>12.5 miles – Ty Hyll Tearoom (The Ugly House)</li>
          <li>15 miles – Caffi Siabod</li>
          <li>24 miles – Caffi Gwynant</li>
          <li>27 miles - Beddgelert</li>
          <li>37 miles - Porthmadog</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/Beddgelert.jpg" alt="Beddgelert" onclick="openLightbox(this)">
          <img src="pictures/Gelert.jpg" alt="Gelerts Grave" onclick="openLightbox(this)">
          <img src="pictures/Criccieth.jpg" alt="Criccieth" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/52509283'
  },
  {
    img: 'pictures/Day1-Medium.png',
    name: 'Medium Route',
    //distance: '8 km',//
    //elevation: '200 m',//
    description: `
      <p>This route is similar to the short route but diverts to Porthmadog, Borth-y-Gest and Morfa Bychan</p>
      <p>The route makes its way to Betws-y-Coed and follows quiet country lanes to Capel Curig, offering a gentle introduction to the dramatic landscapes ahead. From Capel Curig, the journey turns toward Snowdon (Yr Wyddfa), whose imposing summit dominates the horizon — weather permitting!</p>
      <p>At the Llanberis junction, the route descends Snowdon’s southern slopes and enters the picturesque village of Beddgelert, known for its welcoming cafés and rich folklore. If time allows, a visit to Gelert’s grave provides a poignant glimpse into one of Wales’s most enduring fables. Continuing south, the path traces the Welsh Highland Railway and the scenic river valley to Nantmor, before leaving the main road and heading toward Garreg.</p> 
      <p>From this point, the route diverges from the shorter variant, passing through Penrhyndeudraeth and joining the cycle path across the Cob into Porthmadog. Ascending through the back streets, the route reaches the picturesque cove of Borth-y-Gest. A short stepped descent leads to the shoreline, where the path circles the cove reaching a panoramic viewpoint. From here, the route turns west toward Morfa Bychan and Black Rock Sands, following quiet country lanes with sweeping coastal views before rejoining the main road.</p>
      <p>The final stretch leads to Criccieth, where riders are rewarded with a stunning view of the town and its iconic castle overlooking the sea.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>11 miles - Betws-Y-Coed</li>
          <li>14 miles – Ty Hyll Tearoom (The Ugly House)</li>
          <li>16.5 miles – Caffi Siabod</li>
          <li>25.5 miles – Caffi Gwynant</li>
          <li>28.5 miles - Beddgelert</li>
          <li>39 miles - Porthmadog</li>
          <li>40 miles - Seaview Cafe Bistro & Coffee Lounge, Borth-y-Gest</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/Beddgelert.jpg" alt="Beddgelert" onclick="openLightbox(this)">
          <img src="pictures/BorthyGest.jpg" alt="Borth y Gest" onclick="openLightbox(this)">
          <img src="pictures/Criccieth.jpg" alt="Criccieth" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/51176598'
  },
  {
    img: 'pictures/Day1-Long.png',
    name: 'Long Route',
    //distance: '5 km',//
    //elevation: '300 m',//
      description: `
      <p>This route is similar to the medium route but diverts to Llanberis and rides around the East, North and West sides of Snowdon.</p>
      <p>This route makes its way to Betws-y-Coed and follows quiet country lanes to Capel Curig, offering a gentle introduction into the heart of Snowdonia. From here, the path turns toward Snowdon (Yr Wyddfa), whose dramatic summit dominates the horizon — weather permitting!</p>
      <p>At the Llanberis junction, the route leaves the medium version and climbs through the eastern approach to the Llanberis Pass before descending into the village of Llanberis, where several cafés provide a welcome break. The journey then skirts the northern and western flanks of Snowdon, passing through Rhyd-Ddu and continuing on to Beddgelert, another charming village with ample café options. If time allows, a visit to Gelert’s grave offers a poignant insight into one of Wales’s most enduring fables. From Beddgelert, the route follows the Welsh Highland Railway and the scenic river valley to Nantmor, before leaving the main road and heading toward Garreg.</p>
      <p>After passing through Penrhyndeudraeth, the route joins the cycle path across the Cob embankment into Porthmadog. A short climb through the back streets leads to the picturesque cove of Borth-y-Gest. A stepped descent brings you to the shoreline, where the path loops around the cove to a panoramic viewpoint. The route then turns west toward Morfa Bychan and Black Rock Sands, following quiet country lanes with sweeping coastal vistas before rejoining the main road.</p>
      <p>The final stretch leads to Criccieth, where riders are rewarded with a stunning view of the town and its iconic castle overlooking the sea.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>13 miles - Betws-Y-Coed</li>
          <li>16 miles – Ty Hyll Tearoom (The Ugly House)</li>
          <li>18.5 miles – Caffi Siabod</li>
          <li>30 miles – Pantri, Llanberis</li>
          <li>44.5 miles - Beddgelert</li>
          <li>55 miles - Porthmadog</li>
          <li>56 miles - Seaview Cafe Bistro & Coffee Lounge, Borth-y-Gest</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/LlanberisPass.jpg" alt="Llanberis Pass" onclick="openLightbox(this)">
          <img src="pictures/BorthyGest.jpg" alt="Borth y Gest" onclick="openLightbox(this)">
          <img src="pictures/Criccieth.jpg" alt="Criccieth" onclick="openLightbox(this)">
        </div> 
    `,
    link: 'https://ridewithgps.com/routes/51657762'
  }
],
2: [
  {
    img: 'pictures/Day2-Short.png',
    name: 'Short Route',
    //distance: '10 km',//
    //elevation: '100 m',//
      description: `
      <p>Choose this route if you want a more relaxed cycling pace with less distance and climbing.</p>
      <p>The route heads towards Llanystumdwy, where riders can visit the David Lloyd George Museum and his gravesite - an iconic UK Prime Minister from the early part of the 20th century. From here, the journey continues along quiet country lanes toward Mynytho, gradually revealing sweeping views of the Llŷn Peninsula and the distant Snowdon mountain range. A descent brings you to the dramatic coastline of Hell’s Mouth, followed by a challenging ascent to the village of Rhiw. The climb is well worth the effort, offering panoramic views across the bay toward Sarn Bach, and culminating in a long, rewarding descent into the remote and picturesque village of Aberdaron. Several cafés flank the bridge, making it an ideal spot to pause and reflect on how different this place might have been had it become the primary port to Ireland instead of Holyhead.</p>
      <p>After a short climb out of Aberdaron, the route resumes along peaceful country lanes, with uninterrupted sea views to the left as it winds through Tudweiliog and onward to Morfa Nefyn. At the 40-mile mark, a brief detour leads across the golf course to Porth Dinllaen, home to the renowned Ty Coch In — an iconic beachside pub nestled in a stunning coastal setting.</p>
      <p>The final leg returns to Morfa Nefyn and follows the main road to the hotel in Nefyn, completing a route rich in coastal charm and unforgettable views.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>23 miles - Aberdaron</li>
          <li>36 miles - Cwt Tatws Cafe and Shop</li>
          <li>41 miles - Ty Coch Inn, Porth Dinllaen</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/Mynytho.jpg" alt="Mynytho" onclick="openLightbox(this)">
          <img src="pictures/Aberdaron.jpg" alt="Aberdaron" onclick="openLightbox(this)">
          <img src="pictures/Porthdinllaen.jpg" alt="Porth Dinllaen" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/52509467'
  },
  {
    img: 'pictures/Day2-Medium.png',
    name: 'Medium Route',
    //distance: '15 km',//
    //elevation: '80 m',//
      description: `
      <p>This route is similar to the short route but diverts to the village of Abersoch.</p>
      <p>The route heads towards Llanystumdwy, where you can visit the David Lloyd George Museum and his gravesite — an iconic UK Prime Minister from the early part of the 20th century. From there, it follows quiet country lanes toward Mynytho, gradually revealing sweeping views across the Llŷn Peninsula and the Snowdon mountain range.</p>
      <p>Departing from the shorter variant, the route descends into the coastal village of Abersoch, a lively spot with several cafés. At the 20-mile mark, there’s an optional detour to a beachfront café — perfect for a scenic refreshment stop.</p>
      <p>Leaving Abersoch, the route continues via Sarn Bach and winds through peaceful lanes skirting the dramatic coastline of Hell’s Mouth. This leads to the formidable climb up to the village of Rhiw. The effort is rewarded with panoramic views across the bay toward Sarn Bach, followed by a long, exhilarating descent into the remote and picturesque village of Aberdaron. Several cafés line both sides of the bridge, offering a chance to pause and reflect on how different this place might have been had it, rather than Holyhead, become the main port to Ireland.</p>
      <p>A short climb out of Aberdaron leads to more quiet lanes, with uninterrupted sea views to the left as the route continues through Tudweiliog and on to Morfa Nefyn. At the 49-mile mark, a short excursion across the golf course brings you to Porth Dinllaen, home to the iconic Ty Coch Inn — one of the most famous beachside pubs in the UK.</p>
      <p>The final stretch returns to Morfa Nefyn and follows the main road back to the hotel in Nefyn, completing a route rich in coastal charm and unforgettable views.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>19.5 miles - Just Mary's Cafe, Abersoch</li>
          <li>20.2 miles - caffi treath, Abersoch beach</li>
          <li>33 miles - Aberdaron</li>
          <li>43 miles - Cwt Tatws Cafe and Shop</li>
          <li>48 miles - Ty Coch Inn, Porth Dinllaen</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/Abersoch.jpg" alt="Abersoch" onclick="openLightbox(this)">
          <img src="pictures/Aberdaron.jpg" alt="Aberdaron" onclick="openLightbox(this)">
          <img src="pictures/Porthdinllaen.jpg" alt="Porth Dinllaen" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/51176700'
  },
  {
    img: 'pictures/Day2-Long.png',
    name: 'Long Route',
    //distance: '6 km',//
    //elevation: '50 m',//
      description: `
      <p>This route is similar to the medium route but with a few detours including a ride to the sea front in the town of Pwllheli.</p>
      <p>The route heads towards Llanystumdwy, where you can visit the David Lloyd George Museum and his gravesite — an iconic UK Prime Minister from the early part of the 20th century. From here, the path diverges from the medium route, following quiet country lanes to Pwllheli for a scenic ride along the seafront. The journey then continues toward Mynytho, revealing expansive views across the Llŷn Peninsula and the Snowdon mountain range. Rejoining the medium route, the descent leads into the coastal village of Abersoch, a popular stop with several cafés. At the 30-mile mark, there’s an optional detour to a beachfront café—ideal for a relaxing break with sea views.</p>
      <p>Leaving Abersoch, the route passes through Sarn Bach and winds along peaceful lanes skirting the dramatic coastline of Hell’s Mouth. This leads to the challenging ascent to the village of Rhiw. The climb rewards riders with sweeping views across the bay toward Sarn Bach, followed by a long, exhilarating descent into the remote and picturesque village of Aberdaron. Several cafés line both sides of the bridge, offering a chance to pause and reflect on how different this place might have been had it, rather than Holyhead, become the principal port to Ireland.</p>
      <p>A short climb out of Aberdaron leads to quiet country lanes with uninterrupted sea views to the left, continuing through Tudweiliog. A brief diversion from the medium route takes you to Dinas before reaching Morfa Nefyn. At the 61-mile mark, a short excursion across the golf course brings you to Porth Dinllaen, home to the renowned Ty Coch Inn — an iconic beachside pub nestled in a stunning coastal setting.</p>
      <p>The final stretch returns to Morfa Nefyn and follows the main road to the hotel in Nefyn, completing a route rich in coastal charm and unforgettable views.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>29.5 miles - Just Mary's Cafe, Abersoch</li>
          <li>30.5 miles - caffi treath, Abersoch beach</li>
          <li>43.5 miles - Aberdaron</li>
          <li>54 miles - Cwt Tatws Cafe and Shop</li>
          <li>62 miles - Ty Coch Inn, Porth Dinllaen</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/Abersoch.jpg" alt="Abersoch" onclick="openLightbox(this)">
          <img src="pictures/Aberdaron.jpg" alt="Aberdaron" onclick="openLightbox(this)">
          <img src="pictures/Porthdinllaen.jpg" alt="Porth Dinllaen" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/52012568'
  }
],
3: [
  {
    img: 'pictures/Day3-Short.png',
    name: 'Short Route',
    //distance: '10 km',//
    //elevation: '100 m',//
      description: `
      <p>Choose this route if you want a more relaxed cycling pace with less distance and climbing.</p>
      <p>The route begins with a steady climb out of Nefyn to the village of Llithfaen, where expansive views across the Llŷn Peninsula reward the effort. From there, it descends into Llanaelhaearn before continuing along quiet country lanes and a scenic stretch of disused railway line en route to Pen-y-groes.</p>
      <p>A brief detour from the main cycle route leads to Pant Du Vineyard and Cafe — an ideal spot for a refreshment break before rejoining the route and heading toward Caernarfon. Here, the path loops around the historic castle and follows the shoreline and marina via dedicated cycle paths, offering a relaxed and picturesque ride.</p>
      <p>Upon reaching Bangor, the route crosses the iconic Menai Bridge and continues along the coastal road, concluding at the accommodation in Beaumaris — a charming seaside town steeped in history and character.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>19.5 miles – Pant Du Vineyard and Cafe, Penygroes</li>
          <li>27.5 miles – Caffi Ty Winsh Café, Caernarfon</li>
          <li>31.5 miles - Llofft, Y Felinheli</li>
          <li>32 miles – The Swellies, Y Felinheli</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/CaernarfonCastle.jpg" alt="Caernarfon" onclick="openLightbox(this)">
          <img src="pictures/MenaiBridge.jpg" alt="Menai Bridge" onclick="openLightbox(this)">
          <img src="pictures/BeaumarisCastle.jpg" alt="Beaumaris" onclick="openLightbox(this)">
        </div> 
    `,
    link: 'https://ridewithgps.com/routes/51176741'
  },
  {
    img: 'pictures/Day3-Medium.png',
    name: 'Medium Route',
    //distance: '15 km',//
    //elevation: '80 m',//
      description: `
      <p>This route is similar to the short route but has an extra few miles after Beaumaris where it carries on to Trwyn Penmon Point before returning to the accommodation in Beaumaris.</p>
      <p>The route begins with a steady climb out of Nefyn to the village of Llithfaen, where expansive views across the Llŷn Peninsula reward the ascent. From there, it descends into Llanaelhaearn before continuing along quiet country lanes and a scenic stretch of disused railway line en route to Pen-y-groes.</p>
      <p>A short detour from the main cycle route leads to Pant Du Vineyard and Cafe — an ideal stop for refreshments before rejoining the route and continuing toward Caernarfon. Here, the path loops around the town’s iconic castle and follows dedicated cycle paths along the shoreline and marina, offering a relaxed and picturesque ride toward Bangor.</p>
      <p>In Bangor, the route crosses the historic Menai Bridge and continues along the coastal road through Beaumaris, eventually reaching Trwyn Penmon Point. This dramatic headland offers striking views across the water to Puffin Island and the Trwyn Du lighthouse. From the point, the route retraces its steps along the same scenic path, returning to the accommodation in Beaumaris to complete the day’s journey.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>19.5 miles – Pant Du Vineyard and Cafe, Penygroes</li>
          <li>27.5 miles – Caffi Ty Winsh Café, Caernarfon</li>
          <li>31.5 miles - Llofft, Y Felinheli</li>
          <li>32 miles – The Swellies, Y Felinheli</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/CaernarfonCastle.jpg" alt="Caernarfon" onclick="openLightbox(this)">
          <img src="pictures/BeaumarisCastle.jpg" alt="Beaumaris" onclick="openLightbox(this)">
          <img src="pictures/TrwynPenmonPoint.jpg" alt="Trwyn Penmon Point" onclick="openLightbox(this)">
        </div>  
    `,
    link: 'https://ridewithgps.com/routes/52661668'
  },
  {
    img: 'pictures/Day3-Long.png',
    name: 'Long Route',
    //distance: '6 km',//
    //elevation: '50 m',//
      description: `
      <p>This route is similar to the medium route but leaves the cycle path shortly after Pen-y-groes to ride the coastal route into Caernarfon. It also does a slightly longer route to Trwyn Penmon Point after Beaumaris.</p>
      <p>The route begins with a steady climb out of Nefyn to the village of Llithfaen, where expansive views across the Llŷn Peninsula offer a striking start to the day. From there, it descends into Llanaelhaearn before continuing along quiet country lanes and a scenic stretch of disused railway line en route to Pen-y-groes.</p>
      <p>A short detour from the main cycle route leads to Pant Du Vineyard and Cafe — an ideal spot for a refreshment break before rejoining the path and diverging from the medium route to follow the coastal approach into Caernarfon. The route circles the town’s iconic castle and continues along dedicated cycle paths that trace the shoreline and marina, offering relaxed riding and picturesque views.</p>
      <p>Upon reaching Bangor, the route crosses the historic Menai Bridge and follows the coastal road through Beaumaris, eventually arriving at Trwyn Penmon Point. This dramatic headland provides sweeping views of Puffin Island and the Trwyn Du lighthouse. From the point, the route retraces its steps along the same scenic path, returning to the accommodation in Beaumaris to complete the day’s ride.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>19.5 miles – Pant Du Vineyard and Cafe, Penygroes</li>
          <li>30.5 miles – Caffi Ty Winsh Café, Caernarfon</li>
          <li>34.5 miles - Llofft, Y Felinheli</li>
          <li>35 miles – The Swellies, Y Felinheli</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/CaernarfonCastle.jpg" alt="Caernarfon" onclick="openLightbox(this)">
          <img src="pictures/BeaumarisCastle.jpg" alt="Beaumaris" onclick="openLightbox(this)">
          <img src="pictures/TrwynPenmonPoint.jpg" alt="Trwyn Penmon Point" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/52662124'
  }
],
4: [
  {
    img: 'pictures/Day4-Short.png',
    name: 'Short Route',
    //distance: '10 km',//
    //elevation: '100 m',//
      description: `
      <p>Choose this route if you want to get back to the hotel / car for an earlier drive back home. If time is tight, there is the option in Conwy to miss the Llandudno / Great Orme part of the route and head directly back to the hotel.</p>
      <p>The route departs from Beaumaris and retraces its path toward Bangor, crossing the Menai Bridge once more before joining designated cycle lanes en route to Conwy. After 14 miles, there is a short diversion to Aber Falls Distillery Visitor Centre before rejoining the route. At 20 miles the route diverts into Penmaenmawr for a welcome cafe stop or you have the option to carry on the cyclepath to Conwy. This section of the ride is particularly engaging, weaving across the North Wales Expressway via bridges and skirting around tunnels — a dynamic stretch that blends infrastructure with natural beauty. The approach into Conwy along the coast is especially scenic, offering expansive views of the castle before crossing the bridge and continuing towards Llandudno.</p>
      <p>Many riders will recognise the next segment from the Conwy to Belper C2C route. After reaching Llandudno, the route loops around the Great Orme, revealing dramatic coastal cliffs and panoramic sea views. The final leg returns through Conwy and concludes back at the hotel, rounding off a varied and visually rewarding day’s ride.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>15 miles – Aber Falls Distillery Visitor Centre & Cafe, Abergwyngregyn</li>
          <li>20.8 miles – Penbakes Bakery and Cafe/Bistro, Penmaenmawr</li>
          <li>26 miles – Conwy</li>
          <li>30.5 miles – Llandudno</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/MenaiBridge.jpg" alt="Menai Bridge" onclick="openLightbox(this)">
          <img src="pictures/Conwy.jpg" alt="Conwy" onclick="openLightbox(this)">
          <img src="pictures/GreatOrme.jpg" alt="Great Orme" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/51176763'
  },
  {
    img: 'pictures/Day4-Medium.png',
    name: 'Medium Route',
    //distance: '15 km',//
    //elevation: '80 m',//
      description: `
      <p>This route is similar to the short route but has an extra few miles after Conwy to ride adjacent to Llandudno promenade. Also, after returning across Conwy bridge, it leaves the main road to take some quiet country lanes back to the hotel.</p>
      <p>The route departs from Beaumaris and retraces its path toward Bangor, crossing the Menai Bridge once more before joining designated cycle lanes en route to Conwy. After 14 miles, there is a short diversion to Aber Falls Distillery Visitor Centre before rejoining the route. At 20 miles the route diverts into Penmaenmawr for a welcome cafe stop or you have the option to carry on the cyclepath to Conwy. This section of the ride is particularly engaging, weaving across the North Wales Expressway via bridges and skirting around tunnels — a dynamic stretch that blends infrastructure with natural beauty. The approach into Conwy along the coast is especially scenic, offering expansive views of the castle before crossing the bridge and continuing towards Llandudno.</p>
      <p>From Conwy, the route heads north toward Penrhyn Bay and continues on to Llandudno. Many riders will recognise the next section from the Conwy to Belper C2C ride. After reaching Llandudno, the path loops around the Great Orme, offering dramatic coastal cliffs and sweeping sea views. The final leg returns through Conwy and follows quiet country lanes back to the hotel, concluding a varied and visually rewarding day’s ride.
      </p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>15 miles – Aber Falls Distillery Visitor Centre & Cafe, Abergwyngregyn</li>
          <li>20.8 miles – Penbakes Bakery and Cafe/Bistro, Penmaenmawr</li>
          <li>26 miles – Conwy</li>
          <li>35 miles – Llandudno</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/MenaiBridge.jpg" alt="Menai Bridge" onclick="openLightbox(this)">
          <img src="pictures/Conwy.jpg" alt="Conwy" onclick="openLightbox(this)">
          <img src="pictures/GreatOrme.jpg" alt="Great Orme" onclick="openLightbox(this)">
        </div>
    `,
    link: 'https://ridewithgps.com/routes/52661645'
  },
  {
    img: 'pictures/Day4-Long.png',
    name: 'Long Route',
    //distance: '6 km',//
    //elevation: '50 m',//
      description: `
      <p>This route is similar to the medium route but after Conwy has an extra excursion to Colwyn Bay and an optional detour to the cable car station at the top of the great Orme. Also, after returning to Conwy, it follows the east side of the estuary to take some quiet country lanes back to the hotel.</p>
      <p>The route departs from Beaumaris and retraces its path toward Bangor, crossing the Menai Bridge once more before joining designated cycle lanes en route to Conwy. After 14 miles, there is a short diversion to Aber Falls Distillery Visitor Centre before rejoining the route. At 20 miles the route diverts into Penmaenmawr for a welcome cafe stop or you have the option to carry on the cyclepath to Conwy. This section of the ride is particularly engaging, weaving across the North Wales Expressway via bridges and skirting around tunnels — a dynamic stretch that blends infrastructure with natural beauty. The approach into Conwy along the coast is especially scenic, offering expansive views of the castle before crossing the bridge and continuing towards Llandudno.</p>
      <p>From Conwy, the route continues northeast toward Colwyn Bay and onward to Llandudno. For those seeking an extra challenge, there’s an optional excursion up the steep climb to the cable car station, offering panoramic views from the summit.</p>  
      <p>The path then loops around the Great Orme, revealing dramatic coastal cliffs and sweeping sea vistas. The final leg returns along quiet country lanes on the eastern side of the estuary, concluding the ride back to the hotel.</p>
      <span>Possible cafe stops are:</span>
        <ul>
          <li>15 miles – Aber Falls Distillery Visitor Centre & Cafe, Abergwyngregyn</li>
          <li>20.8 miles – Penbakes Bakery and Cafe/Bistro, Penmaenmawr</li>
          <li>26 miles – Conwy</li>
          <li>36 miles – Llandudno</li>
        </ul>
        <div class="thumbnail-gallery">
          <img src="pictures/MenaiBridge.jpg" alt="Menai Bridge" onclick="openLightbox(this)">
          <img src="pictures/Conwy.jpg" alt="Conwy" onclick="openLightbox(this)">
          <img src="pictures/GreatOrmeCableCar.jpg" alt="Great Orme cable car station" onclick="openLightbox(this)">
        </div> 
    `,
    link: 'https://ridewithgps.com/routes/52662119'
  }
]
};

const selector = document.getElementById("daySelector");
const grid = document.getElementById("routeGrid");

if (selector && grid) {
  selector.addEventListener("change", handleDayChange);
}

function handleDayChange() {
  const day = selector.value;

  clearGrid();

  const routes = routeData?.[day];
  if (!routes || !routes.length) return;

  routes.forEach((route, index) => {
    const card = createRouteCard(route, index);
    grid.appendChild(card);
  });

  setupMoreLessToggles();
}

function clearGrid() {
  grid.innerHTML = "";
}

function createRouteCard(route, index) {
  const card = document.createElement("div");
  card.className = "route-card";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <img src="${route.img}" alt="${route.name}" />
    <div class="route-card-content">
      <h3>${route.name}</h3>
      <a href="${route.link}" target="_blank" rel="noopener noreferrer">View Route</a>

      <div class="description">${route.description}</div>
      <span class="more-link" style="display:none;">More</span>
    </div>
  `;

  return card;
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