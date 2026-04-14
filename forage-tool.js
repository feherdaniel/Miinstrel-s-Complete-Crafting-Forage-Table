let currentLang = "en";

const ingredients = {
    amalgamSlagClump: { rarity: "uncommon", type: "acidic", material: "earthenware" },
    gelatinousCubeCore: { rarity: "very_rare", type: "acidic", material: "fluid" },
    fracturedPrismaticWeave: { rarity: "uncommon", type: "chaotic", material: "textile" },
    brokenModronGear: { rarity: "very_rare", type: "chaotic", material: "metal" },
    vitrifiedWhiteDragonBreathShard: { rarity: "very_rare", type: "cold", material: "glass" },
    hoarfrostLichen: { rarity: "uncommon", type: "cold", material: "spice" },
    direwolfPelt: { rarity: "uncommon", type: "cold", material: "hide" },
    cryingObsidian: { rarity: "uncommon", type: "dimensional", material: "mineral" },
    impHide: { rarity: "uncommon", type: "fiendish", material: "hide" },
    cinderrootSprout: { rarity: "uncommon", type: "fiery", material: "plant" },
    everburningPhoenixAsh: { rarity: "very_rare", type: "fiery", material: "earthenware" },
    stoneOfInfiniteStair: { rarity: "very_rare", type: "dimensional", material: "mineral" },
    archdevilRubyheart: { rarity: "very_rare", type: "fiendish", material: "gem" },
    hillGiantKnuckleFragment: { rarity: "uncommon", type: "forceful", material: "bone" },
    pristineDoppelgangerSkin: { rarity: "very_rare", type: "mercurial", material: "hide" },
    blueDragonStormglassEye: { rarity: "very_rare", type: "lightning", material: "gem" },
    feywardTreeLeaf: { rarity: "very_rare", type: "inert", material: "plant" },
    malleableMetal: { rarity: "uncommon", type: "mercurial", material: "metal" },
    damagedTarrasqueScaleShard: { rarity: "very_rare", type: "forceful", material: "hide" },
    miasmaCuredLeather: { rarity: "uncommon", type: "necrotic", material: "hide" },
    bronzewoodKernel: { rarity: "uncommon", type: "inert", material: "grain" },
    linenOfFinalBreath: { rarity: "very_rare", type: "necrotic", material: "textile" },
    magnetizedGalvanicPebble: { rarity: "uncommon", type: "lightning", material: "mineral" },
    witherRoseShadowfell: { rarity: "very_rare", type: "phantasmal", material: "plant" },
    illithidSpine: { rarity: "very_rare", type: "psychic", material: "bone" },
    salivaLobotomizedBoar: { rarity: "very_rare", type: "poisonous", material: "fluid" },
    distilledThoughtResidue: { rarity: "uncommon", type: "psychic", material: "fluid" },
    djinniCondensedAetherDust: { rarity: "very_rare", type: "zephyrous", material: "earthenware" },
    blackPearlSinisterVoid: { rarity: "very_rare", type: "void", material: "gem" },
    unicornManeWeave: { rarity: "very_rare", type: "vital", material: "textile" },
    druidicHerbalWeave: { rarity: "uncommon", type: "vital", material: "textile" },
    prismCollapsedSunEcho: { rarity: "very_rare", type: "radiant", material: "gem" },
    pureGlimmeringDew: { rarity: "uncommon", type: "radiant", material: "fluid" },
    planetarFeatherPlume: { rarity: "very_rare", type: "theurgic", material: "textile" },
    stormEaterLamannianOakroot: { rarity: "very_rare", type: "thundering", material: "wood" },
    greenBoomstone: { rarity: "uncommon", type: "thundering", material: "gem" },
    acidEtchedLimestone: { rarity: "common", type: "acidic", material: "mineral" },
    causticBogroot: { rarity: "uncommon", type: "acidic", material: "plant" },
    corrosionCrystal: { rarity: "uncommon", type: "acidic", material: "gem" },
    dissolvingStoneHusk: { rarity: "rare", type: "acidic", material: "mineral" },
    rustmoldSpores: { rarity: "common", type: "acidic", material: "plant" },
    rustscaleLizardShedding: { rarity: "common", type: "acidic", material: "hide" },
    chaosBloomPetals: { rarity: "uncommon", type: "chaotic", material: "plant" },
    entropicBoneFragment: { rarity: "uncommon", type: "chaotic", material: "bone" },
    lucktwistTwig: { rarity: "common", type: "chaotic", material: "wood" },
    realityGlitchSand: { rarity: "rare", type: "chaotic", material: "mineral" },
    tangleweedSeed: { rarity: "common", type: "chaotic", material: "grain" },
    warpedCopperShard: { rarity: "common", type: "chaotic", material: "metal" },
    frostcapMushroom: { rarity: "common", type: "cold", material: "plant" },
    frozenSpringwater: { rarity: "common", type: "cold", material: "fluid" },
    ironColdMetal: { rarity: "common", type: "cold", material: "metal" },
    glacierHeartCrystal: { rarity: "uncommon", type: "cold", material: "gem" },
    iceboundMoonflower: { rarity: "rare", type: "cold", material: "plant" },
    riftwaterDroplet: { rarity: "common", type: "dimensional", material: "fluid" },
    teleportingThistleSeed: { rarity: "common", type: "dimensional", material: "grain" },
    wayfarersKnotThread: { rarity: "common", type: "dimensional", material: "textile" },
    riftglassLens: { rarity: "uncommon", type: "dimensional", material: "glass" },
    naturallyFormedRiftglassSheet: { rarity: "rare", type: "dimensional", material: "glass" },
    abyssalPepperPod: { rarity: "common", type: "fiendish", material: "spice" },
    ashenBoneDust: { rarity: "common", type: "fiendish", material: "bone" },
    charredDevilthorn: { rarity: "common", type: "fiendish", material: "plant" },
    brimstoneRuby: { rarity: "uncommon", type: "fiendish", material: "gem" },
    cursedSoilClump: { rarity: "rare", type: "fiendish", material: "earthenware" },
    crackedObsidianChip: { rarity: "common", type: "fiery", material: "gem" },
    forgeSparkSlag: { rarity: "common", type: "fiery", material: "metal" },
    oakFieryWood: { rarity: "common", type: "fiery", material: "wood" },
    borax: { rarity: "uncommon", type: "fiery", material: "mineral" },
    magnesium: { rarity: "uncommon", type: "fiery", material: "mineral" },
    solarIgnitionSeed: { rarity: "rare", type: "fiery", material: "grain" },
    anvilDust: { rarity: "common", type: "forceful", material: "metal" },
    bracewoodSplinter: { rarity: "common", type: "forceful", material: "wood" },
    shieldrootBark: { rarity: "common", type: "forceful", material: "plant" },
    repulsionCrystal: { rarity: "uncommon", type: "forceful", material: "gem" },
    titanwoodBark: { rarity: "uncommon", type: "forceful", material: "wood" },
    gravityKnotCrystal: { rarity: "rare", type: "forceful", material: "gem" },
    earthrootBulb: { rarity: "common", type: "inert", material: "plant" },
    earthwormCastings: { rarity: "common", type: "inert", material: "foodstuff" },
    stonebackTortoiseScute: { rarity: "common", type: "inert", material: "hide" },
    nullstonePebble: { rarity: "uncommon", type: "inert", material: "mineral" },
    spellbreakerOre: { rarity: "uncommon", type: "inert", material: "metal" },
    spellvoidClayLump: { rarity: "rare", type: "inert", material: "earthenware" },
    copperLightningRodShard: { rarity: "common", type: "lightning", material: "metal" },
    sparkgrass: { rarity: "common", type: "lightning", material: "plant" },
    stormglassShard: { rarity: "common", type: "lightning", material: "glass" },
    topaz: { rarity: "uncommon", type: "lightning", material: "gem" },
    stormRocFeather: { rarity: "uncommon", type: "lightning", material: "textile" },
    ozoneCondensateSphere: { rarity: "rare", type: "lightning", material: "fluid" },
    mirrorCarpScale: { rarity: "common", type: "mercurial", material: "hide" },
    quicksilverDroplet: { rarity: "common", type: "mercurial", material: "fluid" },
    silverEelSlime: { rarity: "common", type: "mercurial", material: "fluid" },
    morphcapFungus: { rarity: "uncommon", type: "mercurial", material: "plant" },
    morphrootNexus: { rarity: "rare", type: "mercurial", material: "plant" },
    carrionflyWing: { rarity: "common", type: "necrotic", material: "hide" },
    graveMold: { rarity: "common", type: "necrotic", material: "plant" },
    grimPepperSeed: { rarity: "common", type: "necrotic", material: "spice" },
    graveKnightBoneChip: { rarity: "uncommon", type: "necrotic", material: "bone" },
    soulTouchedOnyx: { rarity: "uncommon", type: "necrotic", material: "gem" },
    cryptstoneCore: { rarity: "rare", type: "necrotic", material: "mineral" },
    echoPebble: { rarity: "common", type: "phantasmal", material: "mineral" },
    phantomCricketWing: { rarity: "common", type: "phantasmal", material: "hide" },
    songbirdHollowBone: { rarity: "common", type: "phantasmal", material: "bone" },
    feydreamSilk: { rarity: "uncommon", type: "phantasmal", material: "textile" },
    dreamLily: { rarity: "uncommon", type: "phantasmal", material: "plant" },
    whisperglassFragment: { rarity: "rare", type: "phantasmal", material: "glass" },
    adderFang: { rarity: "common", type: "poisonous", material: "bone" },
    bogToadSkin: { rarity: "common", type: "poisonous", material: "hide" },
    toxicBogMoss: { rarity: "common", type: "poisonous", material: "plant" },
    emerald: { rarity: "uncommon", type: "poisonous", material: "gem" },
    venomvineSap: { rarity: "uncommon", type: "poisonous", material: "fluid" },
    toxicCrystalBloom: { rarity: "rare", type: "poisonous", material: "gem" },
    reflectiveInkDrop: { rarity: "common", type: "psychic", material: "fluid" },
    brainCoral: { rarity: "uncommon", type: "psychic", material: "plant" },
    psionicCrystalNode: { rarity: "uncommon", type: "psychic", material: "gem" },
    thoughtstormCrystal: { rarity: "rare", type: "psychic", material: "gem" },
    dawnFeatherDown: { rarity: "common", type: "radiant", material: "textile" },
    sunblossomPetal: { rarity: "common", type: "radiant", material: "plant" },
    angelFeatherPlume: { rarity: "uncommon", type: "radiant", material: "textile" },
    dawncrystalShard: { rarity: "uncommon", type: "radiant", material: "gem" },
    puritySpringStone: { rarity: "rare", type: "radiant", material: "mineral" },
    runestoneFragment: { rarity: "common", type: "theurgic", material: "mineral" },
    divinersEyeStone: { rarity: "uncommon", type: "theurgic", material: "gem" },
    spellweaveThreadSpool: { rarity: "rare", type: "theurgic", material: "textile" },
    boomcapMushroom: { rarity: "common", type: "thundering", material: "plant" },
    clapstonePebble: { rarity: "common", type: "thundering", material: "mineral" },
    stormdrumHide: { rarity: "uncommon", type: "thundering", material: "hide" },
    vibratingStone: { rarity: "uncommon", type: "thundering", material: "mineral" },
    stormRocFeatherhideFragment: { rarity: "rare", type: "thundering", material: "hide" },
    agaricus: { rarity: "common", type: "vital", material: "plant" },
    heartberries: { rarity: "common", type: "vital", material: "plant" },
    honey: { rarity: "common", type: "vital", material: "foodstuff" },
    amber: { rarity: "uncommon", type: "vital", material: "gem" },
    trollbloodVial: { rarity: "uncommon", type: "vital", material: "fluid" },
    ancientHeartwoodCore: { rarity: "rare", type: "vital", material: "wood" },
    shadowMoss: { rarity: "common", type: "void", material: "plant" },
    abyssalPearl: { rarity: "uncommon", type: "void", material: "gem" },
    blackholeCoal: { rarity: "uncommon", type: "void", material: "mineral" },
    oblivionDustCluster: { rarity: "rare", type: "void", material: "mineral" },
    breezegrass: { rarity: "common", type: "zephyrous", material: "plant" },
    cloudsilkThread: { rarity: "uncommon", type: "zephyrous", material: "textile" },
    resonantWindCarapace: { rarity: "rare", type: "zephyrous", material: "hide" }
  };

  const translations = {
    en: {
      ingredients: {
        amalgamSlagClump: "Amalgam Slag Clump",
        gelatinousCubeCore: "Gelatinous Cube Core",
        fracturedPrismaticWeave: "Fractured Prismatic Weave",
        brokenModronGear: "Broken Modron Gear",
        vitrifiedWhiteDragonBreathShard: "Vitrified White Dragon Breath Shard",
        hoarfrostLichen: "Hoarfrost Lichen",
        direwolfPelt: "Direwolf Pelt",
        cryingObsidian: "Crying Obsidian",
        impHide: "Imp Hide",
        cinderrootSprout: "Cinderroot Sprout",
        everburningPhoenixAsh: "Everburning Phoenix Ash",
        stoneOfInfiniteStair: "A Stone from the Infinite Stair",
        archdevilRubyheart: "Archdevil Rubyheart",
        hillGiantKnuckleFragment: "Hill Giant Knuckle Fragment",
        pristineDoppelgangerSkin: "Pristine Doppelganger Shedded Skin",
        blueDragonStormglassEye: "Blue Dragon Stormglass Eye",
        feywardTreeLeaf: "Leaf of a Feyward Tree",
        malleableMetal: "Malleable Metal",
        damagedTarrasqueScaleShard: "Damaged Tarrasque Scale Shard",
        miasmaCuredLeather: "Miasma-Cured Leather",
        bronzewoodKernel: "Bronzewood Kernel",
        linenOfFinalBreath: "Linen of Final Breath",
        magnetizedGalvanicPebble: "Magnetized Galvanic Pebble",
        witherRoseShadowfell: "Wither Rose of the Shadowfell",
        illithidSpine: "Illithid Spine",
        salivaLobotomizedBoar: "Saliva of the Lobotomized Boar",
        distilledThoughtResidue: "Distilled Thought Residue",
        djinniCondensedAetherDust: "Djinni Condensed Aether Dust",
        blackPearlSinisterVoid: "Black Pearl of the Sinister Void",
        unicornManeWeave: "Unicorn Mane Weave",
        druidicHerbalWeave: "Druidic Herbal Weave",
        prismCollapsedSunEcho: "Prism of a Collapsed Sun’s Echo",
        pureGlimmeringDew: "Pure Glimmering Dew",
        planetarFeatherPlume: "Planetar Feather Plume",
        stormEaterLamannianOakroot: "Storm Eater Lamannian Oakroot",
        greenBoomstone: "Green Boomstone",
        acidEtchedLimestone: "Acid-Etched Limestone",
        causticBogroot: "Caustic Bogroot",
        corrosionCrystal: "Corrosion Crystal",
        dissolvingStoneHusk: "Dissolving Stone Husk",
        rustmoldSpores: "Rustmold Spores",
        rustscaleLizardShedding: "Rustscale Lizard Shedding",
        chaosBloomPetals: "Chaos Bloom Petals",
        entropicBoneFragment: "Entropic Bone Fragment",
        lucktwistTwig: "Lucktwist Twig",
        realityGlitchSand: "Reality Glitch Sand",
        tangleweedSeed: "Tangleweed Seed",
        warpedCopperShard: "Warped Copper Shard",
        frostcapMushroom: "Frostcap Mushroom",
        frozenSpringwater: "Frozen Springwater",
        ironColdMetal: "Iron",
        glacierHeartCrystal: "Glacier Heart Crystal",
        iceboundMoonflower: "Icebound Moonflower",
        riftwaterDroplet: "Riftwater Droplet",
        teleportingThistleSeed: "Teleporting Thistle Seed",
        wayfarersKnotThread: "Wayfarer’s Knot Thread",
        riftglassLens: "Riftglass Lens",
        naturallyFormedRiftglassSheet: "Naturally Formed Riftglass Sheet",
        abyssalPepperPod: "Abyssal Pepper Pod",
        ashenBoneDust: "Ashen Bone Dust",
        charredDevilthorn: "Charred Devilthorn",
        brimstoneRuby: "Brimstone Ruby",
        cursedSoilClump: "Cursed Soil Clump",
        crackedObsidianChip: "Cracked Obsidian Chip",
        forgeSparkSlag: "Forge Spark Slag",
        oakFieryWood: "Oak",
        borax: "Borax",
        magnesium: "Magnesium",
        solarIgnitionSeed: "Solar Ignition Seed",
        anvilDust: "Anvil Dust",
        bracewoodSplinter: "Bracewood Splinter",
        shieldrootBark: "Shieldroot Bark",
        repulsionCrystal: "Repulsion Crystal",
        titanwoodBark: "Titanwood Bark",
        gravityKnotCrystal: "Gravity Knot Crystal",
        earthrootBulb: "Earthroot Bulb",
        earthwormCastings: "Earthworm Castings",
        stonebackTortoiseScute: "Stoneback Tortoise Scute",
        nullstonePebble: "Nullstone Pebble",
        spellbreakerOre: "Spellbreaker Ore",
        spellvoidClayLump: "Spellvoid Clay Lump",
        copperLightningRodShard: "Copper Lightning Rod Shard",
        sparkgrass: "Sparkgrass",
        stormglassShard: "Stormglass Shard",
        topaz: "Topaz",
        stormRocFeather: "Storm Roc Feather",
        ozoneCondensateSphere: "Ozone Condensate Sphere",
        mirrorCarpScale: "Mirror Carp Scale",
        quicksilverDroplet: "Quicksilver Droplet",
        silverEelSlime: "Silver Eel Slime",
        morphcapFungus: "Morphcap Fungus",
        morphrootNexus: "Morphroot Nexus",
        carrionflyWing: "Carrionfly Wing",
        graveMold: "Grave Mold",
        grimPepperSeed: "Grim Pepper Seed",
        graveKnightBoneChip: "Grave Knight Bone Chip",
        soulTouchedOnyx: "Soul-Touched Onyx",
        cryptstoneCore: "Cryptstone Core",
        echoPebble: "Echo Pebble",
        phantomCricketWing: "Phantom Cricket Wing",
        songbirdHollowBone: "Songbird Hollow Bone",
        feydreamSilk: "Feydream Silk",
        dreamLily: "Dream Lily",
        whisperglassFragment: "Whisperglass Fragment",
        adderFang: "Adder Fang",
        bogToadSkin: "Bog Toad Skin",
        toxicBogMoss: "Toxic Bog Moss",
        emerald: "Emerald",
        venomvineSap: "Venomvine Sap",
        toxicCrystalBloom: "Toxic Crystal Bloom",
        reflectiveInkDrop: "Reflective Ink Drop",
        brainCoral: "Brain Coral",
        psionicCrystalNode: "Psionic Crystal Node",
        thoughtstormCrystal: "Thoughtstorm Crystal",
        dawnFeatherDown: "Dawn Feather Down",
        sunblossomPetal: "Sunblossom Petal",
        angelFeatherPlume: "Angel Feather Plume",
        dawncrystalShard: "Dawncrystal Shard",
        puritySpringStone: "Purity Spring Stone",
        runestoneFragment: "Runestone Fragment",
        divinersEyeStone: "Diviner’s Eye Stone",
        spellweaveThreadSpool: "Spellweave Thread Spool",
        boomcapMushroom: "Boomcap Mushroom",
        clapstonePebble: "Clapstone Pebble",
        stormdrumHide: "Stormdrum Hide",
        vibratingStone: "Vibrating Stone",
        stormRocFeatherhideFragment: "Storm Roc Featherhide Fragment",
        agaricus: "Agaricus",
        heartberries: "Heartberries",
        honey: "Honey",
        amber: "Amber",
        trollbloodVial: "Trollblood Vial",
        ancientHeartwoodCore: "Ancient Heartwood Core",
        shadowMoss: "Shadow Moss",
        abyssalPearl: "Abyssal Pearl",
        blackholeCoal: "Blackhole Coal",
        oblivionDustCluster: "Oblivion Dust Cluster",
        breezegrass: "Breezegrass",
        cloudsilkThread: "Cloudsilk Thread",
        resonantWindCarapace: "Resonant Wind Carapace"
      },
      rarity: {
        common: "Common",
        uncommon: "Uncommon",
        rare: "Rare",
        very_rare: "Very Rare"
      },
      type: {
        acidic: "Acidic",
        chaotic: "Chaotic",
        cold: "Cold",
        dimensional: "Dimensional",
        fiendish: "Fiendish",
        fiery: "Fiery",
        forceful: "Forceful",
        inert: "Inert",
        lightning: "Lightning",
        mercurial: "Mercurial",
        necrotic: "Necrotic",
        phantasmal: "Phantasmal",
        poisonous: "Poisonous",
        psychic: "Psychic",
        radiant: "Radiant",
        theurgic: "Theurgic",
        thundering: "Thundering",
        vital: "Vital",
        void: "Void",
        zephyrous: "Zephyrous"
      },
      material: {
        bone: "Bone",
        earthenware: "Earthenware",
        fluid: "Fluid",
        foodstuff: "Foodstuff",
        gem: "Gem",
        glass: "Glass",
        grain: "Grain",
        hide: "Hide",
        metal: "Metal",
        mineral: "Mineral",
        plant: "Plant",
        spice: "Spice",
        textile: "Textile",
        wood: "Wood"
      },
      ui: {
        rarity: "Rarity",
        nature: "Identify (Intelligence or Wisdom + Nature)",
        survival: "Forage (Strength or Dexterity + Survival)",
        badWeather: "Bad weather (increases DC by 2)",
        hostileArea: "Hostile area (increases DC by 2)",
        nat20: "Type-based random no-roll",
        roll: "D100 roll",
        type: "Type",
        confirm: "Forage",
        language: "Language",
        nothingFound: "Did not find anything.",
        outputPlaceholder: "Results will appear here..."
      }
    },
    hu: {
      ingredients: {
        amalgamSlagClump: "Amalgám Salakanyag",
        gelatinousCubeCore: "Kocsonyás Kocka Magja",
        fracturedPrismaticWeave: "Széttöredezett Ezerszínű Háló",
        brokenModronGear: "Törött Modron Fogaskerék",
        vitrifiedWhiteDragonBreathShard: "Üvegesedett Fehér Sárkány Lehelet Szilánkja",
        hoarfrostLichen: "Deres Zúzmó",
        direwolfPelt: "Rémfarkas préme",
        cryingObsidian: "Síró Obszidián",
        impHide: "Ördögfióka bőre",
        cinderrootSprout: "Parázsgyökér hajtás",
        everburningPhoenixAsh: "Örökegő Főnix Hamu",
        stoneOfInfiniteStair: "Kő a Végtelen Lépcsőről",
        archdevilRubyheart: "Főördög Rubintszíve",
        hillGiantKnuckleFragment: "Hegyi Óriás Újperc Töredéke",
        pristineDoppelgangerSkin: "Doppelganger Makulátlan Levedlett Bőre",
        blueDragonStormglassEye: "Kék Sárkány Viharüveg Szeme",
        feywardTreeLeaf: "Tündeőr Fa Levele",
        malleableMetal: "Gyúrható Fém",
        damagedTarrasqueScaleShard: "Sérült Tarrasque Pikkelyszilánk",
        miasmaCuredLeather: "Miazmakezelt Bőr",
        bronzewoodKernel: "Bronzfa Magocska",
        linenOfFinalBreath: "Az Utolsó Lehelet Lenszövete",
        magnetizedGalvanicPebble: "Delejes Galvanikus Kavics",
        witherRoseShadowfell: "Árnyékvilág Hervadt Rózsája",
        illithidSpine: "Illithid Gerinc",
        salivaLobotomizedBoar: "A Lobotomizált Vadkan Nyála",
        distilledThoughtResidue: "Desztillált Gondolati Maradék",
        djinniCondensedAetherDust: "Dzsinn Sűrített Éterpora",
        blackPearlSinisterVoid: "A Baljós Üresség Fekete Gyöngye",
        unicornManeWeave: "Egyszarvú Sörényszövet",
        druidicHerbalWeave: "Druida Gyógynövény Szövet",
        prismCollapsedSunEcho: "Összeroskadt Nap Visszhangprizmája",
        pureGlimmeringDew: "Tiszta Csillámló Harmat",
        planetarFeatherPlume: "Planetár Szárnytolla",
        stormEaterLamannianOakroot: "Viharfaló Lamanniai Tölgy Gyökere",
        greenBoomstone: "Zöld Dörgőkő",
        acidEtchedLimestone: "Savmaratott mészkő",
        causticBogroot: "Maró lápgyökér",
        corrosionCrystal: "Korróziós kristály",
        dissolvingStoneHusk: "Oldódó kőhéj",
        rustmoldSpores: "Rozsdapenész spórák",
        rustscaleLizardShedding: "Rozsdapikkelyű gyík vedlés",
        chaosBloomPetals: "Káoszvirág szirmai",
        entropicBoneFragment: "Entrópikus csontdarab",
        lucktwistTwig: "Szerencsecsavar gally",
        realityGlitchSand: "Valóságtörés homok",
        tangleweedSeed: "Kuszanövény mag",
        warpedCopperShard: "Torzult rézszilánk",
        frostcapMushroom: "Dérsapkás gomba",
        frozenSpringwater: "Fagyott forrásvíz",
        ironColdMetal: "Vas",
        glacierHeartCrystal: "Gleccserszív kristály",
        iceboundMoonflower: "Jégkötött holdvirág",
        riftwaterDroplet: "Hasadékvíz csepp",
        teleportingThistleSeed: "Teleportáló bogáncsmag",
        wayfarersKnotThread: "Vándorcsomó fonál",
        riftglassLens: "Hasadéküveg lencse",
        naturallyFormedRiftglassSheet: "Természetes hasadéküveg lap",
        abyssalPepperPod: "Mélységi paprika hüvely",
        ashenBoneDust: "Hamvas csontpor",
        charredDevilthorn: "Elszenesedett ördögtövis",
        brimstoneRuby: "Kénkő rubin",
        cursedSoilClump: "Átkozott földcsomó",
        crackedObsidianChip: "Repedt obszidiánforgács",
        forgeSparkSlag: "Kohószikra salak",
        oakFieryWood: "Tölgyfa",
        borax: "Bórax",
        magnesium: "Magnézium",
        solarIgnitionSeed: "Napgyújtó mag",
        anvilDust: "Üllőpor",
        bracewoodSplinter: "Támasztófa szálka",
        shieldrootBark: "Pajzsgyökér kéreg",
        repulsionCrystal: "Taszítókristály",
        titanwoodBark: "Titánfa kéreg",
        gravityKnotCrystal: "Gravitációs csomókristály",
        earthrootBulb: "Földgyökér gumó",
        earthwormCastings: "Földigiliszta humusz",
        stonebackTortoiseScute: "Kőhátú teknős páncéllap",
        nullstonePebble: "Nullkő kavics",
        spellbreakerOre: "Varázstörő érc",
        spellvoidClayLump: "Varázsüres agyagdarab",
        copperLightningRodShard: "Réz villámvezető szilánk",
        sparkgrass: "Szikrafű",
        stormglassShard: "Viharüveg szilánk",
        topaz: "Topáz",
        stormRocFeather: "Viharrok toll",
        ozoneCondensateSphere: "Ózonkondenzátum gömb",
        mirrorCarpScale: "Tükörponty pikkely",
        quicksilverDroplet: "Folyékony ezüst csepp",
        silverEelSlime: "Ezüstangolna nyálka",
        morphcapFungus: "Alakváltó kalapgomba",
        morphrootNexus: "Alakváltó gyökércsomópont",
        carrionflyWing: "Döglegy szárny",
        graveMold: "Sírpenész",
        grimPepperSeed: "Komor paprika mag",
        graveKnightBoneChip: "Sírlovag csontszilánk",
        soulTouchedOnyx: "Lélekérintett ónix",
        cryptstoneCore: "Kriptakő mag",
        echoPebble: "Visszhangkavics",
        phantomCricketWing: "Fantomtücsök szárny",
        songbirdHollowBone: "Énekesmadár üreges csont",
        feydreamSilk: "Tündérálom selyem",
        dreamLily: "Álomliliom",
        whisperglassFragment: "Suttogóüveg töredék",
        adderFang: "Viperaagyar",
        bogToadSkin: "Lápvarangy bőr",
        toxicBogMoss: "Mérgező lápmoha",
        emerald: "Smaragd",
        venomvineSap: "Méreginda nedv",
        toxicCrystalBloom: "Mérgező kristályvirág",
        reflectiveInkDrop: "Tükröző tinta csepp",
        brainCoral: "Agykorall",
        psionicCrystalNode: "Pszichikus kristálycsomó",
        thoughtstormCrystal: "Gondolatvihar kristály",
        dawnFeatherDown: "Hajnalpehely toll",
        sunblossomPetal: "Napvirág szirom",
        angelFeatherPlume: "Angyaltoll bóbit",
        dawncrystalShard: "Hajnalkristály szilánk",
        puritySpringStone: "Tisztaságforrás kő",
        runestoneFragment: "Rúnakő töredék",
        divinersEyeStone: "Jós szemkő",
        spellweaveThreadSpool: "Varázsszövő fonalgombolyag",
        boomcapMushroom: "Durranógomba",
        clapstonePebble: "Dörrenőkő kavics",
        stormdrumHide: "Vihardob bőr",
        vibratingStone: "Rezgőkő",
        stormRocFeatherhideFragment: "Viharrok tollbőr töredék",
        agaricus: "Csiperke gomba",
        heartberries: "Szívbogyók",
        honey: "Méz",
        amber: "Borostyán",
        trollbloodVial: "Trollvér fiola",
        ancientHeartwoodCore: "Ősi szívfa mag",
        shadowMoss: "Árnyékmoha",
        abyssalPearl: "Mélységi gyöngy",
        blackholeCoal: "Fekete lyukszén",
        oblivionDustCluster: "Felejtés porcsomó",
        breezegrass: "Szellőfű",
        cloudsilkThread: "Felhőselyem fonál",
        resonantWindCarapace: "Rezonáns szélpáncél"
      },
      rarity: {
        common: "Gyakori",
        uncommon: "Nem gyakori",
        rare: "Ritka",
        very_rare: "Nagyon ritka"
      },
      type: {
        acidic: "Savas",
        chaotic: "Kaotikus",
        cold: "Hideg",
        dimensional: "Dimenzionális",
        fiendish: "Pokolbéli",
        fiery: "Tüzes",
        forceful: "Erőteljes",
        inert: "Inert",
        lightning: "Villám",
        mercurial: "Változékony",
        necrotic: "Nekrotikus",
        phantasmal: "Kísérteties",
        poisonous: "Mérgező",
        psychic: "Pszichikus",
        radiant: "Ragyogó",
        theurgic: "Idéző",
        thundering: "Mennydörgő",
        vital: "Életerős",
        void: "Üres",
        zephyrous: "Szellős"
      },
      material: {
        bone: "Csont",
        earthenware: "Agyag",
        fluid: "Folyadék",
        foodstuff: "Élelmiszer",
        gem: "Drágakő",
        glass: "Üveg",
        grain: "Mag",
        hide: "Bőr",
        metal: "Fém",
        mineral: "Ásvány",
        plant: "Növény",
        spice: "Fűszer",
        textile: "Textil",
        wood: "Fa"
      },
      ui: {
        rarity: "Ritkaság",
        nature: "Beazonosítás (Intelligence vagy Wisdom + Nature)",
        survival: "Gyűjtögetés (Strength vagy Dexterity + Survival)",
        badWeather: "Rossz időjárás (növeli a DC-t 2-vel)",
        hostileArea: "Ellenséges terület (növeli a DC-t 2-vel)",
        nat20: "Típus alapú dobás nélküli random keresés",
        roll: "D100 dobás",
        type: "Típus",
        confirm: "Gyűjtögetés",
        language: "Nyelv",
        nothingFound: "Nem találtál semmit.",
        outputPlaceholder: "A találatok itt fognak megjelenni..."
      }
    }
  };

