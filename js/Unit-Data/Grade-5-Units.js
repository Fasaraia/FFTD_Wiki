// Grade 5 Units Data
unitsData.push(
    {
        name: "Ria",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 300, damage: 70, range: 15, cooldown: 3, aoe: "Single Target", attackType: "Ground"},
            2: { cost: 400, damage: 85, range: 17, cooldown: 3, aoe: "Single Target", attackType: "Ground"},
            3: { cost: 450, damage: 100, range: 20, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            4: { cost: 550, damage: 120, range: 22, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            5: { cost: 1300, damage: 140, range: 25, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            6: { cost: 1060, damage: 160, range: 30, cooldown: 3, aoe: "Circle", attackType: "Ground"}
        }
    },
    {
        name: "Aloes",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 275, damage: 60, range: 15, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            2: { cost: 400, damage: 80, range: 15, cooldown: 5, aoe: "Cone", attackType: "Ground"},
            3: { cost: 550, damage: 100, range: 17, cooldown: 5, aoe: "Cone", attackType: "Ground"},
            4: { cost: 750, damage: 120, range: 20, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            5: { cost: 900, damage: 170, range: 25, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            6: { cost: 1200, damage: 200, range: 30, cooldown: 4, aoe: "Circle", attackType: "Ground"}
        }
    },
    {
        name: "Rimumu",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 275, damage: 60, range: 15, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            2: { cost: 300, damage: 80, range: 17, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            3: { cost: 600, damage: 100, range: 20, cooldown: 5, aoe: "Cone", attackType: "Ground"},
            4: { cost: 1000, damage: 125, range: 22.5, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            5: { cost: 1400, damage: 150, range: 25, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            6: { cost: 1500, damage: 180, range: 30, cooldown: 5, aoe: "Full", attackType: "Ground"}
        }
    },
    {
        name: "December 7th",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Release Event",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 250, damage: 60, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            2: { cost: 500, damage: 80, range: 22, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 700, damage: 100, range: 25, cooldown: 5, aoe: "Line", attackType: "Ground"},
            4: { cost: 1300, damage: 150, range: 20, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            5: { cost: 1400, damage: 170, range: 22.5, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            6: { cost: 1100, damage: 200, range: 30, cooldown: 4, aoe: "Line", attackType: "Hybrid"}
        }
    },
    {
        name: "Projo (Young)",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Shibuya Hardcore Map",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 390, damage: 60, range: 15, cooldown: 6, aoe: "Full", attackType: "Ground"},
            2: { cost: 480, damage: 80, range: 15, cooldown: 6, aoe: "Full", attackType: "Ground"},
            3: { cost: 540, damage: 100, range: 17, cooldown: 6, aoe: "Full", attackType: "Ground"},
            4: { cost: 750, damage: 130, range: 20, cooldown: 5, aoe: "Full", attackType: "Ground"},
            5: { cost: 1400, damage: 150, range: 25, cooldown: 5, aoe: "Full", attackType: "Ground"},
            6: { cost: 1500, damage: 240, range: 35, cooldown: 4, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Chainsaw",
        rarity: "Grade 5",
        class: "Magician",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Bleed",
                icon: "file path",
                description: "Bleed applies 4 damage ticks. Each tick deals damage equal to 50% of the unit base damage."
            }
        ],
        upgrades: {
            1: { cost: 300, damage: 30, range: 10, cooldown: 3, aoe: "Circle", attackType: "Ground/Bleed"},
            2: { cost: 500, damage: 40, range: 15, cooldown: 4, aoe: "Circle", attackType: "Ground/Bleed"},
            3: { cost: 450, damage: 50, range: 15, cooldown: 4, aoe: "Circle", attackType: "Ground/Bleed"},
            4: { cost: 650, damage: 70, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground/Bleed"},
            5: { cost: 1100, damage: 80, range: 23, cooldown: 4, aoe: "Full", attackType: "Ground/Bleed"},
            6: { cost: 1150, damage: 110, range: 30, cooldown: 4, aoe: "Full", attackType: "Ground/Bleed"}
        }
    },
    {
        name: "Lightning Railgun",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 250, damage: 60, range: 12, cooldown: 5, aoe: "Cone", attackType: "Ground"},
            2: { cost: 400, damage: 70, range: 14, cooldown: 5, aoe: "Cone", attackType: "Ground"},
            3: { cost: 500, damage: 100, range: 15, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            4: { cost: 650, damage: 125, range: 15, cooldown: 4, aoe: "Circle", attackType: "Hybrid"},
            5: { cost: 1100, damage: 150, range: 20, cooldown: 5, aoe: "Circle", attackType: "Hybrid"},
            6: { cost: 1350, damage: 170, range: 30, cooldown: 4, aoe: "Circle", attackType: "Hybrid"}
        }
    },
    {
        name: "Secretary",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 285, damage: 60, range: 12, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            2: { cost: 345, damage: 75, range: 13, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 525, damage: 90, range: 15, cooldown: 5, aoe: "Line", attackType: "Hybrid"},
            4: { cost: 945, damage: 125, range: 17, cooldown: 5, aoe: "Line", attackType: "Hybrid"},
            5: { cost: 1000, damage: 160, range: 20, cooldown: 5, aoe: "Line", attackType: "Hybrid"},
            6: { cost: 1400, damage: 200, range: 25, cooldown: 5, aoe: "Circle", attackType: "Hybrid"}
        }
    },
    {
        name: "Mist Pillar",
        rarity: "Grade 5",
        class: "Magician",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Bleed",
                icon: "file path",
                description: "Bleed applies 4 damage ticks. Each tick deals damage equal to 50% of the unit base damage."
            }
        ],
        upgrades: {
            1: { cost: 315, damage: 50, range: 15, cooldown: 4, aoe: "Cone", attackType: "Ground/Bleed"},
            2: { cost: 510, damage: 80, range: 17, cooldown: 5, aoe: "Cone", attackType: "Ground/Bleed"},
            3: { cost: 740, damage: 100, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground/Bleed"},
            4: { cost: 860, damage: 130, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground/Bleed"},
            5: { cost: 1200, damage: 150, range: 23, cooldown: 4, aoe: "Line", attackType: "Ground/Bleed"},
            6: { cost: 2100, damage: 170, range: 25, cooldown: 4, aoe: "Line", attackType: "Ground/Bleed"}
        }
    },
    {
        name: "Magimu",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Hill",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 735, damage: 70, range: 20, cooldown: 7, aoe: "Circle", attackType: "Air"},
            2: { cost: 980, damage: 80, range: 20, cooldown: 7, aoe: "Circle", attackType: "Air"},
            3: { cost: 220, damage: 140, range: 23, cooldown: 7, aoe: "Circle ", attackType: "Air"},
            4: { cost: 15000, damage: 5500, range: 70, cooldown: 40, aoe: "Circle ", attackType: "Air"}
        }
    },
    {
        name: "Water Pillar",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 150, damage: 60, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            2: { cost: 350, damage: 80, range: 22, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 630, damage: 100, range: 25, cooldown: 5, aoe: "Line", attackType: "Ground"},
            4: { cost: 710, damage: 150, range: 20, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            5: { cost: 1175, damage: 170, range: 22.5, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            6: { cost: 1450, damage: 200, range: 30, cooldown: 4, aoe: "Line", attackType: "Ground"}
        },
        ability: [
            {
                abilityName: "Dead Calm",
                abilityType: "Dmg",
                abilityDescription: "Dead Calm scales by every 5 mob (max 75% extra damage) and deals 2x damage to all mobs in the range of his ability.",
                abilityCooldown: "45s",
                abilityImage: "file path"
            }
        ]
    },
    {
        name: "Eslive",
        rarity: "Grade 5",
        class: "Magician",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Freeze",
                icon: "file path",
                description: "Freeze mobs for 5 seconds (can vary between different units)"
            }
        ],
        upgrades: {
            1: { cost: 500, damage: 50, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            2: { cost: 680, damage: 60, range: 20, cooldown: 6, aoe: "Circle", attackType: "Ground"},
            3: { cost: 870, damage: 75, range: 22, cooldown: 7, aoe: "Line", attackType: "Ground"},
            4: { cost: 630, damage: 85, range: 22, cooldown: 5, aoe: "Line", attackType: "Ground"},
            5: { cost: 825, damage: 140, range: 25, cooldown: 4, aoe: "Line", attackType: "Ground"},
            6: { cost: 2500, damage: 140, range: 35, cooldown: 7, aoe: "Circle", attackType: "Ground/Freeze"}
        }
    },
    {
        name: "Toeje",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Shibuya Map",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 300, damage: 55, range: 10, cooldown: 3, aoe: "Circle", attackType: "Ground"},
            2: { cost: 400, damage: 70, range: 13, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            3: { cost: 600, damage: 90, range: 15, cooldown: 4, aoe: "Line", attackType: "Ground"},
            4: { cost: 800, damage: 110, range: 18, cooldown: 4, aoe: "Line", attackType: "Ground"},
            5: { cost: 900, damage: 130, range: 20, cooldown: 4, aoe: "Line", attackType: "Ground"},
            6: { cost: 1300, damage: 150, range: 23, cooldown: 4, aoe: "Full", attackType: "Ground"}
        },
        ability: [
            {
                abilityName: "Continuous Slashes",
                abilityType: "Dmg",
                abilityDescription: "Continuous Slashes performs 150 rapid slashes. Each slash deals 1/30 of the units base damage, for a total of 5x base damage if all hits land.",
                abilityCooldown: "60s",
                abilityImage: "file path"
            }
        ]
    },
    {
        name: "Crimson Queen",
        rarity: "Grade 5",
        class: "Magician",
        obtainment: "Blood Moon",
        placement: "Hill",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Bleed",
                icon: "file path",
                description: "Bleed applies 4 damage ticks. Each tick deals damage equal to 50% of the unit base damage."
            }
        ],
        upgrades: {
            1: { cost: 750, damage: 110, range: 20, cooldown: 6, aoe: "Circle", attackType: "Air/Bleed"},
            2: { cost: 1250, damage: 160, range: 25, cooldown: 5, aoe: "Circle", attackType: "Air/Bleed"},
            3: { cost: 2500, damage: 200, range: 30, cooldown: 5, aoe: "Line", attackType: "Air/Bleed"},
            4: { cost: 3550, damage: 225, range: 35, cooldown: 5, aoe: "Line", attackType: "Air/Bleed"},
            5: { cost: 4500, damage: 250, range: 37, cooldown: 5, aoe: "Circle", attackType: "Air/Bleed"},
            6: { cost: 7450, damage: 300, range: 40, cooldown: 5, aoe: "Circle", attackType: "Air/Bleed"}
        }
    },
    {
        name: "Beta",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 750, damage: 100, range: 17, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            2: { cost: 1000, damage: 130, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            3: { cost: 1500, damage: 150, range: 23, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            4: { cost: 3500, damage: 300, range: 28, cooldown: 5, aoe: "Line", attackType: "Ground"},
            5: { cost: 5500, damage: 450, range: 30, cooldown: 5, aoe: "Line", attackType: "Ground"},
            6: { cost: 7500, damage: 650, range: 38, cooldown: 6, aoe: "Full", attackType: "Ground"}
        }
    },
    {
        name: "Empire Jenava",
        rarity: "Grade 5",
        class: "Magician",
        obtainment: "Evolve Mil Jenava",
        placement: "Hill",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Burn",
                icon: "file path",
                description: "Burn applies 3 damage ticks. Each tick deals damage equal to the unit base damage."
            }
        ],
        upgrades: {
            1: { cost: 375, damage: 60, range: 20, cooldown: 7, aoe: "Circle", attackType: "Air/Burn"},
            2: { cost: 425, damage: 80, range: 20, cooldown: 7, aoe: "Circle", attackType: "Air/Burn"},
            3: { cost: 565, damage: 100, range: 25, cooldown: 7, aoe: "Cone", attackType: "Air/Burn"},
            4: { cost: 500, damage: 150, range: 28, cooldown: 7, aoe: "Cone", attackType: "Air/Burn"},
            5: { cost: 725, damage: 170, range: 30, cooldown: 7, aoe: "Cone", attackType: "Air/Burn"},
            6: { cost: 1250, damage: 200, range: 33, cooldown: 7, aoe: "Line", attackType: "Air/Burn"}
        }
    },
    {
        name: "Jackpot Dealer",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Underground Hideout",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 500, damage: 100, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            2: { cost: 2000, damage: 150, range: 25, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 2277, damage: 200, range: 28, cooldown: 5, aoe: "Circle", attackType: "Hybrid"},
            4: { cost: 3000, damage: 240, range: 30, cooldown: 5, aoe: "Circle", attackType: "Hybrid"}
        },
        ability: [
            {
                abilityName: "Domain Expansion: Idle Death Gacha",
                abilityType: "Self buff",
                abilityDescription: "Idle Death Gacha is an ability that buffs Jackpot Dealer based off of how many jackpots you hit. When this ability is first activated you gain the ability to roll. The cost of rolls starts at 5k and doubles each time you receive a jackpot. Each time you hit a jackpot both your percentage to hit another jackpot and the cost per roll increases. The duration of the buffs from each jackpot last until the end of the ability.",
                abilityCooldown: "Global cooldown of 15 minutes",
                abilityImage: "file path"
            }
        ]
    },
    {
        name: "King of Curses",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Unobtainable",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Burn",
                icon: "file path",
                description: "Burn applies 3 damage ticks. Each tick deals damage equal to the unit base damage."
            }
        ],
        upgrades: {
            1: { cost: 270, damage: 30, range: 20, cooldown: 5, aoe: "Line", attackType: "Ground"},
            2: { cost: 360, damage: 40, range: 20, cooldown: 5, aoe: "Line", attackType: "Ground"},
            3: { cost: 550, damage: 55, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground/Burn"},
            4: { cost: 800, damage: 65, range: 25, cooldown: 5, aoe: "Circle", attackType: "Ground/Burn"},
            5: { cost: 1080, damage: 80, range: 30, cooldown: 5, aoe: "Circle", attackType: "Ground/Burn"},
            6: { cost: 1680, damage: 80, range: 30, cooldown: 7, aoe: "Circle", attackType: "Ground/Burn"}
        },
        ability: [
            {
                abilityName: "Domain Expansion",
                abilityType: "",
                abilityDescription: "",
                abilityCooldown: "",
                abilityImage: "file path"
            }
        ]
    },
);