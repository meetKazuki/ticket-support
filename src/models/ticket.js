export default (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    ownerName: DataTypes.STRING,
    ownerEmail: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('resolved', 'pending'),
      defaultValue: 'pending',
    },
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
