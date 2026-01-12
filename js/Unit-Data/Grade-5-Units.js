// Grade 5 Units Data
unitsData.push(
    {
        name: "Unit",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        // ======== OPTIONAL ======
        evolution: {
            evolvedImage: "./Images/Units/frost_moon_icon.png",
            evolvedUnitName: "Unit (Evolved)",
            tasks: {
                // =========== ADD AS =========== 
                // < Task: "Description"> 
                // Can add as many as you needed 
                Task1: "Description",
                Task2: "Clear Wave 50 on Hard"
            },
            resources: {
                // =========== ADD AS =========== 
                // < Resource: "Description" >
                // Can add as many as you needed 
                Gold: "50000"
            }
        },
        upgrades: {
            // =========== ADD AS =========== 
            // < 1: { cost: "", damage: "", range: "", cooldown: "", aoe: "", attackType: "Ground / Hyrbid" } >
            // Again can add as many as needed

            2: { cost: 400, damage: 300, range: 4, cooldown: 1.8, aoe: "Single Target", attackType: "Ground" },
            3: { cost: 800, damage: 600, range: 5, cooldown: 1.5, aoe: "Cone", attackType: "Ground" }  
        },
        // ======== OPTIONAL ======
        // Can add just one of two if unit only has passive or only has ability
        // Can add multiple items to both passive and ability
        passive: [
            {
                passiveName: "test",
                passiveType: "test",
                passiveDescription: "test description",
                passiveCooldown: "10s",
                passiveImage: "file path"
            },
        ],
        ability: [
            {
                abilityName: "test",
                abilityType: "test",
                abilityDescription: "test description",
                abilityCooldown: "10s",
                abilityImage: "file path"
            },
            {
                abilityName: "test",
                abilityType: "test",
                abilityDescription: "test description",
                abilityCooldown: "10s",
                abilityImage: "file path"
            },
        ]
    // MAKE SURE UNIT ENTRY IS SEPERATED BY THE }, LIKE BELOW
    },
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
            5: { cost: 950, damage: 140, range: 25, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            6: { cost: 1300, damage: 160, range: 30, cooldown: 3, aoe: "Circle", attackType: "Ground"}
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
        obtainment: "Banner",
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
            6: { cost: 150, damage: 200, range: 30, cooldown: 4, aoe: "Line", attackType: "Hybrid"}
        }
    },
    {
        name: "Projo (Young)",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
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
        upgrades: {
            1: { cost: 300, damage: 30, range: 10, cooldown: 3, aoe: "Circle", attackType: "Ground"},
            2: { cost: 500, damage: 40, range: 15, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            3: { cost: 450, damage: 50, range: 15, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            4: { cost: 650, damage: 70, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            5: { cost: 1100, damage: 80, range: 23, cooldown: 4, aoe: "Full", attackType: "Ground"},
            6: { cost: 1150, damage: 110, range: 30, cooldown: 4, aoe: "Full", attackType: "Ground"}
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
        upgrades: {
            1: { cost: 315, damage: 50, range: 15, cooldown: 4, aoe: "Cone", attackType: "Ground"},
            2: { cost: 510, damage: 80, range: 17, cooldown: 5, aoe: "Cone", attackType: "Ground"},
            3: { cost: 740, damage: 100, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            4: { cost: 860, damage: 130, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            5: { cost: 1200, damage: 150, range: 23, cooldown: 4, aoe: "Line", attackType: "Ground"},
            6: { cost: 1050, damage: 170, range: 25, cooldown: 4, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Magimu",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 735, damage: 70, range: 15, cooldown: 7, aoe: "Circle", attackType: "Air"},
            2: { cost: 980, damage: 80, range: 17.5, cooldown: 7, aoe: "Circle", attackType: "Air"},
            3: { cost: 220, damage: 80, range: 25, cooldown: 7, aoe: "Circle ", attackType: "Air"},
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
        }
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
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 300, damage: 55, range: 10, cooldown: 2.5, aoe: "Circle", attackType: "Ground"},
            2: { cost: 400, damage: 70, range: 13.5, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            3: { cost: 600, damage: 90, range: 15, cooldown: 4, aoe: "Line", attackType: "Ground"},
            4: { cost: 800, damage: 110, range: 17.5, cooldown: 4, aoe: "Full", attackType: "Ground"},
            5: { cost: 900, damage: 130, range: 20, cooldown: 4, aoe: "Full", attackType: "Ground"},
            6: { cost: 1300, damage: 150, range: 22.5, cooldown: 4, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Crimson Queen",
        rarity: "Grade 5",
        class: "Magician",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 750, damage: 60, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            2: { cost: 1250, damage: 80, range: 22, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 2500, damage: 100, range: 25, cooldown: 5, aoe: "Line", attackType: "Ground"},
            4: { cost: 3550, damage: 150, range: 20, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            5: { cost: 4500, damage: 170, range: 22.5, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            6: { cost: 7450, damage: 200, range: 30, cooldown: 4, aoe: "Line", attackType: "Ground"}
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
            1: { cost: 80, damage: 60, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            2: { cost: 120, damage: 80, range: 22, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 150, damage: 100, range: 25, cooldown: 5, aoe: "Line", attackType: "Ground"},
            4: { cost: 150, damage: 150, range: 20, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            5: { cost: 150, damage: 170, range: 22.5, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            6: { cost: 150, damage: 200, range: 30, cooldown: 4, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Empire Jenava",
        rarity: "Grade 5",
        class: "Magician",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 80, damage: 60, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground"},
            2: { cost: 120, damage: 80, range: 22, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 150, damage: 100, range: 25, cooldown: 5, aoe: "Line", attackType: "Ground"},
            4: { cost: 150, damage: 150, range: 20, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            5: { cost: 150, damage: 170, range: 22.5, cooldown: 4.5, aoe: "Full", attackType: "Ground"},
            6: { cost: 150, damage: 200, range: 30, cooldown: 4, aoe: "Line", attackType: "Ground"}
        }
    },
    {
        name: "Jackpot Dealer",
        rarity: "Grade 5",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 500, damage: 100, range: 20, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            2: { cost: 2000, damage: 150, range: 25, cooldown: 5, aoe: "Circle", attackType: "Ground"},
            3: { cost: 2277, damage: 200, range: 28, cooldown: 5, aoe: "Circle", attackType: "Hybrid"},
            4: { cost: 3000, damage: 240, range: 30, cooldown: 5, aoe: "Circle", attackType: "Hybrid"}
        }
    },
);