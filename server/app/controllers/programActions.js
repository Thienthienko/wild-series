// Import the tables module to use the repositories
const tables = require("../../database/tables");

// Action to browse programs
const browse = async (req, res) => {
  try {
    // Retrieve programs from the database using the repository
    const programsFromDB = await tables.program.readAll();
    let result = programsFromDB;

    // Filter programs if a query parameter is provided
    if (req.query.q != null) {
      result = result.filter((program) =>
        program.synopsis.includes(req.query.q)
      );
    }

    res.json(result);
  } catch (error) {
    // Handle any errors that occur during the database operation
    res.status(500).send("Erreur lors de la récupération des programmes.");
  }
};

// Action to read a specific program by ID
const read = async (req, res) => {
  try {
    const parsedId = parseInt(req.params.id, 10);

    // Retrieve all programs from the database
    const programsFromDB = await tables.program.readAll();

    // Find the program with the matching ID
    const program = programsFromDB.find((p) => p.id === parsedId);

    if (program != null) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    // Handle any errors that occur during the database operation
    res.status(500).send("Erreur lors de la récupération du programme.");
  }
};

// Export the actions to use them elsewhere
module.exports = { browse, read };
