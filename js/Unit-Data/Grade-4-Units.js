// Secret Units Data
unitsData.push(
    {
        name: "Vegetable",
        rarity: "Grade 4",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Hill",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 225, damage: 30, range: 15, cooldown: 5, aoe: "Circle", attackType: "Air"},
            2: { cost: 300, damage: 40, range: 17, cooldown: 5, aoe: "Circle", attackType: "Air"},
            3: { cost: 245, damage: 45, range: 20, cooldown: 4, aoe: "Line", attackType: "Air"},
            4: { cost: 450, damage: 60, range: 25, cooldown: 4.5, aoe: "Line", attackType: "Air"}
        }
    },
    {
        name: "Chair Guy",
        rarity: "Grade 4",
        class: "Bishop",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Slow",
                icon: "file path",
                description: "Slows Mobs by 15% (% can vary between different units)"
            }
        ],
        upgrades: {
            1: { cost: 400, damage: 8, range: 15, cooldown: 1, aoe: "Full", attackType: "Ground"},
            2: { cost: 2000, damage: 65, range: 15, cooldown: 7, aoe: "Circle", attackType: "Ground/Slow"}
        }
    },
    {
        name: "Pasta",
        rarity: "Grade 4",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 80, damage: 35, range: 13, cooldown: 3, aoe: "Cone", attackType: "Ground"},
            2: { cost: 200, damage: 50, range: 15, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            3: { cost: 230, damage: 60, range: 15, cooldown: 3.5, aoe: "Cone", attackType: "Ground"},
            4: { cost: 470, damage: 70, range: 20, cooldown: 4, aoe: "Cone", attackType: "Ground"}
        }
    },
    {
        name: "Ichugo",
        rarity: "Grade 4",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 120, damage: 40, range: 10, cooldown: 4, aoe: "Cone (180°)", attackType: "Ground"},
            2: { cost: 180, damage: 55, range: 13, cooldown: 4, aoe: "Cone (180°)", attackType: "Ground"},
            3: { cost: 250, damage: 65, range: 15, cooldown: 4, aoe: "Line", attackType: "Ground"},
            4: { cost: 330, damage: 80, range: 17, cooldown: 4, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Tanjiru",
        rarity: "Grade 4",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 150, damage: 30, range: 12.5, cooldown: 4, aoe: "Single Target", attackType: "Ground"},
            2: { cost: 225, damage: 45, range: 15, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            3: { cost: 275, damage: 60, range: 16, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            4: { cost: 450, damage: 70, range: 18, cooldown: 4, aoe: "Cone", attackType: "Ground"}
        }
    },
    {
        name: "Demon Girl",
        rarity: "Grade 4",
        class: "Magician",
        obtainment: "Banner",
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
            1: { cost: 90, damage: 35, range: 12, cooldown: 6, aoe: "Circle", attackType: "Ground/Burn"},
            2: { cost: 100, damage: 20, range: 15, cooldown: 5, aoe: "Circle", attackType: "Ground/Burn"},
            3: { cost: 210, damage: 35, range: 15, cooldown: 5, aoe: "Cone", attackType: "Ground/Burn"}
        }
    },
    {
        name: "Notzu",
        rarity: "Grade 4",
        class: "Magician",
        obtainment: "Banner",
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
            1: { cost: 100, damage: 15, range: 9, cooldown: 6, aoe: "Circle", attackType: "Ground/Burn"},
            2: { cost: 140, damage: 20, range: 10, cooldown: 6, aoe: "Circle", attackType: "Ground/Burn"},
            3: { cost: 200, damage: 30, range: 11, cooldown: 10, aoe: "Cone", attackType: "Ground/Burn"}
        }
    },
    {
        name: "Yummy",
        rarity: "Grade 4",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 500, damage: 70, range: 14, cooldown: 5, aoe: "Line", attackType: "Ground"},
            2: { cost: 750, damage: 60, range: 16, cooldown: 5, aoe: "Line", attackType: "Ground"},
            3: { cost: 1000, damage: 65, range: 18, cooldown: 5, aoe: "Line", attackType: "Ground"},
            4: { cost: 710, damage: 40, range: 20, cooldown: 5, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Horsey",
        rarity: "Grade 4",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 80, damage: 30, range: 12, cooldown: 2, aoe: "Single Target", attackType: "Ground"},
            2: { cost: 120, damage: 45, range: 17, cooldown: 2, aoe: "Single Target", attackType: "Ground"},
            3: { cost: 150, damage: 55, range: 25, cooldown: 3, aoe: "Line", attackType: "Ground"},
            4: { cost: 150, damage: 70, range: 32, cooldown: 3, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Mil Jenava",
        rarity: "Grade 4",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Hill",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        evolution: {
            evolvedImage: "./Images/Units/frost_moon_icon.png",
            evolvedUnitName: "Empire Jenava",
            tasks: {
                Task1: "Take down 2000 enemies with Mil Jenava in Clown Island",
                Task2: "Complete 10 winning matches in Overlord",
                Task3: "Complete 5 winning matches in Overlord with more than 1 player"
            },
            resources: {
                Crystals: "3500",
                Gold: "50",
                Silver: "200"
            }
        },
        upgrades: {
            1: { cost: 225, damage: 30, range: 15, cooldown: 5, aoe: "Circle", attackType: "Air"},
            2: { cost: 220, damage: 40, range: 20, cooldown: 4, aoe: "Circle", attackType: "Air"},
            3: { cost: 350, damage: 50, range: 15, cooldown: 4, aoe: "Circle", attackType: "Air"},
            4: { cost: 550, damage: 65, range: 25, cooldown: 3, aoe: "Circle", attackType: "Air"}
        }
    },
    {
        name: "Mustache (Fort)",
        rarity: "Grade 4",
        class: "Bishop",
        obtainment: "Evolve Mustache",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        statsEffects: [
            {
                name: "Slow",
                icon: "file path",
                description: "Slows Mobs by 45% (% can vary between different units)"
            }
        ],
        upgrades: {
            1: { cost: 500, damage: 10, range: 25, cooldown: 6, aoe: "Circle", attackType: "Ground"},
            2: { cost: 650, damage: 15, range: 27, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 750, damage: 25, range: 30, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            4: { cost: 1500, damage: 35, range: 25, cooldown: 12, aoe: "Full", attackType: "Ground/Slow"}
        }
    },
    {
        name: "Farmer Gokke",
        rarity: "Grade 4",
        class: "Bishop",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        farm: true,
        upgrades: {
            1: { cost: 425, money: "200"},
            2: { cost: 525, money: "450"},
            3: { cost: 925, money: "650"},
            4: { cost: 1725, money: "925"}
        }
    },
);