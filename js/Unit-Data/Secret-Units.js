// Secret Units Data
//{
//     name: "",
//     rarity: "grade 3-5 / secret",
//     class: "paladin, magician, bishop",
//     obtainment: "Banner",
//     placement: "hill / ground",
//     update: "1.0, 1.1...",
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
//     upgrades: {
//         // =========== ADD AS =========== 
//         // < 1: { cost: "", damage: "", range: "", cooldown: "", aoe: "", attackType: "Ground / Hyrbid" } >
//         // Again can add as many as needed

//         2: { cost: 400, damage: 300, range: 4, cooldown: 1.8, aoe: "Single Target", attackType: "Ground" },
//         3: { cost: 800, damage: 600, range: 5, cooldown: 1.5, aoe: "Cone", attackType: "Ground" }  
//     },
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
        name: "Unit (Evolved)",
        rarity: "Secret",
        class: "Paladin",
        obtainment: "Banner",
        placement: "Ground",
        update: "1.0",
        imageIcon: "./Images/Units/frost_moon_icon.png",
        image: "./Images/Units/frost_moon.png",
        upgrades: {
            1: { cost: 200, damage: 150, range: 3, cooldown: 2, aoe: "Single Target", attackType: "Ground" },
            2: { cost: 400, damage: 300, range: 4, cooldown: 1.8, aoe: "Single Target", attackType: "Ground" },
            3: { cost: 800, damage: 600, range: 5, cooldown: 1.5, aoe: "Cone", attackType: "Ground" }  
        },
        passive: [
            {
                passiveName: "test",
                passiveType: "test",
                passiveDescription: "test description",
                passiveCooldown: "10s",
                passiveImage: "Images/Units/frost_moon_icon.png"
            }
        ],
        ability: [] 
    }
);