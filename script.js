        /* =====================================================
           DATA
        ===================================================== */
        const photographyBooks = [{
            id: 1,
            title: "Above the Clouds",
            subtitle: "Mountain Stories",
            category: "Landscape",
            location: "Himalayas",
            year: "2025",
            description: "A visual journey through the highest mountain ranges on Earth, capturing the first light, deep mist, and the silence above the cloud line.",
            cover: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
            tags: ["Mountains", "Mist", "Sunrise", "Altitude"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "Mountain Morning",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
                category: "Landscape",
                location: "Himalayas, Nepal",
                date: "October 2025",
                camera: "Sony A7R V",
                lens: "24–70mm f/2.8 GM II",
                iso: "100",
                aperture: "f/8",
                shutterSpeed: "1/125s",
                weather: "Clear, -2°C",
                coordinates: "27.9881° N, 86.9250° E",
                photographer: "Elias Thorne",
                tags: ["Alpenglow", "Ridgeline", "Valley Mist"],
                caption: "The first light slowly touched the mountain ridges while the valley remained covered in morning mist.",
                description: "I arrived before sunrise and waited quietly as the clouds moved through the valley. When the first light appeared, the mountains slowly separated from the fog and revealed the landscape in layers of gold and shadow."
            }, {
                type: "story",
                title: "Waiting for Light",
                category: "Mountain Journal",
                location: "High Valley Camp",
                date: "October 2025",
                readingTime: "6 min read",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
                introduction: "Some landscapes require patience before they reveal themselves.",
                content: "<p>I began the climb before sunrise. The trail was still covered in darkness and the temperature had dropped to -5°C during the night. My hands were stiff even inside gloves.</p><p>For almost an hour, there was nothing to photograph. The entire valley remained hidden beneath a thick layer of cloud that seemed permanent.</p><p>Then the wind changed.</p><p>The clouds slowly moved between the peaks like a slow river, and the first warm rays of sunlight appeared across the mountain ridges, turning the snow into pink gold.</p><p>That was the moment I had been waiting for. I had been standing in the same spot for 90 minutes.</p>",
                photographerNote: "The most important part of this photograph was waiting. The mountain does not perform on command.",
                gear: "Tripod, Remote shutter, Hand warmers",
                bestTime: "05:30 — 06:45 AM",
                difficulty: "High altitude, cold temperatures"
            }, {
                type: "photo",
                title: "Valley of Mist",
                image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1600&q=80",
                category: "Landscape",
                location: "Mountain Valley, Bhutan",
                date: "October 2025",
                camera: "Sony A7R V",
                lens: "70–200mm f/2.8 GM II",
                iso: "200",
                aperture: "f/5.6",
                shutterSpeed: "1/250s",
                weather: "Partly cloudy, 4°C",
                coordinates: "27.5142° N, 89.7120° E",
                photographer: "Elias Thorne",
                tags: ["Telephoto", "Layers", "Atmosphere"],
                caption: "A river of clouds moved silently through the valley below.",
                description: "From the ridge above the valley I could see clouds flowing between the mountains like a slow white river. The compression of the telephoto lens brought every layer together into a single breathing image."
            }, {
                type: "photo",
                title: "The Summit Shadow",
                image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=80",
                category: "Landscape",
                location: "Everest Base Camp Trail",
                date: "October 2025",
                camera: "Sony A7R V",
                lens: "16–35mm f/2.8 GM",
                iso: "100",
                aperture: "f/11",
                shutterSpeed: "1/60s",
                weather: "Clear, -8°C",
                coordinates: "28.0020° N, 86.8520° E",
                photographer: "Elias Thorne",
                tags: ["Wide Angle", "Shadow", "Scale"],
                caption: "The shadow of the summit stretched for miles across the Tibetan plateau.",
                description: "Only from this angle could I see how massive the mountain truly is. The shadow created a natural leading line that pulled the eye toward the distant horizon."
            }]
        }, {
            id: 2,
            title: "Into the Green",
            subtitle: "Forest Stories",
            category: "Forest",
            location: "Northern Forest",
            year: "2025",
            description: "Deep inside ancient woodlands where fog lingers, light filters through canopies, and silence has a different texture.",
            cover: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
            tags: ["Forest", "Mist", "Ancient", "Green"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "Forest Mist",
                image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
                category: "Forest",
                location: "Black Forest, Germany",
                date: "September 2025",
                camera: "Nikon Z8",
                lens: "35mm f/1.8 S",
                iso: "400",
                aperture: "f/2.8",
                shutterSpeed: "1/80s",
                weather: "Foggy, 8°C",
                coordinates: "48.0000° N, 8.4000° E",
                photographer: "Mira Solis",
                tags: ["Mood", "Atmosphere", "Dark"],
                caption: "Morning fog transformed the forest into a quiet world of soft green shadows.",
                description: "The forest was almost completely silent except for the sound of water moving between the trees. Every trunk seemed to dissolve into the mist after only twenty meters."
            }, {
                type: "story",
                title: "The Forest Before Sunrise",
                category: "Forest Journal",
                location: "Northern Forest, Finland",
                date: "September 2025",
                readingTime: "7 min read",
                image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80",
                introduction: "There is a different kind of silence inside an old forest.",
                content: "<p>I entered the forest while the sky was still dark. The path disappeared between tall spruce trees and the morning air was cold enough to see my breath.</p><p>A thin layer of fog covered the ground like a blanket. Every branch seemed to disappear into the mist, creating a world without edges.</p><p>As the sun rose, small pieces of light began to pass through the trees in visible beams. The forest slowly changed from a dark green world into a landscape filled with soft golden light.</p><p>I did not take a photograph for the first thirty minutes. I only listened.</p>",
                photographerNote: "In forests, the light changes every few minutes. You must be ready, but also patient.",
                gear: "Macro lens, Rain cover, Headlamp",
                bestTime: "06:00 — 08:00 AM",
                difficulty: "Low light, uneven terrain"
            }, {
                type: "photo",
                title: "Green Silence",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
                category: "Forest",
                location: "Eastern Woodland, Poland",
                date: "September 2025",
                camera: "Nikon Z8",
                lens: "50mm f/1.2 S",
                iso: "200",
                aperture: "f/2.0",
                shutterSpeed: "1/200s",
                weather: "Overcast, 12°C",
                coordinates: "52.2297° N, 21.0122° E",
                photographer: "Mira Solis",
                tags: ["Bokeh", "Details", "Stillness"],
                caption: "Deep inside the forest, everything became quieter.",
                description: "I stopped walking and listened. The forest seemed completely still for a few seconds, and then a single leaf fell. That was the only sound."
            }, {
                type: "photo",
                title: "Fern Valley",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
                category: "Forest",
                location: "Bialowieza Forest",
                date: "September 2025",
                camera: "Nikon Z8",
                lens: "85mm f/1.8 S",
                iso: "320",
                aperture: "f/2.8",
                shutterSpeed: "1/160s",
                weather: "Humid, 14°C",
                coordinates: "52.7000° N, 23.8667° E",
                photographer: "Mira Solis",
                tags: ["Ferns", "Depth", "Wild"],
                caption: "Ancient ferns covered the forest floor like a prehistoric carpet.",
                description: "This forest has remained largely untouched for centuries. Walking through it feels like stepping back into a time before human noise existed."
            }]
        }, {
            id: 3,
            title: "Where Land Ends",
            subtitle: "Ocean Journal",
            category: "Ocean",
            location: "Atlantic Coast",
            year: "2024",
            description: "The edge of the world where water meets sky, where tides write stories in sand, and where the last light of the day disappears into the deep.",
            cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
            tags: ["Ocean", "Coast", "Horizon", "Waves"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?auto=format&fit=crop&w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "Blue Horizon",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
                category: "Ocean",
                location: "Algarve, Portugal",
                date: "July 2024",
                camera: "Canon EOS R5",
                lens: "16–35mm f/2.8L III",
                iso: "100",
                aperture: "f/11",
                shutterSpeed: "1/200s",
                weather: "Clear, 28°C",
                coordinates: "37.0169° N, 7.9350° W",
                photographer: "Jonas Reef",
                tags: ["Wide Angle", "Minimal", "Calm"],
                caption: "At the edge of the land, the horizon became almost impossible to separate from the sky.",
                description: "The afternoon light was soft and the ocean stretched endlessly toward the horizon. I used a polarizing filter to cut through the surface glare and reveal the true color of the water."
            }, {
                type: "story",
                title: "The Last Light",
                category: "Ocean Journal",
                location: "Dingle Peninsula, Ireland",
                date: "July 2024",
                readingTime: "6 min read",
                image: "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1600&q=80",
                introduction: "Every coastline has a moment when the day seems to pause.",
                content: "<p>I arrived at the coast late in the afternoon. The beach was almost empty except for a few fishing boats pulled up on the sand.</p><p>Waves moved slowly across the sand while the sun began to fall toward the horizon, painting the wet rocks in copper tones.</p><p>I stayed until the final light disappeared. The sky changed from gold to orange, then to violet, and finally to a deep blue that matched the Atlantic.</p><p>Sometimes the best photograph is the one you take after everyone else has already left and the beach belongs only to the tide.</p>",
                photographerNote: "Stay until the light is completely gone. The last ten minutes often hold the most emotion.",
                gear: "ND filter, Tripod, Beach blanket",
                bestTime: "19:30 — 21:00 PM",
                difficulty: "Wind, salt spray, shifting sand"
            }, {
                type: "photo",
                title: "Tide Lines",
                image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80",
                category: "Ocean",
                location: "Cornwall, England",
                date: "July 2024",
                camera: "Canon EOS R5",
                lens: "70–200mm f/2.8L IS III",
                iso: "100",
                aperture: "f/5.6",
                shutterSpeed: "1/500s",
                weather: "Partly cloudy, 22°C",
                coordinates: "50.2599° N, 5.0510° W",
                photographer: "Jonas Reef",
                tags: ["Patterns", "Abstract", "Water"],
                caption: "The retreating tide left behind a map of lines and pools on the sand.",
                description: "From the cliff above, the beach looked like an abstract painting. The repeating curves of the tide created a natural rhythm that I tried to capture with a longer lens."
            }]
        }, {
            id: 4,
            title: "Wild Encounters",
            subtitle: "Wildlife Journal",
            category: "Wildlife",
            location: "African Wilderness",
            year: "2025",
            description: "Quiet moments in the bush where patience is rewarded with a glance, and respect is measured in distance.",
            cover: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
            tags: ["Wildlife", "Safari", "Portrait", "Bush"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1504173010664-32509a0d4d71?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "The Watcher",
                image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1600&q=80",
                category: "Wildlife",
                location: "Serengeti, Tanzania",
                date: "August 2025",
                camera: "Sony A1",
                lens: "200–600mm f/5.6–6.3 G",
                iso: "400",
                aperture: "f/6.3",
                shutterSpeed: "1/1000s",
                weather: "Dry, 30°C",
                coordinates: "2.1540° S, 34.6857° E",
                photographer: "Amara Okafor",
                tags: ["Portrait", "Eye Contact", "Golden Hour"],
                caption: "For several seconds, the animal looked directly toward the camera.",
                description: "Wildlife photography is often about patience. I remained completely still inside the vehicle and waited for the animal to become comfortable with my presence. When it finally looked up, the light was perfect."
            }, {
                type: "story",
                title: "A Quiet Encounter",
                category: "Wildlife Journal",
                location: "Masai Mara, Kenya",
                date: "August 2025",
                readingTime: "5 min read",
                image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=80",
                introduction: "The wilderness teaches you to wait.",
                content: "<p>We had been driving slowly for several hours when the vehicle stopped. Our guide raised his hand.</p><p>There was movement in the tall grass about fifty meters ahead.</p><p>Nobody spoke. We simply watched. Even the engine was turned off.</p><p>After several minutes the animal stepped into the open landscape and looked directly toward us. The morning sun lit its fur from behind, creating a rim of gold.</p><p>I lifted the camera slowly and took only a few photographs. Any more would have been greedy.</p>",
                photographerNote: "Respect the distance. Let the animal decide the moment. Never chase.",
                gear: "Bean bag, Gimbal head, Teleconverter",
                bestTime: "06:00 — 09:00 AM",
                difficulty: "Heat, dust, unpredictable subjects"
            }, {
                type: "photo",
                title: "Savannah at Dusk",
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
                category: "Wildlife",
                location: "Okavango Delta, Botswana",
                date: "August 2025",
                camera: "Sony A1",
                lens: "100–400mm f/4.5–5.6 GM",
                iso: "800",
                aperture: "f/5.6",
                shutterSpeed: "1/500s",
                weather: "Clear, 28°C",
                coordinates: "19.6499° S, 22.9833° E",
                photographer: "Amara Okafor",
                tags: ["Silhouette", "Sunset", "Habitat"],
                caption: "As the sun fell, the entire savannah turned into a silhouette against a burning sky.",
                description: "I exposed for the sky and let the landscape fall into shadow. The result was a scene that felt more like a dream than a photograph."
            }]
        }, {
            id: 5,
            title: "Desert Whispers",
            subtitle: "Sand & Silence",
            category: "Desert",
            location: "Sahara Desert",
            year: "2024",
            description: "In the emptiness of the desert, every grain of sand tells a story. A journey through dunes, ancient rocks, and star-filled nights.",
            cover: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
            tags: ["Desert", "Dunes", "Heat", "Night Sky"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "Golden Dunes",
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
                category: "Desert",
                location: "Erg Chebbi, Morocco",
                date: "May 2024",
                camera: "Fujifilm GFX 100S",
                lens: "32–64mm f/4",
                iso: "100",
                aperture: "f/11",
                shutterSpeed: "1/250s",
                weather: "Clear, 38°C",
                coordinates: "31.1000° N, 4.0167° W",
                photographer: "Leila Hassan",
                tags: ["Patterns", "Shadow", "Scale"],
                caption: "The wind had carved the dunes into shapes that seemed almost architectural.",
                description: "I climbed the highest dune I could find before sunrise. The sand was still cool from the night, and the footprints from yesterday had been completely erased by the wind."
            }, {
                type: "story",
                title: "Walking on Silence",
                category: "Desert Journal",
                location: "Sahara, Morocco",
                date: "May 2024",
                readingTime: "6 min read",
                image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=80",
                introduction: "The desert is not empty. It is full of answers.",
                content: "<p>We left the camp before dawn. The sand was firm underfoot from the cold night air, making walking easier than it would be after the sun rose.</p><p>For hours there was nothing but sand in every direction. No roads, no trees, no sound except the wind brushing against my jacket.</p><p>At midday the heat became overwhelming. The air shimmered above the dunes, creating mirages that looked like lakes in the distance.</p><p>But as the sun began to fall, the desert changed completely. The sand turned from white to gold to deep orange, and the silence felt sacred.</p>",
                photographerNote: "The desert demands humility. Bring water, patience, and a wide-angle lens.",
                gear: "Desert boots, UV filter, Lens cloth",
                bestTime: "05:00 — 08:00 AM, 17:00 — 19:30 PM",
                difficulty: "Extreme heat, sand in equipment, dehydration risk"
            }, {
                type: "photo",
                title: "Desert Night",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
                category: "Desert",
                location: "Merzouga, Morocco",
                date: "May 2024",
                camera: "Fujifilm GFX 100S",
                lens: "23mm f/4",
                iso: "3200",
                aperture: "f/2.8",
                shutterSpeed: "20s",
                weather: "Clear, 18°C",
                coordinates: "31.1000° N, 4.0167° W",
                photographer: "Leila Hassan",
                tags: ["Astro", "Long Exposure", "Camp"],
                caption: "Without light pollution, the Milky Way stretched from one horizon to the other.",
                description: "I placed my camera on a tripod near the camp and let it absorb the starlight for twenty seconds. The sand in the foreground was lit only by a single lantern."
            }, {
                type: "photo",
                title: "Ancient Rock",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
                category: "Desert",
                location: "Atlas Mountains Edge",
                date: "May 2024",
                camera: "Fujifilm GFX 100S",
                lens: "45mm f/2.8",
                iso: "100",
                aperture: "f/8",
                shutterSpeed: "1/125s",
                weather: "Clear, 32°C",
                coordinates: "31.5000° N, 5.5000° W",
                photographer: "Leila Hassan",
                tags: ["Geology", "Texture", "Time"],
                caption: "This rock formation has stood unchanged while civilizations rose and fell around it.",
                description: "The texture of the stone told a story of millions of years. I used side lighting to emphasize every crack and layer in the surface."
            }]
        }, {
            id: 6,
            title: "Frozen Horizons",
            subtitle: "Arctic Journal",
            category: "Arctic",
            location: "Iceland",
            year: "2025",
            description: "At the top of the world, ice rules the landscape. A record of glaciers, northern lights, and the profound stillness of the far north.",
            cover: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=80",
            tags: ["Ice", "Snow", "Aurora", "Cold"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1518182170546-0766bc6f9213?auto=format&fit=crop&w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "Glacier Blue",
                image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=80",
                category: "Arctic",
                location: "Vatnajökull, Iceland",
                date: "February 2025",
                camera: "Canon EOS R5",
                lens: "15–35mm f/2.8L",
                iso: "100",
                aperture: "f/8",
                shutterSpeed: "1/160s",
                weather: "Overcast, -12°C",
                coordinates: "64.4220° N, 16.7902° W",
                photographer: "Erik Solstad",
                tags: ["Ice Cave", "Blue", "Wide Angle"],
                caption: "Inside the glacier, the ice was so dense it absorbed every color except blue.",
                description: "Entering an ice cave requires a local guide and perfect timing. The roof is safe only in deep winter. Inside, the light filtering through the ice created a cathedral of blue."
            }, {
                type: "story",
                title: "Under the Aurora",
                category: "Arctic Journal",
                location: "Tromsø, Norway",
                date: "February 2025",
                readingTime: "7 min read",
                image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=80",
                introduction: "The northern sky is never truly dark in winter.",
                content: "<p>I had been waiting for five nights. The forecast promised clear skies and high aurora activity, but the Arctic weather changes faster than any forecast can predict.</p><p>At 11 PM the clouds suddenly parted. A faint green glow appeared above the mountain ridge, slowly strengthening into curtains of light that moved like silk in a breeze.</p><p>The temperature was -18°C. My tripod legs were stiff and my fingers ached, but I could not look away.</p><p>For two hours the sky danced. Then, as suddenly as it had begun, the show ended and the stars returned.</p>",
                photographerNote: "Aurora photography is 90% waiting and 10% panic. Know your settings before the lights appear.",
                gear: "Extra batteries, Hand warmers, Stable tripod",
                bestTime: "22:00 — 02:00 AM (Winter)",
                difficulty: "Extreme cold, battery drain, remote location"
            }, {
                type: "photo",
                title: "Frozen Lake",
                image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1600&q=80",
                category: "Arctic",
                location: "Jökulsárlón, Iceland",
                date: "February 2025",
                camera: "Canon EOS R5",
                lens: "24–70mm f/2.8L II",
                iso: "100",
                aperture: "f/11",
                shutterSpeed: "2s",
                weather: "Calm, -8°C",
                coordinates: "64.0784° N, 16.2306° W",
                photographer: "Erik Solstad",
                tags: ["Reflection", "Long Exposure", "Minimal"],
                caption: "The lake had frozen so smoothly it became a mirror for the mountains.",
                description: "I used a two-second exposure to smooth any remaining ripples on the water surface. The icebergs looked like sculptures floating in glass."
            }, {
                type: "photo",
                title: "Snow Road",
                image: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1600&q=80",
                category: "Arctic",
                location: "Ring Road, Iceland",
                date: "February 2025",
                camera: "Canon EOS R5",
                lens: "70–200mm f/2.8L IS III",
                iso: "200",
                aperture: "f/5.6",
                shutterSpeed: "1/400s",
                weather: "Snowing, -10°C",
                coordinates: "65.0000° N, 18.0000° W",
                photographer: "Erik Solstad",
                tags: ["Road", "Leading Line", "Storm"],
                caption: "The road disappeared into white nothingness, inviting and dangerous at the same time.",
                description: "Driving in Iceland during winter is not for the unprepared. I pulled over to capture this scene because the road seemed to vanish into another world."
            }]
        }, {
            id: 7,
            title: "River's Journey",
            subtitle: "Flowing Water",
            category: "River",
            location: "Pacific Northwest",
            year: "2025",
            description: "Following water from mountain spring to ocean delta. A story of movement, power, and the life that gathers along the banks.",
            cover: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
            tags: ["River", "Waterfall", "Flow", "Green"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=2400&q=80",
                "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "The Falls",
                image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1600&q=80",
                category: "River",
                location: "Multnomah Falls, Oregon",
                date: "June 2025",
                camera: "Sony A7 IV",
                lens: "16–35mm f/2.8 GM",
                iso: "50",
                aperture: "f/16",
                shutterSpeed: "1.5s",
                weather: "Misty, 15°C",
                coordinates: "45.5762° N, 122.1158° W",
                photographer: "Sam Rivers",
                tags: ["Long Exposure", "Waterfall", "Lush"],
                caption: "The water fell 189 meters and turned into mist before it ever reached the bottom pool.",
                description: "I arrived early to avoid the crowds. Using a tripod and a neutral density filter, I slowed the shutter to transform the violent waterfall into something that looked like silk."
            }, {
                type: "story",
                title: "Following the Current",
                category: "River Journal",
                location: "Columbia River Gorge",
                date: "June 2025",
                readingTime: "6 min read",
                image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1600&q=80",
                introduction: "Every river begins as a trickle too small to photograph.",
                content: "<p>I started at the source, a melting snowfield high in the Cascade Mountains. The water was so clear it was almost invisible, running over grey stones with a sound like whispering.</p><p>As I followed the river downhill, it grew. Small tributaries joined it, and soon it was large enough to carry fallen trees and smooth boulders.</p><p>By the time it reached the gorge, the river had become powerful and loud. The spray from the rapids coated my lens every few seconds.</p><p>A river is a timeline. At the top it is innocent. At the bottom it is wise and unstoppable.</p>",
                photographerNote: "Protect your gear from spray. A chamois cloth is more valuable than any filter near waterfalls.",
                gear: "ND filter, Tripod, Waterproof cover",
                bestTime: "07:00 — 10:00 AM",
                difficulty: "Slippery rocks, spray, fast current"
            }, {
                type: "photo",
                title: "Morning Mist",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
                category: "River",
                location: "Skagit River, Washington",
                date: "June 2025",
                camera: "Sony A7 IV",
                lens: "70–200mm f/2.8 GM II",
                iso: "200",
                aperture: "f/4",
                shutterSpeed: "1/320s",
                weather: "Foggy, 12°C",
                coordinates: "48.5000° N, 121.7500° W",
                photographer: "Sam Rivers",
                tags: ["Mist", "Layers", "Serene"],
                caption: "The river carried the morning fog downstream like a ghostly cargo.",
                description: "From a bridge upstream, I watched the fog roll along the water surface. The telephoto lens compressed the tree layers into a single soft painting."
            }, {
                type: "photo",
                title: "River Stones",
                image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1600&q=80",
                category: "River",
                location: "Olympic National Park",
                date: "June 2025",
                camera: "Sony A7 IV",
                lens: "90mm f/2.8 Macro",
                iso: "400",
                aperture: "f/5.6",
                shutterSpeed: "1/60s",
                weather: "Shade, 16°C",
                coordinates: "47.8021° N, 123.6044° W",
                photographer: "Sam Rivers",
                tags: ["Macro", "Details", "Underwater"],
                caption: "Beneath the surface, the stones were smoother than anything shaped by human hands.",
                description: "I placed the camera just inches above the water, using a polarizer to cut through the reflection and reveal the submerged stones in perfect clarity."
            }]
        }, {
            id: 8,
            title: "Safari Dreams",
            subtitle: "Animals of the Savanna",
            category: "Wildlife",
            location: "East African Savanna",
            year: "2026",
            description: "A photographic safari across the great plains of East Africa. From elephants at dusk to cheetahs in golden light, this book captures the soul of the savanna's most iconic animals.",
            cover: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1000&q=80",
            tags: ["Elephants", "Giraffes", "Lions", "Cheetahs", "Safari"],
            backgroundImages: [
                "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=2400&q=80",
                "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=2400&q=80",
                "https://images.unsplash.com/photo-1573511860307-e9b827830bed?w=2400&q=80",
                "https://images.unsplash.com/photo-1534188753412-3e26d0d618d2?w=2400&q=80",
                "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=2400&q=80"
            ],
            pages: [{
                type: "photo",
                title: "Elephants at Dusk",
                image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1600&q=80",
                category: "Wildlife",
                location: "Amboseli, Kenya",
                date: "August 2026",
                camera: "Sony A1",
                lens: "200–600mm f/5.6–6.3 G",
                iso: "800",
                aperture: "f/6.3",
                shutterSpeed: "1/500s",
                weather: "Warm, 28°C",
                coordinates: "2.6000° S, 37.2000° E",
                photographer: "Murshidul Islam",
                tags: ["Elephants", "Dusk", "Family", "Savanna"],
                caption: "A herd of elephants moved across the savanna as the sun set behind Mount Kilimanjaro.",
                description: "We waited for hours near a watering hole. As the sun began to dip, the elephants arrived in a single-file line, their silhouettes glowing against the orange sky. The matriarch led the way, pausing occasionally to check the wind."
            }, {
                type: "story",
                title: "The Herd's Journey",
                category: "Safari Journal",
                location: "Amboseli, Kenya",
                date: "August 2026",
                readingTime: "7 min read",
                image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1600&q=80",
                introduction: "Elephants move with a wisdom that comes from memory older than our own.",
                content: "<p>We had been following this herd for three days. Their path was deliberate — from one water source to the next, never straying far from the ancient routes that had been used for generations.</p><p>Each morning we would wake before dawn, pack the vehicle, and drive in silence, following the fresh tracks in the red dust.</p><p>On the third evening, we found them at the edge of a dry riverbed. The matriarch stood on the ridge, surveying the land as the sun fell behind her. Her family gathered around her, calves playing in the dust.</p><p>It was the most peaceful scene I have ever witnessed in the wild. They knew we were there, but they did not move away. They simply accepted our presence as part of the landscape.</p>",
                photographerNote: "Elephants are the memory of the savanna. Watch them for hours — they will teach you patience.",
                gear: "Bean bag, 600mm lens, Dust cover",
                bestTime: "16:00 — 18:30 PM",
                difficulty: "Dust, heat, long distances"
            }, {
                type: "photo",
                title: "Giraffe at Golden Hour",
                image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1600&q=80",
                category: "Wildlife",
                location: "Masai Mara, Kenya",
                date: "August 2026",
                camera: "Sony A1",
                lens: "100–400mm f/4.5–5.6 GM",
                iso: "250",
                aperture: "f/5.6",
                shutterSpeed: "1/800s",
                weather: "Clear, 26°C",
                coordinates: "1.5000° S, 35.0000° E",
                photographer: "Murshidul Islam",
                tags: ["Giraffe", "Golden Hour", "Acacia", "Savanna"],
                caption: "A giraffe reached for the highest leaves as the sun filtered through the acacia trees.",
                description: "I had been tracking this giraffe for nearly an hour, waiting for it to step into the perfect patch of light. When it finally moved beneath the acacia, the golden sun illuminated its markings like a painted mosaic."
            }, {
                type: "photo",
                title: "Lion in Repose",
                image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d2?w=1600&q=80",
                category: "Wildlife",
                location: "Serengeti, Tanzania",
                date: "August 2026",
                camera: "Sony A1",
                lens: "200–600mm f/5.6–6.3 G",
                iso: "400",
                aperture: "f/6.3",
                shutterSpeed: "1/1000s",
                weather: "Partly cloudy, 30°C",
                coordinates: "2.1540° S, 34.6857° E",
                photographer: "Murshidul Islam",
                tags: ["Lion", "Resting", "Grass", "Portrait"],
                caption: "A lion rested in the tall grass, watching the horizon with golden eyes.",
                description: "The pride had fed the night before. This male was content to rest in the shade of a small bush, occasionally lifting his head to scan for any sign of danger. The grass framed his face like a natural portrait."
            }, {
                type: "photo",
                title: "Zebras at Watering Hole",
                image: "https://images.unsplash.com/photo-1573511860307-e9b827830bed?w=1600&q=80",
                category: "Wildlife",
                location: "Ngorongoro, Tanzania",
                date: "August 2026",
                camera: "Sony A1",
                lens: "70–200mm f/2.8 GM II",
                iso: "100",
                aperture: "f/5.6",
                shutterSpeed: "1/400s",
                weather: "Sunny, 27°C",
                coordinates: "3.0000° S, 35.5000° E",
                photographer: "Murshidul Islam",
                tags: ["Zebras", "Water", "Reflection", "Herd"],
                caption: "A family of zebras gathered at the waterhole, their reflections mirroring the afternoon sky.",
                description: "The water was perfectly still, creating a mirror that doubled the size of the herd. I positioned myself low to the ground, capturing both the animals and their reflections in a single composition."
            }, {
                type: "story",
                title: "The Dance of the Plains",
                category: "Safari Journal",
                location: "Serengeti, Tanzania",
                date: "August 2026",
                readingTime: "8 min read",
                image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1600&q=80",
                introduction: "The savanna is a stage where every animal plays a role.",
                content: "<p>The great migration had arrived. For miles, the plains were covered in wildebeest and zebras, moving like a single organism across the golden grass.</p><p>We positioned the vehicle on a small rise, watching the endless procession. Dust rose from the hooves of thousands, creating a haze that caught the afternoon sun.</p><p>In the distance, we could see the predators watching — lions on a rocky outcrop, cheetahs in the tall grass, hyenas patrolling the edges.</p><p>This is the rhythm of the savanna. The constant movement, the chase, the feast, and the stillness that follows. It is both beautiful and brutal, and it never stops.</p>",
                photographerNote: "The migration is the greatest wildlife show on Earth. Be patient, and let the scene unfold.",
                gear: "Telephoto lens, Dust filters, Extra batteries",
                bestTime: "06:00 — 09:00 AM, 16:00 — 18:30 PM",
                difficulty: "Dust, crowds, unpredictable animals"
            }]
        }];

        const indexBackgroundImages = [
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=80",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=80",
            "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2400&q=80",
            "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2400&q=80",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80"
        ];

        const heroSlidesData = [{
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
            label: "MOUNTAIN",
            title: "Above the Clouds"
        }, {
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80",
            label: "FOREST",
            title: "Into the Green"
        }, {
            image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=80",
            label: "DESERT",
            title: "Desert Whispers"
        }, {
            image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1400&q=80",
            label: "WILDLIFE",
            title: "Safari Dreams"
        }, {
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
            label: "LANDSCAPE",
            title: "Endless Horizon"
        }];

        /* =====================================================
           GALLERY PHOTOS — 20 images
        ===================================================== */
        const galleryPhotos = [{
            id: 1,
            src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
            title: "Above the Clouds",
            category: "Landscape",
            location: "Himalayas, Nepal",
            date: "October 2025",
            camera: "Sony A7R V",
            lens: "24–70mm f/2.8 GM II",
            iso: "100",
            aperture: "f/8",
            shutter: "1/125s",
            photographer: "Elias Thorne",
            tags: ["Mountains", "Mist", "Sunrise"]
        }, {
            id: 2,
            src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
            title: "Into the Green",
            category: "Forest",
            location: "Black Forest, Germany",
            date: "September 2025",
            camera: "Nikon Z8",
            lens: "35mm f/1.8 S",
            iso: "400",
            aperture: "f/2.8",
            shutter: "1/80s",
            photographer: "Mira Solis",
            tags: ["Forest", "Mist", "Ancient"]
        }, {
            id: 3,
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            title: "Where Land Ends",
            category: "Ocean",
            location: "Algarve, Portugal",
            date: "July 2024",
            camera: "Canon EOS R5",
            lens: "16–35mm f/2.8L III",
            iso: "100",
            aperture: "f/11",
            shutter: "1/200s",
            photographer: "Jonas Reef",
            tags: ["Ocean", "Coast", "Horizon"]
        }, {
            id: 4,
            src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
            title: "Wild Encounters",
            category: "Wildlife",
            location: "Serengeti, Tanzania",
            date: "August 2025",
            camera: "Sony A1",
            lens: "200–600mm f/5.6–6.3 G",
            iso: "400",
            aperture: "f/6.3",
            shutter: "1/1000s",
            photographer: "Amara Okafor",
            tags: ["Wildlife", "Safari", "Portrait"]
        }, {
            id: 5,
            src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
            title: "Desert Whispers",
            category: "Desert",
            location: "Erg Chebbi, Morocco",
            date: "May 2024",
            camera: "Fujifilm GFX 100S",
            lens: "32–64mm f/4",
            iso: "100",
            aperture: "f/11",
            shutter: "1/250s",
            photographer: "Leila Hassan",
            tags: ["Desert", "Dunes", "Heat"]
        }, {
            id: 6,
            src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
            title: "Frozen Horizons",
            category: "Arctic",
            location: "Vatnajökull, Iceland",
            date: "February 2025",
            camera: "Canon EOS R5",
            lens: "15–35mm f/2.8L",
            iso: "100",
            aperture: "f/8",
            shutter: "1/160s",
            photographer: "Erik Solstad",
            tags: ["Ice", "Snow", "Aurora"]
        }, {
            id: 7,
            src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
            title: "River's Journey",
            category: "River",
            location: "Multnomah Falls, Oregon",
            date: "June 2025",
            camera: "Sony A7 IV",
            lens: "16–35mm f/2.8 GM",
            iso: "50",
            aperture: "f/16",
            shutter: "1.5s",
            photographer: "Sam Rivers",
            tags: ["River", "Waterfall", "Flow"]
        }, {
            id: 8,
            src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
            title: "Starlight",
            category: "Night Sky",
            location: "Merzouga, Morocco",
            date: "May 2024",
            camera: "Fujifilm GFX 100S",
            lens: "23mm f/4",
            iso: "3200",
            aperture: "f/2.8",
            shutter: "20s",
            photographer: "Leila Hassan",
            tags: ["Astro", "Long Exposure", "Night"]
        }, {
            id: 9,
            src: "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=800&q=80",
            title: "Winter's Edge",
            category: "Arctic",
            location: "Tromsø, Norway",
            date: "February 2025",
            camera: "Canon EOS R5",
            lens: "24–70mm f/2.8L II",
            iso: "100",
            aperture: "f/11",
            shutter: "2s",
            photographer: "Erik Solstad",
            tags: ["Winter", "Reflection", "Cold"]
        }, {
            id: 10,
            src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
            title: "Elephant Family",
            category: "Wildlife",
            location: "Amboseli, Kenya",
            date: "August 2026",
            camera: "Sony A1",
            lens: "200–600mm f/5.6–6.3 G",
            iso: "400",
            aperture: "f/6.3",
            shutter: "1/500s",
            photographer: "Murshidul Islam",
            tags: ["Elephants", "Family", "Savanna"]
        }, {
            id: 11,
            src: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=800&q=80",
            title: "Giraffe in Golden Light",
            category: "Wildlife",
            location: "Masai Mara, Kenya",
            date: "August 2026",
            camera: "Sony A1",
            lens: "100–400mm f/4.5–5.6 GM",
            iso: "200",
            aperture: "f/5.6",
            shutter: "1/800s",
            photographer: "Murshidul Islam",
            tags: ["Giraffe", "Golden Hour", "Acacia"]
        }, {
            id: 12,
            src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
            title: "Lion Close-Up",
            category: "Wildlife",
            location: "Masai Mara, Kenya",
            date: "August 2026",
            camera: "Sony A1",
            lens: "200–600mm f/5.6–6.3 G",
            iso: "200",
            aperture: "f/6.3",
            shutter: "1/1000s",
            photographer: "Murshidul Islam",
            tags: ["Lion", "Portrait", "Wild", "Close-Up"]
        }, {
            id: 13,
            src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80",
            title: "Zebra in Golden Light",
            category: "Wildlife",
            location: "Ngorongoro, Tanzania",
            date: "August 2026",
            camera: "Sony A1",
            lens: "70–200mm f/2.8 GM II",
            iso: "100",
            aperture: "f/5.6",
            shutter: "1/400s",
            photographer: "Murshidul Islam",
            tags: ["Zebra", "Wild", "Golden Hour"]
        }, {
            id: 14,
            src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
            title: "Cheetah at Rest",
            category: "Wildlife",
            location: "Okavango Delta, Botswana",
            date: "August 2026",
            camera: "Sony A1",
            lens: "200–600mm f/5.6–6.3 G",
            iso: "320",
            aperture: "f/6.3",
            shutter: "1/800s",
            photographer: "Murshidul Islam",
            tags: ["Cheetah", "Resting", "Grassland"]
        }, {
            id: 15,
            src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
            title: "Wild Horse",
            category: "Wildlife",
            location: "Namibia",
            date: "August 2026",
            camera: "Sony A1",
            lens: "100–400mm f/4.5–5.6 GM",
            iso: "200",
            aperture: "f/5.6",
            shutter: "1/1000s",
            photographer: "Murshidul Islam",
            tags: ["Horse", "Wild", "Desert"]
        }, {
            id: 16,
            src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
            title: "Rhino at Dusk",
            category: "Wildlife",
            location: "Etosha, Namibia",
            date: "August 2026",
            camera: "Sony A1",
            lens: "200–600mm f/5.6–6.3 G",
            iso: "800",
            aperture: "f/6.3",
            shutter: "1/400s",
            photographer: "Murshidul Islam",
            tags: ["Rhino", "Dusk", "Savanna"]
        }, {
            id: 17,
            src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
            title: "Golden Beach Sunset",
            category: "Landscape",
            location: "Maldives",
            date: "March 2025",
            camera: "Sony A7R V",
            lens: "16–35mm f/2.8 GM",
            iso: "100",
            aperture: "f/11",
            shutter: "1/125s",
            photographer: "Elias Thorne",
            tags: ["Beach", "Sunset", "Tropical"]
        }, {
            id: 18,
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            title: "Mountain Reflection",
            category: "Landscape",
            location: "Banff, Canada",
            date: "September 2025",
            camera: "Nikon Z8",
            lens: "24–70mm f/2.8 S",
            iso: "100",
            aperture: "f/8",
            shutter: "1/160s",
            photographer: "Mira Solis",
            tags: ["Lake", "Reflection", "Mountains"]
        }, {
            id: 19,
            src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
            title: "Alpine Meadow",
            category: "Landscape",
            location: "Swiss Alps",
            date: "July 2025",
            camera: "Canon EOS R5",
            lens: "70–200mm f/2.8L III",
            iso: "200",
            aperture: "f/5.6",
            shutter: "1/250s",
            photographer: "Erik Solstad",
            tags: ["Alps", "Meadow", "Summer"]
        }, {
            id: 20,
            src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
            title: "Forest River",
            category: "River",
            location: "Pacific Northwest, USA",
            date: "June 2025",
            camera: "Sony A7 IV",
            lens: "16–35mm f/2.8 GM",
            iso: "100",
            aperture: "f/11",
            shutter: "1.2s",
            photographer: "Sam Rivers",
            tags: ["River", "Forest", "Long Exposure"]
        }];

        /* =====================================================
           NEWS DATA — 8 items (4 original + 4 new)
        ===================================================== */
        const newsItems = [{
            id: 1,
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
            date: "August 2026",
            title: "The New Era of Mirrorless Wildlife Photography",
            description: "How the latest Sony and Canon bodies are revolutionizing autofocus tracking in the bush. We tested the new flagships across three continents.",
            meta: ["📷 Gear Review", "8 min read"]
        }, {
            id: 2,
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
            date: "July 2026",
            title: "Patience in the Field: A Masterclass",
            description: "World-renowned landscape photographer Elias Thorne shares his methodology for waiting — and why the best shot often comes after the crowd leaves.",
            meta: ["🎓 Masterclass", "12 min read"]
        }, {
            id: 3,
            image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
            date: "June 2026",
            title: "Chasing Aurora: 2026 Forecast Guide",
            description: "Solar maximum is here. Our complete guide to predicting, locating, and photographing the northern lights during this historic season.",
            meta: ["🌌 Guide", "15 min read"]
        }, {
            id: 4,
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
            date: "May 2026",
            title: "Conservation Through the Lens",
            description: "How photography is driving real change in endangered habitats. Featuring interviews with National Geographic contributors and local guides.",
            meta: ["🌍 Conservation", "10 min read"]
        }, {
            id: 5,
            image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
            date: "April 2026",
            title: "The Art of Long Exposure Seascapes",
            description: "Master the technique of capturing ocean motion with silky smooth water and dramatic skies. Tips from coastal photographers who live by the tide.",
            meta: ["🌊 Technique", "9 min read"]
        }, {
            id: 6,
            image: "https://images.unsplash.com/photo-1504173010664-32509a0d4d71?auto=format&fit=crop&w=800&q=80",
            date: "March 2026",
            title: "Tracking Snow Leopards in the Himalayas",
            description: "A rare glimpse into the life of the elusive snow leopard. Our team spent 3 weeks at 4,500m altitude to document these ghost cats of the high mountains.",
            meta: ["🐆 Wildlife", "14 min read"]
        }, {
            id: 7,
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
            date: "February 2026",
            title: "The Golden Hour: Mastering Sunset Photography",
            description: "Unlock the secrets of the golden hour — from exposure blending to composition. Learn how to turn ordinary sunsets into extraordinary images.",
            meta: ["🌅 Tutorial", "11 min read"]
        }, {
            id: 8,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
            date: "January 2026",
            title: "Drone Photography: A New Perspective on Nature",
            description: "How drones are changing the way we see landscapes. From aerial forests to coastal patterns, discover the art of shooting from above.",
            meta: ["✈️ Technology", "10 min read"]
        }];

        /* =====================================================
           STATE
        ===================================================== */
        let currentUser = JSON.parse(localStorage.getItem("natureLensSession")) || null;
        let currentBook = null;
        let currentPage = 0;
        let currentCategory = "all";
        let hoverTimer = null;
        const HOVER_DELAY = 700;
        let bgSlideInterval = null;
        let currentBgIndex = 0;
        let indexBgInterval = null;
        let currentIndexBg = 0;
        let scrollCooldown = false;
        let isAnimating = false;
        let currentGalleryIndex = 0;
        let uploadedPhotos = JSON.parse(localStorage.getItem("natureLensUploadedPhotos")) || [];
        let userBooks = JSON.parse(localStorage.getItem("natureLensUserBooks")) || [];
        let heroSlideInterval = null;
        let currentHeroSlide = 0;

        // News carousel state
        let newsCurrentIndex = 0;
        let newsInterval = null;
        let newsTransitioning = false;

        const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%231a2e22' width='800' height='600'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%237affba' font-family='sans-serif' font-size='24'%3E🌿 Image%3C/text%3E%3Ctext x='400' y='340' text-anchor='middle' fill='%237affba' font-family='sans-serif' font-size='18'%3EUnavailable%3C/text%3E%3C/svg%3E";

        /* =====================================================
           DOM REFS
        ===================================================== */
        const bookGrid = document.getElementById("bookGrid");
        const bookSearch = document.getElementById("bookSearch");
        const authModal = document.getElementById("authModal");
        const loginForm = document.getElementById("loginForm");
        const registerForm = document.getElementById("registerForm");
        const changePasswordForm = document.getElementById("changePasswordForm");
        const forgotPasswordForm = document.getElementById("forgotPasswordForm");
        const mainContent = document.getElementById("mainContent");
        const bookViewPage = document.getElementById("bookViewPage");
        const bookBgSlideshow = document.getElementById("bookBgSlideshow");
        const indexBgSlideshow = document.getElementById("indexBgSlideshow");
        const bookUploadModal = document.getElementById("bookUploadModal");
        const newsSlidesWrapper = document.getElementById("newsSlidesWrapper");
        const newsDots = document.getElementById("newsDots");
        const newsPrevBtn = document.getElementById("newsPrevBtn");
        const newsNextBtn = document.getElementById("newsNextBtn");

        /* =====================================================
           INIT
        ===================================================== */
        document.addEventListener("DOMContentLoaded", () => {
            createParticles();
            createBubbles();
            initIndexBackgroundSlideshow();
            initHeroSlideshow();
            renderBooks();
            renderGallery();
            updateAuthenticationUI();
            document.getElementById("bookCount").textContent = getAllBooks().length;
            document.getElementById("galleryCount").textContent = getAllPhotos().length;
            initializeHero3D();
            setupHoverNavigation();
            setupScrollNavigation();
            setupContactForm();
            updateAuthGatedSections();
            setupBookUploadForm();
            setupGalleryFileInput();
            initNewsCarousel();
        });

        /* =====================================================
           INDEX BACKGROUND SLIDESHOW
        ===================================================== */
        function initIndexBackgroundSlideshow() {
            if (!indexBgSlideshow) return;
            indexBgSlideshow.innerHTML = "";
            indexBackgroundImages.forEach((src, i) => {
                const slide = document.createElement("div");
                slide.className = "index-bg-slide" + (i === 0 ? " active" : "");
                slide.style.backgroundImage = `url(${src})`;
                slide.style.backgroundColor = "#071711";
                indexBgSlideshow.appendChild(slide);
            });
            indexBgInterval = setInterval(() => {
                const slides = indexBgSlideshow.querySelectorAll(".index-bg-slide");
                if (slides.length === 0) return;
                slides[currentIndexBg].classList.remove("active");
                currentIndexBg = (currentIndexBg + 1) % slides.length;
                slides[currentIndexBg].classList.add("active");
            }, 5000);
        }

        /* =====================================================
           HERO SLIDESHOW
        ===================================================== */
        function initHeroSlideshow() {
            const container = document.getElementById("heroSlideshow");
            if (!container) return;
            heroSlidesData.forEach((data, i) => {
                const slide = document.createElement("div");
                slide.className = "slide" + (i === 0 ? " active" : "");
                slide.style.backgroundImage = `url(${data.image})`;
                slide.style.backgroundColor = "#0a1f15";
                slide.dataset.index = i;
                const overlay = document.createElement("div");
                overlay.className = "hero-slide-overlay";
                overlay.innerHTML = `<small>${data.label}</small><h2>${data.title}</h2>`;
                slide.appendChild(overlay);
                container.appendChild(slide);
            });
            const indicators = document.getElementById("heroIndicators");
            heroSlidesData.forEach((_, i) => {
                const dot = document.createElement("button");
                dot.className = "dot" + (i === 0 ? " active" : "");
                dot.dataset.index = i;
                dot.addEventListener("click", () => goToHeroSlide(i));
                indicators.appendChild(dot);
            });
            heroSlideInterval = setInterval(() => {
                const next = (currentHeroSlide + 1) % heroSlidesData.length;
                goToHeroSlide(next);
            }, 5000);
            container.addEventListener("mouseenter", () => { if (heroSlideInterval) clearInterval(heroSlideInterval); });
            container.addEventListener("mouseleave", () => {
                if (heroSlideInterval) clearInterval(heroSlideInterval);
                heroSlideInterval = setInterval(() => {
                    const next = (currentHeroSlide + 1) % heroSlidesData.length;
                    goToHeroSlide(next);
                }, 5000);
            });
        }

        function goToHeroSlide(index) {
            const container = document.getElementById("heroSlideshow");
            if (!container) return;
            const slides = container.querySelectorAll(".slide");
            const dots = document.querySelectorAll("#heroIndicators .dot");
            if (index < 0 || index >= slides.length) return;
            slides.forEach(s => s.classList.remove("active"));
            dots.forEach(d => d.classList.remove("active"));
            slides[index].classList.add("active");
            dots[index].classList.add("active");
            currentHeroSlide = index;
        }

        /* =====================================================
           PARTICLES & BUBBLES
        ===================================================== */
        function createParticles() {
            const container = document.getElementById("particles");
            for (let i = 0; i < 40; i++) {
                const p = document.createElement("span");
                p.className = "particle";
                p.style.left = Math.random() * 100 + "%";
                p.style.animationDuration = (8 + Math.random() * 15) + "s";
                p.style.animationDelay = Math.random() * 10 + "s";
                container.appendChild(p);
            }
        }

        function createBubbles() {
            const container = document.getElementById("bubblesContainer");
            if (!container) return;
            container.innerHTML = "";
            const count = 20;
            for (let i = 0; i < count; i++) {
                const b = document.createElement("div");
                b.className = "bubble";
                const size = 25 + Math.random() * 55;
                b.style.width = size + "px";
                b.style.height = size + "px";
                b.style.left = Math.random() * 100 + "%";
                b.style.animationDuration = `${14 + Math.random() * 16}s, ${4 + Math.random() * 5}s`;
                b.style.animationDelay = `${Math.random() * 20}s, ${Math.random() * 3}s`;
                container.appendChild(b);
            }
        }

        /* =====================================================
           BOOK DATA — merge static + user
        ===================================================== */
        function getAllBooks() {
            return [...photographyBooks, ...userBooks];
        }

        function getAllPhotos() {
            return [...galleryPhotos, ...uploadedPhotos];
        }

        /* =====================================================
           RENDER BOOKS (with delete for user books)
        ===================================================== */
        function renderBooks() {
            const search = bookSearch.value.toLowerCase().trim();
            const allBooks = getAllBooks();
            const filtered = allBooks.filter(book => {
                const catMatch = currentCategory === "all" || book.category === currentCategory;
                const searchMatch = book.title.toLowerCase().includes(search) ||
                    (book.subtitle || "").toLowerCase().includes(search) ||
                    book.category.toLowerCase().includes(search) ||
                    (book.location || "").toLowerCase().includes(search) ||
                    (book.tags || []).some(t => t.toLowerCase().includes(search));
                return catMatch && searchMatch;
            });
            bookGrid.innerHTML = "";
            if (filtered.length === 0) {
                bookGrid.innerHTML =
                    `<div class="glass" style="grid-column:1/-1;padding:50px;text-align:center;"><h3>No photography books found.</h3><p style="margin-top:10px;color:rgba(255,255,255,.6);">Try another search or category.</p></div>`;
                return;
            }
            filtered.forEach(book => {
                const wrap = document.createElement("div");
                wrap.className = "book-wrapper";
                const isUserBook = book._isUserBook === true;
                const showDelete = isUserBook && currentUser;

                let html = `
              <div class="book-card" data-book-id="${book.id}">
                <div class="book-cover">
                  <img src="${book.cover}" alt="${escapeHTML(book.title)}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'; this.onerror=null;">
                  <div class="book-cover-content">
                    <div class="book-category">${escapeHTML(book.category)}${isUserBook ? ' ✦' : ''}</div>
                    <h3>${escapeHTML(book.title)}</h3>
                    <p>${escapeHTML(book.subtitle || '')}</p>
                    <div class="book-meta-line"><span>${escapeHTML(book.location || '')}</span><span>${escapeHTML(book.year || '')}</span></div>
                    <div class="book-open-label">${currentUser ? 'Open Book →' : 'Sign In to Read →'}</div>
                  </div>
                </div>
              </div>`;

                if (showDelete) {
                    html += `<button class="book-delete-btn" data-book-id="${book.id}" title="Delete this book">✕</button>`;
                }

                wrap.innerHTML = html;

                const delBtn = wrap.querySelector(".book-delete-btn");
                if (delBtn) {
                    delBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        deleteBook(book.id);
                    });
                }

                const card = wrap.querySelector(".book-card");
                addBook3DEffect(card);
                card.addEventListener("click", () => openBookView(book.id));
                bookGrid.appendChild(wrap);
            });
            document.getElementById("bookCount").textContent = allBooks.length;
        }

        function addBook3DEffect(card) {
            card.addEventListener("mousemove", e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ry = ((x / rect.width) - .5) * 18;
                const rx = ((y / rect.height) - .5) * -18;
                card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(25px) scale(1.04)`;
            });
            card.addEventListener("mouseleave", () => {
                card.style.transform = `rotateX(0) rotateY(0) translateZ(0) scale(1)`;
            });
        }

        /* =====================================================
           DELETE BOOK
        ===================================================== */
        function deleteBook(bookId) {
            if (!currentUser) { showToast("Please sign in to delete books."); return; }
            const idx = userBooks.findIndex(b => b.id === bookId);
            if (idx === -1) { showToast("Book not found or not yours to delete."); return; }
            const title = userBooks[idx].title;
            if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
            userBooks.splice(idx, 1);
            localStorage.setItem("natureLensUserBooks", JSON.stringify(userBooks));
            renderBooks();
            document.getElementById("bookCount").textContent = getAllBooks().length;
            showToast(`"${title}" deleted.`);
        }

        /* =====================================================
           BOOK SEARCH & CATEGORY FILTER
        ===================================================== */
        bookSearch.addEventListener("input", renderBooks);
        document.querySelectorAll(".category-button").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".category-button").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentCategory = btn.dataset.category;
                renderBooks();
            });
        });

        /* =====================================================
           BOOK VIEW
        ===================================================== */
        function openBookView(bookId) {
            if (!currentUser) { showToast("Please sign in to read this book.");
                openAuth("login"); return; }
            const allBooks = getAllBooks();
            currentBook = allBooks.find(b => b.id === bookId);
            if (!currentBook) return;
            currentPage = 0;
            const coverImg = document.getElementById("bookViewCover");
            coverImg.src = currentBook.cover;
            coverImg.onerror = function() { this.src = FALLBACK_IMG;
                this.onerror = null; };
            document.getElementById("bookViewCategory").textContent = currentBook.category;
            document.getElementById("bookViewTitle").textContent = currentBook.title;
            document.getElementById("bookViewSubtitle").textContent = currentBook.subtitle || "";
            document.getElementById("bookViewLocation").textContent = currentBook.location || "";
            document.getElementById("bookViewYear").textContent = currentBook.year || "";
            document.getElementById("bookViewPages").textContent = (currentBook.pages || []).length + " Pages";
            document.getElementById("bookViewDescription").textContent = currentBook.description || "";
            document.getElementById("bookViewTags").textContent = (currentBook.tags || []).join(" • ");
            startBackgroundSlideshow(currentBook.backgroundImages || []);
            mainContent.style.display = "none";
            bookViewPage.classList.add("open");
            window.scrollTo(0, 0);
            buildMagazine();
            renderMagazineSpread(0);
        }

        function closeBookView() {
            bookViewPage.classList.remove("open");
            mainContent.style.display = "block";
            currentBook = null;
            currentPage = 0;
            clearTimeout(hoverTimer);
            stopBackgroundSlideshow();
            scrollToBooks();
        }

        function startBackgroundSlideshow(images) {
            stopBackgroundSlideshow();
            bookBgSlideshow.innerHTML = "";
            currentBgIndex = 0;
            if (!images || images.length === 0) return;
            images.forEach((src, i) => {
                const slide = document.createElement("div");
                slide.className = "bg-slide" + (i === 0 ? " active" : "");
                slide.style.backgroundImage = `url(${src})`;
                slide.style.backgroundColor = "#071711";
                bookBgSlideshow.appendChild(slide);
            });
            bgSlideInterval = setInterval(() => {
                const slides = bookBgSlideshow.querySelectorAll(".bg-slide");
                if (slides.length === 0) return;
                slides[currentBgIndex].classList.remove("active");
                currentBgIndex = (currentBgIndex + 1) % slides.length;
                slides[currentBgIndex].classList.add("active");
            }, 5000);
        }

        function stopBackgroundSlideshow() {
            if (bgSlideInterval) { clearInterval(bgSlideInterval);
                bgSlideInterval = null; }
            bookBgSlideshow.innerHTML = "";
            currentBgIndex = 0;
        }

        function buildMagazine() {
            const reader = document.querySelector(".book-view-reader");
            reader.innerHTML = `
            <div class="hover-zone hover-left" data-direction="prev"><div class="hover-hint-left">‹ Prev</div></div>
            <div class="magazine-book" id="magazineBook"></div>
            <div class="hover-zone hover-right" data-direction="next"><div class="hover-hint-right">Next ›</div></div>
          `;
            setupHoverNavigation();
        }

        function renderMagazineSpread(pageIndex, direction = null) {
            if (!currentBook) return;
            const magazineBook = document.getElementById("magazineBook");
            if (!magazineBook) return;
            const pages = currentBook.pages || [];
            const leftPage = pages[pageIndex];
            const rightPage = pages[pageIndex + 1] || null;
            const spread = document.createElement("div");
            spread.className = "magazine-spread active";
            if (direction === "next") spread.classList.add("turn-next");
            if (direction === "prev") spread.classList.add("turn-prev");
            spread.id = "currentSpread";
            if (leftPage) {
                const leftDiv = document.createElement("div");
                leftDiv.className = "mag-page left";
                leftDiv.innerHTML = leftPage.type === "photo" ? buildMagPhotoPage(leftPage) : buildMagStoryPage(leftPage);
                spread.appendChild(leftDiv);
            }
            if (rightPage) {
                const rightDiv = document.createElement("div");
                rightDiv.className = "mag-page right";
                rightDiv.innerHTML = rightPage.type === "photo" ? buildMagPhotoPage(rightPage) : buildMagStoryPage(rightPage);
                spread.appendChild(rightDiv);
            } else if (leftPage) {
                const rightDiv = document.createElement("div");
                rightDiv.className = "mag-page right";
                rightDiv.innerHTML =
                    `<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#8a9a8e;padding:40px;"><div style="font-size:4rem;margin-bottom:20px;">📖</div><h3 style="font-family:Georgia,serif;font-size:1.5rem;color:#1a3c2a;margin-bottom:10px;">End of Book</h3><p style="font-size:.9rem;">You've reached the end of "${escapeHTML(currentBook.title)}"</p></div>`;
                spread.appendChild(rightDiv);
            }
            magazineBook.innerHTML = "";
            magazineBook.appendChild(spread);
            if (direction) {
                setTimeout(() => { spread.classList.remove("turn-next", "turn-prev"); }, 800);
            }
            updateBookViewControls();
        }

        function buildMagPhotoPage(page) {
            return `
            <div class="mag-photo-page">
              <img class="mag-photo-hero" src="${page.image}" alt="${escapeHTML(page.title)}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'; this.onerror=null;">
              <div class="mag-photo-header">
                <span class="mag-label" style="font-size:.65rem;color:#4c9a70;text-transform:uppercase;letter-spacing:1px;font-weight:700;">${escapeHTML(page.category)}</span>
                <h2>${escapeHTML(page.title)}</h2>
              </div>
              <p class="mag-photo-caption">${escapeHTML(page.caption || '')}</p>
              <div class="mag-photo-meta-grid">
                <div class="mag-meta-cell"><strong>Location</strong><span>${escapeHTML(page.location || '')}</span></div>
                <div class="mag-meta-cell"><strong>Date</strong><span>${escapeHTML(page.date || '')}</span></div>
                <div class="mag-meta-cell"><strong>Camera</strong><span>${escapeHTML(page.camera || '')}</span></div>
                <div class="mag-meta-cell"><strong>Lens</strong><span>${escapeHTML(page.lens || '')}</span></div>
                <div class="mag-meta-cell"><strong>ISO</strong><span>${escapeHTML(page.iso || '')}</span></div>
                <div class="mag-meta-cell"><strong>Aperture</strong><span>${escapeHTML(page.aperture || '')}</span></div>
                <div class="mag-meta-cell"><strong>Shutter</strong><span>${escapeHTML(page.shutterSpeed || '')}</span></div>
                <div class="mag-meta-cell"><strong>Weather</strong><span>${escapeHTML(page.weather || '')}</span></div>
              </div>
              <div class="mag-photo-footer">
                <span>📍 ${escapeHTML(page.coordinates || '')}</span>
                <span>© ${escapeHTML(page.photographer || '')}</span>
              </div>
            </div>`;
        }

        function buildMagStoryPage(page) {
            return `
            <div class="mag-story-page">
              <img class="mag-story-hero" src="${page.image}" alt="${escapeHTML(page.title)}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'; this.onerror=null;">
              <div class="mag-story-header">
                <span class="mag-label" style="font-size:.65rem;color:#4c9a70;text-transform:uppercase;letter-spacing:1px;font-weight:700;">${escapeHTML(page.category)}</span>
                <h2>${escapeHTML(page.title)}</h2>
                <div class="mag-story-byline">${escapeHTML(page.location || '')} &nbsp;•&nbsp; ${escapeHTML(page.date || '')} &nbsp;•&nbsp; ${escapeHTML(page.readingTime || '')}</div>
              </div>
              <p class="mag-story-intro">${escapeHTML(page.introduction || '')}</p>
              <div class="mag-story-body">${page.content || ''}</div>
              <div class="mag-story-sidebar">
                <h4>Photographer's Note</h4>
                <p>${escapeHTML(page.photographerNote || '')}</p>
              </div>
              <div class="mag-story-footer">
                <span>🎒 ${escapeHTML(page.gear || '')}</span>
                <span>⏰ ${escapeHTML(page.bestTime || '')}</span>
                <span>⚠️ ${escapeHTML(page.difficulty || '')}</span>
              </div>
            </div>`;
        }

        function nextBookPage() {
            if (!currentBook || isAnimating) return;
            const pages = currentBook.pages || [];
            const maxStart = Math.floor((pages.length - 1) / 2) * 2;
            if (currentPage >= maxStart) return;
            isAnimating = true;
            currentPage += 2;
            renderMagazineSpread(currentPage, "next");
            setTimeout(() => { isAnimating = false; }, 800);
        }

        function previousBookPage() {
            if (!currentBook || currentPage <= 0 || isAnimating) return;
            isAnimating = true;
            currentPage -= 2;
            renderMagazineSpread(currentPage, "prev");
            setTimeout(() => { isAnimating = false; }, 800);
        }

        function setupScrollNavigation() {
            bookViewPage.addEventListener("wheel", (e) => {
                if (!bookViewPage.classList.contains("open")) return;
                if (scrollCooldown || isAnimating) return;
                e.preventDefault();
                if (e.deltaY > 0) { nextBookPage();
                    triggerScrollCooldown(); } else if (e.deltaY < 0) { previousBookPage();
                    triggerScrollCooldown(); }
            }, { passive: false });
        }

        function triggerScrollCooldown() {
            scrollCooldown = true;
            setTimeout(() => { scrollCooldown = false; }, 900);
        }

        function setupHoverNavigation() {
            const left = document.querySelector(".hover-left");
            const right = document.querySelector(".hover-right");
            if (!left || !right) return;
            left.addEventListener("mouseenter", () => {
                if (!currentBook || currentPage === 0 || isAnimating) return;
                left.classList.add("active");
                hoverTimer = setTimeout(() => { previousBookPage();
                    left.classList.remove("active"); }, HOVER_DELAY);
            });
            left.addEventListener("mouseleave", () => { clearTimeout(hoverTimer);
                left.classList.remove("active"); });
            right.addEventListener("mouseenter", () => {
                if (!currentBook || isAnimating) return;
                const pages = currentBook.pages || [];
                const maxStart = Math.floor((pages.length - 1) / 2) * 2;
                if (currentPage >= maxStart) return;
                right.classList.add("active");
                hoverTimer = setTimeout(() => { nextBookPage();
                    right.classList.remove("active"); }, HOVER_DELAY);
            });
            right.addEventListener("mouseleave", () => { clearTimeout(hoverTimer);
                right.classList.remove("active"); });
        }

        document.addEventListener("keydown", e => {
            if (!bookViewPage.classList.contains("open")) return;
            if (e.key === "ArrowRight") nextBookPage();
            if (e.key === "ArrowLeft") previousBookPage();
            if (e.key === "Escape") closeBookView();
        });

        function updateBookViewControls() {
            if (!currentBook) return;
            const pages = currentBook.pages || [];
            const totalSpreads = Math.ceil(pages.length / 2);
            const currentSpread = Math.floor(currentPage / 2) + 1;
            document.getElementById("bookViewCounter").textContent =
                String(currentSpread).padStart(2, "0") + " / " + String(totalSpreads).padStart(2, "0");
            const maxStart = Math.floor((pages.length - 1) / 2) * 2;
            const leftZone = document.querySelector(".hover-left");
            const rightZone = document.querySelector(".hover-right");
            if (leftZone) leftZone.style.opacity = currentPage === 0 ? "0" : "1";
            if (rightZone) rightZone.style.opacity = currentPage >= maxStart ? "0" : "1";
        }

        /* =====================================================
           GALLERY — with delete for uploaded photos
        ===================================================== */
        function renderGallery() {
            const grid = document.getElementById("galleryGrid");
            if (!grid) return;
            const allPhotos = getAllPhotos();
            let html = "";
            allPhotos.forEach((photo, index) => {
                const isUploaded = photo._isUploaded === true;
                const showDelete = isUploaded && currentUser;
                html += `
              <div class="gallery-item" data-index="${index}">
                <img src="${photo.src}" alt="${escapeHTML(photo.title)}" loading="lazy" 
                     onerror="this.src='${FALLBACK_IMG}'; this.onerror=null;">
                <div class="gallery-overlay">
                  <small>${escapeHTML(photo.category)}</small>
                  <span>${escapeHTML(photo.title)}</span>
                </div>
                ${showDelete ? `<button class="gallery-delete-btn" data-index="${index}" title="Delete this image">✕</button>` : ''}
              </div>`;
            });
            grid.innerHTML = html;
            document.getElementById("galleryCount").textContent = allPhotos.length;

            grid.querySelectorAll(".gallery-delete-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const idx = parseInt(btn.dataset.index);
                    deleteGalleryPhoto(idx);
                });
            });

            grid.querySelectorAll(".gallery-item").forEach((item, idx) => {
                item.addEventListener("click", (e) => {
                    if (e.target.closest(".gallery-delete-btn")) return;
                    openGalleryLightbox(idx);
                });
            });
        }

        /* =====================================================
           DELETE GALLERY PHOTO
        ===================================================== */
        function deleteGalleryPhoto(index) {
            if (!currentUser) { showToast("Please sign in to delete images."); return; }
            const allPhotos = getAllPhotos();
            if (index < 0 || index >= allPhotos.length) return;
            const photo = allPhotos[index];
            if (!photo._isUploaded) { showToast("Only uploaded images can be deleted."); return; }
            const title = photo.title || "Untitled";
            if (!confirm(`Delete "${title}" from the gallery? This cannot be undone.`)) return;
            const idx = uploadedPhotos.findIndex(p => p.id === photo.id);
            if (idx === -1) { showToast("Image not found."); return; }
            uploadedPhotos.splice(idx, 1);
            localStorage.setItem("natureLensUploadedPhotos", JSON.stringify(uploadedPhotos));
            renderGallery();
            document.getElementById("galleryCount").textContent = getAllPhotos().length;
            showToast(`"${title}" removed from gallery.`);
        }

        /* =====================================================
           GALLERY LIGHTBOX
        ===================================================== */
        function openGalleryLightbox(index) {
            if (!currentUser) { showToast("Please sign in to view gallery details.");
                openAuth("login"); return; }
            const allPhotos = getAllPhotos();
            if (index < 0 || index >= allPhotos.length) return;
            currentGalleryIndex = index;
            const lightbox = document.getElementById("galleryLightbox");
            lightbox.classList.add("open");
            document.body.style.overflow = "hidden";
            updateLightbox();
        }

        function closeGalleryLightbox() {
            const lightbox = document.getElementById("galleryLightbox");
            lightbox.classList.remove("open");
            document.body.style.overflow = "";
        }

        function updateLightbox() {
            const allPhotos = getAllPhotos();
            const photo = allPhotos[currentGalleryIndex];
            if (!photo) return;
            const img = document.getElementById("lightboxMainImage");
            img.src = photo.src;
            img.alt = photo.title;
            img.onerror = function() { this.src = FALLBACK_IMG;
                this.onerror = null; };
            document.getElementById("lightboxCurrent").textContent = currentGalleryIndex + 1;
            document.getElementById("lightboxTotal").textContent = allPhotos.length;
            const details = document.getElementById("lightboxDetails");
            details.innerHTML = `
            <div class="detail-eyebrow">${escapeHTML(photo.category)}</div>
            <h3>${escapeHTML(photo.title)}</h3>
            <div class="detail-subtitle">${escapeHTML(photo.location || "Uploaded")} &nbsp;•&nbsp; ${escapeHTML(photo.date || "Today")}</div>
            <div class="detail-meta-list">
              <div class="detail-meta-item"><strong>Camera</strong><span>${escapeHTML(photo.camera || "—")}</span></div>
              <div class="detail-meta-item"><strong>Lens</strong><span>${escapeHTML(photo.lens || "—")}</span></div>
              <div class="detail-meta-item"><strong>ISO</strong><span>${escapeHTML(photo.iso || "—")}</span></div>
              <div class="detail-meta-item"><strong>Aperture</strong><span>${escapeHTML(photo.aperture || "—")}</span></div>
              <div class="detail-meta-item"><strong>Shutter</strong><span>${escapeHTML(photo.shutter || "—")}</span></div>
              <div class="detail-meta-item"><strong>Photographer</strong><span>${escapeHTML(photo.photographer || "Community")}</span></div>
            </div>
            <div class="detail-tags">${(photo.tags || ["Upload"]).map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>
          `;
            const thumbs = document.getElementById("lightboxThumbnails");
            thumbs.innerHTML = allPhotos.map((p, i) => `
            <div class="lightbox-thumb ${i === currentGalleryIndex ? 'active' : ''}" onclick="goToGalleryPhoto(${i})">
              <img src="${p.src}" alt="${escapeHTML(p.title)}" loading="lazy" 
                   onerror="this.src='${FALLBACK_IMG}'; this.onerror=null;">
            </div>
          `).join("");
        }

        function nextGalleryPhoto() {
            const allPhotos = getAllPhotos();
            currentGalleryIndex = (currentGalleryIndex + 1) % allPhotos.length;
            updateLightbox();
        }

        function prevGalleryPhoto() {
            const allPhotos = getAllPhotos();
            currentGalleryIndex = (currentGalleryIndex - 1 + allPhotos.length) % allPhotos.length;
            updateLightbox();
        }

        function goToGalleryPhoto(index) {
            currentGalleryIndex = index;
            updateLightbox();
        }

        document.addEventListener("keydown", e => {
            const lightbox = document.getElementById("galleryLightbox");
            if (!lightbox.classList.contains("open")) return;
            if (e.key === "ArrowRight") nextGalleryPhoto();
            if (e.key === "ArrowLeft") prevGalleryPhoto();
            if (e.key === "Escape") closeGalleryLightbox();
        });

        /* =====================================================
           GALLERY UPLOAD
        ===================================================== */
        function triggerGalleryUpload() {
            if (!currentUser) { showToast("Please sign in to upload images.");
                openAuth("login"); return; }
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.multiple = true;
            input.onchange = function(e) {
                if (!e.target.files.length) return;
                let added = 0;
                for (const file of e.target.files) {
                    if (!file.type.startsWith("image/")) continue;
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const dataUrl = ev.target.result;
                        const newPhoto = {
                            id: Date.now() + Math.random() * 1000 + added,
                            src: dataUrl,
                            title: file.name.replace(/\.[^.]+$/, "").slice(0, 30),
                            category: "Upload",
                            location: "Community Upload",
                            date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            camera: "—",
                            lens: "—",
                            iso: "—",
                            aperture: "—",
                            shutter: "—",
                            photographer: currentUser ? currentUser.name : "Community",
                            tags: ["Upload", "Community"],
                            _isUploaded: true
                        };
                        uploadedPhotos.push(newPhoto);
                        localStorage.setItem("natureLensUploadedPhotos", JSON.stringify(uploadedPhotos));
                        renderGallery();
                        document.getElementById("galleryCount").textContent = getAllPhotos().length;
                        added++;
                        if (added === 1) showToast("Image added to gallery!");
                    };
                    reader.readAsDataURL(file);
                }
                input.value = "";
            };
            input.click();
        }

        /* =====================================================
           BOOK UPLOAD — FIXED
        ===================================================== */
        let bookCoverDataURL = null;

        function setupBookUploadForm() {
            const form = document.getElementById("bookUploadForm");
            const coverInput = document.getElementById("bookCoverInput");
            const coverDrop = document.getElementById("bookCoverDrop");
            const coverName = document.getElementById("bookCoverName");
            const status = document.getElementById("bookUploadStatus");

            // Reset state when modal opens
            bookCoverDataURL = null;
            coverName.textContent = "";
            coverName.style.color = "";

            // Click to upload
            coverDrop.addEventListener("click", () => coverInput.click());

            // Drag & drop
            coverDrop.addEventListener("dragover", (e) => {
                e.preventDefault();
                coverDrop.style.borderColor = "#7affba";
            });
            coverDrop.addEventListener("dragleave", () => {
                coverDrop.style.borderColor = "rgba(255,255,255,.15)";
            });
            coverDrop.addEventListener("drop", (e) => {
                e.preventDefault();
                coverDrop.style.borderColor = "rgba(255,255,255,.15)";
                if (e.dataTransfer.files.length) {
                    const file = e.dataTransfer.files[0];
                    if (file.type.startsWith("image/")) {
                        handleCoverFile(file);
                    } else {
                        status.textContent = "⚠️ Please select an image file.";
                        status.style.color = "#ffb347";
                    }
                }
            });

            // File input change
            coverInput.addEventListener("change", () => {
                if (coverInput.files && coverInput.files.length > 0) {
                    handleCoverFile(coverInput.files[0]);
                }
                // Don't clear the input value here — let the form reset handle it
            });

            function handleCoverFile(file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    bookCoverDataURL = ev.target.result;
                    coverName.textContent = "✅ " + file.name;
                    coverName.style.color = "#7affba";
                    status.textContent = "";
                };
                reader.onerror = () => {
                    status.textContent = "⚠️ Failed to read file. Please try again.";
                    status.style.color = "#ffb347";
                };
                reader.readAsDataURL(file);
            }

            // Form submit
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                status.textContent = "";
                status.style.color = "";

                if (!currentUser) {
                    status.textContent = "⚠️ Please sign in to upload a book.";
                    status.style.color = "#ffb347";
                    openAuth("login");
                    return;
                }

                const title = document.getElementById("bookUploadTitle").value.trim();
                const subtitle = document.getElementById("bookUploadSubtitle").value.trim();
                const category = document.getElementById("bookUploadCategory").value;
                const location = document.getElementById("bookUploadLocation").value.trim();
                const year = document.getElementById("bookUploadYear").value.trim();
                const description = document.getElementById("bookUploadDescription").value.trim();
                const tagsRaw = document.getElementById("bookUploadTags").value.trim();

                if (!title) {
                    status.textContent = "⚠️ Please enter a book title.";
                    status.style.color = "#ffb347";
                    return;
                }
                if (!category) {
                    status.textContent = "⚠️ Please select a category.";
                    status.style.color = "#ffb347";
                    return;
                }
                if (!bookCoverDataURL) {
                    status.textContent = "⚠️ Please upload a cover image.";
                    status.style.color = "#ffb347";
                    return;
                }

                const tags = tagsRaw ? tagsRaw.split(",").map(s => s.trim()).filter(Boolean) : [];
                const newBook = {
                    id: Date.now() + Math.random() * 1000,
                    title,
                    subtitle: subtitle || "A NatureLens Book",
                    category,
                    location: location || "Various",
                    year: year || new Date().getFullYear().toString(),
                    description: description || "A photography book uploaded by the NatureLens community.",
                    cover: bookCoverDataURL,
                    tags: tags.length ? tags : ["Community", "Nature"],
                    backgroundImages: [bookCoverDataURL],
                    pages: [{
                        type: "photo",
                        title: title,
                        image: bookCoverDataURL,
                        category: category,
                        location: location || "Various",
                        date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                        camera: "—",
                        lens: "—",
                        iso: "—",
                        aperture: "—",
                        shutterSpeed: "—",
                        weather: "—",
                        coordinates: "—",
                        photographer: currentUser ? currentUser.name : "Community",
                        tags: tags.length ? tags : ["Community"],
                        caption: description || "A community contribution to NatureLens.",
                        description: description || "A photography book uploaded by the NatureLens community."
                    }],
                    _isUserBook: true
                };

                userBooks.push(newBook);
                localStorage.setItem("natureLensUserBooks", JSON.stringify(userBooks));
                renderBooks();
                document.getElementById("bookCount").textContent = getAllBooks().length;

                status.textContent = "✅ Book uploaded successfully!";
                status.style.color = "#7affba";

                // Reset form
                form.reset();
                bookCoverDataURL = null;
                coverName.textContent = "";
                coverName.style.color = "";

                setTimeout(() => {
                    closeBookUpload();
                    showToast("Book \"" + title + "\" uploaded!");
                }, 600);
            });
        }

        function openBookUpload() {
            if (!currentUser) { showToast("Please sign in to upload a book.");
                openAuth("login"); return; }
            // Reset state
            bookCoverDataURL = null;
            document.getElementById("bookCoverName").textContent = "";
            document.getElementById("bookCoverName").style.color = "";
            document.getElementById("bookUploadStatus").textContent = "";
            document.getElementById("bookUploadStatus").style.color = "";
            document.getElementById("bookUploadForm").reset();
            bookUploadModal.classList.add("show");
        }

        function closeBookUpload() {
            bookUploadModal.classList.remove("show");
        }

        /* =====================================================
           AUTH
        ===================================================== */
        function openAuth(mode = "login") {
            authModal.classList.add("show");
            clearAuthMessages();
            if (mode === "register") showRegister();
            else if (mode === "changePassword") showChangePassword();
            else if (mode === "forgotPassword") showForgotPassword();
            else showLogin();
        }

        function closeAuth() {
            authModal.classList.remove("show");
            clearAuthMessages();
            setTimeout(() => {
                loginForm.classList.add("hidden");
                registerForm.classList.add("hidden");
                changePasswordForm.classList.add("hidden");
                if (forgotPasswordForm) forgotPasswordForm.classList.add("hidden");
            }, 300);
        }

        function showLogin() {
            loginForm.classList.remove("hidden");
            registerForm.classList.add("hidden");
            changePasswordForm.classList.add("hidden");
            if (forgotPasswordForm) forgotPasswordForm.classList.add("hidden");
            document.getElementById("authTitle").textContent = "Welcome Back";
            document.getElementById("authSubtitle").textContent = "Sign in to open the complete photography books.";
        }

        function showRegister() {
            loginForm.classList.add("hidden");
            registerForm.classList.remove("hidden");
            changePasswordForm.classList.add("hidden");
            if (forgotPasswordForm) forgotPasswordForm.classList.add("hidden");
            document.getElementById("authTitle").textContent = "Create Your Account";
            document.getElementById("authSubtitle").textContent = "Register first, then sign in to start reading.";
        }

        function showChangePassword() {
            loginForm.classList.add("hidden");
            registerForm.classList.add("hidden");
            changePasswordForm.classList.remove("hidden");
            if (forgotPasswordForm) forgotPasswordForm.classList.add("hidden");
            document.getElementById("authTitle").textContent = "Change Password";
            document.getElementById("authSubtitle").textContent = "Update your account password.";
        }

        function showForgotPassword() {
            loginForm.classList.add("hidden");
            registerForm.classList.add("hidden");
            changePasswordForm.classList.add("hidden");
            if (forgotPasswordForm) forgotPasswordForm.classList.remove("hidden");
            document.getElementById("authTitle").textContent = "Reset Password";
            document.getElementById("authSubtitle").textContent = "Enter your email and set a new password.";
        }

        registerForm.addEventListener("submit", e => {
            e.preventDefault();
            const name = document.getElementById("registerName").value.trim();
            const email = document.getElementById("registerEmail").value.trim().toLowerCase();
            const password = document.getElementById("registerPassword").value;
            const confirm = document.getElementById("registerConfirm").value;
            const msg = document.getElementById("registerMessage");
            if (password !== confirm) { msg.textContent = "Passwords do not match."; return; }
            if (password.length < 6) { msg.textContent = "Password must contain at least 6 characters."; return; }
            const existing = JSON.parse(localStorage.getItem("natureLensUser"));
            if (existing && existing.email === email) { msg.textContent = "This email is already registered. Please sign in."; return; }
            localStorage.setItem("natureLensUser", JSON.stringify({ name, email, password }));
            msg.textContent = "Registration successful. Please sign in.";
            setTimeout(() => {
                document.getElementById("loginEmail").value = email;
                showLogin();
                document.getElementById("loginMessage").textContent = "Your account is ready. Please sign in.";
            }, 900);
        });

        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const password = document.getElementById("loginPassword").value;
            const msg = document.getElementById("loginMessage");
            const saved = JSON.parse(localStorage.getItem("natureLensUser"));
            if (!saved) { msg.textContent = "No account found. Please register first."; return; }
            if (saved.email !== email || saved.password !== password) { msg.textContent = "Incorrect email or password."; return; }
            currentUser = saved;
            localStorage.setItem("natureLensSession", JSON.stringify(currentUser));
            msg.textContent = "Sign in successful.";
            setTimeout(() => {
                closeAuth();
                updateAuthenticationUI();
                renderBooks();
                updateAuthGatedSections();
                showToast("Welcome back, " + currentUser.name + ".");
            }, 600);
        });

        if (forgotPasswordForm) {
            forgotPasswordForm.addEventListener("submit", e => {
                e.preventDefault();
                const email = document.getElementById("forgotEmail").value.trim().toLowerCase();
                const newPass = document.getElementById("forgotNewPassword").value;
                const confirmPass = document.getElementById("forgotConfirmPassword").value;
                const msg = document.getElementById("forgotPasswordMessage");
                const saved = JSON.parse(localStorage.getItem("natureLensUser"));
                if (!saved) { msg.textContent = "No account found with this email."; return; }
                if (saved.email !== email) { msg.textContent = "Email not found in our records."; return; }
                if (newPass.length < 6) { msg.textContent = "Password must be at least 6 characters."; return; }
                if (newPass !== confirmPass) { msg.textContent = "Passwords do not match."; return; }
                saved.password = newPass;
                localStorage.setItem("natureLensUser", JSON.stringify(saved));
                if (currentUser) { currentUser.password = newPass;
                    localStorage.setItem("natureLensSession", JSON.stringify(currentUser)); }
                msg.textContent = "Password reset successful.";
                forgotPasswordForm.reset();
                setTimeout(() => {
                    showLogin();
                    document.getElementById("loginMessage").textContent = "Password updated. Please sign in.";
                }, 1000);
            });
        }

        changePasswordForm.addEventListener("submit", e => {
            e.preventDefault();
            const currentPass = document.getElementById("currentPassword").value;
            const newPass = document.getElementById("newPassword").value;
            const confirmPass = document.getElementById("confirmNewPassword").value;
            const msg = document.getElementById("changePasswordMessage");
            const saved = JSON.parse(localStorage.getItem("natureLensUser"));
            if (!saved) { msg.textContent = "No account found."; return; }
            if (saved.password !== currentPass) { msg.textContent = "Current password is incorrect."; return; }
            if (newPass.length < 6) { msg.textContent = "New password must be at least 6 characters."; return; }
            if (newPass !== confirmPass) { msg.textContent = "New passwords do not match."; return; }
            saved.password = newPass;
            localStorage.setItem("natureLensUser", JSON.stringify(saved));
            if (currentUser) { currentUser.password = newPass;
                localStorage.setItem("natureLensSession", JSON.stringify(currentUser)); }
            msg.textContent = "Password updated successfully.";
            changePasswordForm.reset();
            setTimeout(() => { closeAuth();
                showToast("Password changed successfully."); }, 1000);
        });

        /* =====================================================
           AUTH UI
        ===================================================== */
        function updateAuthenticationUI() {
            const userName = document.getElementById("userName");
            const authBtn = document.getElementById("authButton");
            const changeBtn = document.getElementById("changePasswordBtn");
            if (currentUser) {
                userName.textContent = "Hi, " + currentUser.name;
                authBtn.textContent = "Logout";
                authBtn.onclick = logout;
                changeBtn.classList.remove("hidden");
            } else {
                userName.textContent = "";
                authBtn.textContent = "Sign In";
                authBtn.onclick = () => openAuth("login");
                changeBtn.classList.add("hidden");
            }
        }

        function logout() {
            currentUser = null;
            localStorage.removeItem("natureLensSession");
            updateAuthenticationUI();
            renderBooks();
            updateAuthGatedSections();
            showToast("You have been signed out.");
            if (bookViewPage.classList.contains("open")) closeBookView();
        }

        function clearAuthMessages() {
            document.getElementById("loginMessage").textContent = "";
            document.getElementById("registerMessage").textContent = "";
            document.getElementById("changePasswordMessage").textContent = "";
            const forgotMsg = document.getElementById("forgotPasswordMessage");
            if (forgotMsg) forgotMsg.textContent = "";
        }

        /* =====================================================
           AUTH-GATED SECTIONS
        ===================================================== */
        function updateAuthGatedSections() {
            const isAuth = !!currentUser;
            const gallerySection = document.getElementById("gallery");
            const galleryGridWrapper = document.getElementById("galleryGridWrapper");
            const galleryAuthOverlay = document.getElementById("galleryAuthOverlay");
            if (gallerySection) {
                if (isAuth) {
                    gallerySection.classList.remove("auth-hidden");
                    if (galleryGridWrapper) galleryGridWrapper.style.display = "block";
                    if (galleryAuthOverlay) galleryAuthOverlay.style.display = "none";
                    renderGallery();
                } else {
                    gallerySection.classList.add("auth-hidden");
                    if (galleryGridWrapper) galleryGridWrapper.style.display = "none";
                    if (galleryAuthOverlay) galleryAuthOverlay.style.display = "block";
                }
            }
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                if (isAuth) contactSection.classList.remove("auth-hidden");
                else contactSection.classList.add("auth-hidden");
            }
        }

        /* =====================================================
           NAVIGATION
        ===================================================== */
        function goHome() { if (bookViewPage.classList.contains("open")) closeBookView();
            window.scrollTo({ top: 0, behavior: "smooth" }); }

        function scrollToBooks() { if (bookViewPage.classList.contains("open")) closeBookView();
            document.getElementById("books").scrollIntoView({ behavior: "smooth" }); }

        function scrollToNews() { if (bookViewPage.classList.contains("open")) closeBookView();
            document.getElementById("news").scrollIntoView({ behavior: "smooth" }); }

        function scrollToPortfolio() { if (bookViewPage.classList.contains("open")) closeBookView();
            document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" }); }

        function scrollToGallery() {
            if (bookViewPage.classList.contains("open")) closeBookView();
            if (!currentUser) { showToast("Please sign in to view the gallery.");
                openAuth("login"); return; }
            document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
        }

        function showAbout() { if (bookViewPage.classList.contains("open")) closeBookView();
            document.getElementById("about").scrollIntoView({ behavior: "smooth" }); }

        function scrollToContact() {
            if (bookViewPage.classList.contains("open")) closeBookView();
            if (!currentUser) { showToast("Please sign in to contact us.");
                openAuth("login"); return; }
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }

        /* =====================================================
           TOAST
        ===================================================== */
        function showToast(message) {
            const toast = document.getElementById("toast");
            toast.textContent = message;
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 3200);
        }

        /* =====================================================
           HERO 3D
        ===================================================== */
        function initializeHero3D() {
            const hero = document.getElementById("heroVisual");
            const slideshow = document.getElementById("heroSlideshow");
            hero.addEventListener("mousemove", e => {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ry = ((x / rect.width) - .5) * 12;
                const rx = ((y / rect.height) - .5) * -12;
                slideshow.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
            });
            hero.addEventListener("mouseleave", () => {
                slideshow.style.transform = `rotateX(0) rotateY(0) scale(1)`;
            });
        }

        /* =====================================================
           CONTACT FORM
        ===================================================== */
        function setupContactForm() {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactMessageStatus");
            form.addEventListener("submit", e => {
                e.preventDefault();
                if (!currentUser) {
                    status.textContent = "🔒 Please sign in to send a message.";
                    status.style.color = "#ffb347";
                    setTimeout(() => { status.textContent = "";
                        status.style.color = ""; }, 4000);
                    openAuth("login");
                    return;
                }
                const name = document.getElementById("contactName").value.trim();
                const email = document.getElementById("contactEmail").value.trim();
                const subject = document.getElementById("contactSubject").value.trim();
                const message = document.getElementById("contactMessage").value.trim();
                if (!name || !email || !subject || !message) {
                    status.textContent = "Please fill in all fields.";
                    status.style.color = "#ffb347";
                    setTimeout(() => { status.textContent = "";
                        status.style.color = ""; }, 3000);
                    return;
                }
                status.textContent = "✅ Message sent! We'll get back to you soon.";
                status.style.color = "#7affba";
                form.reset();
                setTimeout(() => { status.textContent = "";
                    status.style.color = ""; }, 5000);
            });
        }

        /* =====================================================
           GALLERY FILE INPUT (hidden helper)
        ===================================================== */
        function setupGalleryFileInput() {
            // handled in triggerGalleryUpload
        }

        /* =====================================================
           NEWS CAROUSEL — auto-rotate every 3s
        ===================================================== */
        function initNewsCarousel() {
            if (!newsSlidesWrapper) return;

            newsSlidesWrapper.innerHTML = "";
            newsItems.forEach((item, i) => {
                const slide = document.createElement("div");
                slide.className = "news-slide" + (i === 0 ? " active" : "");
                slide.dataset.index = i;
                slide.innerHTML = `
              <div class="news-slide-image">
                <img src="${item.image}" alt="${escapeHTML(item.title)}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'; this.onerror=null;">
              </div>
              <div class="news-slide-content">
                <span class="news-date">${escapeHTML(item.date)}</span>
                <h3>${escapeHTML(item.title)}</h3>
                <p>${escapeHTML(item.description)}</p>
                <div class="news-meta">
                  <span>${escapeHTML(item.meta[0] || '')}</span>
                  <span>${escapeHTML(item.meta[1] || '')}</span>
                </div>
              </div>
            `;
                newsSlidesWrapper.appendChild(slide);
            });

            newsDots.innerHTML = "";
            newsItems.forEach((_, i) => {
                const dot = document.createElement("button");
                dot.className = "dot" + (i === 0 ? " active" : "");
                dot.dataset.index = i;
                dot.addEventListener("click", () => goToNewsSlide(i));
                newsDots.appendChild(dot);
            });

            newsPrevBtn.addEventListener("click", () => { goToNewsSlide(newsCurrentIndex - 1); });
            newsNextBtn.addEventListener("click", () => { goToNewsSlide(newsCurrentIndex + 1); });

            startNewsAutoRotate();
        }

        function goToNewsSlide(index) {
            if (newsTransitioning) return;
            const slides = newsSlidesWrapper.querySelectorAll(".news-slide");
            const dots = newsDots.querySelectorAll(".dot");
            if (slides.length === 0) return;

            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            if (index === newsCurrentIndex) return;

            newsTransitioning = true;
            const oldIndex = newsCurrentIndex;

            slides[oldIndex].classList.remove("active");
            dots[oldIndex].classList.remove("active");

            slides[index].classList.add("active");
            dots[index].classList.add("active");

            newsCurrentIndex = index;

            setTimeout(() => { newsTransitioning = false; }, 700);

            resetNewsAutoRotate();
        }

        function startNewsAutoRotate() {
            if (newsInterval) clearInterval(newsInterval);
            newsInterval = setInterval(() => {
                if (!newsTransitioning) {
                    goToNewsSlide(newsCurrentIndex + 1);
                }
            }, 3000);
        }

        function resetNewsAutoRotate() {
            if (newsInterval) clearInterval(newsInterval);
            newsInterval = setInterval(() => {
                if (!newsTransitioning) {
                    goToNewsSlide(newsCurrentIndex + 1);
                }
            }, 3000);
        }

        const newsCarousel = document.getElementById("newsCarousel");
        if (newsCarousel) {
            newsCarousel.addEventListener("mouseenter", () => {
                if (newsInterval) clearInterval(newsInterval);
            });
            newsCarousel.addEventListener("mouseleave", startNewsAutoRotate);
        }

        /* =====================================================
           UTILS
        ===================================================== */
        function escapeHTML(value) {
            if (!value) return "";
            const div = document.createElement("div");
            div.textContent = value;
            return div.innerHTML;
        }

        console.log("NatureLens loaded — Book upload fixed, 8 news items, 3s carousel.");