let congenitalTraits = [];
let educationTraits = [];
let personalityTraits = [];
let dataLoaded = false;

const faiths = [
    'Apostolic', 'Ash\'ari', 'Asatru', 'Buddhism', 'Catholicism', 'Coptic',
    'Hellenism', 'Hinduism', 'Insular Christianity', 'Isma\'ilism', 'Jainism',
    'Kuzarism', 'Manichaeism', 'Muwalladi', 'Nestorianism', 'Orthodoxy', 'Rabbinism',
    'Romuva', 'Slovienkan Pravda', 'Suomenusko', 'Taoism', 'Tengrism', 'Vidilism',
    'Zoroastrianism'
];

const cultures = {
    'Norse': {
        male_names: ['Bjorn', 'Ivar', 'Ragnar', 'Harald', 'Erik', 'Leif', 'Olaf', 'Sigurdr', 'Hasteinn', 'Knut'],
        female_names: ['Lagertha', 'Aslaug', 'Sigrid', 'Gunnhild', 'Thyra', 'Astrid', 'Freydis', 'Ragnheidr']
    },
    'Anglo-Saxon': {
        male_names: ['Alfred', 'Aethelred', 'Edgar', 'Godwin', 'Leofric', 'Oswald', 'Eadweard', 'Aethelstan'],
        female_names: ['Eadgifu', 'Aethelflaed', 'Hilda', 'Godiva', 'Wynflaed', 'Aelfgifu', 'Eadburh']
    },
    'Greek': {
        male_names: ['Alexios', 'Basileios', 'Konstantinos', 'Leon', 'Niketas', 'Theodoros', 'Andronikos', 'Ioannes'],
        female_names: ['Zoe', 'Theodora', 'Eudokia', 'Irene', 'Helena', 'Kassandra', 'Anna', 'Euphrosyne']
    },
    'Arabic': {
        male_names: ['Muhammad', 'Abdallah', 'Hassan', 'Umar', 'Ali', 'Khalid', 'Harun', 'Ja\'far'],
        female_names: ['Fatima', 'Aisha', 'Khadija', 'Zaynab', 'Safiyya', 'Zubaydah', 'Layla']
    },
    'Irish': {
        male_names: ['Brian', 'Murchad', 'Domnall', 'Conchobar', 'Flann', 'Niall', 'Aed', 'Tadg'],
        female_names: ['Gormlaith', 'Aoife', 'Sadb', 'Derbforgaill', 'Finnguala', 'Niamh', 'Muirgel']
    },
    'Frankish': {
        male_names: ['Charles', 'Louis', 'Philippe', 'Robert', 'Hugues', 'Eudes', 'Geoffroi', 'Foulques'],
        female_names: ['Adelaide', 'Blanche', 'Constance', 'Giselle', 'Ermengarde', 'Mathilde', 'Jeanne']
    },
    'Castilian': {
        male_names: ['Rodrigo', 'Sancho', 'Alfonso', 'Fernando', 'Ramiro', 'Garcia', 'Diego', 'Pedro'],
        female_names: ['Urraca', 'Elvira', 'Jimena', 'Sancha', 'Isabela', 'Teresa', 'Leonor']
    },
    'German': {
        male_names: ['Heinrich', 'Konrad', 'Friedrich', 'Otto', 'Lothar', 'Siegfried', 'Maximilian', 'Rudolf'],
        female_names: ['Mathilde', 'Gisela', 'Adelheid', 'Ida', 'Kunigunde', 'Agnes', 'Gertrud']
    },
    'Italian': {
        male_names: ['Giovanni', 'Marco', 'Matteo', 'Francesco', 'Alessandro', 'Lorenzo', 'Antonio', 'Guido'],
        female_names: ['Bianca', 'Isabella', 'Caterina', 'Giulia', 'Lucrezia', 'Sofia', 'Beatrice']
    },
    'Russian': {
        male_names: ['Ivan', 'Yaroslav', 'Vladimir', 'Sviatoslav', 'Oleg', 'Igor', 'Mstislav', 'Vsevolod'],
        female_names: ['Olga', 'Svetlana', 'Anastasia', 'Dobroniega', 'Helena', 'Eupraxia', 'Feodora']
    },
    'Polish': {
        male_names: ['Boleslaw', 'Mieszko', 'Kazimierz', 'Wladyslaw', 'Zbigniew', 'Leszek', 'Siemowit'],
        female_names: ['Dobrawa', 'Richeza', 'Swietoslawa', 'Judyta', 'Agnieszka', 'Jadwiga', 'Ludmila']
    },
    'Persian': {
        male_names: ['Rostam', 'Ardashir', 'Kavad', 'Bahram', 'Ismail', 'Farhad', 'Khosrow', 'Yazdegerd'],
        female_names: ['Tahmina', 'Boran', 'Shirin', 'Parvin', 'Azar', 'Roxana', 'Mandana']
    },
    'Coptic': {
        male_names: ['Markos', 'Shenouda', 'Bishoi', 'Mina', 'Tawadros', 'Abanoub', 'Giorgis', 'Bakhum'],
        female_names: ['Demiana', 'Marina', 'Verena', 'Helena', 'Ferial', 'Tasoni', 'Samira']
    },
    'Tibetan': {
        male_names: ['Songtsen', 'Trisong', 'Ralpacan', 'Tashi', 'Drogon', 'Lhaje', 'Nyima'],
        female_names: ['Yeshe', 'Dronma', 'Tsering', 'Pema', 'Lhamo', 'Dechen', 'Sonam']
    },
    'Han': {
        male_names: ['Taizong', 'Gaozu', 'Xuanzong', 'An', 'Shun', 'Zhong', 'Rui', 'Zhao'],
        female_names: ['Wu', 'Wei', 'Yang', 'Dou', 'Wang', 'Xiao', 'Gao', 'Chen']
    },
    'Finnish': {
        male_names: ['Vainamoinen', 'Ilmarinen', 'Ukko', 'Tapio', 'Antero', 'Kaleva', 'Kauko'],
        female_names: ['Aino', 'Mielikki', 'Tellervo', 'Pohjan-akka', 'Kyllikki', 'Ilmatar']
    },
    'Berber': {
        male_names: ['Yusuf', 'Tariq', 'Idris', 'Yahya', 'Masinissa', 'Gaya', 'Aksil'],
        female_names: ['Tin-Hinan', 'Kahina', 'Tiziri', 'Seksu', 'Tufitran', 'Dihya']
    },

    // 20 New Cultures
    'Scottish': {
        male_names: ['Domnall', 'Máel Coluim', 'Donnchad', 'Robert', 'David', 'Alexander', 'Eachann'],
        female_names: ['Margaret', 'Matilda', 'Bethóc', 'Gruoch', 'Isabella', 'Marjory', 'Euphemia']
    },
    'Welsh': {
        male_names: ['Llywelyn', 'Gruffudd', 'Rhys', 'Owain', 'Hywel', 'Maredudd', 'Cadell'],
        female_names: ['Gwenllian', 'Nest', 'Angharad', 'Carys', 'Rhiannon', 'Seren', 'Efa']
    },
    'Breton': {
        male_names: ['Alan', 'Conan', 'Hoel', 'Riwallon', 'Budic', 'Gwenn', 'Nominoe'],
        female_names: ['Aziliz', 'Enora', 'Rozenn', 'Bleuenn', 'Sterenn', 'Aela', 'Yuna']
    },
    'Occitan': {
        male_names: ['Ramon', 'Bernat', 'Guilhem', 'Pons', 'Folquet', 'Peire', 'Bertran'],
        female_names: ['Ermessenda', 'Almodis', 'Sibil·la', 'Teresa', 'Douce', 'Beatriz', 'Garsenda']
    },
    'Dutch': {
        male_names: ['Dirk', 'Floris', 'Arnulf', 'Gerolf', 'Boudewijn', 'Willem', 'Jan'],
        female_names: ['Ada', 'Bertha', 'Sophia', 'Lutgardis', 'Petronilla', 'Geertruida', 'Machteld']
    },
    'Swedish': {
        male_names: ['Erik', 'Olof', 'Björn', 'Magnus', 'Inge', 'Karl', 'Sverker'],
        female_names: ['Ingegerd', 'Kristina', 'Helena', 'Katarina', 'Sigrid', 'Birgitta', 'Margareta']
    },
    'Hungarian (Magyar)': {
        male_names: ['Árpád', 'István', 'László', 'Béla', 'Géza', 'Kálmán', 'András'],
        female_names: ['Ilona', 'Erzsébet', 'Piroska', 'Sarolt', 'Judit', 'Ágnes', 'Katalin']
    },
    'Bohemian (Czech)': {
        male_names: ['Václav', 'Boleslav', 'Premysl', 'Bretislav', 'Spytihnev', 'Vratislav', 'Sobeslav'],
        female_names: ['Ludmila', 'Doubravka', 'Judita', 'Anezka', 'Eliska', 'Markéta', 'Jitka']
    },
    'Croatian': {
        male_names: ['Tomislav', 'Stjepan', 'Zvonimir', 'Petar', 'Kresimir', 'Trpimir', 'Domagoj'],
        female_names: ['Jelena', 'Marija', 'Katarina', 'Doroteja', 'Ana', 'Margarita', 'Ljudmila']
    },
    'Vlach (Romanian)': {
        male_names: ['Mircea', 'Vlad', 'Radu', 'Dan', 'Basarab', 'Mihai', 'Neagoe'],
        female_names: ['Doamna', 'Elena', 'Ana', 'Stanca', 'Maria', 'Ruxandra', 'Clara']
    },
    'Armenian': {
        male_names: ['Levon', 'Tigran', 'Ashot', 'Gagik', 'Smbat', 'Vahram', 'Hethum'],
        female_names: ['Tamar', 'Zabel', 'Keran', 'Mariam', 'Elpinike', 'Shushan', 'Catarina']
    },
    'Georgian': {
        male_names: ['Davit', 'Giorgi', 'Vakhtang', 'Bagrat', 'Demetre', 'Konstantine', 'Levan'],
        female_names: ['Tamar', 'Rusudan', 'Mariami', 'Nestan-Darejan', 'Shorena', 'Elene', 'Darejan']
    },
    'Alan': {
        male_names: ['Durgul', 'Itaz', 'Saru', 'Khaz', 'Bagatar', 'Ambal', 'Kharas'],
        female_names: ['Shatana', 'Zarifa', 'Madina', 'Alanis', 'Atsa', 'Dzerassa', 'Fatima']
    },
    'Cuman': {
        male_names: ['Köten', 'Begluk', 'Tugorkan', 'Bonjak', 'Aepak', 'Gzak', 'Konchak'],
        female_names: ['Almira', 'Aygül', 'Karina', 'Zarina', 'Aytulun', 'Esen', 'Sharka']
    },
    'Tamil': {
        male_names: ['Rajaraja', 'Rajendra', 'Karikala', 'Parantaka', 'Vikrama', 'Kulottunga', 'Sundara'],
        female_names: ['Sembiyan', 'Kundavai', 'Vaanavan', 'Panchavan', 'Loka', 'Mala', 'Anupama']
    },
    'Rajput': {
        male_names: ['Prithviraj', 'Rana', 'Hammir', 'Bhoja', 'Maharana', 'Sangram', 'Jai'],
        female_names: ['Padmini', 'Samyukta', 'Karnavati', 'Rani', 'Mira', 'Ratan', 'Devi']
    },
    'Bengali': {
        male_names: ['Gopala', 'Dharmapala', 'Devapala', 'Mahipala', 'Shashanka', 'Vijaya', 'Ballala'],
        female_names: ['Vilasa', 'Karuna', 'Loka', 'Mala', 'Rani', 'Devi', 'Shila']
    },
    'Nubian': {
        male_names: ['Piye', 'Taharqa', 'Merkurios', 'Silko', 'Zacharias', 'Georgios', 'Kudlanbes'],
        female_names: ['Kandake', 'Amanirenas', 'Shanakdakhete', 'Nawal', 'Mariam', 'Salome', 'Helena']
    },
    'Somali': {
        male_names: ['Ahmad', 'Fakr', 'Sa\'ad', 'Umar', 'Yusuf', 'Ibrahim', 'Mahfuz'],
        female_names: ['Arawelo', 'Fardusa', 'Dahabo', 'Amal', 'Habiba', 'Xaawo', 'Canab']
    },
    'Andalusian': {
        male_names: ['Abd al-Rahman', 'Al-Hakam', 'Hisham', 'Tariq', 'Yusuf', 'Ismail', 'Muhammad'],
        female_names: ['Subh', 'Aisha', 'Wallada', 'Zaynab', 'Lubna', 'Fatima', 'Safiyya']
    }
};

