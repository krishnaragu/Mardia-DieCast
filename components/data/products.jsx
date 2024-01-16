
const BASE_URL = '/assets - modified - final/'
const products = [
    {
        id: 0,
        name: 'FRONT NUT',
        image: `${BASE_URL}PAGE 3/Front nut.jpg`
    },
    {
        id: 1,
        name: 'ACCUMULATOR CYLINDER',
        image: `${BASE_URL}PAGE 1/ACCUMULATOR CYLINDER.jpg`
    },
    {
        id: 2,
        name: 'ACCUMULATOR PISTON',
        image: `${BASE_URL}PAGE 1/ACCUMULATOR PISTON.jpg`
    },
    {
        id: 3,
        name: 'AUTO LADDLE BUSH',
        image: `${BASE_URL}PAGE 1/AUTO LADDLE BUSH.jpg`
    },
    {
        id: 4,
        name: 'Babited Injection Piston Pipe',
        image: `${BASE_URL}PAGE 1/Babited Injection Piston Pipe.jpg`
    },
    {
        id: 5,
        name: 'BRONZE BUSHES GROUP',
        image: `${BASE_URL}PAGE 1/BRONZE BUSHES GROUP.png`
    },
    {
        id: 6,
        name: 'Bronze shoe plate',
        image: `${BASE_URL}PAGE 1/Bronze shoe plate.jpg`
    },
    {
        id: 7,
        name: 'CASTING OF 850TON FIXED PLATEN',
        image: `${BASE_URL}PAGE 1/CASTING OF 850TON FIXED PLATEN.jpg`
    },
    {
        id: 8,
        name: 'cross toggle head',
        image: `${BASE_URL}PAGE 1/cross toggle head.jpg`
    },
    {
        id: 9,
        name: 'EJECTOR ROD',
        image: `${BASE_URL}PAGE 2/EJECTOR ROD - P2.jpg`
    },
    {
        id: 13,
        name: 'Guide bar and toggle links',
        image: `${BASE_URL}PAGE 2/Guide bar and toggle links.jpg`
    },
    {
        id: 14,
        name: 'INJECTION PISTON ROD',
        image: `${BASE_URL}PAGE 2/INJECTION PISTON ROD.jpg`
    },
    {
        id: 15,
        name: 'INTENSIFIER CYLINDER WITH MULTIPLICATOR PISTON',
        image: `${BASE_URL}PAGE 2/INTENSIFIER CYLINDER WITH MULTIPLICATOR PISTON.jpg`
    },
    //16 n 17 together
    {
        id: 16,
        name: 'PARALLEL BLOCKS',
        image: `${BASE_URL}PAGE 2/PARALLEL BLOCKS.jpg`
    },
    {
        id: 18,
        name: 'PLATEN FOR 85O TON TUBE',
        image: `${BASE_URL}PAGE 2/PLATEN FOR 85O TON UBE.jpg`
    },
    {
        id: 19,
        name: 'Platen with links',
        image: `${BASE_URL}PAGE 2/Platen with links.jpg`
    },
    {
        id: 20,
        name: 'PLUNGER COUPLING',
        image: `${BASE_URL}PAGE 2/PLUNGER COUPLING.jpg`
    },
    {
        id: 21,
        name: 'Plunger nipple',
        image: `${BASE_URL}PAGE 2/Plunger nipple.jpg`
    },
    {
        id: 22,
        name: 'Casting of 730 ton platen',
        image: `${BASE_URL}PAGE 3/Casting of 730 ton platen.jpg`
    },
    {
        id: 23,
        name: 'Moving platen',
        image: `${BASE_URL}PAGE 3/Moving platen.jpg`
    },
    {
        id: 24,
        name: 'PLUNGER ROD',
        image: `${BASE_URL}PAGE 3/PLUNGER ROD.jpg`
    },
    //remove 3rd nut
    {
        id: 25,
        name: 'PLUNGER TIP',
        image: `${BASE_URL}PAGE 3/PLUNGER TIP1.png`
    },
    {
        id: 26,
        name: 'POLYMAIDE SHOE PLATE',
        image: `${BASE_URL}PAGE 3/POLYMAIDE SHOE PLATE - P3.jpg`
    },
    {
        id: 27,
        name: 'REAR NUT',
        image: `${BASE_URL}PAGE 3/REAR NUT.jpg`
    },
    {
        id: 28,
        name: 'repair of platen',
        image: `${BASE_URL}PAGE 3/repair of platen.jpg`
    },
    {
        id: 29,
        name: 'SELF LUBRICATING BUSHES',
        image: `${BASE_URL}PAGE 3/SELF LUBRICATING BUSHES.jpg`
    },
    {
        id: 30,
        name: 'Shot sleeve',
        image: `${BASE_URL}PAGE 3/Shot sleeve 1.jpg`
    },
    {
        id: 31,
        name: 'Sub or false plate',
        image: `${BASE_URL}PAGE 3/Sub or false plate.jpg`
    },

    {
        id: 35,
        name: 'CENTRIFIGUAL CASTING',
        image: `${BASE_URL}PAGE 4/CENTRIFIGUAL CASTING.jpg`
    },
    {
        id: 36,
        name: 'SPLIT NUT FOR LK MACHINE',
        image: `${BASE_URL}PAGE 4/SPLIT NUT FOR LK MACHINE.jpg`
    },
    //37 n 38 together
    {
        id: 37,
        name: 'SPRAY HEAD',
        image: `${BASE_URL}PAGE 4/SPRAY HEAD2.jpg`
    },
    // {
    //     id: 39,
    //     name: 'STEEL GRAPHITE BUSH',
    //     image: `${BASE_URL}PAGE 4/STEEL GRAPHITE BUSH.jpg`
    // },
    {
        id: 40,
        name: 'T BLOCK',
        image: `${BASE_URL}PAGE 4/T BLOCK.jpg`
    },
    {
        id: 41,
        name: 'TIEBAR AND NUT',
        image: `${BASE_URL}PAGE 4/TIEBAR AND NUT.jpg`
    },
    //42 n 43 together
    {
        id: 42,
        name: 'TOGGLE LINK',
        image: `${BASE_URL}PAGE 4/TOGGLE LINK 1.jpg`
    },
    {
        id: 44,
        name: 'TOGGLE LONG FOR 400TON',
        image: `${BASE_URL}PAGE 4/TOGGLE LONG FOR 400TON.jpg`
    },
    {
        id: 45,
        name: 'TOGGLE LONG FOR 630TON MACHINE',
        image: `${BASE_URL}PAGE 4/TOGGLE LONG FOR 630TON MACHINE.jpg`
    },
    {
        id: 46,
        name: 'TOGGLE LONG WITH GRAPHITE IMPREGNATED BUSH',
        image: `${BASE_URL}PAGE 4/TOGGLE LONG WITH GRAPHITE IMPREGNATED BUSH.jpg`
    },
    {
        id: 47,
        name: 'TOGGLE PINS',
        image: `${BASE_URL}PAGE 4/TOGGLE PINS.jpg`
    },
    {
        id: 48,
        name: 'TOGGLE SHORT',
        image: `${BASE_URL}PAGE 4/TOGGLE SHORT.jpg`
    },
    {
        id: 49,
        name: '560 TON SPLIT NUT',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/560 TON SPLIT NUT.jpg`
    },
    // {
    //     id: 50,
    //     name: '560 TON SPLIT NUT BACK',
    //     image: `${BASE_URL}PDC WEBSITE PHOTOS/560 TON SPLIT NUT BACK.jpg`
    // },
    // {
    //     id: 51,
    //     name: '560 TON SPLIT NUT FRONT',
    //     image: `${BASE_URL}PDC WEBSITE PHOTOS/560 TON SPLIT NUT FRONT.jpg`
    // },
    // 52-57 together
    {
        id: 52,
        name: 'AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE.jpg`
    },
    {
        id: 58,
        name: 'CORE PIN',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/CORE PIN.jpg`
    },
    {
        id: 59,
        name: 'SS Strip',
        image: `${BASE_URL}PAGE 1/SS STRIP.jpg`
    },
    {
        id: 60,
        name: 'Four Axis Bronze Bush',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/Four_Axis_Bronze_Bush.png`
    },

];

export default products;
