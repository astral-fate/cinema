document.addEventListener('DOMContentLoaded', () => {
    // Data: Prominent Directors of the last decade (approx 2014-2024)
    const directors = [
        {
            id: 1,
            name: "Christopher Nolan",
            nationality: "United Kingdom / USA",
            debutYear: 1998,
            bio: "A master of nonlinear storytelling and practical effects, Nolan treats cinema as a puzzlebox. He has single-handedly kept the IMAX format relevant for narrative feature films.",
            themes: "Time manipulation, obsession, subjective reality, large-scale practical spectacle.",
            works: "Oppenheimer (2023), Tenet (2020), Dunkirk (2017), Interstellar (2014).",
            influence: "Denis Villeneuve, Hans Zimmer (Composer)",
            category: "Sci-Fi & Spectacle",
            wiki: "https://en.wikipedia.org/wiki/Christopher_Nolan"
        },
        {
            id: 2,
            name: "Denis Villeneuve",
            nationality: "Canada",
            debutYear: 1998,
            bio: "Known for his ability to combine high-concept science fiction with deep philosophical questions and striking, brutalist visual aesthetics.",
            themes: "Identity, memory, destiny, scale vs. intimacy.",
            works: "Dune: Part Two (2024), Dune (2021), Blade Runner 2049 (2017), Arrival (2016).",
            influence: "Christopher Nolan, Ridley Scott",
            category: "Sci-Fi & Spectacle"
        },
        {
            id: 3,
            name: "Bong Joon-ho",
            nationality: "South Korea",
            debutYear: 2000,
            bio: "A genre-bending auteur who mixes pitch-black humor with biting social commentary. He made history by winning Best Picture for a non-English film.",
            themes: "Class warfare, social inequality, family dynamics, sudden tonal shifts.",
            works: "Parasite (2019), Okja (2017), Snowpiercer (2013).",
            influence: "Park Chan-wook, Quentin Tarantino",
            category: "Social Satire & Thriller"
        },
        {
            id: 4,
            name: "Greta Gerwig",
            nationality: "USA",
            debutYear: 2008,
            bio: "Moving from mumblecore acting to blockbuster directing, Gerwig explores the nuances of female ambition and coming of age with wit and warmth.",
            themes: "Female adolescence, mother-daughter relationships, artistic ambition.",
            works: "Barbie (2023), Little Women (2019), Lady Bird (2017).",
            influence: "Noah Baumbach, Wes Anderson",
            category: "Drama & Humanism"
        },
        {
            id: 5,
            name: "Jordan Peele",
            nationality: "USA",
            debutYear: 2017,
            bio: "A comedian turned horror maestro, Peele redefined the genre by infusing it with sharp racial commentary and high-concept allegories.",
            themes: "Social horror, the hidden history of America, spectacle vs. exploitation.",
            works: "Nope (2022), Us (2019), Get Out (2017).",
            influence: "Ari Aster, Robert Eggers",
            category: "New Horror"
        },
        {
            id: 6,
            name: "Yorgos Lanthimos",
            nationality: "Greece",
            debutYear: 2001,
            bio: "The leader of the 'Greek Weird Wave', Lanthimos creates surreal, absurdist worlds that dissect human social conventions through deadpan humor.",
            themes: "Absurdism, power dynamics, artificiality of social norms, physical comedy.",
            works: "Kinds of Kindness (2024), Poor Things (2023), The Favourite (2018), The Lobster (2015).",
            influence: "Stanley Kubrick (Legacy), Ruben Östlund",
            category: "Absurdism & Surrealism"
        },
        {
            id: 7,
            name: "Chloé Zhao",
            nationality: "China / USA",
            debutYear: 2015,
            bio: "Zhao bridges the gap between documentary and fiction, often using non-actors to tell intimate stories of the American West.",
            themes: "Nature, the American West, isolation, community on the margins.",
            works: "Eternals (2021), Nomadland (2020), The Rider (2017).",
            influence: "Terrence Malick (Legacy), Kelly Reichardt",
            category: "Realism & Drama"
        },
        {
            id: 8,
            name: "Ari Aster",
            nationality: "USA",
            debutYear: 2018,
            bio: "Aster specializes in 'elevated horror' centered on family trauma and grief, utilizing bright daylight and disturbing imagery to unsettle audiences.",
            themes: "Grief, family trauma, cults, inevitability of fate.",
            works: "Beau Is Afraid (2023), Midsommar (2019), Hereditary (2018).",
            influence: "Jordan Peele, Robert Eggers",
            category: "New Horror"
        },
        {
            id: 9,
            name: "Robert Eggers",
            nationality: "USA",
            debutYear: 2015,
            bio: "Obsessed with historical accuracy and dialect, Eggers creates immersive, atmospheric folklore horror films that feel transported from another century.",
            themes: "Folklore, isolation, madness, historical obsession.",
            works: "The Northman (2022), The Lighthouse (2019), The Witch (2015).",
            influence: "Ari Aster, A24 Style",
            category: "New Horror"
        },
        {
            id: 10,
            name: "Celine Sciamma",
            nationality: "France",
            debutYear: 2007,
            bio: "A master of the 'female gaze', Sciamma creates visually sparse but emotionally overwhelming films about identity and desire.",
            themes: "Female desire, childhood, looking vs. being looked at.",
            works: "Petite Maman (2021), Portrait of a Lady on Fire (2019).",
            influence: "Greta Gerwig, Ryusuke Hamaguchi",
            category: "Drama & Humanism"
        },
        {
            id: 11,
            name: "Ryusuke Hamaguchi",
            nationality: "Japan",
            debutYear: 2008,
            bio: "Hamaguchi builds films around language, rehearsal, and the inability to communicate. His work is quiet, long, and deeply literary.",
            themes: "Communication, theater, grief, the mystery of others.",
            works: "Evil Does Not Exist (2023), Drive My Car (2021), Wheel of Fortune and Fantasy (2021).",
            influence: "Celine Sciamma, Edward Yang (Legacy)",
            category: "Realism & Drama"
        },
        {
            id: 12,
            name: "Daniel Kwan & Daniel Scheinert",
            nationality: "USA",
            debutYear: 2016,
            bio: "Known as 'The Daniels', this duo blends internet humor, maximalism, and heart to create overwhelming cinematic experiences.",
            themes: "Multiverse, nihilism vs. optimism, generational trauma, maximalism.",
            works: "Everything Everywhere All At Once (2022), Swiss Army Man (2016).",
            influence: "Bong Joon-ho, Michel Gondry (Legacy)",
            category: "Absurdism & Surrealism"
        },
        {
            id: 13,
            name: "Wes Anderson",
            nationality: "USA",
            debutYear: 1996,
            bio: "Though active for decades, his recent work has become even more stylized, moving into anthology formats and intense visual symmetry.",
            themes: "Symmetry, nostalgia, deadpan humor, storybooks.",
            works: "Asteroid City (2023), The French Dispatch (2021), Grand Budapest Hotel (2014).",
            influence: "Greta Gerwig, Noah Baumbach",
            category: "Stylized Auteur"
        },
        {
            id: 14,
            name: "Ruben Östlund",
            nationality: "Sweden",
            debutYear: 2004,
            bio: "A satirist of the modern male and the wealthy elite, Östlund creates uncomfortable social experiments on screen.",
            themes: "Male fragility, social hierarchy, bystander effect.",
            works: "Triangle of Sadness (2022), The Square (2017), Force Majeure (2014).",
            influence: "Yorgos Lanthimos, Michael Haneke (Legacy)",
            category: "Social Satire & Thriller"
        },
        {
            id: 15,
            name: "Damien Chazelle",
            nationality: "USA",
            debutYear: 2009,
            bio: "The youngest winner of the Best Director Oscar, Chazelle is obsessed with the cost of greatness and the rhythm of film editing.",
            themes: "Jazz, sacrifice for art, obsession, Hollywood history.",
            works: "Babylon (2022), First Man (2018), La La Land (2016), Whiplash (2014).",
            influence: "Christopher Nolan, Martin Scorsese (Legacy)",
            category: "Drama & Humanism"
        },
        {
            id: 16,
            name: "Martin Scorsese",
            nationality: "USA",
            debutYear: 1967,
            bio: "The living legend who refuses to slow down, delivering some of his most contemplative and epic work in his later years.",
            themes: "Guilt, faith, crime, the history of America.",
            works: "Killers of the Flower Moon (2023), The Irishman (2019), Silence (2016).",
            influence: "Ari Aster, Bong Joon-ho",
            category: "Stylized Auteur"
        },
         {
            id: 17,
            name: "Justine Triet",
            nationality: "France",
            debutYear: 2013,
            bio: "Triet dissects relationships through the lens of the judicial system, blurring the lines between truth, fiction, and perspective.",
            themes: "Truth vs. perception, language barriers, marital collapse.",
            works: "Anatomy of a Fall (2023), Sibyl (2019).",
            influence: "Ruben Östlund, Celine Sciamma",
            category: "Drama & Humanism"
        },
        {
            id: 18,
            name: "S. S. Rajamouli",
            nationality: "India",
            debutYear: 2001,
            bio: "The master of Indian maximalism, Rajamouli brings mythic storytelling and impossible action to a global stage.",
            themes: "Mythology, brotherhood, anti-colonialism, spectacle.",
            works: "RRR (2022), Baahubali 2 (2017).",
            influence: "James Cameron (Legacy), The Daniels",
            category: "Sci-Fi & Spectacle"
        }
    ];

    // --- DOM Elements ---
    const tabs = document.querySelectorAll('.tab-btn');
    const views = document.querySelectorAll('.view');
    const modalOverlay = document.getElementById('philosopher-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBody = document.getElementById('modal-body');

    // --- Utility: Sort by Recent Prominence (simulated by ID for now or Debut) ---
    // Actually, let's sort Timeline by Debut Year
    directors.sort((a, b) => a.debutYear - b.debutYear);

    // --- Modal Functions ---
    const openModal = (director) => {
        if (!director) return;
        modalBody.innerHTML = `
            <h2>${director.name}</h2>
            <div class="modal-subtitle">${director.nationality} • Active Since ${director.debutYear}</div>
            
            <div class="modal-section">
                <h4>Biography</h4>
                <p>${director.bio}</p>
            </div>
            <div class="modal-section">
                <h4>Key Themes</h4>
                <p>${director.themes}</p>
            </div>
            <div class="modal-section">
                <h4>Profound Works (Last Decade)</h4>
                <p>${director.works}</p>
            </div>
             <div class="modal-section">
                <h4>Primary Category</h4>
                <p>${director.category}</p>
            </div>
            <div class="modal-section">
                <h4>Influences / Network</h4>
                <p>${director.influence}</p>
            </div>
            <a href="${director.wiki}" target="_blank" class="modal-link">View Full Bio on Wikipedia &rarr;</a>
        `;
        modalOverlay.classList.add('show');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('show');
    };

    // --- Render Functions ---
    const renderTimeline = () => {
        const timelineContent = document.getElementById('timeline-content');
        
        timelineContent.innerHTML = directors.map((d, index) => {
            // Alternating Left/Right classes
            const sideClass = index % 2 === 0 ? 'left' : 'right';
            return `
                <div class="timeline-item ${sideClass}">
                    <div class="timeline-card" data-id="${d.id}">
                        <span class="nat-badge">${d.nationality}</span>
                        <h3>${d.name}</h3>
                        <p style="margin:0; opacity:0.7; font-size:0.9rem;">Major Debut: ${d.debutYear}</p>
                        <p style="margin-top:0.5rem; font-size:0.95rem;"><em>${d.works.split(',')[0]}</em></p>
                    </div>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.timeline-card').forEach(card => {
            card.addEventListener('click', () => {
                const director = directors.find(d => d.id == card.dataset.id);
                openModal(director);
            });
        });
    };

    const renderCategories = () => {
        const categoriesGrid = document.getElementById('categories-grid');
        const uniqueCategories = [...new Set(directors.map(d => d.category))].sort();
        
        // Dynamic colors for categories
        const categoryColors = {
            "Sci-Fi & Spectacle": "#0ea5e9", // Blue
            "Social Satire & Thriller": "#eab308", // Yellow
            "Drama & Humanism": "#f43f5e", // Rose
            "New Horror": "#8b5cf6", // Violet
            "Absurdism & Surrealism": "#10b981", // Emerald
            "Realism & Drama": "#64748b", // Slate
            "Stylized Auteur": "#f97316" // Orange
        };

        categoriesGrid.innerHTML = uniqueCategories.map(cat => {
            const dirsInCategory = directors.filter(d => d.category === cat);
            const color = categoryColors[cat] || '#ffffff';
            
            return `
                <div class="category-card" style="border-top: 4px solid ${color}">
                    <h3 style="color: ${color}">${cat}</h3>
                    <div class="category-philosophers">
                        ${dirsInCategory.map(d => `
                            <div class="philosopher-item" data-id="${d.id}">
                                <div style="flex-grow:1">
                                    <h4>${d.name}</h4>
                                    <span style="font-size:0.8rem; color: #94a3b8">${d.nationality}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // Add Click listeners for items inside categories
        document.querySelectorAll('.philosopher-item').forEach(item => {
            item.addEventListener('click', () => {
                const director = directors.find(d => d.id == item.dataset.id);
                openModal(director);
            });
        });
    };

    const renderGraph = () => {
        const container = document.getElementById('graph-container');
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Create nodes
        const nodes = directors.map(d => ({ 
            id: d.id, 
            name: d.name, 
            category: d.category,
            radius: 5 + (d.works.split(',').length * 2) // Radius based on work count roughly
        }));

        const links = [];

        // Helper to find ID by name (fuzzy match)
        const findID = (nameStr) => {
            const clean = nameStr.trim().toLowerCase();
            const found = directors.find(d => d.name.toLowerCase().includes(clean) || clean.includes(d.name.toLowerCase()));
            return found ? found.id : null;
        };

        // Create Links based on 'influence' field
        directors.forEach(d => {
            if(d.influence) {
                const influences = d.influence.split(',');
                influences.forEach(infName => {
                    const targetId = findID(infName);
                    // Only link if the target exists in our dataset
                    if(targetId && targetId !== d.id) {
                        links.push({ source: d.id, target: targetId });
                    }
                });
            }
        });

        // Setup D3
        const svg = d3.select("#influence-graph");
        svg.selectAll("*").remove();

        // Arrow marker
        svg.append('defs').append('marker')
            .attr('id', 'arrowhead')
            .attr('viewBox', '-0 -5 10 10')
            .attr('refX', 20)
            .attr('refY', 0)
            .attr('orient', 'auto')
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('fill', '#64748b')
            .append('svg:path')
            .attr('d', 'M 0,-5 L 10 ,0 L 0,5');

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(150))
            .force("charge", d3.forceManyBody().strength(-400))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().radius(40));

        const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("class", "link")
            .attr("stroke-width", 1)
            .attr("marker-end", "url(#arrowhead)");

        // Color scale matches category colors
        const colorScale = d3.scaleOrdinal()
            .domain([
                "Sci-Fi & Spectacle", "Social Satire & Thriller", "Drama & Humanism", 
                "New Horror", "Absurdism & Surrealism", "Realism & Drama", "Stylized Auteur"
            ])
            .range([
                "#0ea5e9", "#eab308", "#f43f5e", 
                "#8b5cf6", "#10b981", "#64748b", "#f97316"
            ]);

        const node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        node.append("circle")
            .attr("r", d => 12) // Fixed readable size
            .attr("fill", d => colorScale(d.category))
            .on("click", (e, d) => {
                const director = directors.find(dir => dir.id === d.id);
                openModal(director);
            });

        node.append("text")
            .text(d => d.name)
            .attr("x", 15)
            .attr("y", 4);

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("transform", d => `translate(${d.x},${d.y})`);
        });

        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
    };

    // --- Tab Handling ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));

            tab.classList.add('active');
            const viewId = tab.id.replace('-tab', '-view');
            document.getElementById(viewId).classList.add('active');
            
            // Re-render graph if necessary
            if (viewId === 'graph-view') {
                renderGraph();
            }
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // --- Initial Load ---
    renderTimeline();
    renderCategories();
});