const genders = ['Male', 'Female'];
const congenitalCategories = {
    intelligence: ['Imbecile', 'Stupid', 'Slow', 'Quick', 'Intelligent', 'Genius'],
    physique: ['Feeble', 'Frail', 'Delicate', 'Hale', 'Robust', 'Herculean', 'Amazonian'],
    appearance: ['Hideous', 'Ugly', 'Homely', 'Comely', 'Pretty', 'Handsome', 'Beautiful'],
    fertility: ['Barren', 'Sterile', 'Fecund']
};
const opposingTraits = {
    'Brave': ['Craven'], 'Craven': ['Brave'], 'Calm': ['Wrathful'], 'Wrathful': ['Calm'],
    'Generous': ['Greedy'], 'Greedy': ['Generous'], 'Honest': ['Deceitful'], 'Deceitful': ['Honest'],
    'Just': ['Arbitrary'], 'Arbitrary': ['Just'], 'Trusting': ['Paranoid'], 'Paranoid': ['Trusting'],
    'Compassionate': ['Callous', 'Sadistic'], 'Callous': ['Compassionate'], 'Sadistic': ['Compassionate'],
    'Humble': ['Arrogant'], 'Arrogant': ['Humble'], 'Patient': ['Impatient'], 'Impatient': ['Patient'],
    'Diligent': ['Lazy'], 'Lazy': ['Diligent'], 'Temperate': ['Gluttonous'], 'Gluttonous': ['Temperate'],
    'Chaste': ['Lustful'], 'Lustful': ['Chaste'], 'Forgiving': ['Vengeful'], 'Vengeful': ['Forgiving'],
    'Gregarious': ['Shy'], 'Shy': ['Gregarious'], 'Zealous': ['Cynical'], 'Cynical': ['Zealous'],
    'Content': ['Ambitious'], 'Ambitious': ['Content']
};
async function loadData() {
    try {
        const congenitalData = await fetch('ck3_congenital_traits.csv').then(res => res.text());
        const educationData = await fetch('ck3_education_traits.csv').then(res => res.text());
        const personalityData = await fetch('ck3_personality_traits.csv').then(res => res.text());
        congenitalTraits = Papa.parse(congenitalData, { header: true, dynamicTyping: true }).data.filter(t => t.trait_name);
        educationTraits = Papa.parse(educationData, { header: true, dynamicTyping: true }).data.filter(t => t.trait_name);
        personalityTraits = Papa.parse(personalityData, { header: true, dynamicTyping: true }).data.filter(t => t.trait_name);
        dataLoaded = true;
    } catch (error) { console.error('Error loading data:', error); document.getElementById('characterResult').innerHTML = '<div class="error">Error loading trait data.</div>'; }
}
function getTraitCategory(traitName) { for (const [category, traits] of Object.entries(congenitalCategories)) { if (traits.includes(traitName)) return category; } return 'single'; }
function canAddCongenitalTrait(traitName, selectedCongenitalTraits) { const newCategory = getTraitCategory(traitName); if (newCategory === 'single') return true; return !selectedCongenitalTraits.some(selected => getTraitCategory(selected.trait_name) === newCategory); }
function getRandomElement(array) { return array[Math.floor(Math.random() * array.length)]; }
function canAddPersonalityTrait(traitName, selectedPersonalityTraits) { const opposing = opposingTraits[traitName] || []; return !selectedPersonalityTraits.some(selected => opposing.includes(selected.trait_name)); }
function formatCost(cost) { if (cost > 0) return `<span class="positive-cost">+${cost}</span>`; if (cost < 0) return `<span class="negative-cost">${cost}</span>`; return `<span class="zero-cost">0</span>`; }

