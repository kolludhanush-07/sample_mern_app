let express = require('express');

let hrroutes = require('./routes/hr_routes');
let emproutes = require('./routes/emp_routes');

let app = express();

// HR routes
app.use("/api/hr", hrroutes);

// Employee routes
app.use("/api/emp", emproutes);

// Run the server in port 3000
app.listen(3000, () => {
    console.log("server running on port 3000");
});