export default (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('resolved', 'pending'),
      defaultValue: 'pending',
    },
    owner: DataTypes.STRING,
  }, {});

  Ticket.associate = (models) => {
    Ticket.hasMany(models.Comment, {
      foreignKey: 'ticketId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Ticket;
};