function generateCharacter() {
    if (!dataLoaded) {
        document.getElementById('characterResult').innerHTML = '<div class="loading">Loading trait data...</div>';
        loadData().then(() => { if (dataLoaded) generateCharacter(); });
        return;
    }

    const TOTAL_POINTS = 400;
    let usedPoints = 106;

    const age = Math.floor(Math.random() * 45) + 16; // Random age between 16 and 60


    // Generate biographical details
    const selectedSex = getRandomElement(genders);
    const cultureNameKeys = Object.keys(cultures);
    const selectedCultureName = getRandomElement(cultureNameKeys);
    const selectedCultureData = cultures[selectedCultureName];
    const selectedFaith = getRandomElement(faiths);
    const selectedName = (selectedSex === 'Male') ? getRandomElement(selectedCultureData.male_names) : getRandomElement(selectedCultureData.female_names);

    // Select traits (logic remains the same)
    const selectedEducation = getRandomElement(educationTraits);
    usedPoints += selectedEducation.point_cost;
    const selectedPersonalityTraits = [];
    const availablePersonality = [...personalityTraits];
    const numPersonalityTraits = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < numPersonalityTraits && availablePersonality.length > 0; i++) {
        const validTraits = availablePersonality.filter(trait => canAddPersonalityTrait(trait.trait_name, selectedPersonalityTraits));
        if (validTraits.length === 0) break;
        const selected = getRandomElement(validTraits); selectedPersonalityTraits.push(selected); usedPoints += selected.point_cost;
        const index = availablePersonality.indexOf(selected); if (index > -1) availablePersonality.splice(index, 1);
        const opposing = opposingTraits[selected.trait_name] || [];
        opposing.forEach(opposingName => { const oppIndex = availablePersonality.findIndex(t => t.trait_name === opposingName); if (oppIndex > -1) availablePersonality.splice(oppIndex, 1); });
    }
    const selectedCongenitalTraits = [];
    const availableCongenital = [...congenitalTraits];
    const numCongenitalTraits = Math.floor(Math.random() * 6);
    for (let i = 0; i < numCongenitalTraits && availableCongenital.length > 0; i++) {
        const validTraits = availableCongenital.filter(trait => canAddCongenitalTrait(trait.trait_name, selectedCongenitalTraits));
        if (validTraits.length === 0) break;
        const selected = getRandomElement(validTraits); selectedCongenitalTraits.push(selected); usedPoints += selected.point_cost;
        const index = availableCongenital.indexOf(selected); if (index > -1) availableCongenital.splice(index, 1);
        const selectedCategory = getTraitCategory(selected.trait_name);
        if (selectedCategory !== 'single') {
            const categoryTraits = congenitalCategories[selectedCategory];
            for (const traitName of categoryTraits) { const catIndex = availableCongenital.findIndex(t => t.trait_name === traitName); if (catIndex > -1) availableCongenital.splice(catIndex, 1); }
        }
    }

    displayCharacter(selectedName, age, selectedSex, selectedCultureName, selectedFaith, selectedEducation, selectedPersonalityTraits, selectedCongenitalTraits, usedPoints);
}

