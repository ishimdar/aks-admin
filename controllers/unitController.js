// Hard-coded grocery units
const units = [
  { id: 1, name: "Kilogram", shortName: "KG", description: "Weight measurement" },
  { id: 2, name: "Gram", shortName: "GM", description: "Smaller weight measurement" },
  { id: 3, name: "Litre", shortName: "LTR", description: "Liquid measurement" },
  { id: 4, name: "Millilitre", shortName: "ML", description: "Small liquid measurement" },
  { id: 5, name: "Piece", shortName: "PC", description: "Single item count" },
  { id: 6, name: "Dozen", shortName: "DOZ", description: "12 items count" },
  { id: 7, name: "Packet", shortName: "PKT", description: "Packaged goods" },
  { id: 8, name: "Box", shortName: "BOX", description: "Boxed goods" }
];

const getUnits = (req, res) => {
  res.status(200).json(units);
};

module.exports = { getUnits };
