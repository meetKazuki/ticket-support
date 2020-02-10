export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    author: DataTypes.STRING,
    ticketId: DataTypes.STRING,
    comment: DataTypes.STRING,
  }, {});

  Comment.associate = (models) => {
    Comment.belongsTo(models.Ticket, { foreignKey: 'ticketId' });
  };

  return Comment;
};
