const products = [
    // {
    //     id: 1,
    //     name: 'SS Strip',
    //     image: '/assets/products/ss-strip.jpg',
    // },
    // {
    //     id: 2,
    //     name: 'T-Block',
    //     image: '/assets/products/t-block.jpg',
    // },
    {
        id: 3,
        name: '660 Ton Multiplicator Piston',
        image: '/assets/products/660-ton-multiplicator-piston.jpg',
    },
    {
        id: 4,
        name: 'Accumulator Cylinder And Piston',
        image: '/assets/products/accumulator-cylinder-and-piston.jpg',
    },
    {
        id: 5,
        name: 'Aluminium Top Cover',
        image: '/assets/products/aluminium-top-cover.jpg',
    },
    {
        id: 6,
        name: 'Apex Segment',
        image: '/assets/products/apex-segment.jpg',
    },
    {
        id: 7,
        name: 'Auto Laddle Bush',
        image: '/assets/products/auto-laddle-bush.jpg',
    },
    {
        id: 8,
        name: 'Automising Block For 560 Ton and 420 Ton Machine',
        image: '/assets/products/automising-block-for-560ton-&-420ton-machine.jpg',
    },
    {
        id: 9,
        name: 'Babited Injection Piston Pipe',
        image: '/assets/products/babited-injection-piston-pipe.jpg',
    },
    {
        id: 10,
        name: 'Bronze Bushes',
        image: '/assets/products/bronze-bushes.jpg',
    },
    {
        id: 11,
        name: 'Bronze Mandrel Fixture',
        image: '/assets/products/bronze-mandrel-fixture.jpg',
    },
    {
        id: 12,
        name: 'Bronze Shoe Plate',
        image: '/assets/products/bronze-shoe-plate.jpg',
    },
    {
        id: 13,
        name: 'Casting Of 850 Ton Fixed Platen',
        image: '/assets/products/casting-of-850ton-fixed-platen.jpg',
    },
    {
        id: 14,
        name: 'Centrifugal Casting',
        image: '/assets/products/centrifugal-casting.jpg',
    },
    {
        id: 15,
        name: 'Core Pins',
        image: '/assets/products/core-pins.jpg',
    },
    {
        id: 16,
        name: 'Cover Plate',
        image: '/assets/products/cover-plate.jpg',
    },
    {
        id: 17,
        name: 'Cross Toggle Head',
        image: '/assets/products/cross-toggle-head.jpg',
    },
    {
        id: 18,
        name: 'Die Mask 0.7mm',
        image: '/assets/products/die-mask-0.7mm.jpg',
    },
    {
        id: 19,
        name: 'Dove Tail Cushion Cutting',
        image: '/assets/products/dove-tail-cushion-cutting.jpg',
    },
    {
        id: 20,
        name: 'Ejector Rod',
        image: '/assets/products/ejector-rod.jpg',
    },
    {
        id: 21,
        name: 'Ejector Rods',
        image: '/assets/products/ejector-rods.jpg',
    },
    {
        id: 22,
        name: 'False Or Sub Plate Locked To Fixed Platten',
        image: '/assets/products/false-or-sub-plate-locked-to-fixed-platten.jpg',
    },
    {
        id: 23,
        name: 'Filing Belt',
        image: '/assets/products/filing-belt.jpg',
    },
    {
        id: 24,
        name: 'Tie Bar And Nut',
        image: '/assets/products/tie-bar-and-nut.jpg',
    },
    {
        id: 25,
        name: 'Flange',
        image: '/assets/products/flange.jpg',
    },
    {
        id: 26,
        name: 'Front Nut',
        image: '/assets/products/front-nut.jpg',
    },
    {
        id: 27,
        name: 'Housing',
        image: '/assets/products/housing.jpg',
    },
    {
        id: 28,
        name: 'Injection Piston Rod',
        image: '/assets/products/injection-piston-rod.jpg',
    },
    {
        id: 29,
        name: 'Intensifier Cylinder With Multiplicator Piston',
        image: '/assets/products/intensifier-cylinder-with-multiplicator-piston.jpg',
    },
    {
        id: 30,
        name: 'Internal Gears',
        image: '/assets/products/internal-gears.jpg',
    },
    {
        id: 31,
        name: 'Parallel Blocks',
        image: '/assets/products/parallel-blocks.jpg',
    },
    {
        id: 32,
        name: 'Platen For 850 Ton Ube',
        image: '/assets/products/platen-for-850ton-ube.jpg',
    },
    {
        id: 33,
        name: 'Plunger Coupling',
        image: '/assets/products/plunger-coupling.jpg',
    },
    {
        id: 34,
        name: 'Plunger Nipple',
        image: '/assets/products/plunger-nipple.jpg',
    },
    {
        id: 35,
        name: 'Plunger Rod',
        image: '/assets/products/plunger-rod.jpg',
    },
    {
        id: 36,
        name: 'Plunger Tip',
        image: '/assets/products/plunger-tip.jpg',
    },
    {
        id: 37,
        name: 'Polyamide Shoe Plate',
        image: '/assets/products/polyamide-shoe-plate.jpg',
    },
    {
        id: 38,
        name: 'Rack',
        image: '/assets/products/rack.jpg',
    },
    {
        id: 39,
        name: 'Rear Nut',
        image: '/assets/products/rear-nut.jpg',
    },
    {
        id: 40,
        name: 'Reconditioning Of End Platten',
        image: '/assets/products/reconditioning-of-end-platten.jpg',
    },
    {
        id: 41,
        name: 'Self Lubricating Bushes',
        image: '/assets/products/self-lubricating-bushes.jpg',
    },
    {
        id: 42,
        name: 'Shoe Sleeve',
        image: '/assets/products/shoe-sleeve.jpg',
    },
    {
        id: 43,
        name: 'Shot Sleeve',
        image: '/assets/products/shot-sleeve.jpg',
    },
    {
        id: 44,
        name: 'Spary Head',
        image: '/assets/products/spary-head.jpg',
    },
    {
        id: 45,
        name: 'Split Nut 630 Ton',
        image: '/assets/products/split-nut-630ton.jpg',
    },
    {
        id: 46,
        name: '48 Inch Cm Guide',
        image: '/assets/products/48inchcm-guide.jpg',
    },

    {
        id: 47,
        name: 'Steel Graphite Bush',
        image: '/assets/products/steel-graphite-bush.jpg',
    },
    {
        id: 48,
        name: 'Stud SS',
        image: '/assets/products/stud-ss.jpg',
    },
    {
        id: 49,
        name: '560 Ton Split Nut',
        image: '/assets/products/560-ton-split-nut.jpg',
    },
    {
        id: 50,
        name: 'Tie Bar And Nut',
        image: '/assets/products/tie-bar-&-nut.jpg',
    },
    {
        id: 51,
        name: 'Toggle Links',
        image: '/assets/products/toggle-links.jpg',
    },
    {
        id: 52,
        name: 'Toggle Long Fdr 400 Ton',
        image: '/assets/products/toggle-long-fdr-400ton.jpg',
    },
    {
        id: 53,
        name: 'Toggle Long For 630 Ton Machine',
        image: '/assets/products/toggle-long-for-630ton-machine.jpg',
    },
    {
        id: 54,
        name: 'Toggle Long With Graphite Impregnated Bush',
        image: '/assets/products/toggle-long-with-graphite-impregnated-bush.jpg',
    },
    {
        id: 55,
        name: 'Toggle Pins',
        image: '/assets/products/toggle-pins.jpg',
    },
    {
        id: 56,
        name: 'Toggle Short',
        image: '/assets/products/toggle-short.jpg',
    },
];

export default products;