function t(section, key) {
  return translations[currentLang][section][key] ?? key;
}

function tIngredient(id) {
  return translations[currentLang].ingredients[id] ?? id;
}

function formatIngredientLocalized(id) {
  const item = ingredients[id];
  return `${tIngredient(id)} (${translations[currentLang].rarity[item.rarity]} ${translations[currentLang].type[item.type]} ${translations[currentLang].material[item.material]})`;
}

function forageResult(rarity, nature, survival, roll, nat20, nat20Type, badWeather, hostileArea, currentLang) {
  let check;
  let commonQuantity = 0;
  let uncommonQuantity = 0;
  let rareQuantity = 0;
  let veryRareQuantity = 0;

  const commonItems = [
    "acidEtchedLimestone",
    "rustmoldSpores",
    "rustscaleLizardShedding",
    "lucktwistTwig",
    "tangleweedSeed",
    "warpedCopperShard",
    "frostcapMushroom",
    "frozenSpringwater",
    "ironColdMetal",
    "riftwaterDroplet",
    "teleportingThistleSeed",
    "wayfarersKnotThread",
    "abyssalPepperPod",
    "ashenBoneDust",
    "charredDevilthorn",
    "crackedObsidianChip",
    "forgeSparkSlag",
    "oakFieryWood",
    "anvilDust",
    "bracewoodSplinter",
    "shieldrootBark",
    "earthrootBulb",
    "earthwormCastings",
    "stonebackTortoiseScute",
    "copperLightningRodShard",
    "sparkgrass",
    "stormglassShard",
    "mirrorCarpScale",
    "quicksilverDroplet",
    "silverEelSlime",
    "carrionflyWing",
    "graveMold",
    "grimPepperSeed",
    "echoPebble",
    "phantomCricketWing",
    "songbirdHollowBone",
    "adderFang",
    "bogToadSkin",
    "toxicBogMoss",
    "reflectiveInkDrop",
    "dawnFeatherDown",
    "sunblossomPetal",
    "runestoneFragment",
    "boomcapMushroom",
    "clapstonePebble",
    "agaricus",
    "heartberries",
    "honey",
    "shadowMoss",
    "breezegrass"
  ];

  const uncommonItems = [
    "amalgamSlagClump",
    "causticBogroot",
    "corrosionCrystal",
    "chaosBloomPetals",
    "entropicBoneFragment",
    "fracturedPrismaticWeave",
    "glacierHeartCrystal",
    "hoarfrostLichen",
    "direwolfPelt",
    "cryingObsidian",
    "riftglassLens",
    "brimstoneRuby",
    "impHide",
    "borax",
    "cinderrootSprout",
    "magnesium",
    "hillGiantKnuckleFragment",
    "repulsionCrystal",
    "titanwoodBark",
    "bronzewoodKernel",
    "nullstonePebble",
    "spellbreakerOre",
    "magnetizedGalvanicPebble",
    "stormRocFeather",
    "topaz",
    "malleableMetal",
    "morphcapFungus",
    "graveKnightBoneChip",
    "miasmaCuredLeather",
    "soulTouchedOnyx",
    "dreamLily",
    "feydreamSilk",
    "emerald",
    "venomvineSap",
    "brainCoral",
    "distilledThoughtResidue",
    "psionicCrystalNode",
    "angelFeatherPlume",
    "dawncrystalShard",
    "pureGlimmeringDew",
    "divinersEyeStone",
    "greenBoomstone",
    "stormdrumHide",
    "vibratingStone",
    "amber",
    "druidicHerbalWeave",
    "trollbloodVial",
    "abyssalPearl",
    "blackholeCoal",
    "cloudsilkThread"
  ];

  const rareItems = [
    "dissolvingStoneHusk",
    "realityGlitchSand",
    "iceboundMoonflower",
    "naturallyFormedRiftglassSheet",
    "cursedSoilClump",
    "solarIgnitionSeed",
    "gravityKnotCrystal",
    "spellvoidClayLump",
    "ozoneCondensateSphere",
    "morphrootNexus",
    "cryptstoneCore",
    "whisperglassFragment",
    "toxicCrystalBloom",
    "thoughtstormCrystal",
    "puritySpringStone",
    "spellweaveThreadSpool",
    "stormRocFeatherhideFragment",
    "ancientHeartwoodCore",
    "oblivionDustCluster",
    "resonantWindCarapace"
  ];

  const veryRareItems = [
    "gelatinousCubeCore",
    "brokenModronGear",
    "vitrifiedWhiteDragonBreathShard",
    "stoneOfInfiniteStair",
    "archdevilRubyheart",
    "everburningPhoenixAsh",
    "damagedTarrasqueScaleShard",
    "feywardTreeLeaf",
    "blueDragonStormglassEye",
    "pristineDoppelgangerSkin",
    "linenOfFinalBreath",
    "witherRoseShadowfell",
    "salivaLobotomizedBoar",
    "illithidSpine",
    "prismCollapsedSunEcho",
    "planetarFeatherPlume",
    "stormEaterLamannianOakroot",
    "unicornManeWeave",
    "blackPearlSinisterVoid",
    "djinniCondensedAetherDust"
  ];

  function getItems(roll) {
    const commonIndex = Math.floor((roll - 1) / 2);
    const uncommonIndex = Math.floor((roll - 1) / 2);
    const rareIndex = Math.floor((roll - 1) / 5);
    const veryRareIndex = Math.floor((roll - 1) / 5);

    return {
      commonItemName: commonItems[commonIndex],
      uncommonItemName: uncommonItems[uncommonIndex],
      rareItemName: rareItems[rareIndex],
      veryRareItemName: veryRareItems[veryRareIndex],
    };
  }

  switch (rarity) {
    case "common":
      check = 13;
      if (badWeather)
        check += 2;
      if (hostileArea)
        check += 2;
      if (nature >= check && survival >= check) {
        commonQuantity = 1;
      }
      if (nature >= check + 5 && survival >= check + 5) {
        commonQuantity = 2;
      }
      if (nature >= check + 10 && survival >= check + 10) {
        commonQuantity = 3;
      }
      break;

    case "uncommon":
      check = 16;
      if (badWeather)
        check += 2;
      if (hostileArea)
        check += 2;
      if (nature >= check && survival >= check) {
        uncommonQuantity = 1;
      }
      if (nature >= check + 5 && survival >= check + 5) {
        commonQuantity = 1;
      }
      if (nature >= check + 10 && survival >= check + 10) {
        commonQuantity = 2;
      }
      break;

    case "rare":
      check = 19;
      if (badWeather)
        check += 2;
      if (hostileArea)
        check += 2;
      if (nature >= check && survival >= check) {
        rareQuantity = 1;
      }
      if (nature >= check + 5 && survival >= check + 5) {
        uncommonQuantity = 1;
      }
      if (nature >= check + 10 && survival >= check + 10) {
        commonQuantity = 1;
      }
      break;

    case "very rare":
      check = 22;
      if (badWeather)
        check += 2;
      if (hostileArea)
        check += 2;
      if (nature >= check && survival >= check) {
        veryRareQuantity = 1;
      }
      if (nature >= check + 5 && survival >= check + 5) {
        rareQuantity = 1;
      }
      if (nature >= check + 10 && survival >= check + 10) {
        uncommonQuantity = 1;
      }
      break;

    default:
      break;
  }

  if (nature < check || survival < check) {
    return t("ui", "nothingFound");
  }

  let commonItemName;
  let uncommonItemName;
  let rareItemName;
  let veryRareItemName;

  if (nat20) {
    function pickRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const nat20ItemsByType = {
      Acidic: {
        common: ["rustmoldSpores", "rustscaleLizardShedding", "acidEtchedLimestone"],
        uncommon: ["causticBogroot", "corrosionCrystal", "amalgamSlagClump"],
        rare: "dissolvingStoneHusk",
        veryRare: "gelatinousCubeCore",
      },

      Chaotic: {
        common: ["lucktwistTwig", "tangleweedSeed", "warpedCopperShard"],
        uncommon: ["chaosBloomPetals", "entropicBoneFragment", "fracturedPrismaticWeave"],
        rare: "realityGlitchSand",
        veryRare: "brokenModronGear",
      },

      Cold: {
        common: ["frostcapMushroom", "frozenSpringwater", "ironColdMetal"],
        uncommon: ["glacierHeartCrystal", "direwolfPelt", "hoarfrostLichen"],
        rare: "iceboundMoonflower",
        veryRare: "vitrifiedWhiteDragonBreathShard",
      },

      Dimensional: {
        common: ["riftwaterDroplet", "teleportingThistleSeed", "wayfarersKnotThread"],
        uncommon: ["riftglassLens", "cryingObsidian"],
        rare: "naturallyFormedRiftglassSheet",
        veryRare: "stoneOfInfiniteStair",
      },

      Fiendish: {
        common: ["abyssalPepperPod", "ashenBoneDust", "charredDevilthorn"],
        uncommon: ["impHide", "brimstoneRuby"],
        rare: "cursedSoilClump",
        veryRare: "archdevilRubyheart",
      },

      Fiery: {
        common: ["crackedObsidianChip", "forgeSparkSlag", "oakFieryWood"],
        uncommon: ["borax", "magnesium", "cinderrootSprout"],
        rare: "solarIgnitionSeed",
        veryRare: "everburningPhoenixAsh",
      },

      Forceful: {
        common: ["anvilDust", "bracewoodSplinter", "shieldrootBark"],
        uncommon: ["repulsionCrystal", "titanwoodBark", "hillGiantKnuckleFragment"],
        rare: "gravityKnotCrystal",
        veryRare: "damagedTarrasqueScaleShard",
      },

      Inert: {
        common: ["earthrootBulb", "earthwormCastings", "stonebackTortoiseScute"],
        uncommon: ["nullstonePebble", "spellbreakerOre", "bronzewoodKernel"],
        rare: "spellvoidClayLump",
        veryRare: "feywardTreeLeaf",
      },

      Lightning: {
        common: ["copperLightningRodShard", "sparkgrass", "stormglassShard"],
        uncommon: ["topaz", "stormRocFeather", "magnetizedGalvanicPebble"],
        rare: "ozoneCondensateSphere",
        veryRare: "blueDragonStormglassEye",
      },

      Mercurial: {
        common: ["mirrorCarpScale", "quicksilverDroplet", "silverEelSlime"],
        uncommon: ["morphcapFungus", "malleableMetal"],
        rare: "morphrootNexus",
        veryRare: "pristineDoppelgangerSkin",
      },

      Necrotic: {
        common: ["carrionflyWing", "graveMold", "grimPepperSeed"],
        uncommon: ["graveKnightBoneChip", "soulTouchedOnyx", "miasmaCuredLeather"],
        rare: "cryptstoneCore",
        veryRare: "linenOfFinalBreath",
      },

      Phantasmal: {
        common: ["echoPebble", "phantomCricketWing", "songbirdHollowBone"],
        uncommon: ["feydreamSilk", "dreamLily"],
        rare: "whisperglassFragment",
        veryRare: "witherRoseShadowfell",
      },

      Poisonous: {
        common: ["adderFang", "bogToadSkin", "toxicBogMoss"],
        uncommon: ["emerald", "venomvineSap"],
        rare: "toxicCrystalBloom",
        veryRare: "salivaLobotomizedBoar",
      },

      Psychic: {
        common: ["reflectiveInkDrop"],
        uncommon: ["brainCoral", "psionicCrystalNode", "distilledThoughtResidue"],
        rare: "thoughtstormCrystal",
        veryRare: "illithidSpine",
      },

      Radiant: {
        common: ["dawnFeatherDown", "sunblossomPetal"],
        uncommon: ["angelFeatherPlume", "dawncrystalShard", "pureGlimmeringDew"],
        rare: "puritySpringStone",
        veryRare: "prismCollapsedSunEcho",
      },

      Theurgic: {
        common: ["runestoneFragment"],
        uncommon: ["divinersEyeStone"],
        rare: "spellweaveThreadSpool",
        veryRare: "planetarFeatherPlume",
      },

      Thundering: {
        common: ["boomcapMushroom", "clapstonePebble"],
        uncommon: ["stormdrumHide", "vibratingStone", "greenBoomstone"],
        rare: "stormRocFeatherhideFragment",
        veryRare: "stormEaterLamannianOakroot",
      },

      Vital: {
        common: ["agaricus", "heartberries", "honey"],
        uncommon: ["amber", "trollbloodVial", "druidicHerbalWeave"],
        rare: "ancientHeartwoodCore",
        veryRare: "unicornManeWeave",
      },

      Void: {
        common: ["shadowMoss"],
        uncommon: ["abyssalPearl", "blackholeCoal"],
        rare: "oblivionDustCluster",
        veryRare: "blackPearlSinisterVoid",
      },

      Zephyrous: {
        common: ["breezegrass"],
        uncommon: ["cloudsilkThread"],
        rare: "resonantWindCarapace",
        veryRare: "djinniCondensedAetherDust",
      },
    };

    const typeData = nat20ItemsByType[nat20Type];

    if (!typeData) {
      return "";
    }

    commonItemName = pickRandom(typeData.common);
    uncommonItemName = pickRandom(typeData.uncommon);
    rareItemName = typeData.rare;
    veryRareItemName = typeData.veryRare;
  } else {
    let items = getItems(roll);

    commonItemName = items.commonItemName;
    uncommonItemName = items.uncommonItemName;
    rareItemName = items.rareItemName;
    veryRareItemName = items.veryRareItemName;
  }

  let results = [];

  if (commonItemName && commonQuantity > 0) {
    results.push(`${commonQuantity} x ${formatIngredientLocalized(commonItemName)}`);
  }
  if (uncommonItemName && uncommonQuantity > 0) {
    results.push(`${uncommonQuantity} x ${formatIngredientLocalized(uncommonItemName)}`);
  }
  if (rareItemName && rareQuantity > 0) {
    results.push(`${rareQuantity} x ${formatIngredientLocalized(rareItemName)}`);
  }
  if (veryRareItemName && veryRareQuantity > 0) {
    results.push(`${veryRareQuantity} x ${formatIngredientLocalized(veryRareItemName)}`);
  }

  return results.length ? results.join("\n") : "Did not find anything.";
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language");
  const raritySelect = document.getElementById("rarity");
  const nat20TypeSelect = document.getElementById("nat20Type");
  const nat20Checkbox = document.getElementById("nat20");
  const badWeatherCheckbox = document.getElementById("badWeather");
  const hostileAreaCheckbox = document.getElementById("hostileArea");
  const nat20TypeWrap = document.getElementById("nat20TypeWrap");
  const rollWrap = document.getElementById("rollWrap");
  const form = document.getElementById("forageForm");
  const output = document.getElementById("output");

  function updateUILabels() {
    document.getElementById("label-rarity").textContent = t("ui", "rarity");
    document.getElementById("label-nature").textContent = t("ui", "nature");
    document.getElementById("label-survival").textContent = t("ui", "survival");
    document.getElementById("label-badWeather").textContent = t("ui", "badWeather");
    document.getElementById("label-hostileArea").textContent = t("ui", "hostileArea");
    document.getElementById("label-roll").textContent = t("ui", "roll");
    document.getElementById("label-nat20").textContent = t("ui", "nat20");
    document.getElementById("label-type").textContent = t("ui", "type");
    document.getElementById("submit-btn").textContent = t("ui", "confirm");
    document.getElementById("label-language").textContent = t("ui", "language");
    output.placeholder = t("ui", "outputPlaceholder");
  }

  function fillSelects() {
    raritySelect.innerHTML = "";
    nat20TypeSelect.innerHTML = "";

    Object.values(translations[currentLang]["rarity"]).forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      raritySelect.appendChild(option);
    });

    Object.values(translations[currentLang]["type"]).forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      nat20TypeSelect.appendChild(option);
    });
  }
  
  function toggleNat20Fields() {
    if (nat20Checkbox.checked) {
      nat20TypeWrap.style.display = "flex";
      rollWrap.style.display = "none";
    } else {
      nat20TypeWrap.style.display = "none";
      rollWrap.style.display = "flex";
    }
  }

  languageSelect.addEventListener("change", () => {
    currentLang = languageSelect.value;
    updateUILabels();
    fillSelects();
  });

  nat20Checkbox.addEventListener("change", toggleNat20Fields);
  toggleNat20Fields();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const rarity = raritySelect.value;
    const nature = parseInt(document.getElementById("nature").value, 10) || 0;
    const survival = parseInt(document.getElementById("survival").value, 10) || 0;
    const roll = nat20Checkbox.checked ? 0 : (parseInt(document.getElementById("roll").value, 10) || 0);
    const nat20 = nat20Checkbox.checked;
    const nat20Type = nat20TypeSelect.value;
    const badWeather = badWeatherCheckbox.checked;
    const hostileArea = hostileAreaCheckbox.checked;
    

    const result = forageResult(rarity, nature, survival, roll, nat20, nat20Type, badWeather, hostileArea, currentLang);
    output.value = result;
  });

  fillSelects();
});