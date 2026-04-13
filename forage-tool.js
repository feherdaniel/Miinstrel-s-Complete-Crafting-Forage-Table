function forageResult(rarity, nature, survival, roll, nat20, nat20Type, badWeather, hostileArea) {
  let check;
  let commonQuantity = 0;
  let uncommonQuantity = 0;
  let rareQuantity = 0;
  let veryRareQuantity = 0;

  const amalgamSlagClump = "Amalgam Slag Clump (Uncommon Acidic Earthenware)";
  const gelatinousCubeCore = "Gelatinous Cube Core (Very Rare Acidic Fluid)";
  const fracturedPrismaticWeave = "Fractured Prismatic Weave (Uncommon Chaotic Textile)";
  const brokenModronGear = "Broken Modron Gear (Very Rare Chaotic Metal)";
  const vitrifiedWhiteDragonBreathShard = "Vitrified White Dragon Breath Shard (Very Rare Cold Glass)";
  const hoarfrostLichen = "Hoarfrost Lichen (Uncommon Cold Spice)";
  const direwolfPelt = "Direwolf Pelt (Uncommon Cold Hide)";
  const cryingObsidian = "Crying Obsidian (Uncommon Dimensional Mineral)";
  const impHide = "Imp Hide (Uncommon Fiendish Hide)";
  const cinderrootSprout = "Cinderroot Sprout (Uncommon Fiery Plant)";
  const everburningPhoenixAsh = "Everburning Phoenix Ash (Very Rare Fiery Earthenware)";
  const stoneOfInfiniteStair = "A Stone from the Infinite Stair (Very Rare Dimensional Mineral)";
  const archdevilRubyheart = "Archdevil Rubyheart (Very Rare Fiendish Gem)";
  const hillGiantKnuckleFragment = "Hill Giant Knuckle Fragment (Uncommon Forceful Bone)";
  const pristineDoppelgangerSkin = "Pristine Doppelganger Shedded Skin (Very Rare Mercurial Hide)";
  const blueDragonStormglassEye = "Blue Dragon Stormglass Eye (Very Rare Lightning Gem)";
  const feywardTreeLeaf = "Leaf of a Feyward Tree (Very Rare Inert Plant)";
  const malleableMetal = "Malleable Metal (Uncommon Mercurial Metal)";
  const damagedTarrasqueScaleShard = "Damaged Tarrasque Scale Shard (Very Rare Forceful Hide)";
  const miasmaCuredLeather = "Miasma-Cured Leather (Uncommon Necrotic Hide)";
  const bronzewoodKernel = "Bronzewood Kernel (Uncommon Inert Grain)";
  const linenOfFinalBreath = "Linen of Final Breath (Very Rare Necrotic Textile)";
  const magnetizedGalvanicPebble = "Magnetized Galvanic Pebble (Uncommon Lightning Mineral)";
  const witherRoseShadowfell = "Wither Rose of the Shadowfell (Very Rare Phantasmal Plant)";
  const illithidSpine = "Illithid Spine (Very Rare Psychic Bone)";
  const salivaLobotomizedBoar = "Saliva of the Lobotomized Boar (Very Rare Poisonous Fluid)";
  const distilledThoughtResidue = "Distilled Thought Residue (Uncommon Psychic Fluid)";
  const djinniCondensedAetherDust = "Djinni Condensed Aether Dust (Very Rare Zephyrous Earthenware)";
  const blackPearlSinisterVoid = "Black Pearl of the Sinister Void (Very Rare Void Gem)";
  const unicornManeWeave = "Unicorn Mane Weave (Very Rare Vital Textile)";
  const druidicHerbalWeave = "Druidic Herbal Weave (Uncommon Vital Textile)";
  const prismCollapsedSunEcho = "Prism of a Collapsed Sun’s Echo (Very Rare Radiant Gem)";
  const pureGlimmeringDew = "Pure Glimmering Dew (Uncommon Radiant Fluid)";
  const planetarFeatherPlume = "Planetar Feather Plume (Very Rare Theurgic Textile)";
  const stormEaterLamannianOakroot = "Storm Eater Lamannian Oakroot (Very Rare Thundering Wood)";
  const greenBoomstone = "Green Boomstone (Uncommon Thundering Gem)";
  const acidEtchedLimestone = "Acid-Etched Limestone (Common Acidic Mineral)";
  const causticBogroot = "Caustic Bogroot (Uncommon Acidic Plant)";
  const corrosionCrystal = "Corrosion Crystal (Uncommon Acidic Gem)";
  const dissolvingStoneHusk = "Dissolving Stone Husk (Rare Acidic Mineral)";
  const rustmoldSpores = "Rustmold Spores (Common Acidic Plant)";
  const rustscaleLizardShedding = "Rustscale Lizard Shedding (Common Acidic Hide)";
  const chaosBloomPetals = "Chaos Bloom Petals (Uncommon Chaotic Plant)";
  const entropicBoneFragment = "Entropic Bone Fragment (Uncommon Chaotic Bone)";
  const lucktwistTwig = "Lucktwist Twig (Common Chaotic Wood)";
  const realityGlitchSand = "Reality Glitch Sand (Rare Chaotic Mineral)";
  const tangleweedSeed = "Tangleweed Seed (Common Chaotic Grain)";
  const warpedCopperShard = "Warped Copper Shard (Common Chaotic Metal)";
  const frostcapMushroom = "Frostcap Mushroom (Common Cold Plant)";
  const frozenSpringwater = "Frozen Springwater (Common Cold Fluid)";
  const ironColdMetal = "Iron (Common Cold Metal)";
  const glacierHeartCrystal = "Glacier Heart Crystal (Uncommon Cold Gem)";
  const iceboundMoonflower = "Icebound Moonflower (Rare Cold Plant)";
  const riftwaterDroplet = "Riftwater Droplet (Common Dimensional Fluid)";
  const teleportingThistleSeed = "Teleporting Thistle Seed (Common Dimensional Grain)";
  const wayfarersKnotThread = "Wayfarer’s Knot Thread (Common Dimensional Textile)";
  const riftglassLens = "Riftglass Lens (Uncommon Dimensional Glass)";
  const naturallyFormedRiftglassSheet = "Naturally Formed Riftglass Sheet (Rare Dimensional Glass)";
  const abyssalPepperPod = "Abyssal Pepper Pod (Common Fiendish Spice)";
  const ashenBoneDust = "Ashen Bone Dust (Common Fiendish Bone)";
  const charredDevilthorn = "Charred Devilthorn (Common Fiendish Plant)";
  const brimstoneRuby = "Brimstone Ruby (Uncommon Fiendish Gem)";
  const cursedSoilClump = "Cursed Soil Clump (Rare Fiendish Earthenware)";
  const crackedObsidianChip = "Cracked Obsidian Chip (Common Fiery Gem)";
  const forgeSparkSlag = "Forge Spark Slag (Common Fiery Metal)";
  const oakFieryWood = "Oak (Common Fiery Wood)";
  const borax = "Borax (Uncommon Fiery Mineral)";
  const magnesium = "Magnesium (Uncommon Fiery Mineral)";
  const solarIgnitionSeed = "Solar Ignition Seed (Rare Fiery Grain)";
  const anvilDust = "Anvil Dust (Common Forceful Metal)";
  const bracewoodSplinter = "Bracewood Splinter (Common Forceful Wood)";
  const shieldrootBark = "Shieldroot Bark (Common Forceful Plant)";
  const repulsionCrystal = "Repulsion Crystal (Uncommon Forceful Gem)";
  const titanwoodBark = "Titanwood Bark (Uncommon Forceful Wood)";
  const gravityKnotCrystal = "Gravity Knot Crystal (Rare Forceful Gem)";
  const earthrootBulb = "Earthroot Bulb (Common Inert Plant)";
  const earthwormCastings = "Earthworm Castings (Common Inert Foodstuff)";
  const stonebackTortoiseScute = "Stoneback Tortoise Scute (Common Inert Hide)";
  const nullstonePebble = "Nullstone Pebble (Uncommon Inert Mineral)";
  const spellbreakerOre = "Spellbreaker Ore (Uncommon Inert Metal)";
  const spellvoidClayLump = "Spellvoid Clay Lump (Rare Inert Earthenware)";
  const copperLightningRodShard = "Copper Lightning Rod Shard (Common Lightning Metal)";
  const sparkgrass = "Sparkgrass (Common Lightning Plant)";
  const stormglassShard = "Stormglass Shard (Common Lightning Glass)";
  const topaz = "Topaz (Uncommon Lightning Gem)";
  const stormRocFeather = "Storm Roc Feather (Uncommon Lightning Textile)";
  const ozoneCondensateSphere = "Ozone Condensate Sphere (Rare Lightning Fluid)";
  const mirrorCarpScale = "Mirror Carp Scale (Common Mercurial Hide)";
  const quicksilverDroplet = "Quicksilver Droplet (Common Mercurial Fluid)";
  const silverEelSlime = "Silver Eel Slime (Common Mercurial Fluid)";
  const morphcapFungus = "Morphcap Fungus (Uncommon Mercurial Plant)";
  const morphrootNexus = "Morphroot Nexus (Rare Mercurial Plant)";
  const carrionflyWing = "Carrionfly Wing (Common Necrotic Hide)";
  const graveMold = "Grave Mold (Common Necrotic Plant)";
  const grimPepperSeed = "Grim Pepper Seed (Common Necrotic Spice)";
  const graveKnightBoneChip = "Grave Knight Bone Chip (Uncommon Necrotic Bone)";
  const soulTouchedOnyx = "Soul-Touched Onyx (Uncommon Necrotic Gem)";
  const cryptstoneCore = "Cryptstone Core (Rare Necrotic Mineral)";
  const echoPebble = "Echo Pebble (Common Phantasmal Mineral)";
  const phantomCricketWing = "Phantom Cricket Wing (Common Phantasmal Hide)";
  const songbirdHollowBone = "Songbird Hollow Bone (Common Phantasmal Bone)";
  const feydreamSilk = "Feydream Silk (Uncommon Phantasmal Textile)";
  const dreamLily = "Dream Lily (Uncommon Phantasmal Plant)";
  const whisperglassFragment = "Whisperglass Fragment (Rare Phantasmal Glass)";
  const adderFang = "Adder Fang (Common Poisonous Bone)";
  const bogToadSkin = "Bog Toad Skin (Common Poisonous Hide)";
  const toxicBogMoss = "Toxic Bog Moss (Common Poisonous Plant)";
  const emerald = "Emerald (Uncommon Poisonous Gem)";
  const venomvineSap = "Venomvine Sap (Uncommon Poisonous Fluid)";
  const toxicCrystalBloom = "Toxic Crystal Bloom (Rare Poisonous Gem)";
  const reflectiveInkDrop = "Reflective Ink Drop (Common Psychic Fluid)";
  const brainCoral = "Brain Coral (Uncommon Psychic Plant)";
  const psionicCrystalNode = "Psionic Crystal Node (Uncommon Psychic Gem)";
  const thoughtstormCrystal = "Thoughtstorm Crystal (Rare Psychic Gem)";
  const dawnFeatherDown = "Dawn Feather Down (Common Radiant Textile)";
  const sunblossomPetal = "Sunblossom Petal (Common Radiant Plant)";
  const angelFeatherPlume = "Angel Feather Plume (Uncommon Radiant Textile)";
  const dawncrystalShard = "Dawncrystal Shard (Uncommon Radiant Gem)";
  const puritySpringStone = "Purity Spring Stone (Rare Radiant Mineral)";
  const runestoneFragment = "Runestone Fragment (Common Theurgic Mineral)";
  const divinersEyeStone = "Diviner’s Eye Stone (Uncommon Theurgic Gem)";
  const spellweaveThreadSpool = "Spellweave Thread Spool (Rare Theurgic Textile)";
  const boomcapMushroom = "Boomcap Mushroom (Common Thundering Plant)";
  const clapstonePebble = "Clapstone Pebble (Common Thundering Mineral)";
  const stormdrumHide = "Stormdrum Hide (Uncommon Thundering Hide)";
  const vibratingStone = "Vibrating Stone (Uncommon Thundering Mineral)";
  const stormRocFeatherhideFragment = "Storm Roc Featherhide Fragment (Rare Thundering Hide)";
  const agaricus = "Agaricus (Common Vital Plant)";
  const heartberries = "Heartberries (Common Vital Plant)";
  const honey = "Honey (Common Vital Foodstuff)";
  const amber = "Amber (Uncommon Vital Gem)";
  const trollbloodVial = "Trollblood Vial (Uncommon Vital Fluid)";
  const ancientHeartwoodCore = "Ancient Heartwood Core (Rare Vital Wood)";
  const shadowMoss = "Shadow Moss (Common Void Plant)";
  const abyssalPearl = "Abyssal Pearl (Uncommon Void Gem)";
  const blackholeCoal = "Blackhole Coal (Uncommon Void Mineral)";
  const oblivionDustCluster = "Oblivion Dust Cluster (Rare Void Mineral)";
  const breezegrass = "Breezegrass (Common Zephyrous Plant)";
  const cloudsilkThread = "Cloudsilk Thread (Uncommon Zephyrous Textile)";
  const resonantWindCarapace = "Resonant Wind Carapace (Rare Zephyrous Hide)";

  const commonItems = [
    acidEtchedLimestone,
    rustmoldSpores,
    rustscaleLizardShedding,
    lucktwistTwig,
    tangleweedSeed,
    warpedCopperShard,
    frostcapMushroom,
    frozenSpringwater,
    ironColdMetal,
    riftwaterDroplet,
    teleportingThistleSeed,
    wayfarersKnotThread,
    abyssalPepperPod,
    ashenBoneDust,
    charredDevilthorn,
    crackedObsidianChip,
    forgeSparkSlag,
    oakFieryWood,
    anvilDust,
    bracewoodSplinter,
    shieldrootBark,
    earthrootBulb,
    earthwormCastings,
    stonebackTortoiseScute,
    copperLightningRodShard,
    sparkgrass,
    stormglassShard,
    mirrorCarpScale,
    quicksilverDroplet,
    silverEelSlime,
    carrionflyWing,
    graveMold,
    grimPepperSeed,
    echoPebble,
    phantomCricketWing,
    songbirdHollowBone,
    adderFang,
    bogToadSkin,
    toxicBogMoss,
    reflectiveInkDrop,
    dawnFeatherDown,
    sunblossomPetal,
    runestoneFragment,
    boomcapMushroom,
    clapstonePebble,
    agaricus,
    heartberries,
    honey,
    shadowMoss,
    breezegrass
  ];

  const uncommonItems = [
    amalgamSlagClump,
    causticBogroot,
    corrosionCrystal,
    chaosBloomPetals,
    entropicBoneFragment,
    fracturedPrismaticWeave,
    glacierHeartCrystal,
    hoarfrostLichen,
    direwolfPelt,
    cryingObsidian,
    riftglassLens,
    brimstoneRuby,
    impHide,
    borax,
    cinderrootSprout,
    magnesium,
    hillGiantKnuckleFragment,
    repulsionCrystal,
    titanwoodBark,
    bronzewoodKernel,
    nullstonePebble,
    spellbreakerOre,
    magnetizedGalvanicPebble,
    stormRocFeather,
    topaz,
    malleableMetal,
    morphcapFungus,
    graveKnightBoneChip,
    miasmaCuredLeather,
    soulTouchedOnyx,
    dreamLily,
    feydreamSilk,
    emerald,
    venomvineSap,
    brainCoral,
    distilledThoughtResidue,
    psionicCrystalNode,
    angelFeatherPlume,
    dawncrystalShard,
    pureGlimmeringDew,
    divinersEyeStone,
    greenBoomstone,
    stormdrumHide,
    vibratingStone,
    amber,
    druidicHerbalWeave,
    trollbloodVial,
    abyssalPearl,
    blackholeCoal,
    cloudsilkThread
  ];

  const rareItems = [
    dissolvingStoneHusk,
    realityGlitchSand,
    iceboundMoonflower,
    naturallyFormedRiftglassSheet,
    cursedSoilClump,
    solarIgnitionSeed,
    gravityKnotCrystal,
    spellvoidClayLump,
    ozoneCondensateSphere,
    morphrootNexus,
    cryptstoneCore,
    whisperglassFragment,
    toxicCrystalBloom,
    thoughtstormCrystal,
    puritySpringStone,
    spellweaveThreadSpool,
    stormRocFeatherhideFragment,
    ancientHeartwoodCore,
    oblivionDustCluster,
    resonantWindCarapace
  ];

  const veryRareItems = [
    gelatinousCubeCore,
    brokenModronGear,
    vitrifiedWhiteDragonBreathShard,
    stoneOfInfiniteStair,
    archdevilRubyheart,
    everburningPhoenixAsh,
    damagedTarrasqueScaleShard,
    feywardTreeLeaf,
    blueDragonStormglassEye,
    pristineDoppelgangerSkin,
    linenOfFinalBreath,
    witherRoseShadowfell,
    salivaLobotomizedBoar,
    illithidSpine,
    prismCollapsedSunEcho,
    planetarFeatherPlume,
    stormEaterLamannianOakroot,
    unicornManeWeave,
    blackPearlSinisterVoid,
    djinniCondensedAetherDust
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
    return "Did not find anything.";
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
        common: [rustmoldSpores, rustscaleLizardShedding, acidEtchedLimestone],
        uncommon: [causticBogroot, corrosionCrystal, amalgamSlagClump],
        rare: dissolvingStoneHusk,
        veryRare: gelatinousCubeCore,
      },

      Chaotic: {
        common: [lucktwistTwig, tangleweedSeed, warpedCopperShard],
        uncommon: [chaosBloomPetals, entropicBoneFragment, fracturedPrismaticWeave],
        rare: realityGlitchSand,
        veryRare: brokenModronGear,
      },

      Cold: {
        common: [frostcapMushroom, frozenSpringwater, ironColdMetal],
        uncommon: [glacierHeartCrystal, direwolfPelt, hoarfrostLichen],
        rare: iceboundMoonflower,
        veryRare: vitrifiedWhiteDragonBreathShard,
      },

      Dimensional: {
        common: [riftwaterDroplet, teleportingThistleSeed, wayfarersKnotThread],
        uncommon: [riftglassLens, cryingObsidian],
        rare: naturallyFormedRiftglassSheet,
        veryRare: stoneOfInfiniteStair,
      },

      Fiendish: {
        common: [abyssalPepperPod, ashenBoneDust, charredDevilthorn],
        uncommon: [impHide, brimstoneRuby],
        rare: cursedSoilClump,
        veryRare: archdevilRubyheart,
      },

      Fiery: {
        common: [crackedObsidianChip, forgeSparkSlag, oakFieryWood],
        uncommon: [borax, magnesium, cinderrootSprout],
        rare: solarIgnitionSeed,
        veryRare: everburningPhoenixAsh,
      },

      Forceful: {
        common: [anvilDust, bracewoodSplinter, shieldrootBark],
        uncommon: [repulsionCrystal, titanwoodBark, hillGiantKnuckleFragment],
        rare: gravityKnotCrystal,
        veryRare: damagedTarrasqueScaleShard,
      },

      Inert: {
        common: [earthrootBulb, earthwormCastings, stonebackTortoiseScute],
        uncommon: [nullstonePebble, spellbreakerOre, bronzewoodKernel],
        rare: spellvoidClayLump,
        veryRare: feywardTreeLeaf,
      },

      Lightning: {
        common: [copperLightningRodShard, sparkgrass, stormglassShard],
        uncommon: [topaz, stormRocFeather, magnetizedGalvanicPebble],
        rare: ozoneCondensateSphere,
        veryRare: blueDragonStormglassEye,
      },

      Mercurial: {
        common: [mirrorCarpScale, quicksilverDroplet, silverEelSlime],
        uncommon: [morphcapFungus, malleableMetal],
        rare: morphrootNexus,
        veryRare: pristineDoppelgangerSkin,
      },

      Necrotic: {
        common: [carrionflyWing, graveMold, grimPepperSeed],
        uncommon: [graveKnightBoneChip, soulTouchedOnyx, miasmaCuredLeather],
        rare: cryptstoneCore,
        veryRare: linenOfFinalBreath,
      },

      Phantasmal: {
        common: [echoPebble, phantomCricketWing, songbirdHollowBone],
        uncommon: [feydreamSilk, dreamLily],
        rare: whisperglassFragment,
        veryRare: witherRoseShadowfell,
      },

      Poisonous: {
        common: [adderFang, bogToadSkin, toxicBogMoss],
        uncommon: [emerald, venomvineSap],
        rare: toxicCrystalBloom,
        veryRare: salivaLobotomizedBoar,
      },

      Psychic: {
        common: [reflectiveInkDrop],
        uncommon: [brainCoral, psionicCrystalNode, distilledThoughtResidue],
        rare: thoughtstormCrystal,
        veryRare: illithidSpine,
      },

      Radiant: {
        common: [dawnFeatherDown, sunblossomPetal],
        uncommon: [angelFeatherPlume, dawncrystalShard, pureGlimmeringDew],
        rare: puritySpringStone,
        veryRare: prismCollapsedSunEcho,
      },

      Theurgic: {
        common: [runestoneFragment],
        uncommon: [divinersEyeStone],
        rare: spellweaveThreadSpool,
        veryRare: planetarFeatherPlume,
      },

      Thundering: {
        common: [boomcapMushroom, clapstonePebble],
        uncommon: [stormdrumHide, vibratingStone, greenBoomstone],
        rare: stormRocFeatherhideFragment,
        veryRare: stormEaterLamannianOakroot,
      },

      Vital: {
        common: [agaricus, heartberries, honey],
        uncommon: [amber, trollbloodVial, druidicHerbalWeave],
        rare: ancientHeartwoodCore,
        veryRare: unicornManeWeave,
      },

      Void: {
        common: [shadowMoss],
        uncommon: [abyssalPearl, blackholeCoal],
        rare: oblivionDustCluster,
        veryRare: blackPearlSinisterVoid,
      },

      Zephyrous: {
        common: [breezegrass],
        uncommon: [cloudsilkThread],
        rare: resonantWindCarapace,
        veryRare: djinniCondensedAetherDust,
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
    results.push(`${commonQuantity} x ${commonItemName}`);
  }
  if (uncommonItemName && uncommonQuantity > 0) {
    results.push(`${uncommonQuantity} x ${uncommonItemName}`);
  }
  if (rareItemName && rareQuantity > 0) {
    results.push(`${rareQuantity} x ${rareItemName}`);
  }
  if (veryRareItemName && veryRareQuantity > 0) {
    results.push(`${veryRareQuantity} x ${veryRareItemName}`);
  }

  return results.length ? results.join("\n") : "Did not find anything.";
}

