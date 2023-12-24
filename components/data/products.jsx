
const BASE_URL = '/assets - modified - final/'
const products = [
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
        name: 'EJECTOR ROD - Vertical',
        image: `${BASE_URL}PAGE 2/EJECTOR ROD - P2.jpg`
    },
    {
        id: 10,
        name: 'EJECTOR RODS - Horizontal ',
        image: `${BASE_URL}PAGE 2/EJECTOR RODS 1.jpg`
    },
    {
        id: 11,
        name: 'FRONT NUT - BACK ',
        image: `${BASE_URL}PAGE 2/FRONT NUT - BACK.jpg`
    },
    {
        id: 12,
        name: 'Front nut 1 ',
        image: `${BASE_URL}PAGE 2/Front nut 1.jpg`
    },
    {
        id: 12,
        name: 'Front nut',
        image: `${BASE_URL}PAGE 2/Front nut.jpg`
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
    {
        id: 16,
        name: 'PARALLEL BLOCKS BACK',
        image: `${BASE_URL}PAGE 2/PARALLEL BLOCKS BACK.jpg`
    },
    {
        id: 17,
        name: 'PARALLEL BLOCKS FRONT',
        image: `${BASE_URL}PAGE 2/PARALLEL BLOCKS FRONT.jpg`
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
    {
        id: 25,
        name: 'PLUNGER TIP1',
        image: `${BASE_URL}PAGE 3/PLUNGER TIP1.jpg`
    },
    {
        id: 26,
        name: 'POLYMAIDE SHOE PLATE - P3',
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
        name: 'Shot sleeve 1',
        image: `${BASE_URL}PAGE 3/Shot sleeve 1.jpg`
    },
    {
        id: 31,
        name: 'Sub or false plate',
        image: `${BASE_URL}PAGE 3/Sub or false plate.jpg`
    },
    {
        id: 32,
        name: 'SHOE PLATE PB 1',
        image: `${BASE_URL}PAGE 3/SHOE PLATE PB 1.jpg`
    },
    {
        id: 33,
        name: 'SHOE PLATE PB 2',
        image: `${BASE_URL}PAGE 3/SHOE PLATE PB 2.jpg`
    },
    {
        id: 34,
        name: 'SHOE PLATE PB 3',
        image: `${BASE_URL}PAGE 3/SHOE PLATE PB 3.jpg`
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
    {
        id: 37,
        name: 'SPRAY HEAD 1',
        image: `${BASE_URL}PAGE 4/SPRAY HEAD 1.jpg`
    },
    {
        id: 38,
        name: 'SPRAY HEAD',
        image: `${BASE_URL}PAGE 4/SPRAY HEAD.jpg`
    },
    {
        id: 39,
        name: 'STEEL GRAPHITE BUSH',
        image: `${BASE_URL}PAGE 4/STEEL GRAPHITE BUSH.jpg`
    },
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
    {
        id: 42,
        name: 'TOGGLE LINK',
        image: `${BASE_URL}PAGE 4/TOGGLE LINK.jpg`
    },
    {
        id: 43,
        name: 'TOGGLE LINKS',
        image: `${BASE_URL}PAGE 4/TOGGLE LINKS.jpg`
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
        name: '560 TON SPLIT NUT 1',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/560 TON SPLIT NUT 1.jpg`
    },
    {
        id: 50,
        name: '560 TON SPLIT NUT BACK',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/560 TON SPLIT NUT BACK.jpg`
    },
    {
        id: 51,
        name: '560 TON SPLIT NUT FRONT',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/560 TON SPLIT NUT FRONT.jpg`
    },
    {
        id: 52,
        name: 'AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 1',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 1.jpg`
    },
    {
        id: 53,
        name: 'AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 2',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 2.jpg`
    },
    {
        id: 54,
        name: 'AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 3',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 3.jpg`
    },
    {
        id: 55,
        name: 'AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 4',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 4.jpg`
    },
    {
        id: 56,
        name: 'AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 5',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 5.jpg`
    },
    {
        id: 57,
        name: 'AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 6',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/AUTOMISING BLOCK FOR 560TON & 420 TON MACHINE 6.jpg`
    },
    {
        id: 58,
        name: 'CORE PIN',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/CORE PIN.jpg`
    },
    {
        id: 59,
        name: 'TOGGLE PINS',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/TOGGLE PINS.jpg`
    },
    {
        id: 60,
        name: 'SELF LUBRICATING BUSHES',
        image: `${BASE_URL}PDC WEBSITE PHOTOS/SELF LUBRICATING BUSHES.jpg`
    },



];

export default products;
