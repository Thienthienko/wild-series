const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Appeler le constructeur de la classe parente (AbstractRepository)
    // et passer le nom de la table "program" en configuration
    super({ table: "program" });
  }

  async readAll() {
    // Exécuter la requête SQL SELECT pour récupérer tous les enregistrements de la table "program"
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = ProgramRepository;