document.addEventListener("DOMContentLoaded", () => {
  const rarityOptions = [
    "common",
    "uncommon",
    "rare",
    "very rare"
  ];

  const nat20Options = [
    "Acidic",
    "Chaotic",
    "Cold",
    "Dimensional",
    "Fiendish",
    "Fiery",
    "Forceful",
    "Inert",
    "Lightning",
    "Mercurial",
    "Necrotic",
    "Phantasmal",
    "Poisonous",
    "Psychic",
    "Radiant",
    "Theurgic",
    "Thundering",
    "Vital",
    "Void",
    "Zephyrous"
  ];

  const raritySelect = document.getElementById("rarity");
  const nat20TypeSelect = document.getElementById("nat20Type");
  const nat20Checkbox = document.getElementById("nat20");
  const badWeatherCheckbox = document.getElementById("badWeather");
  const hostileAreaCheckbox = document.getElementById("hostileArea");
  const nat20TypeWrap = document.getElementById("nat20TypeWrap");
  const rollWrap = document.getElementById("rollWrap");
  const form = document.getElementById("forageForm");
  const output = document.getElementById("output");

  rarityOptions.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    raritySelect.appendChild(option);
  });

  nat20Options.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    nat20TypeSelect.appendChild(option);
  });

  function toggleNat20Fields() {
    if (nat20Checkbox.checked) {
      nat20TypeWrap.style.display = "flex";
      rollWrap.style.display = "none";
    } else {
      nat20TypeWrap.style.display = "none";
      rollWrap.style.display = "flex";
    }
  }

  nat20Checkbox.addEventListener("change", toggleNat20Fields);
  toggleNat20Fields();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const rarity = raritySelect.value;
    const nature = parseInt(document.getElementById("nature").value, 10) || 0;
    const survival = parseInt(document.getElementById("survival").value, 10) || 0;
    const roll = nat20Checkbox.checked
      ? 0
      : (parseInt(document.getElementById("roll").value, 10) || 0);
    const nat20 = nat20Checkbox.checked;
    const nat20Type = nat20TypeSelect.value;
    const badWeather = badWeatherCheckbox.checked;
    const hostileArea = hostileAreaCheckbox.checked;

    const result = forageResult(rarity, nature, survival, roll, nat20, nat20Type, badWeather, hostileArea);
    output.value = result;
  });
});