// Secret Units Data
//{
//     name: "",
//     rarity: "grade 3-5 / secret",
//     class: "paladin, magician, bishop",
//     obtainment: "Banner",
//     placement: "hill / ground",
//     update: "1.0, 1.1...",
//     // ======== OPTIONAL ======
//     //statsEffects: [
//             // =========== ADD AS =========== 
//             // {
//                  // name: "",
//                  // icon: "file path",
//                  // description: "description"
//                  //   },
//             // Can add as many as you needed (seperate like {}, {})
//     //],
//     imageIcon: "file path",
//     image: "file path",
//     // ======== OPTIONAL ======
//     evolution: {
//         evolvedImage: "file path",
//         evolvedUnitName: "Unit Name",
//         tasks: {
//             // =========== ADD AS =========== 
//             // < Task: "Description"> 
//             // Can add as many as you needed 
//             Task1: "Description",
//             Task2: "Clear Wave 50 on Hard"
//         },
//         resources: {
//             // =========== ADD AS =========== 
//             // < Resource: "Description" >
//             // Can add as many as you needed 
//             Gold: "50000"
//         }
//     },
//     // ---------------------------------------- Normal Unit -------------------------------------------------
//     upgrades: {
//         // =========== ADD AS =========== 
//         // < 1: { cost: "", damage: "", range: "", cooldown: "", aoe: "", attackType: "Ground / Hyrbid" } >
//         // Again can add as many as needed

//         2: { cost: 400, damage: 300, range: 4, cooldown: 1.8, aoe: "Single Target", attackType: "Ground" },
//         3: { cost: 800, damage: 600, range: 5, cooldown: 1.5, aoe: "Cone", attackType: "Ground" }  
//     },
//
//     // ---------------------------------------- Farm Unit ----------------------------------------------------
//     // CLass MUST be bishop
//     // Add <farm: true>
//     //upgrades: {
//     // =========== ADD AS =========== 
//     // < 1: { cost: "", money: "" } >
//     },
//
//     // ======== OPTIONAL ======
//     // Can add just one of two if unit only has passive or only has ability
//     // Can add multiple items to both passive and ability
//     passive: [
//         {
//             passiveName: "test",
//             passiveType: "test",
//             passiveDescription: "test description",
//             passiveCooldown: "10s",
//             passiveImage: "file path"
//         },
//     ],
//     ability: [
//         {
//             abilityName: "test",
//             abilityType: "test",
//             abilityDescription: "test description",
//             abilityCooldown: "10s",
//             abilityImage: "file path"
//         },
//         {
//             abilityName: "test",
//             abilityType: "test",
//             abilityDescription: "test description",
//             abilityCooldown: "10s",
//             abilityImage: "file path"
//         },
//     ]
// // MAKE SURE UNIT ENTRY IS SEPERATED BY THE }, LIKE BELOW
// },

unitsData.push(
    {
        name: "Ichi (D)",
        rarity: "Secret",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 400, damage: 35, range: 25, cooldown: 4, aoe: "Circle", attackType: "Ground" },
            2: { cost: 1000, damage: 60, range: 35, cooldown: 4, aoe: "Circle", attackType: "Ground" },
            3: { cost: 2500, damage: 85, range: 40, cooldown: 5, aoe: "Circle", attackType: "Ground" },
            4: { cost: 4000, damage: 120, range: 60, cooldown: 6, aoe: "Line", attackType: "Ground" },
            5: { cost: 15000, damage: 750, range: 70, cooldown: 6, aoe: "Line", attackType: "Ground" },
        },
        ability: [
            {
                abilityName: "Tenshou Mugetsu",
                abilityType: "Dmg",
                abilityDescription: "Tenshou Mugetsu instantly kills any mob, including bosses.",
                abilityCooldown: "Global cooldown of 10 minutes",
                abilityImage: "file path"
            }
        ]
    },
    {
        name: "Gokke (Boo arc)",
        rarity: "Secret",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 550, damage: 70, range: 20, cooldown: 4, aoe: "Circle", attackType: "Ground" },
            2: { cost: 860, damage: 90, range: 24, cooldown: 4, aoe: "Circle", attackType: "Ground" },
            3: { cost: 1380, damage: 115, range: 30, cooldown: 4, aoe: "Line", attackType: "Ground" },
            4: { cost: 1100, damage: 135, range: 35, cooldown: 4.5, aoe: "Line", attackType: "Ground" },
            5: { cost: 1600, damage: 145, range: 40, cooldown: 4.5, aoe: "Line", attackType: "Ground" },
            6: { cost: 2560, damage: 160, range: 40, cooldown: 4, aoe: "Line", attackType: "Ground" },
            7: { cost: 2000, damage: 190, range: 40, cooldown: 4, aoe: "Line", attackType: "Ground" }
        },
        ability: [
            {
                abilityName: "Spirit Bomb",
                abilityType: "Dmg and stun",
                abilityDescription: "Spirit Bomb collects the total damage of all allied units currently placed on the map, then releases it as a massive area attack. The collected damage is divided by 2 and dealt to all mobs on the map. During the abilitys animation, all mobs are stunned for 60 seconds.",
                abilityCooldown: "Global cooldown of 10 minutes",
                abilityImage: "file path"
            }
        ]
    },
    {
        name: "Hero King",
        rarity: "Secret",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Hill",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 350, damage: 55, range: 20, cooldown: 3, aoe: "Circle", attackType: "Air" },
            2: { cost: 500, damage: 75, range: 20, cooldown: 3, aoe: "Circle", attackType: "Air" },
            3: { cost: 1150, damage: 100, range: 30, cooldown: 3.5, aoe: "Circle", attackType: "Air" },
            4: { cost: 1500, damage: 120, range: 30, cooldown: 3.5, aoe: "Circle", attackType: "Air" },
            5: { cost: 1700, damage: 140, range: 30, cooldown: 3.5, aoe: "Circle", attackType: "Air" },
            6: { cost: 5000, damage: 315, range: 50, cooldown: 6, aoe: "Line", attackType: "Air" }
        }
    },
);