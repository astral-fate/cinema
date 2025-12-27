document.addEventListener('DOMContentLoaded', () => {

    // --- The Global Cinema Database ---
    // A comprehensive list covering diverse regions and movements.
    const directors = [
        // --- ARAB WORLD & MIDDLE EAST ---
        { id: 1, name: "Youssef Chahine", nat: "Egypt", era: "1950s-2000s", works: "Cairo Station, The Land", region: "Arab World", theme: "Social realism, Post-colonial identity" },
        { id: 2, name: "Abbas Kiarostami", nat: "Iran", era: "1970s-2010s", works: "Taste of Cherry, Close-Up", region: "Middle East", theme: "Poetic realism, Meta-fiction" },
        { id: 3, name: "Nadine Labaki", nat: "Lebanon", era: "2000s-Present", works: "Capernaum, Caramel", region: "Arab World", theme: "Women's rights, Childhood poverty" },
        { id: 4, name: "Elia Suleiman", nat: "Palestine", era: "1990s-Present", works: "Divine Intervention, It Must Be Heaven", region: "Arab World", theme: "Silent comedy, Political absurdism" },
        { id: 5, name: "Asghar Farhadi", nat: "Iran", era: "2000s-Present", works: "A Separation, The Salesman", region: "Middle East", theme: "Moral complexity, Domestic drama" },
        { id: 6, name: "Hany Abu-Assad", nat: "Palestine", era: "2000s-Present", works: "Paradise Now, Omar", region: "Arab World", theme: "Occupation, Human cost of conflict" },
        { id: 7, name: "Haifaa al-Mansour", nat: "Saudi Arabia", era: "2010s-Present", works: "Wadjda, The Perfect Candidate", region: "Arab World", theme: "Female empowerment, Cultural change" },
        { id: 8, name: "Nuri Bilge Ceylan", nat: "Turkey", era: "1990s-Present", works: "Winter Sleep, Once Upon a Time in Anatolia", region: "Middle East", theme: "Existentialism, Chekhovian dialogue" },
        { id: 9, name: "Kaouther Ben Hania", nat: "Tunisia", era: "2010s-Present", works: "The Man Who Sold His Skin", region: "Arab World", theme: "Refugee crisis, Art vs Humanity" },
        { id: 10, name: "Maroun Bagdadi", nat: "Lebanon", era: "1970s-1990s", works: "Little Wars, Out of Life", region: "Arab World", theme: "Civil war, Memory" },

        // --- INDIA & SOUTH ASIA ---
        { id: 11, name: "Satyajit Ray", nat: "India", era: "1950s-1990s", works: "Pather Panchali, Charulata", region: "India", theme: "Humanism, Bengali rural life" },
        { id: 12, name: "Ritwik Ghatak", nat: "India", era: "1950s-1970s", works: "Meghe Dhaka Tara, Subarnarekha", region: "India", theme: "Partition trauma, Displacement" },
        { id: 13, name: "Guru Dutt", nat: "India", era: "1950s-1960s", works: "Pyaasa, Kaagaz Ke Phool", region: "India", theme: "Melancholy, The tortured artist" },
        { id: 14, name: "Mani Ratnam", nat: "India", era: "1980s-Present", works: "Dil Se.., Nayakan", region: "India", theme: "Terrorism trilogy, Political romance" },
        { id: 15, name: "S.S. Rajamouli", nat: "India", era: "2000s-Present", works: "RRR, Baahubali", region: "India", theme: "Mythic spectacle, Anti-colonialism" },
        { id: 16, name: "Mira Nair", nat: "India/USA", era: "1980s-Present", works: "Salaam Bombay!, Monsoon Wedding", region: "India", theme: "Diaspora, Street life" },
        { id: 17, name: "Anurag Kashyap", nat: "India", era: "2000s-Present", works: "Gangs of Wasseypur, Dev.D", region: "India", theme: "Crime, Gritty realism" },
        { id: 18, name: "Zoya Akhtar", nat: "India", era: "2000s-Present", works: "Gully Boy, Zindagi Na Milegi Dobara", region: "India", theme: "Modern youth, Class aspirations" },
        { id: 19, name: "Adoor Gopalakrishnan", nat: "India", era: "1970s-Present", works: "Elippathayam, Swayamvaram", region: "India", theme: "Kerala culture, Feudal decay" },
        { id: 20, name: "Sanjay Leela Bhansali", nat: "India", era: "1990s-Present", works: "Devdas, Padmavat", region: "India", theme: "Grandeur, Operatic romance" },

        // --- CHINA, TAIWAN, HONG KONG ---
        { id: 21, name: "Wong Kar-wai", nat: "Hong Kong", era: "1980s-Present", works: "In the Mood for Love, Chungking Express", region: "East Asia", theme: "Time, Longing, Neon aesthetics" },
        { id: 22, name: "Edward Yang", nat: "Taiwan", era: "1980s-2000s", works: "Yi Yi, A Brighter Summer Day", region: "East Asia", theme: "Urban alienation, Modernity" },
        { id: 23, name: "Hou Hsiao-hsien", nat: "Taiwan", era: "1980s-Present", works: "City of Sadness, The Assassin", region: "East Asia", theme: "Long takes, Historical memory" },
        { id: 24, name: "Zhang Yimou", nat: "China", era: "1980s-Present", works: "Raise the Red Lantern, Hero", region: "East Asia", theme: "Color theory, Historical oppression" },
        { id: 25, name: "Ang Lee", nat: "Taiwan", era: "1990s-Present", works: "Crouching Tiger Hidden Dragon, Life of Pi", region: "East Asia", theme: "East-West culture clash, Repression" },
        { id: 26, name: "Jia Zhangke", nat: "China", era: "1990s-Present", works: "Ash Is Purest White, Still Life", region: "East Asia", theme: "Rapid industrialization, Forgotten people" },
        { id: 27, name: "Chen Kaige", nat: "China", era: "1980s-Present", works: "Farewell My Concubine", region: "East Asia", theme: "Cultural Revolution, Peking Opera" },
        { id: 28, name: "Tsai Ming-liang", nat: "Taiwan", era: "1990s-Present", works: "Goodbye, Dragon Inn", region: "East Asia", theme: "Slow cinema, Isolation" },
        { id: 29, name: "Stephen Chow", nat: "Hong Kong", era: "1990s-Present", works: "Kung Fu Hustle, Shaolin Soccer", region: "East Asia", theme: "Mo lei tau comedy, Underdog stories" },
        { id: 30, name: "Ann Hui", nat: "Hong Kong", era: "1970s-Present", works: "A Simple Life, Boat People", region: "East Asia", theme: "Social issues, Migration" },

        // --- JAPAN ---
        { id: 31, name: "Akira Kurosawa", nat: "Japan", era: "1940s-1990s", works: "Seven Samurai, Rashomon", region: "Japan", theme: "Samurai ethics, Humanism" },
        { id: 32, name: "Yasujiro Ozu", nat: "Japan", era: "1920s-1960s", works: "Tokyo Story, Late Spring", region: "Japan", theme: "Family dissolution, The tatami shot" },
        { id: 33, name: "Hayao Miyazaki", nat: "Japan", era: "1970s-Present", works: "Spirited Away, Princess Mononoke", region: "Japan", theme: "Pacifism, Environmentalism" },
        { id: 34, name: "Hirokazu Kore-eda", nat: "Japan", era: "1990s-Present", works: "Shoplifters, Nobody Knows", region: "Japan", theme: "Non-traditional families, Child neglect" },
        { id: 35, name: "Takeshi Kitano", nat: "Japan", era: "1980s-Present", works: "Hana-bi, Sonatine", region: "Japan", theme: "Yakuza violence, Deadpan humor" },
        { id: 36, name: "Takashi Miike", nat: "Japan", era: "1990s-Present", works: "Audition, Ichi the Killer", region: "Japan", theme: "Extreme violence, Surrealism" },
        { id: 37, name: "Ryusuke Hamaguchi", nat: "Japan", era: "2000s-Present", works: "Drive My Car, Wheel of Fortune and Fantasy", region: "Japan", theme: "Language, Theater, Connection" },
        { id: 38, name: "Kenji Mizoguchi", nat: "Japan", era: "1920s-1950s", works: "Ugetsu, Sansho the Bailiff", region: "Japan", theme: "Women's suffering, Long takes" },
        { id: 39, name: "Satoshi Kon", nat: "Japan", era: "1990s-2010", works: "Perfect Blue, Paprika", region: "Japan", theme: "Dreams vs Reality, Identity" },
        { id: 40, name: "Naomi Kawase", nat: "Japan", era: "1990s-Present", works: "Sweet Bean, The Mourning Forest", region: "Japan", theme: "Nature, Grief, Documentary style" },

        // --- EUROPE (French, German, etc.) ---
        { id: 41, name: "Agnes Varda", nat: "France", era: "1950s-2010s", works: "Cleo from 5 to 7", region: "Europe", theme: "Feminism, French New Wave" },
        { id: 42, name: "Jean-Luc Godard", nat: "France/Swiss", era: "1960s-2022", works: "Breathless", region: "Europe", theme: "Radicalism, Breaking the 4th wall" },
        { id: 43, name: "Claire Denis", nat: "France", era: "1980s-Present", works: "Beau Travail", region: "Europe", theme: "Colonialism, The body" },
        { id: 44, name: "Celine Sciamma", nat: "France", era: "2000s-Present", works: "Portrait of a Lady on Fire", region: "Europe", theme: "The Female Gaze, Queer identity" },
        { id: 45, name: "Werner Herzog", nat: "Germany", era: "1960s-Present", works: "Aguirre, Fitzcarraldo", region: "Europe", theme: "Man vs Nature, Obsession" },
        { id: 46, name: "Wim Wenders", nat: "Germany", era: "1970s-Present", works: "Wings of Desire, Paris Texas", region: "Europe", theme: "Wandering, Americana" },
        { id: 47, name: "Rainer Werner Fassbinder", nat: "Germany", era: "1960s-1980s", works: "Ali: Fear Eats the Soul", region: "Europe", theme: "Social prejudice, Melodrama" },
        { id: 48, name: "Christian Petzold", nat: "Germany", era: "1990s-Present", works: "Phoenix, Transit", region: "Europe", theme: "History, Ghostly identities" },
        { id: 49, name: "Pedro Almodovar", nat: "Spain", era: "1980s-Present", works: "All About My Mother", region: "Europe", theme: "Desire, Mothers, Color" },
        { id: 50, name: "Ingmar Bergman", nat: "Sweden", era: "1940s-2000s", works: "The Seventh Seal", region: "Europe", theme: "Faith, Death, Psychology" },
        { id: 51, name: "Lars von Trier", nat: "Denmark", era: "1980s-Present", works: "Dogville, Melancholia", region: "Europe", theme: "Provocation, Depression" },
        { id: 52, name: "Andrei Tarkovsky", nat: "USSR", era: "1960s-1980s", works: "Stalker, Mirror", region: "Europe", theme: "Time, Spirituality, Memory" },
        
        // --- AFRICA ---
        { id: 61, name: "Ousmane Sembene", nat: "Senegal", era: "1960s-2000s", works: "Black Girl, Moolaade", region: "Africa", theme: "Father of African Cinema, Post-colonialism" },
        { id: 62, name: "Djibril Diop Mambety", nat: "Senegal", era: "1970s-1990s", works: "Touki Bouki", region: "Africa", theme: "Avant-garde, Non-linear narrative" },
        { id: 63, name: "Abderrahmane Sissako", nat: "Mauritania", era: "1990s-Present", works: "Timbuktu", region: "Africa", theme: "Islamic extremism, Beauty in pain" },
        { id: 64, name: "Mati Diop", nat: "Senegal/France", era: "2010s-Present", works: "Atlantics", region: "Africa", theme: "Migration, Ghosts, Ocean" },
        { id: 65, name: "Souleymane Cisse", nat: "Mali", era: "1970s-Present", works: "Yeelen", region: "Africa", theme: "African spirituality, Magic realism" },

        // --- LATIN AMERICA ---
        { id: 71, name: "Alfonso Cuaron", nat: "Mexico", era: "1990s-Present", works: "Roma, Children of Men", region: "Americas", theme: "Memory, Long takes, Class" },
        { id: 72, name: "Guillermo del Toro", nat: "Mexico", era: "1990s-Present", works: "Pan's Labyrinth", region: "Americas", theme: "Monsters, Fascism, Fairy tales" },
        { id: 73, name: "Lucrecia Martel", nat: "Argentina", era: "2000s-Present", works: "La Cienaga, Zama", region: "Americas", theme: "Decay of bourgeoisie, Soundscapes" },
        { id: 74, name: "Fernando Meirelles", nat: "Brazil", era: "2000s-Present", works: "City of God", region: "Americas", theme: "Urban violence, Kinetic editing" },
        { id: 75, name: "Alejandro G. Inarritu", nat: "Mexico", era: "2000s-Present", works: "Birdman, Amores Perros", region: "Americas", theme: "Interconnected lives, Survival" },

        // --- USA / UK / GLOBAL ---
        { id: 81, name: "Stanley Kubrick", nat: "USA/UK", era: "1950s-1999", works: "2001: A Space Odyssey", region: "Americas", theme: "Perfectionism, Coldness" },
        { id: 82, name: "Alfred Hitchcock", nat: "UK/USA", era: "1920s-1970s", works: "Vertigo", region: "Europe", theme: "Suspense, Voyeurism" },
        { id: 83, name: "Martin Scorsese", nat: "USA", era: "1970s-Present", works: "Taxi Driver", region: "Americas", theme: "Guilt, Crime, Faith" },
        { id: 84, name: "Bong Joon-ho", nat: "S. Korea", era: "2000s-Present", works: "Parasite", region: "East Asia", theme: "Class war, Genre blending" },
        { id: 85, name: "Park Chan-wook", nat: "S. Korea", era: "2000s-Present", works: "Oldboy", region: "East Asia", theme: "Revenge, Taboo" },
        { id: 86, name: "Apichatpong Weerasethakul", nat: "Thailand", era: "2000s-Present", works: "Uncle Boonmee", region: "East Asia", theme: "Dreams, Reincarnation, Jungle" },
        { id: 87, name: "Jane Campion", nat: "New Zealand", era: "1980s-Present", works: "The Piano", region: "Oceania", theme: "Female desire, Isolation" },
        { id: 88, name: "George Miller", nat: "Australia", era: "1970s-Present", works: "Mad Max: Fury Road", region: "Oceania", theme: "Kinetic action, Myth making" },
        { id: 89, name: "Jordan Peele", nat: "USA", era: "2010s-Present", works: "Get Out", region: "Americas", theme: "Social horror, Race" },
        { id: 90, name: "Spike Lee", nat: "USA", era: "1980s-Present", works: "Do the Right Thing", region: "Americas", theme: "Race relations, Brooklyn" }
    ];

    // --- DOM Elements ---
    const timelineContent = document.getElementById('timeline-content');
    const categoriesGrid = document.getElementById('categories-grid');
    const searchInput = document.getElementById('search-input');
    const modalOverlay = document.getElementById('director-modal');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const tabs = document.querySelectorAll('.tab-btn');
    const views = document.querySelectorAll('.view');

    // --- RENDER FUNCTIONS ---
    
    // 1. Render Timeline (Grid of cards)
    const renderTimeline = (data) => {
        timelineContent.innerHTML = data.map(d => `
            <div class="timeline-card" onclick="openModal(${d.id})">
                <div class="card-meta">
                    <span>${d.nat}</span>
                    <span>${d.era.split('-')[0]}s</span>
                </div>
                <h3>${d.name}</h3>
                <div style="font-size:0.9rem; color:#cbd5e1; margin-bottom:0.5rem;">${d.theme.split(',')[0]}</div>
                <div class="card-works">Known for: ${d.works.split(',')[0]}</div>
            </div>
        `).join('');
    };

    // 2. Render Categories (Grouped by Region)
    const renderCategories = (data) => {
        const regions = [...new Set(data.map(d => d.region))].sort();
        categoriesGrid.innerHTML = regions.map(reg => {
            const dirs = data.filter(d => d.region === reg);
            return `
                <div class="category-group">
                    <h3>${reg}</h3>
                    ${dirs.map(d => `
                        <div class="director-link" onclick="openModal(${d.id})">
                            <span>${d.name}</span>
                            <span class="nat">${d.nat}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('');
    };

    // 3. Render Graph
    const renderGraph = (data) => {
        const container = document.getElementById('graph-container');
        const width = container.clientWidth;
        const height = container.clientHeight;
        const svg = d3.select("#influence-graph");
        svg.selectAll("*").remove();

        // Create nodes grouped by Region
        const nodes = data.map(d => ({ ...d }));
        
        // Simulation
        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody().strength(-30))
            .force("collide", d3.forceCollide(15))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("x", d3.forceX(width / 2).strength(0.05))
            .force("y", d3.forceY(height / 2).strength(0.05));

        const colorScale = d3.scaleOrdinal(d3.schemeSet3);

        const node = svg.append("g")
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 6)
            .attr("fill", d => colorScale(d.region))
            .attr("stroke", "#fff")
            .attr("stroke-width", 1)
            .call(d3.drag()
                .on("start", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x; d.fy = d.y;
                })
                .on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; })
                .on("end", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null; d.fy = null;
                })
            )
            .on("click", (e, d) => openModal(d.id));

        // Add tooltips or labels on hover could be added here
        node.append("title").text(d => d.name + " (" + d.nat + ")");

        simulation.on("tick", () => {
            node.attr("cx", d => d.x).attr("cy", d => d.y);
        });
    };

    // --- MODAL & SEARCH ---
    window.openModal = (id) => {
        const d = directors.find(x => x.id === id);
        if(!d) return;
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${d.name}</h2>
                <div class="modal-badges">
                    <span class="badge nat">${d.nat}</span>
                    <span class="badge era">${d.region}</span>
                    <span class="badge">${d.era}</span>
                </div>
            </div>
            <div class="modal-body">
                <h4>Major Works</h4>
                <p>${d.works}</p>
                <h4>Core Themes</h4>
                <p>${d.theme}</p>
                <div style="margin-top:2rem; font-size:0.9rem; color: var(--muted-text);">
                    <a href="https://en.wikipedia.org/wiki/${d.name.replace(' ', '_')}" target="_blank" style="color:#38bdf8; text-decoration:none;">Read full biography on Wikipedia &rarr;</a>
                </div>
            </div>
        `;
        modalOverlay.classList.add('show');
    };

    modalCloseBtn.onclick = () => modalOverlay.classList.remove('show');
    modalOverlay.onclick = (e) => { if(e.target === modalOverlay) modalOverlay.classList.remove('show'); };

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = directors.filter(d => 
            d.name.toLowerCase().includes(term) || 
            d.nat.toLowerCase().includes(term) || 
            d.region.toLowerCase().includes(term) ||
            d.works.toLowerCase().includes(term)
        );
        renderTimeline(filtered);
        renderCategories(filtered);
        renderGraph(filtered); // Update graph dynamically
    });

    // --- TABS ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));
            tab.classList.add('active');
            const viewId = tab.id.replace('-tab', '-view');
            document.getElementById(viewId).classList.add('active');
            if(viewId === 'graph-view') renderGraph(directors);
        });
    });

    // --- INITIAL RENDER ---
    renderTimeline(directors);
    renderCategories(directors);
});