function displayCharacter(name, age, sex, culture, faith, education, personality, congenital, totalUsed, basePoints = 106) {
    const allTraits = [education, ...personality, ...congenital];
    const efficiency = ((totalUsed / 400) * 100).toFixed(1);

    const html = `
        <div class="character-sheet">
            <div class="character-header">
                <h2>${name}, ${age}</h2>
                <div class="character-subheader">
                    <div class="subheader-item">
                        <i class="fa-solid fa-cross"></i> <!-- Faith Icon -->
                        <span>${faith}</span>
                    </div>
                    <div class="subheader-item">
                        <i class="fa-solid fa-flag"></i> <!-- Culture Icon -->
                        <span>${culture}</span>
                    </div>
                </div>
            </div>

            <div class="traits-container">
                <h3>Traits</h3>
                <div class="traits-grid">
                    ${allTraits.map(trait => `
                        <div class="trait-item">
                            <img src="${trait.image_link}" alt="${trait.trait_name}" class="trait-icon" title="${trait.trait_name}">
                            <div class="trait-name">${trait.trait_name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="build-summary">
            <h3>Build Summary</h3>
            <div class="points-breakdown">
                <div class="points-item"><strong>Base:</strong> ${formatCost(basePoints)}</div>
                <div class="points-item"><strong>Education:</strong> ${formatCost(education.point_cost)}</div>
                <div class="points-item"><strong>Personality:</strong> ${formatCost(personality.reduce((s, t) => s + t.point_cost, 0))}</div>
                <div class="points-item"><strong>Congenital:</strong> ${formatCost(congenital.reduce((s, t) => s + t.point_cost, 0))}</div>
                <div class="points-item"><strong>Total:</strong> ${formatCost(totalUsed)} / 400</div>
            </div>
            <div class="efficiency-info">Budget Efficiency: ${efficiency}%</div>
        </div>
    `;

    document.getElementById('characterResult').innerHTML = html;
}

window.addEventListener('load', loadData);