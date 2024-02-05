const Course = require("./Course");
const Student = require("./Student");


//table pivot -> courseStudent
Student.belongsToMany(Course, { through: 'courseStudent' });
Course.belongsToMany(Student, { through: 'courseStudent' });