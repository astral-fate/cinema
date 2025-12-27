document.addEventListener('DOMContentLoaded', () => {

    // --- The Underground & Avant-Garde Database ---
    const directors = [
        // --- ARAB WORLD & MIDDLE EAST ---
        { id: 1, name: "Youssef Chahine", nat: "Egypt", era: "1950s-2000s", works: "Cairo Station, The Land", region: "Arab World", theme: "Social realism, Post-colonial identity" },
        { id: 2, name: "Abbas Kiarostami", nat: "Iran", era: "1970s-2010s", works: "Taste of Cherry, Close-Up", region: "Middle East", theme: "Poetic realism, Meta-fiction" },
        { id: 3, name: "Nadine Labaki", nat: "Lebanon", era: "2000s-Present", works: "Capernaum, Caramel", region: "Arab World", theme: "Women's rights, Childhood poverty" },
        { id: 4, name: "Elia Suleim", nat: "Palestine", era: "1990s-Present", works: "Divine Intervention, It Must Be Heaven", region: "Arab World", theme: "Silent comedy, Political absurdism" },
        { id: 5, name: "Asghar Farhadi", nat: "Iran", era: "2000s-Present", works: "A Separation, The Salesman", region: "Middle East", theme: "Moral complexity, Domestic drama" },
        { id: 6, name: "Hany Abu-Assad", nat: "Palestine", era: "2000s-Present", works: "Paradise Now, Omar", region: "Arab World", theme: "Occupation, Human cost of conflict" },
        { id: 7, name: "Haifaa al-Mansour", nat: "Saudi Arabia", era: "2010s-Present", works: "Wadjda, The Perfect Candidate", region: "Arab World", theme: "Female empowerment, Cultural change" },
        { id: 8, name: "Nuri Bilge Ceylan", nat: "Turkey", era: "1990s-Present", works: "Winter Sleep, Once Upon a Time in Anatolia", region: "Middle East", theme: "Existentialism, Chekhovian dialogue" },
        { id: 9, name: "Kaouther Ben Hania", nat: "Tunisia", era: "2010s-Present", works: "The Man Who Sold His Skin", region: "Arab World", theme: "Refugee crisis, Art vs Humanity" },
        { id: 10, name: "Maroun Bagdadi", nat: "Lebanon", era: "1970s-1990s", works: "Little Wars, Out of Life", region: "Arab World", theme: "Civil war, Memory" },

        // --- SOUTH ASIA ---

        // INDIA (Bengali Cinema)
        { id: 11, name: "Satyajit Ray", nat: "India", era: "1950s-1990s", works: "Pather Panchali, Charulata", region: "India", movement: "Bengali Cinema", theme: "Humanism, Bengali rural life" },
        { id: 12, name: "Ritwik Ghatak", nat: "India", era: "1950s-1970s", works: "Meghe Dhaka Tara, Subarnarekha", region: "India", movement: "Bengali Cinema", theme: "Partition trauma, Displacement" },
        { id: 11.1, name: "Mrinal Sen", nat: "India", era: "1950s-2000s", works: "Calcutta trilogy, Interview", region: "India", movement: "Parallel Cinema", theme: "Political cinema, Brecht, Urban poverty" },
        { id: 11.2, name: "Aparna Sen", nat: "India", era: "1980s-Present", works: "36 Chowringhee Lane, Mr. and Mrs. Iyer", region: "India", movement: "Bengali Cinema", theme: "Women's identity, Loneliness, Cross-cultural romance" },
        { id: 11.3, name: "Rituparno Ghosh", nat: "India", era: "1990s-2013", works: "Unishe April, Raincoat", region: "India", movement: "Bengali Cinema", theme: "Gender fluidity, Bengali middle class, Literary adaptations" },

        // INDIA (Malayalam Cinema)
        { id: 19, name: "Adoor Gopalakrishnan", nat: "India", era: "1970s-Present", works: "Elippathayam, Swayamvaram", region: "India", movement: "Malayalam New Wave", theme: "Kerala culture, Feudal decay" },
        { id: 19.1, name: "G. Aravindan", nat: "India", era: "1970s-1990s", works: "Kummatty, Kanchana Sita", region: "India", movement: "Malayalam New Wave", theme: "Folk tales, Mysticism, Kerala landscapes" },
        { id: 19.2, name: "John Abraham", nat: "India", era: "1970s-1980s", works: "Amma Ariyan", region: "India", movement: "Malayalam New Wave", theme: "Political activism, Experimental form" },
        { id: 19.3, name: "Shaji N. Karun", nat: "India", era: "1980s-Present", works: "Piravi, Swaham", region: "India", movement: "Malayalam New Wave", theme: "Disappearances, Rituals, Visual poetry" },
        { id: 19.4, name: "Lijo Jose Pellissery", nat: "India", era: "2010s-Present", works: "Jallikattu, Nanpakal Nerathu Mayakkam", region: "India", movement: "Contemporary Malayalam", theme: "Chaos, Mob mentality, Experimental narratives" },

        // INDIA (Tamil Cinema)
        { id: 14, name: "Mani Ratnam", nat: "India", era: "1980s-Present", works: "Dil Se.., Nayakan", region: "India", movement: "New Tamil Cinema", theme: "Terrorism trilogy, Political romance" },
        { id: 14.1, name: "Balu Mahendra", nat: "India", era: "1970s-2014", works: "Moondram Pirai, Veedu", region: "India", movement: "Tamil Cinema", theme: "Neo-realism, Loneliness, Cinematography" },
        { id: 14.2, name: "Vetrimaaran", nat: "India", era: "2000s-Present", works: "Asuran, Visaranai", region: "India", movement: "New Tamil Cinema", theme: "Caste violence, Police brutality, Raw realism" },
        { id: 14.3, name: "Pa. Ranjith", nat: "India", era: "2010s-Present", works: "Kabali, Sarpatta Parambarai", region: "India", movement: "New Tamil Cinema", theme: "Dalit politics, Boxing, Anti-caste cinema" },
        { id: 14.4, name: "Bharathiraja", nat: "India", era: "1970s-Present", works: "16 Vayathinile, Kizhakke Pogum Rail", region: "India", movement: "Tamil Cinema", theme: "Rural Tamil Nadu, Folk culture" },

        // INDIA (Hindi/Bollywood & Independent)
        { id: 13, name: "Guru Dutt", nat: "India", era: "1950s-1960s", works: "Pyaasa, Kaagaz Ke Phool", region: "India", movement: "Golden Age Bollywood", theme: "Melancholy, The tortured artist" },
        { id: 15, name: "S.S. Rajamouli", nat: "India", era: "2000s-Present", works: "RRR, Baahubali", region: "India", theme: "Mythic spectacle, Anti-colonialism" },
        { id: 16, name: "Mira Nair", nat: "India", era: "1980s-Present", works: "Salaam Bombay!, Monsoon Wedding", region: "India", theme: "Diaspora, Street life" },
        { id: 17, name: "Anurag Kashyap", nat: "India", era: "2000s-Present", works: "Gangs of Wasseypur, Dev.D", region: "India", movement: "New Bollywood", theme: "Crime, Gritty realism" },
        { id: 18, name: "Zoya Akhtar", nat: "India", era: "2000s-Present", works: "Gully Boy, Zindagi Na Milegi Dobara", region: "India", theme: "Modern youth, Class aspirations" },
        { id: 20, name: "Sanjay Leela Bhansali", nat: "India", era: "1990s-Present", works: "Devdas, Padmavat", region: "India", theme: "Grandeur, Operatic romance" },
        { id: 13.1, name: "Shyam Benegal", nat: "India", era: "1970s-Present", works: "Ankur, Manthan", region: "India", movement: "Parallel Cinema", theme: "Social issues, Cooperatives, Rural development" },
        { id: 13.2, name: "M.S. Sathyu", nat: "India", era: "1970s-Present", works: "Garm Hava", region: "India", movement: "Parallel Cinema", theme: "Partition, Muslim identity in India" },

        // PAKISTAN
        { id: 600, name: "Sarmad Khoosat", nat: "Pakistan", era: "2010s-Present", works: "Manto, Zindagi Tamasha", region: "Pakistan", theme: "Religious fundamentalism, Blasphemy, Sufi mysticism" },
        { id: 601, name: "Shoaib Mansoor", nat: "Pakistan", era: "2000s-Present", works: "Khuda Kay Liye, Bol", region: "Pakistan", theme: "Extremism, Women's rights, Religion vs modernity" },
        { id: 602, name: "Sabiha Sumar", nat: "Pakistan", era: "1990s-Present", works: "Khamosh Pani, For a Place Under the Heavens", region: "Pakistan", movement: "Documentary / Fiction", theme: "Partition violence, Women under Zia" },
        { id: 603, name: "Mehreen Jabbar", nat: "Pakistan", era: "2000s-Present", works: "Ramchand Pakistani, Dobara Phir Se", region: "Pakistan", theme: "India-Pakistan relations, Urban romance" },
        { id: 604, name: "Iram Parveen Bilal", nat: "Pakistan", era: "2010s-Present", works: "Josh, I'll Meet You There", region: "Pakistan", theme: "Drone warfare, Pakistani diaspora" },
        { id: 605, name: "Jami Mahmood", nat: "Pakistan", era: "2010s-Present", works: "Moor, O21", region: "Pakistan", theme: "Railways, Balochistan, Western genre" },

        // BANGLADESH
        { id: 610, name: "Zahir Raihan", nat: "Bangladesh", era: "1960s-1970s", works: "Jibon Theke Neya, Let There Be Light", region: "Bangladesh", theme: "Bengali nationalism, Language movement" },
        { id: 611, name: "Tareque Masud", nat: "Bangladesh", era: "1990s-2011", works: "Matir Moina, The Clay Bird", region: "Bangladesh", theme: "Madrasa education, 1971 war, Rural Bengal" },
        { id: 612, name: "Tanvir Mokammel", nat: "Bangladesh", era: "1980s-Present", works: "Chitra Nodir Pare, Lalsalu", region: "Bangladesh", theme: "Liberation war, Religious exploitation" },
        { id: 613, name: "Rubaiyat Hossain", nat: "Bangladesh", era: "2010s-Present", works: "Meherjaan, Made in Bangladesh", region: "Bangladesh", theme: "1971 war controversy, Garment workers" },
        { id: 614, name: "Mostofa Sarwar Farooki", nat: "Bangladesh", era: "2000s-Present", works: "Television, Third Person Singular Number", region: "Bangladesh", theme: "Urban Dhaka, Sexuality, Terrorism" },
        { id: 615, name: "Abu Shahed Emon", nat: "Bangladesh", era: "2010s-Present", works: "Jalal's Story, Mrittika Maya", region: "Bangladesh", theme: "Economic migration, Clay dolls, Villages" },

        // AFGHANISTAN
        { id: 620, name: "Siddiq Barmak", nat: "Afghanistan", era: "2000s-Present", works: "Osama, Opium War", region: "Afghanistan", theme: "Taliban, Women's oppression, War" },
        { id: 621, name: "Atiq Rahimi", nat: "Afghanistan/France", era: "2000s-Present", works: "Earth and Ashes, The Patience Stone", region: "Afghanistan", theme: "War trauma, Women's voices, Persian literature" },
        { id: 622, name: "Hassan Fazili", nat: "Afghanistan", era: "2010s-Present", works: "Midnight Traveler", region: "Afghanistan", movement: "Documentary", theme: "Refugee crisis, Mobile phone cinema, Taliban escape" },
        { id: 623, name: "Shahrbanoo Sadat", nat: "Afghanistan", era: "2010s-Present", works: "Wolf and Sheep, The Orphanage", region: "Afghanistan", theme: "Children, Rural Afghanistan, Post-Soviet" },
        { id: 624, name: "Roya Sadat", nat: "Afghanistan", era: "2000s-Present", works: "Three Dots, A Letter to the President", region: "Afghanistan", theme: "Women filmmakers, Afghan society, Education" },

        // SRI LANKA
        { id: 630, name: "Vimukthi Jayasundara", nat: "Sri Lanka", era: "2000s-Present", works: "The Forsaken Land, Chatrak", region: "Sri Lanka", theme: "Civil war aftermath, Experimental narratives" },
        { id: 631, name: "Asoka Handagama", nat: "Sri Lanka", era: "1990s-Present", works: "This is My Moon, Flying Fish", region: "Sri Lanka", theme: "Civil war, Sexuality, Censorship" },
        { id: 632, name: "Prasanna Vithanage", nat: "Sri Lanka", era: "1990s-Present", works: "Ira Mediyama, Akasa Kusum", region: "Sri Lanka", theme: "Class, War, Women's agency" },
        { id: 633, name: "Lester James Peries", nat: "Sri Lanka", era: "1950s-2000s", works: "Rekava, Gamperaliya", region: "Sri Lanka", theme: "Sinhalese cinema pioneer, Rural traditions" },
        { id: 634, name: "Anoma Rajakaruna", nat: "Sri Lanka", era: "2010s-Present", works: "Samanala Thatu", region: "Sri Lanka", theme: "War widows, Women directors" },

        // NEPAL
        { id: 640, name: "Min Bahadur Bham", nat: "Nepal", era: "2010s-Present", works: "The Black Hen, Kalo Pothi", region: "Nepal", theme: "Civil war, Children, Rural Nepal" },
        { id: 641, name: "Deepak Rauniyar", nat: "Nepal", era: "2010s-Present", works: "Highway, White Sun", region: "Nepal", theme: "Civil war aftermath, Maoist conflict" },
        { id: 642, name: "Tsering Rhitar Sherpa", nat: "Nepal", era: "2010s-Present", works: "Mukundo: Mask of Desire", region: "Nepal", movement: "Documentary", theme: "Masked dance, Shamanism, Endangered traditions" },
        { id: 643, name: "Kesang Tseten", nat: "Nepal", era: "2000s-Present", works: "Dreaming Lhasa", region: "Nepal", theme: "Tibetan refugees, Kathmandu" },
        { id: 644, name: "Subarna Thapa", nat: "Nepal", era: "2010s-Present", works: "Soongava", region: "Nepal", theme: "LGBTQ Nepal, Traditional society" },

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

        // --- EUROPE (Italian Masters) ---
        { id: 41, name: "Federico Fellini", nat: "Italy", era: "1950s-1990s", works: "8½, La Dolce Vita", region: "Italy", movement: "Italian Neorealism / Baroque", theme: "Dreams, Memory, Spectacle" },
        { id: 42, name: "Michelangelo Antonioni", nat: "Italy", era: "1950s-2000s", works: "L'Avventura, Blow-Up", region: "Italy", movement: "Modernist Cinema", theme: "Alienation, Architecture, Ennui" },
        { id: 43, name: "Pier Paolo Pasolini", nat: "Italy", era: "1960s-1970s", works: "The Gospel According to St. Matthew, Salò", region: "Italy", movement: "Political Cinema", theme: "Marxism, Sacred profane, Controversy" },
        { id: 44, name: "Roberto Rossellini", nat: "Italy", era: "1940s-1970s", works: "Rome, Open City", region: "Italy", movement: "Italian Neorealism", theme: "War, Humanism, Reality" },
        { id: 45, name: "Vittorio De Sica", nat: "Italy", era: "1940s-1970s", works: "Bicycle Thieves, Umberto D.", region: "Italy", movement: "Italian Neorealism", theme: "Poverty, Dignity, Post-war" },
        { id: 46, name: "Luchino Visconti", nat: "Italy", era: "1940s-1970s", works: "The Leopard, Death in Venice", region: "Italy", movement: "Italian Neorealism", theme: "Aristocracy, Decay, Opera" },
        { id: 47, name: "Bernardo Bertolucci", nat: "Italy", era: "1960s-2010s", works: "The Conformist, Last Tango in Paris", region: "Italy", movement: "Political Cinema", theme: "Politics, Sexuality, Psychology" },
        { id: 48, name: "Paolo Sorrentino", nat: "Italy", era: "2000s-Present", works: "The Great Beauty, Youth", region: "Italy", theme: "Decadence, Beauty, Rome" },
        { id: 49, name: "Luca Guadagnino", nat: "Italy", era: "2000s-Present", works: "Call Me By Your Name, I Am Love", region: "Italy", theme: "Desire, Sensuality, Italy" },

        // --- EUROPE (French New Wave & Beyond) ---
        { id: 50, name: "François Truffaut", nat: "France", era: "1950s-1980s", works: "The 400 Blows, Jules and Jim", region: "France", movement: "French New Wave", theme: "Childhood, Love, Cinema itself" },
        { id: 51, name: "Jean-Luc Godard", nat: "France/Swiss", era: "1960s-2022", works: "Breathless, Contempt", region: "France", movement: "French New Wave", theme: "Radicalism, Breaking the 4th wall" },
        { id: 52, name: "Agnès Varda", nat: "France", era: "1950s-2010s", works: "Cleo from 5 to 7, Vagabond", region: "France", movement: "French New Wave", theme: "Feminism, Documentary-fiction blend" },
        { id: 53, name: "Éric Rohmer", nat: "France", era: "1960s-2000s", works: "My Night at Maud's, The Green Ray", region: "France", movement: "French New Wave", theme: "Conversation, Morality, Seasonal tales" },
        { id: 54, name: "Jacques Tati", nat: "France", era: "1940s-1970s", works: "Playtime, Mon Oncle", region: "France", movement: "Visual Comedy", theme: "Modernity, Sound design, Slapstick" },
        { id: 55, name: "Robert Bresson", nat: "France", era: "1940s-1980s", works: "Pickpocket, A Man Escaped", region: "France", movement: "Spiritual Cinema", theme: "Grace, Minimalism, Transcendence" },
        { id: 56, name: "Alain Resnais", nat: "France", era: "1950s-2010s", works: "Hiroshima Mon Amour, Last Year at Marienbad", region: "France", movement: "Left Bank", theme: "Memory, Time, Modernism" },
        { id: 57, name: "Claire Denis", nat: "France", era: "1980s-Present", works: "Beau Travail, High Life", region: "France", theme: "Colonialism, The body, Sensory cinema" },
        { id: 58, name: "Céline Sciamma", nat: "France", era: "2000s-Present", works: "Portrait of a Lady on Fire, Girlhood", region: "France", theme: "The Female Gaze, Queer identity" },
        { id: 59, name: "Gaspar Noé", nat: "Argentina/France", era: "1990s-Present", works: "Irréversible, Enter the Void", region: "France", movement: "New French Extremity", theme: "Provocation, Time, Psychedelia" },
        { id: 60, name: "Maurice Pialat", nat: "France", era: "1960s-1990s", works: "Under the Sun of Satan, À Nos Amours", region: "France", theme: "Realism, Family, Conflict" },

        // --- EUROPE (German Cinema) ---
        { id: 61, name: "Werner Herzog", nat: "Germany", era: "1960s-Present", works: "Aguirre, Fitzcarraldo", region: "Germany", movement: "New German Cinema", theme: "Man vs Nature, Obsession" },
        { id: 62, name: "Wim Wenders", nat: "Germany", era: "1970s-Present", works: "Wings of Desire, Paris, Texas", region: "Germany", movement: "New German Cinema", theme: "Wandering, Americana, Angels" },
        { id: 63, name: "Rainer Werner Fassbinder", nat: "Germany", era: "1960s-1980s", works: "Ali: Fear Eats the Soul, The Marriage of Maria Braun", region: "Germany", movement: "New German Cinema", theme: "Social prejudice, Melodrama, Post-war Germany" },
        { id: 64, name: "Christian Petzold", nat: "Germany", era: "1990s-Present", works: "Phoenix, Transit", region: "Germany", theme: "History, Ghostly identities, Berlin School" },
        { id: 65, name: "Michael Haneke", nat: "Austria", era: "1980s-Present", works: "Caché, The White Ribbon", region: "Austria", theme: "Violence, Guilt, Bourgeois anxiety" },
        { id: 66, name: "Ulrich Seidl", nat: "Austria", era: "1990s-Present", works: "Paradise trilogy, Import/Export", region: "Austria", theme: "Grotesque realism, Sex tourism" },

        // --- EUROPE (Spanish, Nordic, Others) ---
        { id: 67, name: "Pedro Almodóvar", nat: "Spain", era: "1980s-Present", works: "All About My Mother, Talk to Her", region: "Spain", movement: "La Movida", theme: "Desire, Mothers, Color, Transgression" },
        { id: 68, name: "Luis Buñuel", nat: "Spain/Mexico", era: "1920s-1970s", works: "Un Chien Andalou, The Discreet Charm of the Bourgeoisie", region: "Spain", movement: "Surrealism", theme: "Bourgeoisie, Religion, Dreams" },
        { id: 69, name: "Carlos Saura", nat: "Spain", era: "1960s-Present", works: "Cria Cuervos, Carmen", region: "Spain", theme: "Franco era, Flamenco, Memory" },
        { id: 69.1, name: "Víctor Erice", nat: "Spain", era: "1970s-Present", works: "The Spirit of the Beehive", region: "Spain", theme: "Childhood, Memory, Spanish Civil War" },
        { id: 69.2, name: "Alejandro Amenábar", nat: "Spain", era: "1990s-Present", works: "The Others, The Sea Inside", region: "Spain", theme: "Suspense, Ghost stories" },

        { id: 70, name: "Ingmar Bergman", nat: "Sweden", era: "1940s-2000s", works: "The Seventh Seal, Persona", region: "Sweden", movement: "Art Cinema", theme: "Faith, Death, Psychology" },
        { id: 72, name: "Ruben Östlund", nat: "Sweden", era: "2000s-Present", works: "The Square, Triangle of Sadness", region: "Sweden", theme: "Class satire, Social systems, Embarrassment" },
        { id: 70.1, name: "Roy Andersson", nat: "Sweden", era: "1970s-Present", works: "Songs from the Second Floor, A Pigeon Sat on a Branch", region: "Sweden", theme: "Absurdism, Tableaux vivants, Human condition" },
        { id: 70.2, name: "Lukas Moodysson", nat: "Sweden", era: "1990s-Present", works: "Show Me Love, Lilya 4-Ever", region: "Sweden", theme: "Youth, Social issues" },
        { id: 70.3, name: "Tomas Alfredson", nat: "Sweden", era: "2000s-Present", works: "Let the Right One In, Tinker Tailor Soldier Spy", region: "Sweden", theme: "Vampires, Espionage" },

        { id: 71, name: "Lars von Trier", nat: "Denmark", era: "1980s-Present", works: "Dogville, Melancholia", region: "Denmark", movement: "Dogme 95", theme: "Provocation, Depression, Formal experiments" },
        { id: 71.1, name: "Carl Theodor Dreyer", nat: "Denmark", era: "1920s-1960s", works: "The Passion of Joan of Arc, Vampyr", region: "Denmark", movement: "Silent Cinema", theme: "Spirituality, Close-ups, Minimalism" },
        { id: 71.2, name: "Nicolas Winding Refn", nat: "Denmark", era: "2000s-Present", works: "Drive, Only God Forgives", region: "Denmark", theme: "Neon aesthetics, Violence, Style" },
        { id: 71.3, name: "Thomas Vinterberg", nat: "Denmark", era: "1990s-Present", works: "The Hunt, Another Round", region: "Denmark", movement: "Dogme 95", theme: "Social drama, Alcohol, Morality" },
        { id: 71.4, name: "Susanne Bier", nat: "Denmark", era: "1990s-Present", works: "In a Better World, After the Wedding", region: "Denmark", theme: "Moral dilemmas, Family drama" },

        { id: 73, name: "Aki Kaurismäki", nat: "Finland", era: "1980s-Present", works: "The Man Without a Past, Le Havre", region: "Finland", theme: "Deadpan, Working class, Minimalism" },
        { id: 73.1, name: "Mika Kaurismäki", nat: "Finland", era: "1980s-Present", works: "The Liar, Condition Red", region: "Finland", theme: "Road movies, Helsinki" },
        { id: 73.2, name: "Juho Kuosmanen", nat: "Finland", era: "2010s-Present", works: "Compartment No. 6, The Happiest Day in the Life of Olli Mäki", region: "Finland", theme: "Intimate dramas, Human connection" },
        { id: 73.3, name: "Klaus Härö", nat: "Finland", era: "2000s-Present", works: "The Fencer, Mother of Mine", region: "Finland", theme: "WWII, Baltic history" },
        { id: 73.4, name: "Dome Karukoski", nat: "Finland", era: "2000s-Present", works: "Tom of Finland, Tolkien", region: "Finland", theme: "Biopics, LGBTQ" },

        { id: 74, name: "Andrei Tarkovsky", nat: "USSR", era: "1960s-1980s", works: "Stalker, Mirror, Solaris", region: "Russia/USSR", movement: "Poetic Cinema", theme: "Time, Spirituality, Memory" },
        { id: 74.1, name: "Sergei Eisenstein", nat: "USSR", era: "1920s-1940s", works: "Battleship Potemkin, Ivan the Terrible", region: "Russia/USSR", movement: "Soviet Montage", theme: "Revolutionary cinema, Montage theory" },
        { id: 74.2, name: "Dziga Vertov", nat: "USSR", era: "1920s-1930s", works: "Man with a Movie Camera", region: "Russia/USSR", movement: "Soviet Montage", theme: "Documentary, Kino-Eye, Constructivism" },
        { id: 74.3, name: "Aleksandr Sokurov", nat: "Russia", era: "1980s-Present", works: "Russian Ark, Mother and Son", region: "Russia/USSR", movement: "Slow Cinema", theme: "One-take films, Spirituality, Russian history" },
        { id: 74.4, name: "Andrey Zvyagintsev", nat: "Russia", era: "2000s-Present", works: "Leviathan, Loveless", region: "Russia/USSR", theme: "Social critique, Corruption, Bleak landscapes" },
        { id: 74.5, name: "Pavel Lungin", nat: "Russia", era: "1980s-Present", works: "Taxi Blues, The Island", region: "Russia/USSR", theme: "Post-Soviet transition, Faith" },

        { id: 75, name: "Krzysztof Kieślowski", nat: "Poland", era: "1970s-1990s", works: "Three Colors trilogy, The Double Life of Véronique", region: "Poland", theme: "Fate, Morality, Interconnection" },
        { id: 76, name: "Andrzej Wajda", nat: "Poland", era: "1950s-2010s", works: "Ashes and Diamonds, Man of Iron", region: "Poland", theme: "Polish history, Resistance" },
        { id: 75.1, name: "Roman Polanski", nat: "Poland/France", era: "1960s-Present", works: "Chinatown, The Pianist", region: "Poland", theme: "Paranoia, Holocaust, Noir" },
        { id: 75.2, name: "Agnieszka Holland", nat: "Poland", era: "1970s-Present", works: "Europa Europa, In Darkness", region: "Poland", theme: "WWII, Political drama" },
        { id: 75.3, name: "Paweł Pawlikowski", nat: "Poland/UK", era: "2000s-Present", works: "Ida, Cold War", region: "Poland", theme: "Black & white, Post-war Poland, Romance" },

        { id: 77, name: "Theo Angelopoulos", nat: "Greece", era: "1970s-2010s", works: "The Travelling Players, Eternity and a Day", region: "Greece", theme: "History, Long takes, Melancholy" },
        { id: 77.1, name: "Yorgos Lanthimos", nat: "Greece", era: "2000s-Present", works: "Dogtooth, The Lobster", region: "Greece", movement: "Greek Weird Wave", theme: "Dystopia, Absurdism, Control" },
        { id: 77.2, name: "Costa-Gavras", nat: "Greece/France", era: "1960s-Present", works: "Z, Missing", region: "Greece", movement: "Political Thriller", theme: "Political corruption, State violence" },
        { id: 77.3, name: "Athina Rachel Tsangari", nat: "Greece", era: "2000s-Present", works: "Attenberg, Chevalier", region: "Greece", movement: "Greek Weird Wave", theme: "Human behavior, Competition" },
        { id: 77.4, name: "Pantelis Voulgaris", nat: "Greece", era: "1960s-Present", works: "Brides, Stone Years", region: "Greece", theme: "Greek history, Immigration" },

        { id: 65, name: "Michael Haneke", nat: "Austria", era: "1980s-Present", works: "Caché, The White Ribbon", region: "Austria", theme: "Violence, Guilt, Bourgeois anxiety" },
        { id: 66, name: "Ulrich Seidl", nat: "Austria", era: "1990s-Present", works: "Paradise trilogy, Import/Export", region: "Austria", theme: "Grotesque realism, Sex tourism" },
        { id: 65.1, name: "Fritz Lang", nat: "Austria/USA", era: "1920s-1960s", works: "Metropolis, M", region: "Austria", movement: "German Expressionism", theme: "Crime, Technology, Dystopia" },
        { id: 65.2, name: "Jessica Hausner", nat: "Austria", era: "2000s-Present", works: "Amour Fou, Little Joe", region: "Austria", theme: "Formalism, Dark comedy, Control" },
        { id: 65.3, name: "Nikolaus Geyrhalter", nat: "Austria", era: "1990s-Present", works: "Our Daily Bread, Homo Sapiens", region: "Austria", theme: "Documentary, Human impact, Emptiness" },

        // --- UK CINEMA ---
        { id: 80.1, name: "Alfred Hitchcock", nat: "UK/USA", era: "1920s-1970s", works: "Vertigo, Psycho", region: "UK", movement: "Suspense Cinema", theme: "Suspense, Voyeurism, Blonde women" },
        { id: 80.2, name: "Michael Powell", nat: "UK", era: "1930s-1970s", works: "The Red Shoes, Black Narcissus", region: "UK", movement: "British Cinema", theme: "Technicolor, Expressionism, Romance" },
        { id: 80.3, name: "David Lean", nat: "UK", era: "1940s-1980s", works: "Lawrence of Arabia, Brief Encounter", region: "UK", movement: "Epic Cinema", theme: "Sweeping epics, Romance, Desert" },
        { id: 80.4, name: "Ken Loach", nat: "UK", era: "1960s-Present", works: "Kes, I, Daniel Blake", region: "UK", movement: "Social Realism", theme: "Working class, Social justice, Politics" },
        { id: 80.5, name: "Mike Leigh", nat: "UK", era: "1970s-Present", works: "Secrets & Lies, Naked", region: "UK", movement: "British Realism", theme: "Improvisation, Class, Family" },
        { id: 80.6, name: "Danny Boyle", nat: "UK", era: "1990s-Present", works: "Trainspotting, Slumdog Millionaire", region: "UK", theme: "Energy, Youth culture, Britain" },
        { id: 80.7, name: "Steve McQueen", nat: "UK", era: "2000s-Present", works: "12 Years a Slave, Shame", region: "UK", theme: "Slavery, Black experience, Visual art" },

        // --- AFRICA ---
        // Senegal
        { id: 61, name: "Ousmane Sembene", nat: "Senegal", era: "1960s-2000s", works: "Black Girl, Moolaade", region: "Africa", movement: "Third Cinema", theme: "Father of African Cinema, Post-colonialism" },
        { id: 62, name: "Djibril Diop Mambety", nat: "Senegal", era: "1970s-1990s", works: "Touki Bouki", region: "Africa", movement: "African Avant-Garde", theme: "Avant-garde, Non-linear narrative" },
        { id: 64, name: "Mati Diop", nat: "Senegal", era: "2010s-Present", works: "Atlantics", region: "Africa", theme: "Migration, Ghosts, Ocean" },
        { id: 61.1, name: "Safi Faye", nat: "Senegal", era: "1970s-Present", works: "Kaddu Beykat, Mossane", region: "Africa", movement: "Documentary", theme: "Rural life, Women's perspective, Ethnographic" },
        { id: 61.2, name: "Moussa Sene Absa", nat: "Senegal", era: "1990s-Present", works: "Tableau Ferraille, Madame Brouette", region: "Africa", theme: "Urban Dakar, Social satire" },

        // Mali
        { id: 65, name: "Souleymane Cisse", nat: "Mali", era: "1970s-Present", works: "Yeelen", region: "Africa", movement: "African Cinema", theme: "African spirituality, Magic realism" },
        { id: 65.1, name: "Abderrahmane Sissako", nat: "Mali/Mauritania", era: "1990s-Present", works: "Timbuktu, Bamako", region: "Africa", theme: "Islamic extremism, Globalization, Beauty" },
        { id: 65.2, name: "Cheick Oumar Sissoko", nat: "Mali", era: "1980s-Present", works: "Guimba, Genesis", region: "Africa", theme: "Power, Dictatorship, History" },
        { id: 65.3, name: "Daouda Coulibaly", nat: "Mali", era: "2010s-Present", works: "Wulu, The Dja", region: "Africa", theme: "Drug trafficking, Youth" },
        { id: 65.4, name: "Ladji Diakité", nat: "Mali", era: "2000s-Present", works: "Love and Sharia", region: "Africa", theme: "Religion, Women's rights" },

        // South Africa
        { id: 66.1, name: "Lionel Rogosin", nat: "South Africa/USA", era: "1950s-1980s", works: "Come Back, Africa", region: "Africa", movement: "Documentary", theme: "Apartheid, Social justice" },
        { id: 66.2, name: "Oliver Schmitz", nat: "South Africa", era: "1980s-Present", works: "Mapantsula, Life, Above All", region: "Africa", theme: "Apartheid, HIV/AIDS, Townships" },
        { id: 66.3, name: "Gavin Hood", nat: "South Africa", era: "2000s-Present", works: "Tsotsi, Eye in the Sky", region: "Africa", theme: "Crime, Morality, Drones" },
        { id: 66.4, name: "John Akomfrah", nat: "Ghana/UK", era: "1980s-Present", works: "Handsworth Songs, The Stuart Hall Project", region: "Africa", movement: "Essay Film", theme: "Diaspora, Archive, Memory" },
        { id: 66.5, name: "Rungano Nyoni", nat: "Zambia/UK", era: "2010s-Present", works: "I Am Not a Witch", region: "Africa", theme: "Superstition, Gender, Satire" },
        { id: 66.6, name: "Neill Blomkamp", nat: "South Africa", era: "2000s-Present", works: "District 9, Elysium", region: "Africa", theme: "Apartheid allegory, Sci-fi, Johannesburg" },

        // Nigeria (Nollywood & Art Cinema)
        { id: 67.1, name: "Ola Balogun", nat: "Nigeria", era: "1970s-Present", works: "Ajani Ogun, Music Man", region: "Africa", theme: "Yoruba culture, Musical cinema" },
        { id: 67.2, name: "Tunde Kelani", nat: "Nigeria", era: "1980s-Present", works: "Saworoide, The Narrow Path", region: "Africa", theme: "Yoruba traditions, Political allegory" },
        { id: 67.3, name: "Kenneth Gyang", nat: "Nigeria", era: "2010s-Present", works: "Confusion Na Wa, Oloture", region: "Africa", theme: "Urban Lagos, Crime, Women trafficking" },
        { id: 67.4, name: "Kunle Afolayan", nat: "Nigeria", era: "2000s-Present", works: "The Figurine, October 1", region: "Africa", theme: "Mystery, Historical drama, Quality production" },
        { id: 67.5, name: "Genevieve Nnaji", nat: "Nigeria", era: "2010s-Present", works: "Lionheart", region: "Africa", theme: "Family business, Women in leadership" },

        // Morocco & North Africa
        { id: 68.1, name: "Nabil Ayouch", nat: "Morocco", era: "2000s-Present", works: "Ali Zaoua, Much Loved", region: "Africa", theme: "Street children, Prostitution, Taboos" },
        { id: 68.2, name: "Faouzi Bensaïdi", nat: "Morocco", era: "2000s-Present", works: "Death for Sale, Volubilis", region: "Africa", theme: "Black comedy, Surrealism, Morocco" },
        { id: 68.3, name: "Maryam Touzani", nat: "Morocco", era: "2010s-Present", works: "Adam, The Blue Caftan", region: "Africa", theme: "Women's stories, LGBTQ, Traditional society" },
        { id: 68.4, name: "Nadir Moknèche", nat: "Algeria", era: "2000s-Present", works: "Viva Laldjérie, Goodbye Morocco", region: "Africa", theme: "Women in Algeria, Satire" },
        { id: 68.5, name: "Gillo Pontecorvo", nat: "Italy", era: "1960s-1970s", works: "The Battle of Algiers", region: "Africa", movement: "Political Cinema", theme: "Algerian War, Urban guerrilla warfare" },

        // East Africa
        { id: 69.1, name: "Wanuri Kahiu", nat: "Kenya", era: "2010s-Present", works: "Rafiki, From a Whisper", region: "Africa", theme: "LGBTQ Kenya, Afrofuturism" },
        { id: 69.2, name: "Jim Chuchu", nat: "Kenya", era: "2010s-Present", works: "Stories of Our Lives", region: "Africa", theme: "Queer Kenya, Anthology" },
        { id: 69.3, name: "Haile Gerima", nat: "Ethiopia/USA", era: "1970s-Present", works: "Sankofa, Teza", region: "Africa", movement: "LA Rebellion", theme: "Slavery memory, Ethiopian revolution, Pan-Africanism" },
        { id: 69.4, name: "Yousry Nasrallah", nat: "Egypt", era: "1980s-Present", works: "The Gate of the Sun, Mercedes", region: "Africa", theme: "Palestinian cause, Egyptian society" },
        { id: 69.5, name: "Youssef Chahine", nat: "Egypt", era: "1950s-2000s", works: "Cairo Station, Alexandria trilogy", region: "Africa", theme: "Arab cinema pioneer, Cosmopolitanism" },

        // Burkina Faso
        { id: 70.1, name: "Idrissa Ouedraogo", nat: "Burkina Faso", era: "1980s-2010s", works: "Yaaba, Tilaï", region: "Africa", theme: "Village life, Tradition vs modernity" },
        { id: 70.2, name: "Gaston Kaboré", nat: "Burkina Faso", era: "1980s-Present", works: "Wend Kuuni, Buud Yam", region: "Africa", theme: "Children, Rural Africa, Oral tradition" },
        { id: 70.3, name: "Apolline Traoré", nat: "Burkina Faso", era: "2000s-Present", works: "Kounandi, Sira", region: "Africa", theme: "Migration, Women filmmakers" },
        { id: 70.4, name: "Dani Kouyaté", nat: "Burkina Faso", era: "1990s-Present", works: "Keïta! The Heritage of the Griot, Sia", region: "Africa", theme: "Griots, African history, Solidarity" },
        { id: 70.5, name: "Fanta Régina Nacro", nat: "Burkina Faso", era: "1990s-Present", works: "The Night of Truth", region: "Africa", theme: "Reconciliation, Civil war, Women directors" },

        // --- LATIN AMERICA ---
        // Mexico
        { id: 71, name: "Alfonso Cuaron", nat: "Mexico", era: "1990s-Present", works: "Roma, Children of Men", region: "Americas", theme: "Memory, Long takes, Class" },
        { id: 72, name: "Guillermo del Toro", nat: "Mexico", era: "1990s-Present", works: "Pan's Labyrinth", region: "Americas", theme: "Monsters, Fascism, Fairy tales" },
        { id: 75, name: "Alejandro G. Inarritu", nat: "Mexico", era: "2000s-Present", works: "Birdman, Amores Perros", region: "Americas", theme: "Interconnected lives, Survival" },
        { id: 71.1, name: "Arturo Ripstein", nat: "Mexico", era: "1960s-Present", works: "The Castle of Purity, Deep Crimson", region: "Americas", theme: "Bunuelian, Grotesque, Mexican society" },
        { id: 71.2, name: "Carlos Reygadas", nat: "Mexico", era: "2000s-Present", works: "Post Tenebras Lux, Silent Light", region: "Americas", movement: "Slow Cinema", theme: "Transcendence, Rural Mexico, Contemplation" },
        { id: 71.3, name: "Amat Escalante", nat: "Mexico", era: "2000s-Present", works: "Heli, The Untamed", region: "Americas", theme: "Violence, Sexuality, Genre subversion" },

        // Argentina
        { id: 73, name: "Lucrecia Martel", nat: "Argentina", era: "2000s-Present", works: "La Cienaga, Zama", region: "Americas", theme: "Decay of bourgeoisie, Soundscapes" },
        { id: 73.1, name: "Lisandro Alonso", nat: "Argentina", era: "2000s-Present", works: "La Libertad, Jauja", region: "Americas", movement: "Slow Cinema", theme: "Minimalism, Landscape, Long takes" },
        { id: 73.2, name: "Pablo Trapero", nat: "Argentina", era: "2000s-Present", works: "Carancho, The Clan", region: "Americas", theme: "Crime, Buenos Aires, Social realism" },
        { id: 73.3, name: "Celina Murga", nat: "Argentina", era: "2000s-Present", works: "A Week Alone, The Third Side of the River", region: "Americas", theme: "Youth, Middle class anxiety" },
        { id: 73.4, name: "Leonardo Favio", nat: "Argentina", era: "1960s-2010s", works: "Chronicle of a Boy Alone, The Dependent", region: "Americas", theme: "Working class, Melodrama" },

        // Brazil
        { id: 74, name: "Fernando Meirelles", nat: "Brazil", era: "2000s-Present", works: "City of God", region: "Americas", theme: "Urban violence, Kinetic editing" },
        { id: 74.1, name: "Glauber Rocha", nat: "Brazil", era: "1960s-1980s", works: "Black God, White Devil; Antonio das Mortes", region: "Americas", movement: "Third Cinema", theme: "Cinema Novo, Revolution, Cangaço" },
        { id: 74.2, name: "Carlos Diegues", nat: "Brazil", era: "1960s-Present", works: "Bye Bye Brasil, Xica da Silva", region: "Americas", movement: "Cinema Novo", theme: "Race, Carnival, Popular culture" },
        { id: 74.3, name: "Kleber Mendonça Filho", nat: "Brazil", era: "2010s-Present", works: "Neighboring Sounds, Aquarius", region: "Americas", theme: "Gentrification, Recife, Class warfare" },
        { id: 74.4, name: "Anna Muylaert", nat: "Brazil", era: "2000s-Present", works: "The Second Mother, Don't Call Me Son", region: "Americas", theme: "Domestic workers, Class, Gender fluidity" },
        { id: 74.5, name: "Karim Aïnouz", nat: "Brazil", era: "2000s-Present", works: "Madame Satã, The Invisible Life", region: "Americas", theme: "Queer Brazil, 1950s Rio, Women's stories" },

        // Chile
        { id: 75.1, name: "Raúl Ruiz", nat: "Chile", era: "1960s-2010s", works: "Three Crowns of the Sailor, Mysteries of Lisbon", region: "Americas", theme: "Labyrinthine narratives, Exile, Surrealism" },
        { id: 75.2, name: "Pablo Larraín", nat: "Chile", era: "2000s-Present", works: "No, Jackie", region: "Americas", theme: "Pinochet era, Political cinema, Biopics" },
        { id: 75.3, name: "Sebastián Lelio", nat: "Chile", era: "2010s-Present", works: "A Fantastic Woman, Gloria", region: "Americas", theme: "Trans identity, Mature women, Santiago" },
        { id: 75.4, name: "Alejandro Jodorowsky", nat: "Chile", era: "1960s-Present", works: "El Topo, The Holy Mountain", region: "Americas", movement: "Psychedelic Cinema", theme: "Surrealism, Tarot, Mysticism" },
        { id: 75.5, name: "Dominga Sotomayor", nat: "Chile", era: "2010s-Present", works: "Thursday Till Sunday, Too Late to Die Young", region: "Americas", theme: "Childhood, Memory, Chilean dictatorship aftermath" },

        // Colombia, Peru, Cuba, Others
        { id: 76.1, name: "Ciro Guerra", nat: "Colombia", era: "2000s-Present", works: "Embrace of the Serpent, Birds of Passage", region: "Americas", theme: "Amazon, Indigenous culture, Colombia's violence" },
        { id: 76.2, name: "Claudia Llosa", nat: "Peru", era: "2000s-Present", works: "The Milk of Sorrow, Madeinusa", region: "Americas", theme: "Shining Path trauma, Indigenous Peru, Magic realism" },
        { id: 76.3, name: "Tomás Gutiérrez Alea", nat: "Cuba", era: "1960s-1990s", works: "Memories of Underdevelopment, Strawberry and Chocolate", region: "Americas", theme: "Cuban Revolution, Intellectuals, Homosexuality" },
        { id: 76.4, name: "Fernando Birri", nat: "Argentina", era: "1950s-2010s", works: "Tire Die, The Suitcase", region: "Americas", movement: "New Latin American Cinema", theme: "Social documentary, Documentary fiction" },
        { id: 76.5, name: "Jorge Sanjinés", nat: "Bolivia", era: "1960s-Present", works: "Blood of the Condor, The Principal Enemy", region: "Americas", movement: "Third Cinema", theme: "Indigenous Bolivia, Anti-imperialism" },

        // --- MIDDLE EAST & ARAB WORLD (Additional) ---
        // More Iran
        { id: 5.1, name: "Jafar Panahi", nat: "Iran", era: "1990s-Present", works: "The Circle, Taxi Tehran", region: "Middle East", theme: "Women's oppression, Filmmaking under ban" },
        { id: 5.2, name: "Mohsen Makhmalbaf", nat: "Iran", era: "1980s-Present", works: "Gabbeh, Kandahar", region: "Middle East", theme: "Color, Afghanistan, Spirituality" },
        { id: 5.3, name: "Samira Makhmalbaf", nat: "Iran", era: "1990s-Present", works: "The Apple, At Five in the Afternoon", region: "Middle East", theme: "Women, Afghanistan, Youth director" },
        { id: 5.4, name: "Bahman Ghobadi", nat: "Iran/Kurdistan", era: "2000s-Present", works: "A Time for Drunken Horses, Turtles Can Fly", region: "Middle East", theme: "Kurdish cinema, War, Children" },

        // More Turkey
        { id: 8.1, name: "Yilmaz Güney", nat: "Turkey", era: "1960s-1980s", works: "Yol, The Herd", region: "Middle East", movement: "Political Cinema", theme: "Kurdish struggle, Prison, Turkish society" },
        { id: 8.2, name: "Semih Kaplanoğlu", nat: "Turkey", era: "2000s-Present", works: "Egg, Milk, Honey trilogy", region: "Middle East", movement: "Slow Cinema", theme: "Contemplative, Rural Turkey, Memory" },
        { id: 8.3, name: "Reha Erdem", nat: "Turkey", era: "1990s-Present", works: "Times and Winds, Big Big World", region: "Middle East", theme: "Youth, Nature, Anatolian villages" },

        // More Arab World
        { id: 6.1, name: "Annemarie Jacir", nat: "Palestine", era: "2000s-Present", works: "Salt of This Sea, When I Saw You", region: "Arab World", theme: "Palestinian diaspora, Right of return, Memory" },
        { id: 3.1, name: "Jocelyne Saab", nat: "Lebanon", era: "1970s-2010s", works: "Once Upon a Time in Beirut, Dunia", region: "Arab World", movement: "Documentary", theme: "Lebanese Civil War, Feminism, Sexuality" },
        { id: 10.1, name: "Ziad Doueiri", nat: "Lebanon", era: "1990s-Present", works: "West Beirut, The Insult", region: "Arab World", theme: "Civil war, Sectarianism, Modern Lebanon" },

        // --- USA / UK  / GLOBAL (Classic Hollywood & New Hollywood) ---
        { id: 200, name: "Orson Welles", nat: "USA", era: "1940s-1980s", works: "Citizen Kane, Touch of Evil", region: "Americas", movement: "Classic Hollywood", theme: "Power, Media, Deep focus" },
        { id: 201, name: "John Ford", nat: "USA", era: "1920s-1970s", works: "The Searchers, The Grapes of Wrath", region: "Americas", movement: "Classic Hollywood", theme: "American myth, Westerns, Monument Valley" },
        { id: 202, name: "Howard Hawks", nat: "USA", era: "1920s-1970s", works: "His Girl Friday, Rio Bravo", region: "Americas", movement: "Classic Hollywood", theme: "Professionalism, Genre master" },
        { id: 203, name: "Billy Wilder", nat: "USA", era: "1940s-1980s", works: "Sunset Boulevard, Some Like It Hot", region: "Americas", movement: "Classic Hollywood", theme: "Cynicism, Hollywood, Wit" },
        { id: 204, name: "Stanley Kubrick", nat: "USA/UK", era: "1950s-1999", works: "2001: A Space Odyssey, The Shining", region: "Americas", movement: "Auteur Cinema", theme: "Perfectionism, Coldness, Symmetry" },
        { id: 206, name: "Francis Ford Coppola", nat: "USA", era: "1960s-Present", works: "The Godfather, Apocalypse Now", region: "Americas", movement: "New Hollywood", theme: "Family, Power, Epic scope" },
        { id: 207, name: "Martin Scorsese", nat: "USA", era: "1970s-Present", works: "Taxi Driver, Goodfellas", region: "Americas", movement: "New Hollywood", theme: "Guilt, Crime, Faith, Italian-American life" },
        { id: 208, name: "Steven Spielberg", nat: "USA", era: "1970s-Present", works: "Schindler's List, Jaws", region: "Americas", movement: "New Hollywood", theme: "Wonder, Americana, Blockbusters" },
        { id: 209, name: "Robert Altman", nat: "USA", era: "1960s-2000s", works: "Nashville, McCabe & Mrs. Miller", region: "Americas", movement: "New Hollywood", theme: "Ensemble casts, Overlapping dialogue" },
        { id: 210, name: "Brian De Palma", nat: "USA", era: "1960s-Present", works: "Blow Out, Carrie", region: "Americas", movement: "New Hollywood", theme: "Hitchcock homage, Split-screen, Violence" },
        { id: 211, name: "Sam Peckinpah", nat: "USA", era: "1960s-1980s", works: "The Wild Bunch, Pat Garrett and Billy the Kid", region: "Americas", movement: "New Hollywood", theme: "Violence, Westerns, Slow-motion" },

        // --- USA (American Auteurs & Independents) ---
        { id: 220, name: "Woody Allen", nat: "USA", era: "1960s-Present", works: "Annie Hall, Manhattan", region: "Americas", movement: "American Auteur", theme: "Neurosis, New York, Intellectuals, Comedy-drama" },
        { id: 221, name: "Terrence Malick", nat: "USA", era: "1970s-Present", works: "The Tree of Life, Badlands", region: "Americas", movement: "Poetic Cinema", theme: "Nature, Grace, Transcendence, Voice-over" },
        { id: 222, name: "Paul Thomas Anderson", nat: "USA", era: "1990s-Present", works: "There Will Be Blood, Phantom Thread", region: "Americas", movement: "Contemporary Auteur", theme: "Masculinity, California, Family, Obsession" },
        { id: 223, name: "Wes Anderson", nat: "USA", era: "1990s-Present", works: "The Grand Budapest Hotel, Moonrise Kingdom", region: "Americas", movement: "Contemporary Auteur", theme: "Symmetry, Whimsy, Family dysfunction, Nostalgia" },
        { id: 224, name: "Quentin Tarantino", nat: "USA", era: "1990s-Present", works: "Pulp Fiction, Kill Bill", region: "Americas", movement: "Postmodern Cinema", theme: "Pop culture, Violence, Dialogue, Revenge" },
        { id: 225, name: "David Lynch", nat: "USA", era: "1970s-Present", works: "Mulholland Drive, Blue Velvet", region: "Americas", movement: "Surrealist Cinema", theme: "Dreams, Darkness, Americana, Mystery" },
        { id: 226, name: "Coen Brothers", nat: "USA", era: "1980s-Present", works: "Fargo, No Country for Old Men", region: "Americas", movement: "Independent Cinema", theme: "Crime, Irony, Americana, Genre pastiche" },
        { id: 227, name: "David Fincher", nat: "USA", era: "1990s-Present", works: "Se7en, The Social Network", region: "Americas", movement: "Contemporary Auteur", theme: "Darkness, Precision, Digital culture" },
        { id: 228, name: "Paul Schrader", nat: "USA", era: "1970s-Present", works: "Taxi Driver (writer), First Reformed", region: "Americas", movement: "Transcendental Style", theme: "Guilt, Redemption, Isolation" },
        { id: 228.1, name: "Robert Bresson", nat: "France", era: "1940s-1980s", works: "Pickpocket, Au hasard Balthazar", region: "France", movement: "Transcendental Style", theme: "Grace, Spirituality, Minimalism" },
        { id: 228.2, name: "Carl Theodor Dreyer", nat: "Denmark", era: "1920s-1960s", works: "The Passion of Joan of Arc, Ordet", region: "Denmark", movement: "Transcendental Style", theme: "Faith, Silence, Faces" },
        { id: 228.3, name: "Yasujiro Ozu", nat: "Japan", era: "1920s-1960s", works: "Tokyo Story, Late Spring", region: "Japan", movement: "Transcendental Style", theme: "Pillow shots, Family, Tatami angle" },
        { id: 228.4, name: "Hou Hsiao-hsien", nat: "Taiwan", era: "1980s-Present", works: "The Assassin, Flowers of Shanghai", region: "East Asia", movement: "Transcendental Style", theme: "Long takes, Historical memory, Taiwan" },

        { id: 229, name: "David Cronenberg", nat: "Canada", era: "1970s-Present", works: "Videodrome, The Fly", region: "Americas", movement: "Body Horror", theme: "Technology, Body, Transformation" },
        { id: 229.1, name: "Shinya Tsukamoto", nat: "Japan", era: "1980s-Present", works: "Tetsuo: The Iron Man, Bullet Ballet", region: "Japan", movement: "Body Horror", theme: "Cyber-punk, Metal flesh, Industrial" },
        { id: 229.2, name: "Lucile Hadžihalilović", nat: "France", era: "2000s-Present", works: "Evolution, Innocence", region: "France", movement: "Body Horror", theme: "Medical horror, Children, Surrealism" },
        { id: 229.3, name: "Julia Ducournau", nat: "France", era: "2010s-Present", works: "Raw, Titane", region: "France", movement: "Body Horror", theme: "Cannibalism, Body modification, Female rage" },
        { id: 229.4, name: "Brandon Cronenberg", nat: "Canada", era: "2010s-Present", works: "Possessor, Antiviral", region: "Americas", movement: "Body Horror", theme: "Identity theft, Celebrity, Technology" },

        { id: 230, name: "Jim Jarmusch", nat: "USA", era: "1980s-Present", works: "Paterson, Only Lovers Left Alive", region: "Americas", movement: "Independent Cinema", theme: "Drift, Deadpan, Minimalism" },
        { id: 231, name: "Richard Linklater", nat: "USA", era: "1990s-Present", works: "Before trilogy, Boyhood", region: "Americas", movement: "Independent Cinema", theme: "Time, Conversation, Texas" },
        { id: 230.1, name: "John Cassavetes", nat: "USA", era: "1960s-1980s", works: "Faces, A Woman Under the Influence", region: "Americas", movement: "Independent Cinema", theme: "Improvisation, Emotional rawness, American indie pioneer" },
        { id: 230.2, name: "Hal Ashby", nat: "USA", era: "1970s-1980s", works: "Harold and Maude, Being There", region: "Americas", movement: "Independent Cinema", theme: "Misfits, Dark comedy, 1970s America" },
        { id: 230.3, name: "Harmony Korine", nat: "USA", era: "1990s-Present", works: "Gummo, Spring Breakers", region: "Americas", movement: "Independent Cinema", theme: "White trash aesthetics, Provocation, America" },

        { id: 232, name: "Todd Haynes", nat: "USA", era: "1990s-Present", works: "Carol, Safe", region: "Americas", movement: "New Queer Cinema", theme: "Gender, Melodrama, Illness" },
        { id: 233, name: "Sofia Coppola", nat: "USA", era: "1990s-Present", works: "Lost in Translation, The Virgin Suicides", region: "Americas", movement: "Contemporary Auteur", theme: "Isolation, Femininity, Fame" },
        { id: 234, name: "Greta Gerwig", nat: "USA", era: "2010s-Present", works: "Lady Bird, Little Women", region: "Americas", movement: "Contemporary Auteur", theme: "Coming-of-age, Female friendship, Sacramento" },
        { id: 235, name: "Barry Jenkins", nat: "USA", era: "2010s-Present", works: "Moonlight, If Beale Street Could Talk", region: "Americas", movement: "Contemporary Auteur", theme: "Black identity, Intimacy, Poetry" },
        { id: 233.1, name: "Lynne Ramsay", nat: "UK", era: "1990s-Present", works: "We Need to Talk About Kevin, You Were Never Really Here", region: "UK", movement: "Contemporary Auteur", theme: "Trauma, Violence, Sensory cinema" },
        { id: 233.2, name: "Yorgos Lanthimos", nat: "Greece", era: "2000s-Present", works: "The Lobster, Poor Things", region: "Greece", movement: "Contemporary Auteur", theme: "Absurdism, Control, Dystopia" },

        { id: 236, name: "Ari Aster", nat: "USA", era: "2010s-Present", works: "Hereditary, Midsommar", region: "Americas", movement: "Elevated Horror", theme: "Family trauma, Grief, Folk horror" },
        { id: 237, name: "Robert Eggers", nat: "USA", era: "2010s-Present", works: "The Lighthouse, The Witch", region: "Americas", movement: "Elevated Horror", theme: "Period detail, Myth, Madness" },
        { id: 236.1, name: "Jennifer Kent", nat: "Australia", era: "2010s-Present", works: "The Babadook, The Nightingale", region: "Oceania", movement: "Elevated Horror", theme: "Motherhood, Grief, Colonial violence" },
        { id: 236.2, name: "Trey Edward Shults", nat: "USA", era: "2010s-Present", works: "It Comes at Night, Krisha", region: "Americas", movement: "Elevated Horror", theme: "Family dysfunction, Paranoia, Intimacy" },
        { id: 236.3, name: "Julia Leigh", nat: "Australia", era: "2010s-Present", works: "Sleeping Beauty", region: "Oceania", movement: "Elevated Horror", theme: "Exploitation, Passivity, Surreal eroticism" },

        { id: 238, name: "Christopher Nolan", nat: "UK/USA", era: "2000s-Present", works: "Inception, The Dark Knight", region: "Americas", movement: "Blockbuster Auteur", theme: "Time, Memory, Spectacle" },
        { id: 238.1, name: "James Cameron", nat: "Canada/USA", era: "1980s-Present", works: "Terminator 2, Avatar", region: "Americas", movement: "Blockbuster Auteur", theme: "Technology, Spectacle, Action" },
        { id: 238.2, name: "Peter Jackson", nat: "New Zealand", era: "1990s-Present", works: "Lord of the Rings, Heavenly Creatures", region: "Oceania", movement: "Blockbuster Auteur", theme: "Epic fantasy, New Zealand" },
        { id: 238.3, name: "Ridley Scott", nat: "UK", era: "1970s-Present", works: "Blade Runner, Alien", region: "UK", movement: "Blockbuster Auteur", theme: "Sci-fi, Visual design, Epic scope" },
        { id: 238.4, name: "Michael Mann", nat: "USA", era: "1980s-Present", works: "Heat, Collateral", region: "Americas", movement: "Blockbuster Auteur", theme: "Crime, Digital cinematography, Los Angeles" },

        { id: 239, name: "Darren Aronofsky", nat: "USA", era: "1990s-Present", works: "Black Swan, Requiem for a Dream", region: "Americas", movement: "Psychological Cinema", theme: "Obsession, Madness, Extreme states" },
        { id: 240, name: "Denis Villeneuve", nat: "Canada", era: "2000s-Present", works: "Arrival, Blade Runner 2049", region: "Americas", movement: "Contemporary Auteur", theme: "Time, Language, Sci-fi" },
        { id: 241, name: "Noah Baumbach", nat: "USA", era: "2000s-Present", works: "Marriage Story, The Squid and the Whale", region: "Americas", movement: "Indie Comedy-Drama", theme: "Relationships, Intellectuals, New York" },
        { id: 241.1, name: "Whit Stillman", nat: "USA", era: "1990s-Present", works: "Metropolitan, Barcelona", region: "Americas", movement: "Indie Comedy-Drama", theme: "Upper class, Witty dialogue, Preppies" },
        { id: 241.2, name: "Nicole Holofcener", nat: "USA", era: "1990s-Present", works: "Walking and Talking, Enough Said", region: "Americas", movement: "Indie Comedy-Drama", theme: "Female friendship, Relationships, Middle age" },
        { id: 241.3, name: "Lynn Shelton", nat: "USA", era: "2000s-2020", works: "Humpday, Your Sister's Sister", region: "Americas", movement: "Indie Comedy-Drama", theme: "Mumblecore, Improvisation, Seattle" },
        { id: 241.4, name: "Joe Swanberg", nat: "USA", era: "2000s-Present", works: "Hannah Takes the Stairs, Drinking Buddies", region: "Americas", movement: "Indie Comedy-Drama", theme: "Mumblecore, Relationships, Chicago" },

        { id: 242, name: "Gus Van Sant", nat: "USA", era: "1980s-Present", works: "My Own Private Idaho, Elephant", region: "Americas", movement: "New Queer Cinema", theme: "Youth, Sexuality, Minimalism" },
        { id: 242.1, name: "Gregg Araki", nat: "USA", era: "1990s-Present", works: "The Living End, Mysterious Skin", region: "Americas", movement: "New Queer Cinema", theme: "Queer punk, Apocalypse, Youth" },
        { id: 242.2, name: "Bruce LaBruce", nat: "Canada", era: "1990s-Present", works: "Hustler White, L.A. Zombie", region: "Americas", movement: "New Queer Cinema", theme: "Queer porn, Punk, Provocation" },
        { id: 242.3, name: "Tom Kalin", nat: "USA", era: "1990s-Present", works: "Swoon, Savage Grace", region: "Americas", movement: "New Queer Cinema", theme: "Leopold and Loeb, Crime, Class" },

        { id: 243, name: "Spike Lee", nat: "USA", era: "1980s-Present", works: "Do the Right Thing, Malcolm X", region: "Americas", movement: "Black Cinema", theme: "Race relations, Brooklyn, Social justice" },
        { id: 243.1, name: "Charles Burnett", nat: "USA", era: "1970s-Present", works: "Killer of Sheep, To Sleep with Anger", region: "Americas", movement: "Black Cinema", theme: "LA Rebellion, Working class, Watts" },
        { id: 243.2, name: "Melvin Van Peebles", nat: "USA", era: "1960s-Present", works: "Sweet Sweetback's Baadasssss Song", region: "Americas", movement: "Black Cinema", theme: "Blaxploitation pioneer, Independent, Revolution" },
        { id: 243.3, name: "John Singleton", nat: "USA", era: "1990s-2010s", works: "Boyz n the Hood, Poetic Justice", region: "Americas", movement: "Black Cinema", theme: "South Central LA, Coming-of-age, Hood films" },
        { id: 243.4, name: "Ava DuVernay", nat: "USA", era: "2010s-Present", works: "Selma, 13th", region: "Americas", movement: "Black Cinema", theme: "Civil rights, Mass incarceration, Black womanhood" },

        { id: 244, name: "Jordan Peele", nat: "USA", era: "2010s-Present", works: "Get Out, Us", region: "Americas", movement: "Social Horror", theme: "Social horror, Race, Allegory" },
        { id: 244.1, name: "George A. Romero", nat: "USA", era: "1960s-2010s", works: "Night of the Living Dead, Dawn of the Dead", region: "Americas", movement: "Social Horror", theme: "Zombies, Consumerism, Social critique" },
        { id: 244.2, name: "John Carpenter", nat: "USA", era: "1970s-Present", works: "They Live, The Thing", region: "Americas", movement: "Social Horror", theme: "Paranoia, Capitalism, Body snatchers" },
        { id: 244.3, name: "Wes Craven", nat: "USA", era: "1970s-2010s", works: "A Nightmare on Elm Street, Scream", region: "Americas", movement: "Social Horror", theme: "Suburban horror, Meta-horror, Dreams" },
        { id: 244.4, name: "Bernard Rose", nat: "UK", era: "1990s-Present", works: "Candyman", region: "UK", movement: "Social Horror", theme: "Urban legends, Race, Class" },

        // --- KOREA & ASIA (Additional) ---
        { id: 250, name: "Bong Joon-ho", nat: "S. Korea", era: "2000s-Present", works: "Parasite, Memories of Murder", region: "East Asia", movement: "Korean New Wave", theme: "Class war, Genre blending, Social critique" },
        { id: 251, name: "Park Chan-wook", nat: "S. Korea", era: "2000s-Present", works: "Oldboy, The Handmaiden", region: "East Asia", movement: "Korean New Wave", theme: "Revenge, Taboo, Visual style" },
        { id: 252, name: "Lee Chang-dong", nat: "S. Korea", era: "1990s-Present", works: "Burning, Poetry", region: "East Asia", theme: "Alienation, Class, Ambiguity" },
        { id: 253, name: "Im Kwon-taek", nat: "S. Korea", era: "1960s-Present", works: "Seopyeonje, Chunhyang", region: "East Asia", theme: "Korean tradition, Pansori" },

        // --- OCEANIA ---
        { id: 260, name: "Jane Campion", nat: "New Zealand", era: "1980s-Present", works: "The Piano, The Power of the Dog", region: "Oceania", theme: "Female desire, Isolation, Gothic" },
        { id: 261, name: "Peter Jackson", nat: "New Zealand", era: "1980s-Present", works: "Lord of the Rings trilogy, Heavenly Creatures", region: "Oceania", theme: "Epic fantasy, New Zealand" },
        { id: 262, name: "Taika Waititi", nat: "New Zealand", era: "2010s-Present", works: "Jojo Rabbit, Hunt for the Wilderpeople", region: "Oceania", theme: "Humor, Māori culture, Heart" },
        { id: 263, name: "George Miller", nat: "Australia", era: "1970s-Present", works: "Mad Max: Fury Road, Happy Feet", region: "Oceania", theme: "Kinetic action, Myth making, Visual storytelling" },
        { id: 264, name: "Warwick Thornton", nat: "Australia", era: "2000s-Present", works: "Samson and Delilah, Sweet Country", region: "Oceania", theme: "Indigenous Australia, Landscape" },

        // --- DOCUMENTARY CINEMA ---
        { id: 300, name: "Frederick Wiseman", nat: "USA", era: "1960s-Present", works: "Titicut Follies, Hospital, High School", region: "Americas", movement: "Documentary", theme: "Observational, Institutions, American life" },
        { id: 301, name: "Errol Morris", nat: "USA", era: "1970s-Present", works: "The Thin Blue Line, The Fog of War", region: "Americas", movement: "Documentary", theme: "Investigative, Truth, Re-enactments" },
        { id: 302, name: "Chris Marker", nat: "France", era: "1950s-2010s", works: "La Jetée, Sans Soleil", region: "France", movement: "Essay Film", theme: "Memory, Time travel, Photo-roman" },
        { id: 303, name: "Agnès Varda", nat: "France", era: "1950s-2010s", works: "The Gleaners and I, Faces Places", region: "France", movement: "Documentary / Essay", theme: "Personal docs, Aging, Found footage" },
        { id: 304, name: "D.A. Pennebaker", nat: "USA", era: "1950s-2010s", works: "Don't Look Back, The War Room", region: "Americas", movement: "Direct Cinema", theme: "Music docs, Political campaigns, Fly-on-wall" },
        { id: 305, name: "Albert Maysles", nat: "USA", era: "1950s-2010s", works: "Grey Gardens, Gimme Shelter", region: "Americas", movement: "Direct Cinema", theme: "Observational, Eccentrics, Rolling Stones" },
        { id: 306, name: "Barbara Kopple", nat: "USA", era: "1970s-Present", works: "Harlan County USA, American Dream", region: "Americas", movement: "Documentary", theme: "Labor struggles, Social justice" },
        { id: 307, name: "Laura Poitras", nat: "USA", era: "2000s-Present", works: "Citizenfour, All the Beauty", region: "Americas", movement: "Documentary", theme: "Surveillance, Snowden, National security" },
        { id: 308, name: "Joshua Oppenheimer", nat: "USA/Denmark", era: "2000s-Present", works: "The Act of Killing, The Look of Silence", region: "Denmark", movement: "Documentary", theme: "Indonesian genocide, Perpetrators, Re-enactment" },
        { id: 309, name: "Patricio Guzmán", nat: "Chile", era: "1970s-Present", works: "The Battle of Chile, Nostalgia for the Light", region: "Americas", movement: "Documentary", theme: "Pinochet, Memory, Political cinema" },
        { id: 310, name: "Wang Bing", nat: "China", era: "2000s-Present", works: "West of the Tracks, Dead Souls", region: "East Asia", movement: "Documentary", theme: "Observational, Chinese workers, Long duration" },
        { id: 311, name: "Rithy Panh", nat: "Cambodia", era: "1990s-Present", works: "S21, The Missing Picture", region: "East Asia", movement: "Documentary", theme: "Khmer Rouge, Cambodian genocide, Clay figures" },
        { id: 312, name: "Jean Rouch", nat: "France", era: "1950s-2000s", works: "Chronicle of a Summer, Jaguar", region: "France", movement: "Cinéma Vérité", theme: "Ethnographic, Africa, Shared anthropology" },
        { id: 313, name: "Ai Weiwei", nat: "China", era: "2000s-Present", works: "Human Flow, Cockroach", region: "East Asia", movement: "Documentary / Activist", theme: "Refugees, Activism, Chinese politics" },
        { id: 314, name: "Humphrey Jennings", nat: "UK", era: "1930s-1950s", works: "Listen to Britain, Fires Were Started", region: "UK", movement: "Documentary", theme: "WWII propaganda, British life, Poetry" },
        { id: 315, name: "Les Blank", nat: "USA", era: "1960s-2010s", works: "Burden of Dreams, Gap-Toothed Women", region: "Americas", movement: "Documentary", theme: "Food, Music, Eccentrics, Werner Herzog" },
        { id: 316, name: "Adam Curtis", nat: "UK", era: "1990s-Present", works: "HyperNormalisation, The Century of the Self", region: "UK", movement: "Essay Film", theme: "Power, Media manipulation, Archival montage" },
        { id: 317, name: "Michael Moore", nat: "USA", era: "1980s-Present", works: "Roger & Me, Bowling for Columbine", region: "Americas", movement: "Documentary", theme: "Political satire, Corporations, Gun control" },
        { id: 318, name: "Kim Longinotto", nat: "UK", era: "1990s-Present", works: "Pink Saris, Dreamcatcher", region: "UK", movement: "Documentary", theme: "Women's rights, Observational, Social issues" },
        { id: 319, name: "Ross McElwee", nat: "USA", era: "1980s-Present", works: "Sherman's March, Time Indefinite", region: "Americas", movement: "Documentary", theme: "First-person, Southern USA, Autobiography" },
        { id: 320, name: "Werner Herzog", nat: "Germany", era: "1960s-Present", works: "Grizzly Man, Cave of Forgotten Dreams", region: "Germany", movement: "Documentary / Fiction", theme: "Ecstatic truth, Nature, Obsessives" },
        { id: 321, name: "Nikolaus Geyrhalter", nat: "Austria", era: "1990s-Present", works: "Our Daily Bread, Homo Sapiens", region: "Austria", movement: "Documentary", theme: "Human impact, Industrial, Empty spaces" },


        // --- AMERICAN AVANT-GARDE & EXPERIMENTAL CINEMA ---
        { id: 99, name: "Jonas Mekas", nat: "USA", era: "1940s-2019", works: "As I Was Moving Ahead Occasionally I Saw Brief Glimpses of Beauty, Walden", region: "Americas", movement: "American Avant-Garde", theme: "Diary films, Lithuanian exile, New York", link: "https://m.ok.ru/video/7603719113246" },
        { id: 100, name: "Maya Deren", nat: "Ukraine/USA", era: "1940s-50s", works: "Meshes of the Afternoon, At Land", region: "Americas", movement: "American Avant-Garde", theme: "Trance film, Choreography, Surrealism" },
        { id: 101, name: "Chantal Akerman", nat: "Belgium", era: "1960s-2015", works: "Jeanne Dielman, News from Home", region: "Europe", movement: "Structural Film / Feminist", theme: "Domesticity, Real-time, Static shots" },
        { id: 102, name: "Vera Chytilová", nat: "Czech", era: "1960s-2000s", works: "Daisies, Fruit of Paradise", region: "Europe", movement: "Czech New Wave", theme: "Anarchy, Feminism, Visual collage" },
        { id: 103, name: "Barbara Loden", nat: "USA", era: "1970s", works: "Wanda", region: "Americas", movement: "American Independent", theme: "Blue-collar alienation, Cinéma vérité" },
        { id: 104, name: "Larisa Shepitko", nat: "USSR", era: "1960s-70s", works: "The Ascent, Wings", region: "Europe", movement: "Soviet Thaw", theme: "War, Spiritual endurance, Existentialism" },
        { id: 105, name: "Julie Dash", nat: "USA", era: "1980s-Present", works: "Daughters of the Dust", region: "Americas", movement: "LA Rebellion", theme: "Black womanhood, Gullah culture, Non-linear memory" },
        { id: 106, name: "Trinh T. Minh-ha", nat: "Vietnam/USA", era: "1980s-Present", works: "Surname Viet Given Name Nam", region: "Americas", movement: "Post-Colonial / Essay", theme: "Deconstruction of documentary, Ethnography" },
        { id: 107, name: "Su Friedrich", nat: "USA", era: "1970s-Present", works: "Scar Tissue, Cool Hands Warm Heart, Sink or Swim, The Ties That Bind", region: "Americas", movement: "Queer / Structural", theme: "Autobiography, Lesbian identity, Experimental feminism", link: "https://www.dailymotion.com/video/x22avky" },
        { id: 107.1, name: "Michael Snow", nat: "Canada", era: "1960s-Present", works: "Wavelength, La Région Centrale, Back and Forth", region: "Americas", movement: "Structural Film", theme: "Duration, Space, Camera apparatus, Minimalism" },
        { id: 107.2, name: "Hollis Frampton", nat: "USA", era: "1960s-1980s", works: "Zorns Lemma, Hapax Legomena series", region: "Americas", movement: "Structural Film", theme: "Language, Mathematical structures, Photography" },
        { id: 107.3, name: "Paul Sharits", nat: "USA", era: "1960s-1990s", works: "T,O,U,C,H,I,N,G, N:O:T:H:I:N:G", region: "Americas", movement: "Structural Film", theme: "Flicker film, Celluloid materiality, Installation" },
        { id: 107.4, name: "Ernie Gehr", nat: "USA", era: "1960s-Present", works: "Serene Velocity, Eureka, Side/Walk/Shuttle", region: "Americas", movement: "Structural Film", theme: "Perception, Architectural space, Movement" },
        { id: 107.5, name: "Peter Kubelka", nat: "Austria", era: "1950s-Present", works: "Arnulf Rainer, Schwechater", region: "Austria", movement: "Structural Film", theme: "Metric montage, Flicker, Pure cinema" },
        { id: 107.6, name: "Stan Brakhage", nat: "USA", era: "1950s-2000s", works: "Dog Star Man, The Act of Seeing with One's Own Eyes", region: "Americas", movement: "American Avant-Garde", theme: "Hand-painted film, Vision, Birth/Death" },
        { id: 107.7, name: "Andy Warhol", nat: "USA", era: "1960s-1980s", works: "Sleep, Empire, Chelsea Girls", region: "Americas", movement: "American Avant-Garde", theme: "Duration, Static camera, Pop art, Factory" },
        { id: 107.8, name: "Gregory Markopoulos", nat: "USA", era: "1950s-1990s", works: "Eniaios, Twice a Man", region: "Americas", movement: "American Avant-Garde", theme: "Queer mythology, Greek cinema, Montage" },
        { id: 107.9, name: "Jack Smith", nat: "USA", era: "1960s-1980s", works: "Flaming Creatures, Normal Love", region: "Americas", movement: "Camp / Underground", theme: "Trash aesthetic, Gender performance, Queer camp" },
        { id: 107.10, name: "Robert Breer", nat: "USA", era: "1950s-2010s", works: "Blazes, Fist Fight, A Man and His Dog Out for Air", region: "Americas", movement: "American Avant-Garde", theme: "Animation, Collage, Kinetic sculpture" },
        { id: 107.11, name: "Gerard Malanga", nat: "USA", era: "1960s-Present", works: "In Search of the Miraculous, Prelude to International Velvet", region: "Americas", movement: "American Avant-Garde", theme: "Factory collaborations, Poetry, Underground" },
        { id: 108, name: "Kira Muratova", nat: "Ukraine", era: "1960s-2018", works: "The Asthenic Syndrome", region: "Europe", movement: "Soviet/Post-Soviet", theme: "Absurdism, Human cruelty, Repetition" },

        // --- THIRD CINEMA & RADICAL GLOBAL ---
        { id: 120, name: "Glauber Rocha", nat: "Brazil", era: "1960s-1980s", works: "Black God White Devil", region: "Americas", movement: "Cinema Novo", theme: "Aesthetics of Hunger, Mysticism, Revolution" },
        { id: 121, name: "Fernando Solanas", nat: "Argentina", era: "1960s-2020", works: "The Hour of the Furnaces", region: "Americas", movement: "Third Cinema", theme: "Guerilla filmmaking, Political manifesto" },
        { id: 122, name: "Med Hondo", nat: "Mauritania", era: "1960s-2010s", works: "Soleil O", region: "Africa", movement: "Third Cinema", theme: "Immigration, Racism, Experimental narrative" },
        { id: 123, name: "Jorge Sanjinés", nat: "Bolivia", era: "1960s-Present", works: "Blood of the Condor", region: "Americas", movement: "Third Cinema", theme: "Indigenous rights, Collective protagonist" },
        { id: 124, name: "Sarah Maldoror", nat: "Guadeloupe/Angola", era: "1960s-2000s", works: "Sambizanga", region: "Africa", movement: "Pan-Africanism", theme: "Women in revolution, Anti-colonial struggle" },
        { id: 125, name: "Kidlat Tahimik", nat: "Philippines", era: "1970s-Present", works: "Perfumed Nightmare", region: "East Asia", movement: "Third Cinema", theme: "Cultural imperialism, Naive pro-tech vs tradition" },

        // --- UNDERGROUND & QUEER ---
        { id: 140, name: "Kenneth Anger", nat: "USA", era: "1940s-2010s", works: "Scorpio Rising, Lucifer Rising", region: "Americas", movement: "Magick / Underground", theme: "Occult, Queer desire, Pop culture montage" },
        { id: 141, name: "Stan Brakhage", nat: "USA", era: "1950s-2000s", works: "Mothlight, Dog Star Man", region: "Americas", movement: "Structural / Abstract", theme: "Vision without language, Direct film (painting on celluloid)" },
        { id: 142, name: "Jonas Mekas", nat: "Lithuania/USA", era: "1940s-2019", works: "As I Was Moving Ahead Occasionally I Saw Brief Glimpses of Beauty", region: "Americas", movement: "Diary Film", theme: "Memory, Exile, The fleeting moment" },
        { id: 143, name: "Derek Jarman", nat: "UK", era: "1970s-1994", works: "Blue, Jubilee", region: "Europe", movement: "New Queer Cinema / Punk", theme: "AIDS crisis, Punk aesthetic, Gay history" },
        { id: 144, name: "Jack Smith", nat: "USA", era: "1950s-60s", works: "Flaming Creatures", region: "Americas", movement: "Camp / Underground", theme: "Trash aesthetic, Gender performance" },
        { id: 145, name: "Marlon Riggs", nat: "USA", era: "1980s-90s", works: "Tongues Untied", region: "Americas", movement: "New Queer Cinema", theme: "Black gay identity, Documentary/Poetry hybrid" },
        { id: 146, name: "Cheryl Dunye", nat: "USA", era: "1990s-Present", works: "The Watermelon Woman", region: "Americas", movement: "New Queer Cinema", theme: "Black lesbian history, Mock-documentary" },
        { id: 147, name: "Gregg Araki", nat: "USA", era: "1990s-Present", works: "The Doom Generation, Mysterious Skin", region: "Americas", movement: "New Queer Cinema", theme: "Teen nihilism, Pop art, Alienation" },
        { id: 148, name: "Yvonne Rainer", nat: "USA", era: "1970s-Present", works: "Film About a Woman Who...", region: "Americas", movement: "Avant-Garde", theme: "Dance, Minimalism, Theory" },

        // --- ASIAN & EASTERN EUROPEAN ARTHOUSE (Additional) ---
        { id: 161, name: "Lav Diaz", nat: "Philippines", era: "1990s-Present", works: "Norte, the End of History", region: "East Asia", movement: "Slow Cinema", theme: "Duration (8+ hour films), Moral decay, History" },
        { id: 162, name: "Bela Tarr", nat: "Hungary", era: "1970s-2011", works: "Satantango, Werckmeister Harmonies", region: "Europe", movement: "Slow Cinema", theme: "Cosmic pessimism, Long takes, Black & white" },
        { id: 163, name: "Sergei Parajanov", nat: "Armenia/USSR", era: "1950s-1990", works: "The Color of Pomegranates", region: "Europe", movement: "Poetic Cinema", theme: "Tableau vivants, Folklore, Visual poetry" },
        { id: 164, name: "Bi Gan", nat: "China", era: "2010s-Present", works: "Long Day's Journey Into Night", region: "East Asia", movement: "New Chinese Arthouse", theme: "Time, Memory, One-take 3D" },
        { id: 165, name: "Hong Sang-soo", nat: "South Korea", era: "1990s-Present", works: "Right Now, Wrong Then", region: "East Asia", movement: "Minimalism", theme: "Repetition, Soju, Awkward romance" },
        { id: 166, name: "Forough Farrokhzad", nat: "Iran", era: "1960s", works: "The House is Black", region: "Middle East", movement: "Iranian New Wave", theme: "Poetry, Suffering, Compassion" },
        { id: 167, name: "Anand Patwardhan", nat: "India", era: "1970s-Present", works: "Jai Bhim Comrade", region: "India", movement: "Political Documentary", theme: "Caste system, Religious fundamentalism" },

        // --- AMERICAN INDEPENDENT & RADICAL ---
        { id: 180, name: "John Cassavetes", nat: "USA", era: "1950s-1980s", works: "A Woman Under the Influence", region: "Americas", movement: "Independent Pioneer", theme: "Raw emotion, Improvisation, Faces" },
        { id: 181, name: "Charles Burnett", nat: "USA", era: "1970s-Present", works: "Killer of Sheep", region: "Americas", movement: "LA Rebellion", theme: "Working class Black life, Neorealism" },
        { id: 182, name: "Kelly Reichardt", nat: "USA", era: "1990s-Present", works: "Meek's Cutoff, Wendy and Lucy", region: "Americas", movement: "Slow Cinema / Indie", theme: "Economic precarity, Quietude, Landscapes" },
        { id: 183, name: "Elaine May", nat: "USA", era: "1970s-80s", works: "Mikey and Nicky", region: "Americas", movement: "New Hollywood", theme: "Betrayal, Male friendship, Dark comedy" },
        { id: 184, name: "Kathleen Collins", nat: "USA", era: "1980s", works: "Losing Ground", region: "Americas", movement: "Indie Pioneer", theme: "Intellectual Black life, Art vs Life" },

        // --- UNDERGROUND & CULT CINEMA (Lesser-Known Auteurs) ---
        { id: 500, name: "Guy Maddin", nat: "Canada", era: "1980s-Present", works: "The Saddest Music in the World, My Winnipeg", region: "Americas", movement: "Experimental / Cult", theme: "Silent film pastiche, Winnipeg, Grotesque melodrama" },
        { id: 501, name: "Albert Serra", nat: "Spain", era: "2000s-Present", works: "The Death of Louis XIV, Liberté", region: "Spain", movement: "Slow Cinema", theme: "Anti-narrative, Provocation, Historical minimalism" },
        { id: 502, name: "Ben Rivers", nat: "UK", era: "2000s-Present", works: "Two Years at Sea, A Spell to Ward Off the Darkness", region: "UK", movement: "Experimental Documentary", theme: "Hermits, Landscape, 16mm" },
        { id: 503, name: "Peter Strickland", nat: "UK", era: "2000s-Present", works: "Berberian Sound Studio, In Fabric", region: "UK", movement: "Art Horror / Cult", theme: "Giallo homage, Sound design, British surrealism" },
        { id: 504, name: "Koji Wakamatsu", nat: "Japan", era: "1960s-2010s", works: "Go, Go Second Time Virgin, United Red Army", region: "Japan", movement: "Pink Film / Radical", theme: "Sex, Violence, Political extremism" },
        { id: 505, name: "Straub-Huillet", nat: "France/Germany", era: "1960s-2000s", works: "The Chronicle of Anna Magdalena Bach, Moses and Aaron", region: "France", movement: "Materialist Cinema", theme: "Text, Music, Anti-illusion" },
        { id: 506, name: "Marguerite Duras", nat: "France", era: "1970s-1990s", works: "India Song, Nathalie Granger", region: "France", movement: "Avant-Garde / Literary", theme: "Voice, Memory, Stasis" },
        { id: 507, name: "Philippe Garrel", nat: "France", era: "1960s-Present", works: "Regular Lovers, Jealousy", region: "France", movement: "Post-New Wave", theme: "May '68, Love triangles, Black & white minimalism" },
        { id: 508, name: "Joao Pedro Rodrigues", nat: "Portugal", era: "2000s-Present", works: "To Die Like a Man, The Ornithologist", region: "Portugal", movement: "Queer Arthouse", theme: "Trans identity, Religion, Portuguese landscapes" },
        { id: 509, name: "Lucien Castaing-Taylor", nat: "USA/UK", era: "2000s-Present", works: "Leviathan, Sweetgrass", region: "Americas", movement: "Sensory Ethnography", theme: "Labor, Non-human POV, Immersive docs" },
        { id: 510, name: "James Benning", nat: "USA", era: "1970s-Present", works: "13 Lakes, RR", region: "Americas", movement: "Structural Film", theme: "Duration, Landscape, American space" },
        { id: 511, name: "Rose Lowder", nat: "France/USA", era: "1970s-Present", works: "Bouquets 1-10", region: "France", movement: "Experimental", theme: "Garden films, Frame-by-frame, Light" },
        { id: 512, name: "Nathaniel Dorsky", nat: "USA", era: "1970s-Present", works: "Variations, Hours for Jerome", region: "Americas", movement: "Silent Contemplative", theme: "Light, Meditation, Silent films" },
        { id: 513, name: "Sharon Lockhart", nat: "USA", era: "1990s-Present", works: "Teatro Amazonas, Lunch Break", region: "Americas", movement: "Gallery Cinema", theme: "Labor, Real time, Installation" },
        { id: 514, name: "Naomi Uman", nat: "USA", era: "2000s-Present", works: "Removed, The Pawnshop", region: "Americas", movement: "Feminist Experimental", theme: "Pornography intervention, Found footage" },
        { id: 515, name: "Ben Russell", nat: "USA", era: "2000s-Present", works: "Let Each One Go Where He May, Good Luck", region: "Americas", movement: "Experimental Ethnography", theme: "Trance, Labor, Psychedelia" },
        { id: 516, name: "Raya Martin", nat: "Philippines", era: "2000s-Present", works: "A Short Film About the Indio Nacional, Independencia", region: "East Asia", movement: "Filipino New Wave", theme: "Colonial history, Experimental narrative" },
        { id: 517, name: "Khavn", nat: "Philippines", era: "2000s-Present", works: "Mondomanila, Ruined Heart", region: "East Asia", movement: "Punk Cinema", theme: "Underground Manila, Extreme cinema, DIY" },
        { id: 518, name: "Joanna Hogg", nat: "UK", era: "2000s-Present", works: "The Souvenir, Exhibition", region: "UK", movement: "British Arthouse", theme: "Upper-middle class, Memory, Detachment" },
        { id: 519, name: "Corneliu Porumboiu", nat: "Romania", era: "2000s-Present", works: "Police, Adjective, 12:08 East of Bucharest", region: "Romania", movement: "Romanian New Wave", theme: "Language, Time, Absurdist bureaucracy" },
        { id: 520, name: "Cristi Puiu", nat: "Romania", era: "2000s-Present", works: "The Death of Mr. Lazarescu, Sieranevada", region: "Romania", movement: "Romanian New Wave", theme: "Mortality, Real time, Romanian realism" },
        { id: 521, name: "Radu Jude", nat: "Romania", era: "2010s-Present", works: "Bad Luck Banging or Loony Porn, Aferim!", region: "Romania", movement: "Romanian New Wave", theme: "History, Pornography, Provocative politics" },
        { id: 522, name: "Pedro Costa", nat: "Portugal", era: "1990s-Present", works: "In Vanda's Room, Horse Money", region: "Portugal", movement: "Slow Cinema", theme: "Immigrants, Poverty, Lisbon slums, Painterly" },
        { id: 523, name: "Miguel Gomes", nat: "Portugal", era: "2000s-Present", works: "Arabian Nights trilogy, Tabu", region: "Portugal", movement: "Playful Arthouse", theme: "Storytelling, Portuguese history, Hybrid forms" },
        { id: 524, name: "Laida Lertxundi", nat: "Spain/USA", era: "2010s-Present", works: "Vivir para vivir, 025 Sunset Red", region: "Spain", movement: "Experimental", theme: "California light, 16mm, Landscape" },
        { id: 525, name: "Thom Andersen", nat: "USA", era: "1970s-Present", works: "Los Angeles Plays Itself", region: "Americas", movement: "Essay Film", theme: "Film history, Los Angeles, Found footage" },
        { id: 526, name: "Harun Farocki", nat: "Germany", era: "1960s-2014", works: "Images of the World and the Inscription of War", region: "Germany", movement: "Essay Film", theme: "Images, War, Labor, Materialist analysis" },
        { id: 527, name: "Hito Steyerl", nat: "Germany", era: "2000s-Present", works: "How Not to Be Seen, November", region: "Germany", movement: "Video Essay", theme: "Digital images, Warfare, Contemporary art" },
        { id: 528, name: "Trinh T. Minh-ha", nat: "Vietnam/USA", era: "1980s-Present", works: "Reassemblage, Surname Viet Given Name Nam", region: "Americas", movement: "Post-Colonial Essay", theme: "Voice, Ethnography critique, Vietnam" },
        { id: 529, name: "Raúl Ruiz", nat: "Chile/France", era: "1960s-2011", works: "Mysteries of Lisbon, Three Crowns of the Sailor", region: "France", movement: "Baroque Cinema", theme: "Labyrinthine narratives, Exile, Chilean surrealism" },
        { id: 530, name: "Artavazd Peleshian", nat: "Armenia", era: "1960s-Present", works: "The Seasons, Our Century", region: "Armenia", movement: "Distance Montage", theme: "Non-narrative, Rhythm, Nature/Culture" },
        { id: 531, name: "Věra Chytilová", nat: "Czech", era: "1960s-2000s", works: "Daisies, Fruit of Paradise", region: "Czech Republic", movement: "Czech New Wave", theme: "Anarchic feminism, Surrealism, Visual excess" },
        { id: 532, name: "Mrinal Sen", nat: "India", era: "1950s-2000s", works: "Calcutta trilogy, Interview", region: "India", movement: "Parallel Cinema", theme: "Political cinema, Brecht, Urban poverty" },
        { id: 533, name: "John Akomfrah", nat: "Ghana/UK", era: "1980s-Present", works: "Handsworth Songs, The Stuart Hall Project", region: "UK", movement: "Black Audio Film Collective", theme: "Diaspora, Archive, Multi-screen essays" },

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

    // --- UTILITY FUNCTIONS ---
    const getEraYear = (era) => {
        const yearMatch = era.match(/(\d{4})/);
        return yearMatch ? parseInt(yearMatch[0], 10) : 0;
    };

    // --- RENDER FUNCTIONS ---

    // 1. Render Timeline (Vertical timeline with dots and era markers)
    const renderTimeline = (data) => {
        const sortedData = [...data].sort((a, b) => getEraYear(a.era) - getEraYear(b.era));
        let lastDecade = null;

        timelineContent.innerHTML = sortedData.map((d) => {
            const year = getEraYear(d.era);
            const decade = Math.floor(year / 10) * 10;
            let decadeLabel = '';

            // Display a decade marker for each new decade
            if (decade !== lastDecade && decade > 0) {
                decadeLabel = `<div class="timeline-year">${decade}s</div>`;
                lastDecade = decade;
            }

            return `
                <div class="timeline-item">
                    ${decadeLabel}
                    <div class="timeline-dot"></div>
                    <div class="timeline-card" onclick="openModal(${d.id})">
                        <h3>${d.name}</h3>
                        <p class="timeline-meta">${d.nat} • ${d.era}</p>
                        <p class="timeline-works">${d.works.split(',')[0]}</p>
                    </div>
                </div>
            `;
        }).join('');
    };

    // Helper: Determine genre from movement or theme
    const getGenreFromDirector = (d) => {
        // Map movements that are actually genres
        const genreMovements = {
            'Documentary': 'Documentary',
            'Direct Cinema': 'Documentary',
            'Cinéma Vérité': 'Documentary',
            'Documentary / Essay': 'Documentary',
            'Essay Film': 'Documentary',
            'Video Essay': 'Documentary',
            'Experimental Documentary': 'Documentary',
            'Political Documentary': 'Documentary',
            'Sensory Ethnography': 'Documentary',
            'Elevated Horror': 'Horror',
            'Social Horror': 'Horror',
            'Body Horror': 'Horror',
            'Art Horror / Cult': 'Horror',
            'Indie Comedy-Drama': 'Comedy-Drama',
            'Psychedelic Cinema': 'Experimental',
            'Experimental': 'Experimental',
            'Experimental / Cult': 'Experimental',
            'Structural Film': 'Experimental',
            'American Avant-Garde': 'Experimental',
            'Avant-Garde': 'Experimental',
            'Camp / Underground': 'Experimental'
        };

        if (d.movement && genreMovements[d.movement]) {
            return genreMovements[d.movement];
        }

        // Fallback: try to infer from theme
        if (d.theme) {
            if (d.theme.toLowerCase().includes('documentary') || d.theme.toLowerCase().includes('observational')) return 'Documentary';
            if (d.theme.toLowerCase().includes('horror')) return 'Horror';
            if (d.theme.toLowerCase().includes('experimental') || d.theme.toLowerCase().includes('avant-garde')) return 'Experimental';
            if (d.theme.toLowerCase().includes('comedy')) return 'Comedy-Drama';
        }

        return 'Drama'; // Default genre
    };

    // 2. Render Categories (By Country, Movement, OR Genre)
    const renderCategories = (data, mode = 'country') => {
        let filteredData = data;

        // When in movement mode, only show directors with actual movement tags
        if (mode === 'movement') {
            filteredData = data.filter(d => d.movement); // Only directors with movement field
        }

        const getCategory = (d) => {
            if (mode === 'country') {
                return d.nat; // Group by nationality
            } else if (mode === 'movement') {
                return d.movement; // Group by movement only (no fallback)
            } else if (mode === 'genre') {
                return getGenreFromDirector(d); // Group by genre
            }
        };

        const categories = [...new Set(filteredData.map(getCategory))].sort();

        categoriesGrid.innerHTML = categories.map(cat => {
            const dirs = filteredData.filter(d => getCategory(d) === cat);
            return `
                <div class="category-group">
                    <h3>${cat} <span class="count">(${dirs.length})</span></h3>
                    ${dirs.map(d => `
                        <div class="director-link" onclick="openModal(${d.id})">
                            <span>${d.name}</span>
                            <span class="nat">${mode === 'country' ? d.era : d.nat}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('');
    };

    // 3. Render Graph (Network with connections and labels)
    const renderGraph = (data) => {
        const container = document.getElementById('graph-container');
        const { width, height } = container.getBoundingClientRect();
        const svg = d3.select("#influence-graph");
        svg.selectAll("*").remove();

        // Create nodes
        const nodes = data.map(d => ({
            id: d.id,
            name: d.name,
            category: d.movement || d.region || 'Other',
            nat: d.nat
        }));

        // Create links based on shared movements/regions
        const links = [];
        const categoryMap = new Map();

        data.forEach(d => {
            const cat = d.movement || d.region || 'Other';
            if (!categoryMap.has(cat)) {
                categoryMap.set(cat, []);
            }
            categoryMap.get(cat).push(d.id);
        });

        // Create sample connections within same category
        categoryMap.forEach((ids) => {
            for (let i = 0; i < ids.length - 1; i++) {
                if (Math.random() > 0.7) { // Random sparse connections
                    links.push({ source: ids[i], target: ids[i + 1] });
                }
            }
        });

        // Color scale
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // Create simulation
        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(100))
            .force("charge", d3.forceManyBody().strength(-250))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("x", d3.forceX(width / 2).strength(0.1))
            .force("y", d3.forceY(height / 2).strength(0.1));

        // Add arrowhead marker
        svg.append('defs').append('marker')
            .attr('id', 'arrowhead')
            .attr('viewBox', '-0 -5 10 10')
            .attr('refX', 20)
            .attr('refY', 0)
            .attr('orient', 'auto')
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .append('svg:path')
            .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
            .attr('fill', '#999')
            .style('stroke', 'none');

        // Create links
        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", 1.5)
            .attr('marker-end', 'url(#arrowhead)');

        // Create node groups
        const node = svg.append("g")
            .selectAll("g")
            .data(nodes)
            .join("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", (event) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    event.subject.fx = event.subject.x;
                    event.subject.fy = event.subject.y;
                })
                .on("drag", (event) => {
                    event.subject.fx = event.x;
                    event.subject.fy = event.y;
                })
                .on("end", (event) => {
                    if (!event.active) simulation.alphaTarget(0);
                    event.subject.fx = null;
                    event.subject.fy = null;
                })
            );

        // Add circles to nodes
        node.append("circle")
            .attr("r", 10)
            .attr("fill", d => color(d.category))
            .on("click", (event, d) => {
                const director = directors.find(dir => dir.id === d.id);
                openModal(director.id);
            });

        // Add text labels to nodes
        node.append("text")
            .text(d => d.name)
            .attr('x', 15)
            .attr('y', 5)
            .attr('font-size', '11px')
            .attr('fill', '#fff');

        // Update positions on tick
        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node.attr("transform", d => `translate(${d.x},${d.y})`);
        });
    };

    // --- FAVORITES & WATCH LATER (localStorage) ---
    const getFavorites = () => JSON.parse(localStorage.getItem('favorites') || '[]');
    const getWatchLater = () => JSON.parse(localStorage.getItem('watchLater') || '[]');
    const setFavorites = (ids) => localStorage.setItem('favorites', JSON.stringify(ids));
    const setWatchLater = (ids) => localStorage.setItem('watchLater', JSON.stringify(ids));

    const toggleFavorite = (id) => {
        let favs = getFavorites();
        if (favs.includes(id)) {
            favs = favs.filter(fid => fid !== id);
        } else {
            favs.push(id);
        }
        setFavorites(favs);
        openModal(id); // Refresh modal to update button state
        renderFavorites();
    };

    const toggleWatchLater = (id) => {
        let watchList = getWatchLater();
        if (watchList.includes(id)) {
            watchList = watchList.filter(wid => wid !== id);
        } else {
            watchList.push(id);
        }
        setWatchLater(watchList);
        openModal(id); // Refresh modal to update button state
        renderWatchLater();
    };

    const renderFavorites = () => {
        const favIds = getFavorites();
        const favDirectors = directors.filter(d => favIds.includes(d.id));
        const container = document.getElementById('favorites-grid');

        if (favDirectors.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:3rem; color:var(--muted-text);">No favorites yet. Click the ★ button in any director\'s modal to add them here.</div>';
            return;
        }

        renderTimeline(favDirectors);
        // Copy timeline content to favorites
        container.innerHTML = document.getElementById('timeline-content').innerHTML;
    };

    const renderWatchLater = () => {
        const watchIds = getWatchLater();
        const watchDirectors = directors.filter(d => watchIds.includes(d.id));
        const container = document.getElementById('watchlater-grid');

        if (watchDirectors.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:3rem; color:var(--muted-text);">Watch later list is empty. Click the ⏱ button in any director\'s modal to add them here.</div>';
            return;
        }

        // Render as timeline style
        const sortedData = [...watchDirectors].sort((a, b) => getEraYear(a.era) - getEraYear(b.era));
        let lastDecade = null;

        container.innerHTML = sortedData.map((d) => {
            const year = getEraYear(d.era);
            const decade = Math.floor(year / 10) * 10;
            let decadeLabel = '';

            if (decade !== lastDecade && decade > 0) {
                decadeLabel = `<div class="timeline-year">${decade}s</div>`;
                lastDecade = decade;
            }

            return `
                <div class="timeline-item">
                    ${decadeLabel}
                    <div class="timeline-dot"></div>
                    <div class="timeline-card" onclick="openModal(${d.id})">
                        <h3>${d.name}</h3>
                        <p class="timeline-meta">${d.nat} • ${d.era}</p>
                        <p class="timeline-works">${d.works.split(',')[0]}</p>
                    </div>
                </div>
            `;
        }).join('');
    };

    // --- MODAL & SEARCH ---
    window.openModal = (id) => {
        const d = directors.find(x => x.id === id);
        if (!d) return;

        const isFavorite = getFavorites().includes(id);
        const isWatchLater = getWatchLater().includes(id);

        // Film link section if available - PROMINENT VERSION
        const filmLinkHtml = d.link ? `
            <div style="margin:1.5rem 0; padding:1rem; border:3px solid var(--primary-color); background:#1a0505;">
                <div style="display:flex; align-items:center; gap:1rem;">
                    <span style="font-size:2rem;">🎬</span>
                    <div style="flex:1;">
                        <div style="color:var(--primary-color); font-weight:700; margin-bottom:0.5rem;">WATCH FILM ONLINE</div>
                        <a href="${d.link}" target="_blank" style="display:inline-block; padding:0.75rem 1.5rem; background:var(--primary-color); color:#000; text-decoration:none; font-weight:700; text-transform:uppercase; font-size:0.9rem;">
                            ▶ ${d.works.split(',')[0].substring(0, 40)}${d.works.split(',')[0].length > 40 ? '...' : ''}
                        </a>
                    </div>
                </div>
            </div>
        ` : '';

        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${d.name}</h2>
                <div class="modal-badges">
                    <span class="badge nat">${d.nat}</span>
                    <span class="badge era">${d.movement || d.region}</span>
                    <span class="badge">${d.era}</span>
                </div>
                <div class="modal-actions">
                    <button class="action-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${id})" title="Add to favorites">
                        ★ ${isFavorite ? 'Favorited' : 'Favorite'}
                    </button>
                    <button class="action-btn ${isWatchLater ? 'active' : ''}" onclick="event.stopPropagation(); toggleWatchLater(${id})" title="Add to watch later">
                        ⏱ ${isWatchLater ? 'Added' : 'Watch Later'}
                    </button>
                </div>
            </div>
            <div class="modal-body">
                ${filmLinkHtml}
                <h4>Major Works</h4>
                <p>${d.works}</p>
                <h4>Core Themes</h4>
                <p>${d.theme}</p>
                <div style="margin-top:2rem; font-size:0.9rem; color: var(--muted-text);">
                    <a href="https://en.wikipedia.org/wiki/${d.name.replace(/ /g, '_')}" target="_blank" style="color:#38bdf8; text-decoration:none;">Read full biography on Wikipedia &rarr;</a>
                </div>
            </div>
        `;
        modalOverlay.classList.add('show');
    };

    // Make toggle functions available globally
    window.toggleFavorite = toggleFavorite;
    window.toggleWatchLater = toggleWatchLater;

    modalCloseBtn.onclick = () => modalOverlay.classList.remove('show');
    modalOverlay.onclick = (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('show'); };

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = directors.filter(d =>
            d.name.toLowerCase().includes(term) ||
            d.nat.toLowerCase().includes(term) ||
            (d.region && d.region.toLowerCase().includes(term)) ||
            (d.movement && d.movement.toLowerCase().includes(term)) ||
            d.works.toLowerCase().includes(term)
        );
        renderTimeline(filtered);
        renderCategories(filtered);
        renderGraph(filtered);
    });

    // --- POPULATE MOVEMENT FILTER DROPDOWN ---
    const movementFilter = document.getElementById('movement-filter');
    const allMovements = [...new Set(
        directors
            .map(d => d.movement)
            .filter(m => m) // Remove undefined/null
    )].sort();

    allMovements.forEach(movement => {
        const option = document.createElement('option');
        option.value = movement;
        option.textContent = movement;
        movementFilter.appendChild(option);
    });

    // Movement filter change event
    movementFilter.addEventListener('change', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedMovement = movementFilter.value;

        const filtered = directors.filter(d => {
            const matchesSearch = !searchTerm ||
                d.name.toLowerCase().includes(searchTerm) ||
                d.nat.toLowerCase().includes(searchTerm) ||
                (d.region && d.region.toLowerCase().includes(searchTerm)) ||
                (d.movement && d.movement.toLowerCase().includes(searchTerm)) ||
                d.works.toLowerCase().includes(searchTerm) ||
                d.theme.toLowerCase().includes(searchTerm);

            const matchesMovement = !selectedMovement || d.movement === selectedMovement;

            return matchesSearch && matchesMovement;
        });

        renderTimeline(filtered);
        renderCategories(filtered);
        if (document.getElementById('graph-view').classList.contains('active')) {
            renderGraph(filtered);
        }
    });

    // Update search to work with movement filter
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const selectedMovement = movementFilter.value;

        const filtered = directors.filter(d => {
            const matchesSearch = !term ||
                d.name.toLowerCase().includes(term) ||
                d.nat.toLowerCase().includes(term) ||
                (d.region && d.region.toLowerCase().includes(term)) ||
                (d.movement && d.movement.toLowerCase().includes(term)) ||
                d.works.toLowerCase().includes(term) ||
                d.theme.toLowerCase().includes(term);

            const matchesMovement = !selectedMovement || d.movement === selectedMovement;

            return matchesSearch && matchesMovement;
        });

        renderTimeline(filtered);
        renderCategories(filtered);
        if (document.getElementById('graph-view').classList.contains('active')) {
            renderGraph(filtered);
        }
    });

    // --- TABS ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));
            tab.classList.add('active');
            const viewId = tab.id.replace('-tab', '-view');
            document.getElementById(viewId).classList.add('active');

            // Render appropriate view
            if (viewId === 'graph-view') {
                renderGraph(directors);
            } else if (viewId === 'favorites-view') {
                renderFavorites();
            } else if (viewId === 'watchlater-view') {
                renderWatchLater();
            }
        });
    });

    // --- CATEGORY SUB-TABS ---
    let currentCategoryMode = 'country';
    document.querySelectorAll('.category-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategoryMode = btn.dataset.category;
            renderCategories(directors, currentCategoryMode);
        });
    });

    // --- INITIAL RENDER ---
    renderTimeline(directors);
    renderCategories(directors, 'country'); // Start with country view
});
