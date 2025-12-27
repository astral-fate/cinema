document.addEventListener('DOMContentLoaded', () => {
    
    // --- The Dataset (1954 - 2024) ---
    const directors = [
        // --- 1950s & 60s Era ---
        {
            id: 101,
            name: "Alfred Hitchcock",
            nationality: "UK / USA",
            activeEra: "1920s - 1970s",
            debutYear: 1954, // Using 'Rear Window' as the start of his golden run for this timeline
            bio: "The Master of Suspense. He pioneered many techniques in the suspense and psychological thriller genres, making the camera move in a way that mimics a person's gaze.",
            themes: "Voyeurism, wrongful accusation, blonde icy women, suspense.",
            works: "Vertigo (1958), Psycho (1960), Rear Window (1954)",
            influence: "Brian De Palma, David Fincher, Bong Joon-ho",
            category: "Classic Masters",
            wiki: "https://en.wikipedia.org/wiki/Alfred_Hitchcock"
        },
        {
            id: 102,
            name: "Akira Kurosawa",
            nationality: "Japan",
            activeEra: "1940s - 1990s",
            debutYear: 1954, // Seven Samurai
            bio: "A giant of cinema whose samurai epics and contemporary dramas redefined action editing and visual storytelling.",
            themes: "Humanism, social disintegration, the samurai code, master-pupil relationships.",
            works: "Seven Samurai (1954), Ran (1985), Rashomon (1950)",
            influence: "George Lucas, Steven Spielberg, Sergio Leone",
            category: "Classic Masters"
        },
        {
            id: 103,
            name: "Agnes Varda",
            nationality: "France",
            activeEra: "1950s - 2010s",
            debutYear: 1955,
            bio: "The grandmother of the French New Wave. Her work was distinctive for its realism, social commentary, and experimental style.",
            themes: "Feminism, social realism, the passage of time, documentary blurring.",
            works: "Cléo from 5 to 7 (1962), Vagabond (1985), Faces Places (2017)",
            influence: "Greta Gerwig, Celine Sciamma, Barry Jenkins",
            category: "French New Wave & Experimental"
        },
        {
            id: 104,
            name: "Stanley Kubrick",
            nationality: "USA / UK",
            activeEra: "1950s - 1990s",
            debutYear: 1956,
            bio: "Known for his perfectionism, slow pacing, and striking visual compositions. He worked across almost every genre, mastering each one.",
            themes: "Dehumanization, war, artificial intelligence, human folly.",
            works: "2001: A Space Odyssey (1968), The Shining (1980), Dr. Strangelove (1964)",
            influence: "Christopher Nolan, Paul Thomas Anderson, Yorgos Lanthimos",
            category: "Classic Masters"
        },
        {
            id: 105,
            name: "Jean-Luc Godard",
            nationality: "France / Switzerland",
            activeEra: "1960s - 2020s",
            debutYear: 1960,
            bio: "A pioneer of the French New Wave who broke every rule of cinema—jump cuts, breaking the fourth wall, and political radicalism.",
            themes: "Existentialism, Marxism, consumer culture, the medium of film itself.",
            works: "Breathless (1960), Contempt (1963), Pierrot le Fou (1965)",
            influence: "Quentin Tarantino, Wong Kar-wai, Martin Scorsese",
            category: "French New Wave & Experimental"
        },

        // --- 1970s New Hollywood & Global Voices ---
        {
            id: 201,
            name: "Francis Ford Coppola",
            nationality: "USA",
            activeEra: "1960s - Present",
            debutYear: 1972,
            bio: "A central figure of the New Hollywood wave, turning the gangster genre into an operatic tragedy.",
            themes: "Family, corruption, the American Dream, absolute power.",
            works: "The Godfather (1972), Apocalypse Now (1979), The Conversation (1974)",
            influence: "Paul Thomas Anderson, David Chase, Sofia Coppola",
            category: "New Hollywood"
        },
        {
            id: 202,
            name: "Martin Scorsese",
            nationality: "USA",
            activeEra: "1960s - Present",
            debutYear: 1973, // Mean Streets
            bio: "The ultimate cinephile director, blending gritty realism with stylized violence and rock soundtracks.",
            themes: "Catholic guilt, organized crime, masculinity, New York City.",
            works: "Taxi Driver (1976), Goodfellas (1990), The Wolf of Wall Street (2013)",
            influence: "Paul Thomas Anderson, Bong Joon-ho, Quentin Tarantino",
            category: "New Hollywood"
        },
        {
            id: 203,
            name: "Steven Spielberg",
            nationality: "USA",
            activeEra: "1970s - Present",
            debutYear: 1975, // Jaws
            bio: "The inventor of the modern blockbuster. He possesses an innate understanding of audience emotion and visual wonder.",
            themes: "Childhood wonder, absent fathers, war, survival.",
            works: "Jaws (1975), Raiders of the Lost Ark (1981), Schindler's List (1993)",
            influence: "J.J. Abrams, Denis Villeneuve, M. Night Shyamalan",
            category: "Blockbuster Visionaries"
        },
        {
            id: 204,
            name: "Andrei Tarkovsky",
            nationality: "USSR",
            activeEra: "1960s - 1980s",
            debutYear: 1972, // Solaris (International fame)
            bio: "A Russian filmmaker known for his 'sculpting in time' theory, creating slow, poetic, and metaphysical films.",
            themes: "Memory, spirituality, nature, the human soul.",
            works: "Solaris (1972), Stalker (1979), The Mirror (1975)",
            influence: "Claire Denis, Alejandro Iñárritu, Christopher Nolan",
            category: "Poetic Realism"
        },

        // --- 1980s & 90s Auteurs ---
        {
            id: 301,
            name: "Hayao Miyazaki",
            nationality: "Japan",
            activeEra: "1979 - Present",
            debutYear: 1984, // Nausicaa
            bio: "Co-founder of Studio Ghibli, a master of animation who creates pacifist, environmentalist fables with strong female leads.",
            themes: "Environmentalism, flight, pacifism, childhood transition.",
            works: "Spirited Away (2001), Princess Mononoke (1997), My Neighbor Totoro (1988)",
            influence: "Guillermo del Toro, Wes Anderson, Pixar Studios",
            category: "Animation & Fantasy"
        },
        {
            id: 302,
            name: "David Lynch",
            nationality: "USA",
            activeEra: "1970s - Present",
            debutYear: 1986, // Blue Velvet
            bio: "The surrealist of American suburbia. He exposes the nightmare hiding underneath the picket fence.",
            themes: "Dreams, the uncanny, industrial decay, duality.",
            works: "Blue Velvet (1986), Mulholland Drive (2001), Twin Peaks (1990)",
            influence: "Ari Aster, Denis Villeneuve, Jordan Peele",
            category: "Surrealism"
        },
        {
            id: 303,
            name: "Spike Lee",
            nationality: "USA",
            activeEra: "1980s - Present",
            debutYear: 1989, // Do the Right Thing
            bio: "A provacateur who confronts race relations in America with vibrant style, breaking the fourth wall, and the 'double dolly' shot.",
            themes: "Race in America, systemic oppression, Brooklyn, media satire.",
            works: "Do the Right Thing (1989), Malcolm X (1992), BlacKkKlansman (2018)",
            influence: "Jordan Peele, Barry Jenkins, Ryan Coogler",
            category: "Social Commentary"
        },
        {
            id: 304,
            name: "Wong Kar-wai",
            nationality: "Hong Kong",
            activeEra: "1980s - Present",
            debutYear: 1994, // Chungking Express
            bio: "The poet of urban loneliness. Known for step-printing, neon visuals, and non-linear romances.",
            themes: "Unrequited love, memory, expiration dates, loneliness.",
            works: "In the Mood for Love (2000), Chungking Express (1994), Fallen Angels (1995)",
            influence: "Barry Jenkins, Sofia Coppola, Quentin Tarantino",
            category: "Poetic Realism"
        },
        {
            id: 305,
            name: "Quentin Tarantino",
            nationality: "USA",
            activeEra: "1990s - Present",
            debutYear: 1992,
            bio: "The video store clerk turned auteur. He remixes pop culture, B-movies, and foreign cinema into dialogue-heavy masterpieces.",
            themes: "Revenge, historical revisionism, feet, pop culture references.",
            works: "Pulp Fiction (1994), Kill Bill (2003), Inglourious Basterds (2009)",
            influence: "Edgar Wright, Bong Joon-ho",
            category: "Post-Modernism"
        },

        // --- 2000s to Present ---
        {
            id: 401,
            name: "Christopher Nolan",
            nationality: "UK / USA",
            activeEra: "1998 - Present",
            debutYear: 2000, // Memento
            bio: "He turned the blockbuster into a puzzle. Known for shooting on IMAX film and obsessing over the concept of time.",
            themes: "Time, identity, obsession, scale.",
            works: "The Dark Knight (2008), Inception (2010), Oppenheimer (2023)",
            influence: "Denis Villeneuve, Damien Chazelle",
            category: "Blockbuster Visionaries"
        },
        {
            id: 402,
            name: "Bong Joon-ho",
            nationality: "South Korea",
            activeEra: "2000 - Present",
            debutYear: 2003, // Memories of Murder
            bio: "A master of genre-bending. He mixes slapstick comedy with brutal social horror seamlessly.",
            themes: "Class warfare, incompetence of authority, family.",
            works: "Parasite (2019), Memories of Murder (2003), The Host (2006)",
            influence: "Jordan Peele, Adam McKay",
            category: "Social Commentary"
        },
        {
            id: 403,
            name: "Denis Villeneuve",
            nationality: "Canada",
            activeEra: "2000s - Present",
            debutYear: 2010, // Incendies (Global breakout)
            bio: "The modern master of Sci-Fi. He brings a brutalist architecture and heavy atmosphere to large scale stories.",
            themes: "Destiny, memory, language, brutalism.",
            works: "Dune (2021), Arrival (2016), Sicario (2015)",
            influence: "Chloé Zhao",
            category: "Sci-Fi & Spectacle"
        },
        {
            id: 404,
            name: "Greta Gerwig",
            nationality: "USA",
            activeEra: "2008 - Present",
            debutYear: 2017, // Lady Bird (Solo directing)
            bio: "Moving from indie acting to directing massive hits, she explores the specific pains and joys of womanhood.",
            themes: "Girlhood, ambition, mother-daughter bonds.",
            works: "Lady Bird (2017), Little Women (2019), Barbie (2023)",
            influence: "Noah Baumbach, Sofia Coppola",
            category: "Modern Humanism"
        },
        {
            id: 405,
            name: "Jordan Peele",
            nationality: "USA",
            activeEra: "2010s - Present",
            debutYear: 2017,
            bio: " redefined the horror genre by blending classic scares with sharp racial and social satire.",
            themes: "The 'Sunken Place', spectacle, hidden histories.",
            works: "Get Out (2017), Nope (2022), Us (2019)",
            influence: "Ari Aster, Emerald Fennell",
            category: "Modern Horror"
        }
    ];

    // Sort by debut year for timeline
    directors.sort((a, b) => a.debutYear - b.debutYear);

    // --- DOM Elements ---
    const tabs = document.querySelectorAll('.tab-btn');
    const views = document.querySelectorAll('.view');
    const modalOverlay = document.getElementById('director-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBody = document.getElementById('modal-body');

    // --- View Switching Logic ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));

            tab.classList.add('active');
            const viewId = tab.id.replace('-tab', '-view');
            document.getElementById(viewId).classList.add('active');

            if (viewId === 'graph-view') {
                renderGraph();
            }
        });
    });

    // --- Modal Logic ---
    const openModal = (director) => {
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${director.name}</h2>
                <div class="modal-meta">${director.nationality} • ${director.activeEra}</div>
            </div>
            <div class="modal-section">
                <h4>Biography</h4>
                <p>${director.bio}</p>
            </div>
            <div class="modal-section">
                <h4>Core Themes</h4>
                <p>${director.themes}</p>
            </div>
            <div class="modal-section">
                <h4>Key Works</h4>
                <p>${director.works}</p>
            </div>
            <div class="modal-section">
                <h4>Influenced By / Influenced</h4>
                <p>${director.influence}</p>
            </div>
            <div style="margin-top: 2rem;">
                <a href="${director.wiki}" target="_blank" style="color: var(--primary-color); text-decoration: none; border-bottom: 1px dotted;">Read Full Bio &rarr;</a>
            </div>
        `;
        modalOverlay.classList.add('show');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('show');
    };

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // --- Render Timeline ---
    const timelineContent = document.getElementById('timeline-content');
    let lastDecade = 0;

    timelineContent.innerHTML = directors.map((d, index) => {
        const decade = Math.floor(d.debutYear / 10) * 10;
        let decadeHeader = '';
        
        // Add a decade marker if it's a new decade
        if (decade !== lastDecade) {
            decadeHeader = `<div style="text-align:center; font-family:'Playfair Display'; font-size:2rem; color:#fff; margin: 40px 0 20px 0; opacity:0.3;">${decade}s</div>`;
            lastDecade = decade;
        }

        const sideClass = index % 2 === 0 ? 'left' : 'right';
        return `
            ${decadeHeader}
            <div class="timeline-item ${sideClass}">
                <div class="timeline-card" data-id="${d.id}">
                    <span class="timeline-year">${d.debutYear}</span>
                    <h3>${d.name}</h3>
                    <p style="color: var(--light-text-color); font-size: 0.9rem;">${d.works.split(',')[0]}</p>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.timeline-card').forEach(card => {
        card.addEventListener('click', () => {
            const dir = directors.find(d => d.id == card.dataset.id);
            openModal(dir);
        });
    });

    // --- Render Categories ---
    const categoriesGrid = document.getElementById('categories-grid');
    const categories = [...new Set(directors.map(d => d.category))];

    categoriesGrid.innerHTML = categories.map(cat => {
        const catDirectors = directors.filter(d => d.category === cat);
        return `
            <div class="category-card">
                <h3>${cat}</h3>
                <div>
                    ${catDirectors.map(d => `
                        <div class="director-list-item" data-id="${d.id}">
                            <span>${d.name}</span>
                            <span style="opacity:0.5; font-size:0.8em;">${d.debutYear}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.director-list-item').forEach(item => {
        item.addEventListener('click', () => {
            const dir = directors.find(d => d.id == item.dataset.id);
            openModal(dir);
        });
    });

    // --- Render Graph (D3.js) ---
    const renderGraph = () => {
        const container = document.getElementById('graph-container');
        if (container.querySelector('svg g')) return; // Prevent re-rendering

        const width = container.clientWidth;
        const height = container.clientHeight;

        const nodes = directors.map(d => ({ id: d.id, name: d.name, category: d.category }));
        const links = [];

        // Helper: Find ID by partial name
        const findID = (name) => {
            const n = name.trim().toLowerCase();
            const found = directors.find(d => d.name.toLowerCase().includes(n) || n.includes(d.name.toLowerCase()));
            return found ? found.id : null;
        };

        // Create Links
        directors.forEach(d => {
            if (d.influence) {
                d.influence.split(',').forEach(inf => {
                    const target = findID(inf);
                    if (target && target !== d.id) {
                        links.push({ source: target, target: d.id }); // Source influenced Target
                    }
                });
            }
        });

        const svg = d3.select("#influence-graph");
        svg.selectAll("*").remove();

        // Arrow Marker
        svg.append('defs').append('marker')
            .attr('id', 'arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 18)
            .attr('refY', 0)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#94a3b8');

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(120))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().radius(30));

        const link = svg.append("g")
            .attr("stroke", "#94a3b8")
            .attr("stroke-opacity", 0.3)
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("marker-end", "url(#arrow)");

        // Color scale
        const color = d3.scaleOrdinal(d3.schemeSet3);

        const node = svg.append("g")
            .selectAll("g")
            .data(nodes)
            .join("g")
            .attr("class", "node")
            .call(drag(simulation));

        node.append("circle")
            .attr("r", 8)
            .attr("fill", d => color(d.category))
            .on("click", (e, d) => {
                const dir = directors.find(x => x.id === d.id);
                openModal(dir);
            });

        node.append("text")
            .text(d => d.name)
            .attr("x", 12)
            .attr("y", 3);

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node.attr("transform", d => `translate(${d.x},${d.y})`);
        });

        function drag(sim) {
            return d3.drag()
                .on("start", (e, d) => {
                    if (!e.active) sim.alphaTarget(0.3).restart();
                    d.fx = d.x; d.fy = d.y;
                })
                .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
                .on("end", (e, d) => {
                    if (!e.active) sim.alphaTarget(0);
                    d.fx = null; d.fy = null;
                });
        }
    };
});
